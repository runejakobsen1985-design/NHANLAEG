# Nordisk Have & Anlæg – V6.8 FYSISKE A4 AFTALER

Denne version retter den konkrete fejl vist i Android print-preview.

Kundekontrakt/serviceaftale og samarbejdsaftale:
- Den eksisterende aftale genereres først med samme indhold og design.
- Derefter deles den programmæssigt op i fysiske A4-sider FØR print.
- Hver A4-side er præcis 210 x 297 mm.
- Hver side får sin egen eksisterende grønne header.
- Hver side får sin egen eksisterende grønne footer.
- Header/footer er en fysisk del af hver side, ikke browserens automatiske gentagelse.
- Tabeller deles rækkevis ved sideskift.
- Overskrifter holdes sammen med næste tekstblok, hvor pladsen tillader det.
- Lange tekstblokke kan deles over flere sider.

Denne patch ændrer ikke kontraktens ordlyd eller den eksisterende visuelle header/footer.
Den ændrer kun A4-pagineringen.
