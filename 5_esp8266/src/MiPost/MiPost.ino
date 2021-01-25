#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClientSecureBearSSL.h>
#include <ArduinoJson.h>
#include <TimeLib.h>
#include <NTPClient.h>
#include <WiFiUdp.h>

#define SSID "Iot"
#define PASS  "12345678"
#define HUELLA_DIGITAL "798bb177930734ec69314098399b857fc89321e8"
#define HOST "https://firestore.googleapis.com/v1/projects/gilpgiotx/databases/(default)/documents/Historial"

ESP8266WiFiMulti WiFiMulti;
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP);

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
  Serial.print(
    "Conectando a WiFi...");
  WiFi.mode(WIFI_STA);
  WiFiMulti.addAP(SSID, PASS);
  while ((WiFiMulti.run() !=
          WL_CONNECTED)) {
    delay ( 500 );
    Serial.print ( "." );
  }
  Serial.println(
    "WiFi connectado.");
  timeClient.begin();
  delay ( 500 );
}
void loop() {
  timeClient.update();
  unsigned long t =
    timeClient.getEpochTime();
  char ts[30];
  sprintf(
    ts,
    "%04d-%02d-%02dT%02d:%02d:%02d.00Z",
    year(t), month(t), day(t),
    hour(t), minute(t),
    second(t));
  Serial.println(ts);
  if ((WiFiMulti.run() ==
       WL_CONNECTED) && !enviado) {
    std::unique_ptr<BearSSL::WiFiClientSecure>client(
      new BearSSL::WiFiClientSecure);
    client->setFingerprint(
      HUELLA_DIGITAL);

    /* Este valor debe obtenerse
       con ArduinoJson Assistant.
       Al cálculo del tamaño le
       añadimos 30, que es el
       tamaño del buffer para el
       timestap. */
    StaticJsonDocument < 192 + 30 > doc;
    JsonObject fields =
      doc.createNestedObject(
        "fields");
    fields["timestamp"]
    ["timestampValue"] = ts;
    fields["dispositivoId"]
    ["stringValue"] = "iot2";
    fields["valor"]
    ["integerValue"] = "0";

    String json;
    serializeJson(doc, json);
    Serial.println(json.c_str());
    HTTPClient https;
    Serial.println(
      "Conecta al servidor...");
    if (https.
        begin(*client, HOST)) {
      https.addHeader(
        "Content-Type",
        "application/json");
      Serial.print(
        "Inicia POST...\n");
      int codigoHttps =
        https.POST(json);
      if (codigoHttps > 0) {
        Serial.printf(
          "POST OK. httpcode: %d\n",
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
          "POST falló. Error: %s\n",
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
