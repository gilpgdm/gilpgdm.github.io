#ifndef _DAO_SALIDA_DISPOSITIVO_H_
#define _DAO_SALIDA_DISPOSITIVO_H_
#include "ResInt.hpp"

#include <Arduino.h>

class ProxySalida {
  private:
    const char * const _huellaDigital;
    const String _url;
    int _leeValor(const String texto);
  public:
    ProxySalida(const char * huellaDigital, const String url);
    ResInt get();
};
#endif
