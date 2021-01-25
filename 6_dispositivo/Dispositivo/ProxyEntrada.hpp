#ifndef _DAO_ENTRADA_DISPOSITIVO_H_
#define _DAO_ENTRADA_DISPOSITIVO_H_

#include <Arduino.h>

class ProxyEntrada {
  private:
    const char * const _huellaDigital;
    const String _url;
    String _creaJson(int valor);
  public:
    ProxyEntrada(const char * huellaDigital, const String url);
    String set(int valor);
};
#endif
