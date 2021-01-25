/* Este programa es un derivado de
   ESP8266 Blink by Simon Peter */
/* Indica los pines que traen un
   LED cableado.  */
#define LED_INTEGRADO_2 2
#define LED_INTEGRADO_16 16

/** Función que se invoca una sola
   vez al inicio del programa. */
void setup() {
  /* Inicializa el pin para
     LED_INTEGRADO_2 como salida.
  */
  pinMode(
    LED_INTEGRADO_2, OUTPUT);
  /* Inicializa el pin para
     LED_INTEGRADO_16 como salida.
  */
  pinMode(
    LED_INTEGRADO_16, OUTPUT);
}

/** Función que se invoca
   repetidamente mientras el
   programa esté activo. */
void loop() {
  /* Enciende el LED (LOW es el
     nivel de voltaje). */
  digitalWrite(
    LED_INTEGRADO_2, LOW);
  /* Apaga el LED haciendo que el
     nivel de voltaje sea HIGH. */
  digitalWrite(
    LED_INTEGRADO_16, HIGH);
  delay(1000); // Espera 1 segundo
  digitalWrite(
    LED_INTEGRADO_2, HIGH);
  digitalWrite(
    LED_INTEGRADO_16, LOW);
  delay(1000);
}
