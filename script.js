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

// +/- donuts, show amount, calculate sum

const decBtns = document.querySelectorAll('button[data-operator="minus"]');
const incBtns = document.querySelectorAll('button[data-operator="plus"]');

for (let i = 0; i < decBtns.length; i++) {
    decBtns[i].addEventListener('click', decreaseCount);
    incBtns[i].addEventListener('click', increaseCount);
}

function decreaseCount(e) {
    const amountEl = e.currentTarget.parentElement.querySelector('.amount');

    let amount = amountEl.innerText;

    if (amount - 1 < 0) {
        return;
    }

    amountEl.innerHTML = amount - 1;

    updateDonutSum(e.currentTarget.parentElement);
}

function increaseCount(e) {
    const amountEl = e.currentTarget.parentElement.querySelector('.amount');
        
    let amount = Number(amountEl.innerText);
        
        amountEl.innerHTML = amount + 1;

        updateDonutSum(e.currentTarget.parentElement);
    }

    function updateDonutSum(donutElement) {
        const donutSinglePrice = donutElement.querySelector('.price').innerHTML;
        const orederedAmount = donutElement.querySelector('.amount').innerHTML;
        const sum = donutSinglePrice * orederedAmount;
         
        donutElement.querySelector('.sum').innerHTML = sum;
    }

//toggle shop and cart

//import './main.css'; ? vart ska den ligga

const shop = document.querySelector('#shop');
const order = document.querySelector('#order');
const cartBtn = document. querySelector('#cartBtn');
const closeCartBtn = document.querySelector('#closeCartBtn');

cartBtn.addEventListener('click', showCart);
closeCartBtn.addEventListener('click', hideCart);


function showCart() {
    order.classList.remove('hidden');
}

function hideCart() {
    order.classList.add('hidden'); 
}

// validation of order form details

const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const street = document.querySelector('#street');
const postalCode = document.querySelector('#postalCode');
const city = document.querySelector('#city');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const cardName = document.querySelector('#cardName');
const cardNumber = document.querySelector('#cardNumber');
const cardExpiry = document.querySelector('#cardxpiry');
const cardCvc = document.querySelector('#cardCvc');
const niNumber = document.querySelector('#niNumber');
const checkboxGdpr = document.querySelector('#checkboxGdpr');
const checkboxNewsletter = document.querySelector('#checkboxNewsletter');


