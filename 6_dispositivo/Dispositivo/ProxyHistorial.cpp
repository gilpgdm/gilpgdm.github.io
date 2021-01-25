#include "ProxyHistorial.hpp"
#include <WiFiClientSecureBearSSL.h>
#include <ESP8266HTTPClient.h>
#include "utilIoT.hpp"
#include <ArduinoJson.h>
#include <Arduino.h>

ProxyHistorial::ProxyHistorial(const char * dispositivoId,
                               const char * huellaDigital, const String url):
  _dispositivoId(dispositivoId), _huellaDigital(huellaDigital), _url(url) {
}

String ProxyHistorial::add(int valor) {
  String error;
  String json = _creaJson(valor);
  std::unique_ptr<BearSSL::WiFiClientSecure> client(
    new BearSSL::WiFiClientSecure);
  client->setFingerprint(_huellaDigital);

  HTTPClient https;
  Serial.println("Conectando al servidor...");
  if (https.begin(*client, _url)) {
    https.addHeader(CONTENT_TYPE, APPLICATION_JSON);
    Serial.print("Inicia POST...\n");
    int codigoHttps = https.POST(json);
    if (codigoHttps > 0) {
      String texto = https.getString();
      Serial.printf("POST OK. codigoHttps: %d\n", codigoHttps);
      Serial.println(texto);
      if (codigoHttps != HTTP_CODE_OK
          && codigoHttps != HTTP_CODE_MOVED_PERMANENTLY) {
        error = texto;
      }
    } else {
      error = https.errorToString(codigoHttps);
    }
    https.end();
  } else {
    error = "La conexión falló";
  }
  return error;
}

String ProxyHistorial::_creaJson(int valor) {
  char ts[30];
  getTimestamp(ts);
  Serial.println(ts);

  /* Al cálculo del tamaño le añadimos 30, que es el tamaño del buffer para
      el timestamp. */
  StaticJsonDocument < 192 + 30 > doc;
  JsonObject fields = doc.createNestedObject("fields");
  fields["timestamp"]["timestampValue"] = ts;
  fields["dispositivoId"]["stringValue"] = _dispositivoId;
  fields["valor"]["integerValue"] = valor;

  String json;
  serializeJson(doc, json);
  return json;
}
