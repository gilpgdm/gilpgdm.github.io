/* Este es un derivado de Button
   por DojoDave y Tom Igoe */

/* Pin para el botón. */
const int BOTON = 0;

int estadoDelBoton = 0;

void setup() {
  /* Inicializa el pin para
     LED_BUILTIN como salida. */
  pinMode(LED_BUILTIN, OUTPUT);
  /* Initializa el pin para
     BOTON como entrada. */
  pinMode(BOTON, INPUT);
  // Apaga el LED_BUILTIN.
  digitalWrite(LED_BUILTIN,
     HIGH);
}

void loop() {
  estadoDelBoton =
    digitalRead(BOTON);
  /* Checa si el botón está
     presionado. Esto es, si
     estadoDelBotón es HIGH: */
  if (estadoDelBoton == HIGH) {
    // Enciende el LED_BUILTIN.
    digitalWrite(LED_BUILTIN,
      LOW);
  } else {
    // Apaga el LED_BUILTIN.
    digitalWrite(LED_BUILTIN,
      HIGH);
  }
}