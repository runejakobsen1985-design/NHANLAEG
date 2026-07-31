# Nordisk Have & Anlæg – V7.8 STABIL

Stabilitetsopdatering oven på V7.7.

Kontrolleret og sikret:
- alle JavaScript-blokke består syntakskontrol
- ingen dublerede HTML-id'er
- ingen manglende direkte onclick-funktioner
- mandag-lørdag findes i ugeplansystemet
- Udfør opgave har dedikeret arbejdsseddel-print og må ikke hijackes af generisk print
- side 1 / side 2 får samme sagsnr., dato, uge og medarbejder
- gammel fast bundnavigation fjernes, hvis den dukker op
- Escape kan lukke åbne overlays
- runtime-fejl logges lokalt til fejlsøgning
- prisgrundlag og tilbud/e-conomic er bevaret

TESTRAPPORT.json ligger i GitHub-pakken.
