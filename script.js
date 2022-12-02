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
    const orderedAmount = donutElement.querySelector('.amount').innerHTML;
    const sum = donutSinglePrice * orderedAmount;
         
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
const cardExpiry = document.querySelector('#cardExpiry');
const cardCvc = document.querySelector('#cardCvc');
const niNumber = document.querySelector('#niNumber');
const checkboxGdpr = document.querySelector('#checkboxGdpr');
const checkboxNewsletter = document.querySelector('#checkboxNewsletter');
const purchaseBtn = document.querySelector('#purchaseBtn');

// indexOf()    A-Z/0-9/@ ?
let firstNameIsOk = false;

firstNameField.addEventListener('change', checkFirstName);

function checkFirstName() { 
    if(firstNameField.value.indexOf("")) {   
        firstNameIsOk = true;
    } else {
        firstNameIsOk = false;
        wrongFirstName.textContent = 'Fyll i ditt förnamn.';
    }
    activatePurchaseBtn();
}


let lastNameIsOk = false;

lastNameField.addEventListener('change', checkLastName);

function checkLastName() { 
    if(lastNameField.value.indexOf("")) {   
        lastNameIsOk = true;
    } else {
        lastNameIsOk = false;
        wrongLastName.textContent = 'Fyll i ditt efternamn.';
    }
    activatePurchaseBtn();
}


let streetIsOk = false;

streetField.addEventListener('change', checkStreet);

function checkStreet() { 
    if(streetField.value.indexOf("")) {  
        streetIsOk = true;
    } else {
        streetIsOk = false;
        wrongStreet.textContent = 'Fyll i din gatuadress.';
    }
    activatePurchaseBtn();
}


let postalCodeIsOk = false;

postalCodeField.addEventListener('change', checkPostalCode);

function checkPostalCode() { 
    if(postalCodeField.value.indexOf("")) {   
        postalCodeIsOk = true;
    } else {
        postalCodeIsOk = false;
        wrongPostalCode.textContent = 'Fyll i ditt postnummer.';
    }
    activatePurchaseBtn();
}


let cityIsOk = false;

cityField.addEventListener('change', checkCity);

function checkCity() { 
    if(cityField.value.indexOf("")) {   //tänk på saken
        cityIsOk = true;
    } else {
        cityIsOk = false;
        wrongCity.textContent = 'Fyll i din postort.';
    }
    activatePurchaseBtn();
}


let phoneIsOk = false;

phoneField.addEventListener('change', checkPhone);

function checkPhone() { 
    if(phoneField.value.indexOf("")) {   
        phoneIsOk = true;
    } else {
        phoneIsOk = false;
        wrongPhone.textContent = 'Fyll i ditt telefonnummer.';
    }
    activatePurchaseBtn();
}


let emailIsOk = false;

emailField.addEventListener('change', checkEmail);

function checkEmail() { 
    if(emailField.value.indexOf("")) {   
        emailIsOk = true;
    } else {
        emailIsOk = false;
        wrongEmail.textContent = 'Fyll i din e-mailadress.';
    }
    activatePurchaseBtn();
}


let cardNameIsOk = false;   // !!! endast om kort är valt, ignorera annars, samma för faktura !!!

cardNameField.addEventListener('change', checkCardName);

function checkCardName() { 
    if(cardNameField.value.indexOf(" ")) {   
    } else {
        cardNameIsOk = false;
        wrongCardName.textContent = 'Fyll i kortinnehavarens namn.';
    }
    activatePurchaseBtn();
}


let cardNumberIsOk = false;

cardNumberField.addEventListener('change', checkCardNumber);

function checkCardNumber() { 
    if(cardNumberField.value.indexOf("")) {   
        cardNumberIsOk = true;
    } else {
        cardNumberIsOk = false;
        wrongCardNumber.textContent = 'Fyll i ditt kortnummer.';
    }
    activatePurchaseBtn();
}


let expiryIsOk = false;

expiryField.addEventListener('change', checkExpiry);

function checkExpiry() { 
    if(expiryField.value.indexOf("")) {   
        expiryIsOk = true;
    } else {
        expiryIsOk = false;
        wrongExpiry.textContent = 'Fyll i kortets giltighetstid.';
    }
    activatePurchaseBtn();
}


let cardCvcIsOk = false;

cardCvcField.addEventListener('change', checkCardCvc);

function checkCardCvc() { 
    if(cardCvcField.value.indexOf("")) {   //tänk på saken
        cardCvcIsOk = true;
    } else {
        cardCvcIsOk = false;
        wrongCardCvc.textContent = 'Fyll i ditt cvc.';
    }
    activatePurchaseBtn();
}


let niNumberIsOk = false;

niNumberField.addEventListener('change', checkNiNumber);

function checkNiNumber() { 
    if(niNumberField.value.indexOf("")) {  
        niNumberIsOk = true;
    } else {
        niNumberIsOk = false;
        wrongNiNumber.textContent = 'Fyll i ditt personnummer.';
    }
    activatePurchaseBtn();
}


// checkbox gdpr
// checkbox nyhetsbrev


function activatePurchaseBtn() {
    if(&&) {
        purchaseBtn.removeAttribute('disabled');
        //orderbekräftelse

    } else {
        purchaseBtn.setAttribute('disable');
    }
}

