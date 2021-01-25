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
#define URL "https://firestore.googleapis.com/v1/projects/gilpgiotx/databases/(default)/documents/Historial"

ESP8266WiFiMulti WiFiMulti;
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP);

bool enviado = false;

void getTimestamp(char* ts) {
  timeClient.update();
  unsigned long t =
    timeClient.getEpochTime();
  sprintf(
    ts,
    "%04d-%02d-%02dT%02d:%02d:%02d.00Z",
    year(t), month(t), day(t),
    hour(t), minute(t),
    second(t));
}

String creaJSON() {
  char ts[30];
  getTimestamp(ts);
  Serial.println(ts);
  /* Este valor debe obtenerse
     con ArduinoJson Assistant.
     Al cálculo del tamaño le
     añadimos 30, que es el tamaño
     del buffer para el timestap.
  */
  StaticJsonDocument <
  192 + 30 > doc;
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
  return json;
}

void iniciaWiFi() {
  /* Espera a que el hardware para
     WiFi esté listo. */
  for (uint8_t t = 4; t > 0;
       t--) {
    Serial.printf(
      "ESPERANDO %d...\n", t);
    Serial.flush();
    delay(1000);
  }
  Serial.println(
    "Conectando WiFi...");
  WiFi.mode(WIFI_STA);
  WiFiMulti.addAP(SSID, PASS);
}

void setup() {
  Serial.begin(115200);
  // Serial.setDebugOutput(true);

  Serial.println();
  Serial.println();
  Serial.println();
  iniciaWiFi();
  while (WiFiMulti.run() !=
         WL_CONNECTED) {
    delay ( 500 );
    Serial.print ( "." );
  }
  Serial.println(
    "WiFi connectado.");
  timeClient.begin();
  delay ( 500 );
}
void loop() {
  if ((WiFiMulti.run() ==
       WL_CONNECTED) &&
      !enviado) {
    std::unique_ptr <
    BearSSL::WiFiClientSecure
    > clie(
      new BearSSL::
      WiFiClientSecure);
    clie->setFingerprint(
      HUELLA_DIGITAL);

    String json = creaJSON();
    Serial.println(json);

    HTTPClient http;
    Serial.print("Conectando ");
    Serial.println(
      "al servidor...");
    if (http.begin(*clie, URL)) {
      http.addHeader(
        "Content-Type",
        "application/json");
      Serial.print(
        "Inicia POST...\n");
      int cod = http.POST(json);
      if (cod > 0) {
        String texto =
          http.getString();
        Serial.printf(
          "Código de POST: %d\n",
          cod);
        Serial.println(texto);
        switch (cod) {
          case HTTP_CODE_OK:
          case
              HTTP_CODE_MOVED_PERMANENTLY:
            enviado = true;
        }
      } else {
        Serial.printf(
          "POST falló: %s\n",
          http.errorToString(cod).
          c_str());
      }
      http.end();
    } else {
      Serial.println(
        "La conexión falló");
    }
  }
  Serial.println(
    "Esperando 10s...");
  delay(10000);
}
