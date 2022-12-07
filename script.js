// donuts: +/-, show amount, calculate sum, delete

const decBtns = document.querySelectorAll('button[data-operator="minus"]');
const incBtns = document.querySelectorAll('button[data-operator="plus"]');
const deleteBtns = Array.from(document.querySelectorAll('button[class="material-symbols-outlined deleteBtn"]'));
const priceItems = Array.from(document.querySelectorAll('span[class="price"]')); // Här skapas en array, men den plussas inte ihop med t.ex. "reduce-funktionen"

/**
 * Skapa en tom variabel, price, som är 0 från början.
 * Loopa igenom varje <span>, och läs av texten inne i taggen
 * Konvertera den till en siffra, annars funkar inte plus
 * Plussa på föregående pris med nytt pris, för varje munk
 */
let price = 0;
for (let i = 0; i < priceItems.length; i++) {
    price += Number(priceItems[i].innerHTML);
}
console.log(price);

const sum = Array.from(document.querySelectorAll('.sum'));


for (let i = 0; i < decBtns.length; i++) {  
    decBtns[i].addEventListener('click', decreaseCount);
}

for (let i = 0; i < incBtns.length; i++) {
    incBtns[i].addEventListener('click', increaseCount);
}

for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', resetCount);
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

function resetCount(e) {
    const amountEl = e.currentTarget.parentElement.querySelector('.amount');

    let amount = amountEl.innerText;

    if (amount - 1 < 0) {
        return;
    }

    amountEl.innerHTML = '0';

    updateDonutSum(e.currentTarget.parentElement);
}

function updateDonutSum(donutElement) {
    const donutSinglePrice = donutElement.querySelector('.price').innerHTML;
    const orderedAmount = donutElement.querySelector('.amount').innerHTML;
    const sum = donutSinglePrice * orderedAmount; // TODO: Gör om till siffror med hjälp av Number(), så fungerar beräkningarna bättre.
         
    donutElement.querySelector('.sum').innerHTML = sum;
}


priceItems.sort((price1, price2) => price1 - price2); // TODO: Samma här - nu försöker du sortera HTML-element, inte deras text-innehåll :)
console.log(price[i]);

//  sumTotal, discount, costDelivery, costTotal

//function updateSumTotal() {
   // const sumTotal = sum.reduce((a, b) => a.price + b.price, 0);
    //console.log(sumTotal);

   /* let sum = '0';

    for (let i = 0; i < sum.length; i ++) {
        sum += sum[i];
    }
    console.log(sum);
    return sum;

}*/



/*toggle shop and cart

//<link rel="stylesheet" href="main.css">

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
}*/


// validation of order form details

const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const street = document.querySelector('#street');
const postalCode = document.querySelector('#postalCode');
const city = document.querySelector('#city');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const niNumber = document.querySelector('#niNumber');
const checkboxGdpr = document.querySelector('#checkboxGdpr');
const purchaseBtn = document.querySelector('#purchaseBtn');

let firstNameIsOk = false;
let lastNameIsOk = false;
let streetIsOk = false;
let postalCodeIsOk = false;
let cityIsOk = false;
let phoneIsOk = false;
let emailIsOk = false;
let niNumberIsOk = false;
let checkboxGdprIsOk = false;

firstName.addEventListener('change', checkFirstName);
lastName.addEventListener('change', checkLastName);
street.addEventListener('change', checkStreet);
postalCode.addEventListener('change', checkPostalCode);
city.addEventListener('change', checkCity);
phone.addEventListener('change', checkPhone);
email.addEventListener('change', checkEmail);
niNumber.addEventListener('change', checkNiNumber);
checkboxGdpr.addEventListener('change', checkCheckboxGdpr);

function checkFirstName() { 
    if(firstName.value.length > 1) {   
        firstNameIsOk = true;
    } else {
        firstNameIsOk = false;
        wrongFirstName.textContent = 'Fyll i ditt förnamn.';
    }
    activatePurchaseBtn();
}

function checkLastName() { 
    if(lastName.value.length > 1) {   
        lastNameIsOk = true;
    } else {
        lastNameIsOk = false;
        wrongLastName.textContent = 'Fyll i ditt efternamn.';
    }
    activatePurchaseBtn();
}

function checkStreet() { 
    if(street.value.length > 1) {  
        streetIsOk = true;
    } else {
        streetIsOk = false;
        wrongStreet.textContent = 'Fyll i din gatuadress.';
    }
    activatePurchaseBtn();
}

function checkPostalCode() { 
    if(postalCode.value.length > 1) {   
        postalCodeIsOk = true;
    } else {
        postalCodeIsOk = false;
        wrongPostalCode.textContent = 'Fyll i ditt postnummer.';
    }
    activatePurchaseBtn();
}

function checkCity() { 
    if(city.value.length > 1) {  
        cityIsOk = true;
    } else {
        cityIsOk = false;
        wrongCity.textContent = 'Fyll i din postort.';
    }
    activatePurchaseBtn();
}

function checkPhone() { 
    if(phone.value.length > 1) {   
        phoneIsOk = true;
    } else {
        phoneIsOk = false;
        wrongPhone.textContent = 'Fyll i ditt telefonnummer.';
    }
    activatePurchaseBtn();
}

function checkEmail() {     //varför kan jag inte validera @ --> email.value.indexOf("@")
    if(email.value.length > 1) {   
        emailIsOk = true;
    } else {
        emailIsOk = false;
        wrongEmail.textContent = 'Fyll i din e-mailadress.';
    }
    activatePurchaseBtn();
}

function checkNiNumber() {  //  !!! validate for real niNumber !!!
    if(niNumber.value.length > 1) {  
        niNumberIsOk = true;
    } else {
        niNumberIsOk = false;
        wrongNiNumber.textContent = 'Fyll i ditt personnummer.';
    }
    activatePurchaseBtn();
}

function checkCheckboxGdpr() {
    if(checkboxGdpr.checked) {
        checkboxGdprIsOk = true;
    } else {
        checkboxGdprIsOk = false;
        wrongCheckboxGdpr.textContent = 'Bekräfta att du läst och godkänner Dale & the Donuts T&C och privacy policy';
    }
}

function activatePurchaseBtn() {
    if(firstNameIsOk && lastNameIsOk && streetIsOk && postalCodeIsOk && cityIsOk && 
        phoneIsOk && emailIsOk && checkboxGdprIsOk) {   //cardPay
        purchaseBtn.removeAttribute('disabled');
        //orderbekräftelse

    } else if (firstNameIsOk && lastNameIsOk && streetIsOk && postalCodeIsOk && cityIsOk && 
        phoneIsOk && emailIsOk && niNumberIsOk && checkboxGdprIsOk) {  //invoicePay
        purchaseBtn.removeAttribute('disabled');
        //orderbekräftelse
    } else {
        purchaseBtn.setAttribute('disabled');
    }
}

