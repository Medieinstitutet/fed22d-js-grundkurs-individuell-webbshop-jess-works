/*
-Header med logo, butiksnamn, cart och filter.
-'butiksinnehåll'
    -10x img produkt, produktnamn, styckpris produkt
    -bar för att öka/minska/visa antal produkter lagda i cart 
    -totalpris för produkt i cart
    -delete knapp som tar bort all produkt i cart
-när vara läggs i cart påas det med 'vara lagd i varukorg'
-filter med stigande pris/fallande pris/ta bort filter
-cart i popup eller som menyknappen i conditionals modulen
    -stäng-knapp
    -cart som listan på huvudsidan, men endast med det som lagts i cart
    -eventuella rabatter
    -input rabattkod --> icke-funktionell
    -totalpris för produkter, leveranskostnader och slutpris
    -till-kassan-knapp som expanderar fönstret
    -namn och adress-uppgifter --> valideras (att de är ifyllda eller faktiskt korrekt?)
    -välj betalningssätt kort/faktura med input för
        -kortuppgifter eller --> ingen validering
        -personnummer --> valideras
    -betala-knapp som expanderar fönstret
    -orderbekräftelse som listar beställning och leveranstid
-tid- och mängdrelaterade avvikelser i pris
    -måndag morgon rabatt
        -prisjustering och påas under header och högst upp i cart
    -högre pris på nätter och helger
        -priserna justeras, men påas inte
    -10+ av samma produktsort rabatteras
        -pris justeras och påas  i cart
    -16+ produkter ger gratis leverans
        -leveranskostnad tas bort och påas i cart
    -köp 800+ kr endast med kort
        -fakturavalet gråas ut och är disabled
    */