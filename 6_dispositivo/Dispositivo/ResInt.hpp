#ifndef _INFO_VALOR_H
#define _INFO_VALOR_H

#include <Arduino.h>

class ResInt {
  public:
    const int valor;
    const String error;
    ResInt(int _valor,
           String _error );
    ResInt(const ResInt& ref );
    const char* valida();
};
#endif
