/* Este es un derivado de Button
   por DojoDave y Tom Igoe */

/* Constantes (no cambian) para
   asignar los números de pines.
*/
// Pin para el botón flash.
const int BOTON_FLASH = 0;
// Pin que trae cableado un LED.
const int LED_INTEGRADO_2 =  2;

int estadoDelBoton = 0;

void setup() {
  /* Inicializa el pin para
     LED_INTEGRADO_2 como salida.
  */
  pinMode(
    LED_INTEGRADO_2, OUTPUT);
  /* Initializa el pin para
     BOTÓN_FLASH como entrada. */
  pinMode(BOTON_FLASH, INPUT);
}

void loop() {
  estadoDelBoton =
    digitalRead(BOTON_FLASH);
  /* Checa si el botón está
     presionado. Esto es, si
     estadoDelBotón es LOW: */
  if (estadoDelBoton == LOW) {
    // Enciende el LED.
    digitalWrite(
      LED_INTEGRADO_2, LOW);
  } else {
    // Apaga el LED.
    digitalWrite(
      LED_INTEGRADO_2, HIGH);
  }
}
