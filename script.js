


const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

//Store inputs
var item = {
  flatWhite: {amount: 0, price: 0,},
  longBlack: {amount: 0, price: 0,},
  orangeJuice: {amount: 0, price: 0,},
  appleJuice: {amount: 0, price: 0,},
  blueberryMuffin: {amount: 0, price: 0,},
  cheeseScone: {amount: 0, price: 0,},
  finalNumber: 0,
}

//Define constants
  const FLAT_WHITE = document.getElementById("flat");
  const LONG_BLACK = document.getElementById("long");
  const ORANGE_JUICE = document.getElementById("orange");
  const APPLE_JUICE = document.getElementById("apple");
  const BLUEBERRY_MUFFIN = document.getElementById("blueberry");
  const CHEESE_SCONE = document.getElementById("cheese");
  const GET_NAME = document.getElementById("name");
  const GET_MONEY = document.getElementById("money");
  const CLEAR_BUTTON = document.getElementById("clear");
  const RECEIPT_BUTTON = document.getElementById("receipt");
  const ORDER_BUTTON = document.getElementById("order");
  const CANCEL_BUTTON = document.getElementById("cancel");


//Set up forms
function getFlatWhite(){
    if (FLAT_WHITE.checkValidity() === false){
      OUTPUT.innerHTML = "";
    } else {
    item.flatWhite.amount = FLAT_WHITE.value;
    item.flatWhite.price = (5.5 * item.flatWhite.amount).toFixed(2);
    OUTPUT.innerHTML = "";
    OUTPUT.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
    CLEAR_BUTTON.style.display = 'none';
  }
}
function getLongBlack(){
    if (LONG_BLACK.checkValidity() === false){
      OUTPUT.innerHTML = "";
    } else {
    item.longBlack.amount = LONG_BLACK.value;
    item.longBlack.price = (5 * item.longBlack.amount);
    OUTPUT.innerHTML = "";
    OUTPUT.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
    CLEAR_BUTTON.style.display = 'none';
  }
}

function getOrangeJuice(){
    if (ORANGE_JUICE.checkValidity() === false){
      OUTPUT.innerHTML = "";
    } else {
    item.orangeJuice.amount = ORANGE_JUICE.value;
    item.orangeJuice.price = (5.5 * item.orangeJuice.amount).toFixed(2);
    OUTPUT.innerHTML = "";
    OUTPUT.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
    CLEAR_BUTTON.style.display = 'none';
  }
}
function getAppleJuice(){
    if (APPLE_JUICE.checkValidity() === false){
      OUTPUT.innerHTML = "";
    } else {
    item.appleJuice.amount = APPLE_JUICE.value;
    item.appleJuice.price = (5.5 * item.appleJuice.amount).toFixed(2);
    OUTPUT.innerHTML = "";
    OUTPUT.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
    CLEAR_BUTTON.style.display = 'none';
  }
}

function getBlueberryMuffin(){
    if (BLUEBERRY_MUFFIN.checkValidity() === false){
      OUTPUT.innerHTML = "";
    } else {
    item.blueberryMuffin.amount = BLUEBERRY_MUFFIN.value;
    item.blueberryMuffin.price = (5 * item.blueberryMuffin.amount);
    OUTPUT.innerHTML = "";
    OUTPUT.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
    CLEAR_BUTTON.style.display = 'none';
  }
}
function getCheeseScone(){
    if (CHEESE_SCONE.checkValidity() === false){
      OUTPUT.innerHTML = "";
    } else {
    item.cheeseScone.amount = CHEESE_SCONE.value;
    item.cheeseScone.price = (6 * item.cheeseScone.amount);
    OUTPUT.innerHTML = "";
    OUTPUT.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
    CLEAR_BUTTON.style.display = 'none';
  }
}

