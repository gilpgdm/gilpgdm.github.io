#include "ProxyHistorial.hpp"
#include <WiFiClientSecureBearSSL.h>
#include <ESP8266HTTPClient.h>
#include "utilIoT.hpp"
#include <ArduinoJson.h>
#include <Arduino.h>

ProxyHistorial::ProxyHistorial(
  const char * dispositivoId,
  const char * huellaDigital,
  const String url):
  _dispositivoId(dispositivoId),
  _huellaDigital(huellaDigital),
  _url(url) {}

String
ProxyHistorial::add(int valor) {
  String error;
  String json = _creaJson(valor);

  std::unique_ptr <
  BearSSL::WiFiClientSecure
  > clie(
    new BearSSL::
    WiFiClientSecure);
  clie->setFingerprint(
    HUELLA_DIGITAL);

  HTTPClient http;
  Serial.print("Conectando ");
  Serial.println(
    "al servidor...");
  Serial.println(
    "al servidor...");
  if (http.begin(*clie, _url)) {
    http.addHeader(
      CONTENT_TYPE,
      APPLICATION_JSON);
    Serial.print(
      "Inicia POST...\n");
    int code = http.POST(json);
    if (code > 0) {
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
          break;
        default:
          error = texto;
      }
    } else {
      error =
        http.errorToString(code);
    }
    http.end();
  } else {
    error = "La conexión falló";
  }
  return error;
}

String ProxyHistorial::_creaJson(
  int valor) {
  char ts[30];
  getTimestamp(ts);
  Serial.println(ts);
  StaticJsonDocument <
  192 + 30 > doc;
  JsonObject fields =
    doc.createNestedObject(
      "fields");
  fields["timestamp"]
  ["timestampValue"] = ts;
  fields["dispositivoId"]
  ["stringValue"] =
    _dispositivoId;
  fields["valor"]
  ["integerValue"] = valor;

  String json;
  serializeJson(doc, json);
  return json;
}
