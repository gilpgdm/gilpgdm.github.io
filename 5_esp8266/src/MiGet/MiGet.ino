#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClientSecureBearSSL.h>
#include <ArduinoJson.h>

#define SSID "Iot"
#define PASS  "12345678"
#define HUELLA_DIGITAL "798bb177930734ec69314098399b857fc89321e8"
#define HOST "https://firestore.googleapis.com/v1/projects/gilpgiotx/databases/(default)/documents/Salida/iot2"

ESP8266WiFiMulti WiFiMulti;

void setup() {
  /* Inicializa el monitor serial
     y calibra su velocidad. */
  Serial.begin(115200);
  /* Monitoreo detallado en la
     salida para encontrar
     errores. */
  // Serial.setDebugOutput(true);

  Serial.println();
  Serial.println();
  Serial.println();

  /* Espera a que el hardware para
     WiFi esté listo. */
  for (uint8_t t = 4; t > 0;
       t--) {
    Serial.printf(
      "[SETUP] ESPERANDO %d...\n",
      t);
    Serial.flush();
    delay(1000);
  }
  Serial.println(
    "Conectando a WiFi...");
  WiFi.mode(WIFI_STA);
  WiFiMulti.addAP(SSID, PASS);
}
void loop() {
  if ((WiFiMulti.run() ==
       WL_CONNECTED)) {
    Serial.println(
      "WiFi conectado.");
    std::unique_ptr<BearSSL::WiFiClientSecure>client(
      new BearSSL::WiFiClientSecure);
    client->setFingerprint(
      HUELLA_DIGITAL);
    HTTPClient https;
    https.useHTTP10(true);
    Serial.println(
      "Conecta al servidor...");
    if (https.
        begin(*client, HOST)) {
      Serial.println(
        "Inicia GET...");
      int codigoHttps =
        https.GET();
      if (codigoHttps > 0) {
        Serial.printf(
          "Get OK. codigo: %d\n",
          codigoHttps);
        if (codigoHttps ==
            HTTP_CODE_NOT_FOUND) {
          Serial.println("No encontrado");
        } else if (
          codigoHttps ==
          HTTP_CODE_OK
          || codigoHttps ==
          HTTP_CODE_MOVED_PERMANENTLY) {
          /* Este valor debe
             obtenerse con
             ArduinoJson
             Assistant */
          StaticJsonDocument<384> doc;
          /* A partir del texto
             devuelto por
             Internet, se obtiene
             el árbol JSON. */
          deserializeJson(
            doc,
            https.getStream());
          const int valor =
            doc["fields"]["valor"]
            ["integerValue"].
            as<int>();
          Serial.printf(
            "VALOR: %d\n", valor);
        }
      } else {
        Serial.printf(
          "GET falló. Error: %s\n",
          https.errorToString(
            codigoHttps).c_str());
      }
      https.end();
    } else {
      Serial.println(
        "La conexión falló");
    }
  }
  Serial.println(
    "Esperando 2s...");
  delay(2000);
}