//Check if name is valid
function getName(){
    if (GET_NAME.checkValidity() === false){
    OUTPUT.style.display = 'block';
    OUTPUT.innerHTML = "<h3>Please enter a name into the 'Name' section to complete your order.</h3>";
    CLEAR_BUTTON.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
  } else if (/[^a-zA-Z' .-]/g.test(GET_NAME.value)){
    OUTPUT.style.display = 'block';
    OUTPUT.innerHTML = "<h3>Numbers or symbols are not part of a valid name. Please enter a valid name into the 'Name' section to complete your order.</h3>";
    CLEAR_BUTTON.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
   } else{
  name = GET_NAME.value;
  OUTPUT.innerHTML = "";
  OUTPUT.style.display = 'none';
  RECEIPT_BUTTON.style.display = 'none';
  CLEAR_BUTTON.style.display = 'none';
   }
}

//Check if amount is valid
function getMoney(){
  if (GET_MONEY.checkValidity() === false){
    OUTPUT.style.display = 'block';
    OUTPUT.innerHTML = "<h3>Please enter an amount into the 'Money' section to complete your order.</h3>";
    CLEAR_BUTTON.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
  } else {
  money = Number(GET_MONEY.value).toFixed(2);
  OUTPUT.innerHTML = "";
  OUTPUT.style.display = 'none';
  RECEIPT_BUTTON.style.display = 'none';
  CLEAR_BUTTON.style.display = 'none';
  }
}

//Display for order and receipt
function displayStuff(_name, _amount, _price){
    if (_amount > 0) {
      OUTPUT.innerHTML += "<p>" + _name + ": " + _amount + " = $" + _price + "</p>";
    } else {
      OUTPUT.innerHTML += "";
    }
}

//Show items on order
function viewItems(){
  OUTPUT.style.display = 'block';
  item.finalNumber = Number(Number(item.flatWhite.price) + Number(item.longBlack.price) + Number(item.orangeJuice.price) + Number(item.appleJuice.price) + Number(item.blueberryMuffin.price) + Number(item.cheeseScone.price)).toFixed(2);
  if (item.finalNumber > 0){
    OUTPUT.innerHTML = "<h3>These are the items on your order:</h3>";
    displayStuff("Flat White", item.flatWhite.amount, item.flatWhite.price);
    displayStuff("Long Black", item.longBlack.amount, item.longBlack.price);
    displayStuff("Orange Juice", item.orangeJuice.amount, item.orangeJuice.price);
    displayStuff("Apple Juice", item.appleJuice.amount, item.appleJuice.price);
    displayStuff("Blueberry Muffin", item.blueberryMuffin.amount, item.blueberryMuffin.price);
    displayStuff("Cheese Scone", item.cheeseScone.amount, item.cheeseScone.price);
    OUTPUT.innerHTML += "<h3>Total: $" + item.finalNumber + "</h3>";
    RECEIPT_BUTTON.style.display = 'block';
    CLEAR_BUTTON.style.display = 'block';
  } else {
    OUTPUT.innerHTML = "<h3>I'm sorry, you don't have any items on your order.</h3>";
  }
}

//Clear everything
function clearAll(){
  OUTPUT.innerHTML = "";
  FLAT_WHITE.value = "";
  item.flatWhite.amount = 0;
  item.flatWhite.price = 0;
  LONG_BLACK.value = "";
  item.longBlack.amount = 0;
  item.longBlack.price = 0;
  ORANGE_JUICE.value = "";
  item.orangeJuice.amount = 0;
  item.orangeJuice.price = 0;
  document.getElementById("apple").value = "";
  item.appleJuice.amount = 0;
  item.appleJuice.price = 0;
  document.getElementById("blueberry").value = "";
  item.blueberryMuffin.amount = 0;
  item.blueberryMuffin.price = 0;
  document.getElementById("cheese").value = "";
  item.cheeseScone.amount = 0;
  item.cheeseScone.price = 0;
  document.getElementById("name").value = "";
  name.amount = "";
  document.getElementById("money").value = "";
  money.amount = 0;
  item.finalNumber = 0;
  RECEIPT_BUTTON.style.display = 'none';
  CLEAR_BUTTON.style.display = 'none';
  OUTPUT.style.display = 'none';
}

//Cancel order
function cancelAll(){
  OUTPUT.innerHTML = "";
  document.getElementById("flat").value = "";
  item.flatWhite.amount = 0;
  item.flatWhite.price = 0;
  document.getElementById("long").value = "";
  item.longBlack.amount = 0;
  item.longBlack.price = 0;
  document.getElementById("orange").value = "";
  item.orangeJuice.amount = 0;
  item.orangeJuice.price = 0;
  document.getElementById("apple").value = "";
  item.appleJuice.amount = 0;
  item.appleJuice.price = 0;
  document.getElementById("blueberry").value = "";
  item.blueberryMuffin.amount = 0;
  item.blueberryMuffin.price = 0;
  document.getElementById("cheese").value = "";
  item.cheeseScone.amount = 0;
  item.cheeseScone.price = 0;
  document.getElementById("name").value = "";
  name.amount = "";
  document.getElementById("money").value = "";
  money.amount = 0;
  item.finalNumber = 0;
  ORDER_BUTTON.style.display = 'block';
  CANCEL_BUTTON.style.display = 'none';
  OUTPUT.style.display = 'none';
}

//Show receipt
  function getReceipt(){
  item.finalNumber = Number(Number(item.flatWhite.price) + Number(item.longBlack.price) + Number(item.orangeJuice.price) + Number(item.appleJuice.price) + Number(item.blueberryMuffin.price) + Number(item.cheeseScone.price)).toFixed(2);
  if (GET_NAME.checkValidity() === false){
    OUTPUT.innerHTML = "<h3>Please enter a name into the 'Name' section to complete your order.</h3>";
    CLEAR_BUTTON.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
  } else if (/[^a-zA-Z' .-]/g.test(GET_NAME.value)){
    OUTPUT.innerHTML = "<h3>Numbers or symbols are not part of a valid name. Please enter a valid name into the 'Name' section to complete your order.</h3>";
    CLEAR_BUTTON.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
  } else if (GET_MONEY.checkValidity() === false){
    OUTPUT.innerHTML = "<h3>Please enter an amount into the 'Money' section to complete your order.</h3>";
    CLEAR_BUTTON.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
  } else if (Number(item.finalNumber) > Number(money)){
    OUTPUT.innerHTML = "<h1>I'm sorry, you don't have enough money to complete this purchase.</h1>";
    CLEAR_BUTTON.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
  } else {
    OUTPUT.innerHTML = "<h2> Name: " + name + "</h2>";
    OUTPUT.innerHTML += "<h3>These are the items on your receipt:</h3>";
    displayStuff("Flat White", item.flatWhite.amount, item.flatWhite.price);
    displayStuff("Long Black", item.longBlack.amount, item.longBlack.price);
    displayStuff("Orange Juice", item.orangeJuice.amount, item.orangeJuice.price);
    displayStuff("Apple Juice", item.appleJuice.amount, item.appleJuice.price);
    displayStuff("Blueberry Muffin", item.blueberryMuffin.amount, item.blueberryMuffin.price);
    displayStuff("Cheese Scone", item.cheeseScone.amount, item.cheeseScone.price);
    OUTPUT.innerHTML += "<h3>Total: $" + Number(item.finalNumber).toFixed(2) + "</h3>";
    OUTPUT.innerHTML += "<h3>Money given: $" + Number(money) + "</h3>";
    OUTPUT.innerHTML += "<h3>Change: $" + (Number(money) - Number(item.finalNumber)).toFixed(2) + "</h3>";
    ORDER_BUTTON.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
    CLEAR_BUTTON.style.display = 'none';
    CANCEL_BUTTON.style.display = 'block';
    }
  }
