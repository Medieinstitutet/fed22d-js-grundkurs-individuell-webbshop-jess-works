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
    -leveranskostnadsberäkning: procent och 25kr/gratis leverans
    -totalpris för produkter, leveranskostnader och slutpris
    -namn och adress-uppgifter --> valideras (att de är ifyllda eller faktiskt korrekt?)
    -välj betalningssätt kort/faktura, beroende på val av alternativ med input för
        -kortuppgifter eller --> ingen validering
        -personnummer --> valideras
    -Checkbox för godkännande av behandling av personuppgifter
    -Checkbox för beställning av nyhetsbrev (ska vara iklickad som default)
    -ta-bort-beställning-knapp som rensar all ifylld/klickad data
    -betala-knapp 
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

/*const productList= document.getElementById(product-list);*/

const donutShop = document.querySelector('#donut-shop');

const donutNames = ['Coffee with Cooper', 'Cherry Pie', 'Hawaiian Punch', 'Twinset', 'Maple Syrup', 
'Black & White', 'One Eyed Jack`s', 'Sitka', 'Snoqualmie', 'Twin Peaks'];

for(let i = 0; i < donutNames.length; i++) {
    const donutName = donutNames[i];
    const donutNode = document.createElement('li');
    const donutTextNode = document.createTextNode(donutName);
    donutNode.appendChild(donutTextNode);
    donutShop.appendChild(donutNode);

}

