#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClientSecureBearSSL.h>
#include <ArduinoJson.h>

#define SSID "Iot"
#define PASS  "12345678"
#define HUELLA_DIGITAL "798bb177930734ec69314098399b857fc89321e8"
#define HOST "https://firestore.googleapis.com/v1/projects/gilpgiotx/databases/(default)/documents/Entrada/iot2"

ESP8266WiFiMulti WiFiMulti;
bool enviado = false;

void setup() {
  Serial.begin(115200);
  // Serial.setDebugOutput(true);

  Serial.println();
  Serial.println();
  Serial.println();

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
       WL_CONNECTED) && !enviado) {
    Serial.println("WiFi conectado.");
    std::unique_ptr<BearSSL::WiFiClientSecure>client(
      new BearSSL::WiFiClientSecure);
    client->setFingerprint(
      HUELLA_DIGITAL);

    /* Este valor debe obtenerse
       con ArduinoJson Assistant
    */
    StaticJsonDocument<48> doc;
    doc["fields"]["valor"]
    ["integerValue"] = 8;
    String json;
    serializeJson(doc, json);

    HTTPClient https;
    Serial.println(
      "Conecta al servidor...");
    if (https.
        begin(*client, HOST)) {
      https.addHeader(
        "Content-Type",
        "application/json");
      Serial.print(
        "Inicia PATCH...\n");
      int codigoHttps =
        https.PATCH(json);
      if (codigoHttps > 0) {
        Serial.printf(
          "PATCH OK. httpcode: %d\n",
          codigoHttps);
        String texto =
          https.getString();
        Serial.println(texto);
        if (codigoHttps ==
            HTTP_CODE_OK
            || codigoHttps ==
            HTTP_CODE_MOVED_PERMANENTLY) {
          enviado = true;
        }
      } else {
        Serial.printf(
          "PATCH falló. Error: %s\n",
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
    "Esperando 10s...");
  delay(10000);
}
