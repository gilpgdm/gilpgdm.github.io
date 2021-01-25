#include "ProxyEntrada.hpp"
#include <WiFiClientSecureBearSSL.h>
#include <ESP8266HTTPClient.h>
#include "utilIoT.hpp"
#include <ArduinoJson.h>
#include <Arduino.h>

ProxyEntrada::ProxyEntrada(const char* huellaDigital,
                           const String url): _huellaDigital(huellaDigital), _url(url) { }

String ProxyEntrada::set(int valor) {
  String error;
  String json = _creaJson(valor);
  std::unique_ptr<BearSSL::WiFiClientSecure> client(
    new BearSSL::WiFiClientSecure);
  client->setFingerprint(_huellaDigital);

  HTTPClient https;
  Serial.println("Conectando al servidor...");
  if (https.begin(*client, _url)) {
    https.addHeader(CONTENT_TYPE, APPLICATION_JSON);
    Serial.print("Inicia PATCH...\n");
    int codigoHttps = https.PATCH(json);
    if (codigoHttps > 0) {
      String texto = https.getString();
      Serial.printf("PATCH OK. codigoHttps: %d\n", codigoHttps);
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

String ProxyEntrada::_creaJson(int valor) {
  StaticJsonDocument<48> doc;
  doc["fields"]["valor"]["integerValue"] = valor;
  String json;
  serializeJson(doc, json);
  return json;
}
