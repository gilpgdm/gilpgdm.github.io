/* Este programa es un derivado de
   ESP8266 Blink by Simon Peter */

/** Función que se invoca una sola
    vez al inicio del programa. */
void setup() {
  /* Todas las placas compatibles
     con Arduino incluyen un led
     de prueba ligado a un pin
     cuyo número está definido por
     la constante LED_BUILTIN.
     Inicializa el pin para
     LED_BUILTIN como salida. */
  pinMode(LED_BUILTIN, OUTPUT);
}

/* Función que se invoca
   repetidamente mientras el
   programa esté activo. */
void loop() {
  /* Enciende el LED_BUILTIN (LOW
     es el nivel de voltaje). */
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000); // Espera 1 segundo
  /* Apaga el LED_BUILTIN haciendo
     que el nivel de voltaje sea
     HIGH. */
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
}
