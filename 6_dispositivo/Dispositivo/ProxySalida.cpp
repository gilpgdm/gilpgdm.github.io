#include "ProxySalida.hpp"
#include <WiFiClientSecureBearSSL.h>
#include <ESP8266HTTPClient.h>
#include "ResInt.hpp"
#include <ArduinoJson.h>
#include <Arduino.h>

ProxySalida::ProxySalida(const char *huellaDigital,
                         const String url) : _huellaDigital(huellaDigital), _url(url) {}

ResInt ProxySalida::get() {
  String error;
  int valor = 0;

  std::unique_ptr<BearSSL::WiFiClientSecure> client(
    new BearSSL::WiFiClientSecure);
  client->setFingerprint(_huellaDigital);

  HTTPClient https;
  Serial.println("Conectando al servidor...");
  if (https.begin(*client, _url)) {
    Serial.println("Inicia GET...");
    int codigoHttps = https.GET();
    if (codigoHttps > 0) {
      String texto = https.getString();
      Serial.printf("Get OK. codigoHttps: %d\n", codigoHttps);
      if (codigoHttps == HTTP_CODE_OK || codigoHttps == HTTP_CODE_MOVED_PERMANENTLY) {
        valor = _leeValor(texto);
      } else if (codigoHttps != HTTP_CODE_NOT_FOUND) {
        error = texto;
      }
    } else {
      error = https.errorToString(codigoHttps);
    }
    https.end();
  } else {
    error = "La conexión falló";
  }
  Serial.printf("valor: %d\n", valor);
  return ResInt(valor, error);
}
int ProxySalida::_leeValor(const String texto) {
  // Este valor debe obtenerse con ArduinoJson Assistant
  StaticJsonDocument<384> doc;
  // A partir del texto devuelto por Internet, se obtiene el árbol JSON.
  deserializeJson(doc, texto);
  return doc["fields"]["valor"]["integerValue"].as<int>();
}
