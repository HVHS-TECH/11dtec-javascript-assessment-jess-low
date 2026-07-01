
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
//Store inputs
var item = {
  flatWhite: {amount: 0, price: 0,},
  longBlack: {amount: 0, price: 0,},
  hotChocolate: {amount: 0, price: 0,},
  orangeJuice: {amount: 0, price: 0,},
  appleJuice: {amount: 0, price: 0,},
  lP: {amount: 0, price: 0,},
  blueberryMuffin: {amount: 0, price: 0,},
  cheeseScone: {amount: 0, price: 0,},
  quicheLorraine: {amount: 0, price: 0,},
  finalNumber: 0,
}

//Define constants
  const FLAT_WHITE = document.getElementById("flat");
  const LONG_BLACK = document.getElementById("long");
  const HOT_CHOCOLATE = document.getElementById("hot");
  const ORANGE_JUICE = document.getElementById("orange");
  const APPLE_JUICE = document.getElementById("apple");
  const L_P = document.getElementById("l");
  const BLUEBERRY_MUFFIN = document.getElementById("blueberry");
  const CHEESE_SCONE = document.getElementById("cheese");
  const QUICHE_LORRAINE = document.getElementById("quiche");
  const GET_NAME = document.getElementById("name");
  const GET_MONEY = document.getElementById("money");
  const CLEAR_BUTTON = document.getElementById("clear");
  const RECEIPT_BUTTON = document.getElementById("receipt");
  const ORDER_BUTTON = document.getElementById("order");
  const CANCEL_BUTTON = document.getElementById("cancel");
  const NAME_MONEY = document.getElementById("nameMoney");


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
    NAME_MONEY.style.display = 'none';
  }
}
function getLongBlack(){
    if (LONG_BLACK.checkValidity() === false){
      OUTPUT.innerHTML = "";
    } else {
    item.longBlack.amount = LONG_BLACK.value;
    item.longBlack.price = (5 * item.longBlack.amount).toFixed(2);
    OUTPUT.innerHTML = "";
    OUTPUT.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
    CLEAR_BUTTON.style.display = 'none';
    NAME_MONEY.style.display = 'none';
  }
}
function getHotChocolate(){
    if (HOT_CHOCOLATE.checkValidity() === false){
      OUTPUT.innerHTML = "";
    } else {
    item.hotChocolate.amount = HOT_CHOCOLATE.value;
    item.hotChocolate.price = (5 * item.hotChocolate.amount).toFixed(2);
    OUTPUT.innerHTML = "";
    OUTPUT.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
    CLEAR_BUTTON.style.display = 'none';
    NAME_MONEY.style.display = 'none';
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
    NAME_MONEY.style.display = 'none';
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
    NAME_MONEY.style.display = 'none';
  }
}
function getLP(){
    if (L_P.checkValidity() === false){
      OUTPUT.innerHTML = "";
    } else {
    item.lP.amount = L_P.value;
    item.lP.price = (4 * item.lP.amount).toFixed(2);
    OUTPUT.innerHTML = "";
    OUTPUT.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
    CLEAR_BUTTON.style.display = 'none';
    NAME_MONEY.style.display = 'none';
  }
}

function getBlueberryMuffin(){
    if (BLUEBERRY_MUFFIN.checkValidity() === false){
      OUTPUT.innerHTML = "";
    } else {
    item.blueberryMuffin.amount = BLUEBERRY_MUFFIN.value;
    item.blueberryMuffin.price = (5 * item.blueberryMuffin.amount).toFixed(2);
    OUTPUT.innerHTML = "";
    OUTPUT.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
    CLEAR_BUTTON.style.display = 'none';
    NAME_MONEY.style.display = 'none';
  }
}
function getCheeseScone(){
    if (CHEESE_SCONE.checkValidity() === false){
      OUTPUT.innerHTML = "";
    } else {
    item.cheeseScone.amount = CHEESE_SCONE.value;
    item.cheeseScone.price = (6 * item.cheeseScone.amount).toFixed(2);
    OUTPUT.innerHTML = "";
    OUTPUT.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
    CLEAR_BUTTON.style.display = 'none';
    NAME_MONEY.style.display = 'none';
  }
}
function getQuicheLorraine(){
    if (QUICHE_LORRAINE.checkValidity() === false){
      OUTPUT.innerHTML = "";
    } else {
    item.quicheLorraine.amount = QUICHE_LORRAINE.value;
    item.quicheLorraine.price = (8 * item.quicheLorraine.amount).toFixed(2);
    OUTPUT.innerHTML = "";
    OUTPUT.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
    CLEAR_BUTTON.style.display = 'none';
    NAME_MONEY.style.display = 'none';
  }
}

//Check if name is valid
function getName(){
    name = GET_NAME.value;
    CLEAR_BUTTON.style.display = 'block';
    RECEIPT_BUTTON.style.display = 'block';
}

//Check if amount is valid
function getMoney(){
  money = Number(GET_MONEY.value).toFixed(2);
    CLEAR_BUTTON.style.display = 'block';
    RECEIPT_BUTTON.style.display = 'block';
}

//Display for order and receipt
function displayStuff(_name, _amount, _price){
    if (_amount > 0) {
      OUTPUT.innerHTML += "<p style=\"font-family: 'Zen Old Mincho', serif;\">" + _name + ": " + _amount + " = $" + _price + "</p>";
    } else {
      OUTPUT.innerHTML += "";
    }
}

function fastDisplay(){
    displayStuff("Flat White", item.flatWhite.amount, item.flatWhite.price);
    displayStuff("Long Black", item.longBlack.amount, item.longBlack.price);
    displayStuff("Hot Chocolate", item.hotChocolate.amount, item.hotChocolate.price);
    displayStuff("Orange Juice", item.orangeJuice.amount, item.orangeJuice.price);
    displayStuff("Apple Juice", item.appleJuice.amount, item.appleJuice.price);
    displayStuff("L&P", item.lP.amount, item.lP.price);
    displayStuff("Blueberry Muffin", item.blueberryMuffin.amount, item.blueberryMuffin.price);
    displayStuff("Cheese Scone", item.cheeseScone.amount, item.cheeseScone.price);
    displayStuff("Quiche Lorraine", item.quicheLorraine.amount, item.quicheLorraine.price);
}

//Show items on order
function viewItems(){
  OUTPUT.style.display = 'block';
  item.finalNumber = Number(Number(item.flatWhite.price) + Number(item.longBlack.price) + Number(item.hotChocolate.price) + Number(item.orangeJuice.price) + Number(item.appleJuice.price) + Number(item.lP.price) + Number(item.blueberryMuffin.price) + Number(item.cheeseScone.price) + Number(item.quicheLorraine.price)).toFixed(2);
  if (item.finalNumber > 0){
    OUTPUT.innerHTML = "<h3 style=\"font-family: 'Zen Old Mincho', serif;\">These are the items on your order:</h3>";
    fastDisplay()
    OUTPUT.innerHTML += "<h3 style=\"font-family: 'Zen Old Mincho', serif;\">Total: $" + item.finalNumber + "</h3>";
    RECEIPT_BUTTON.style.display = 'block';
    CLEAR_BUTTON.style.display = 'block';
    NAME_MONEY.style.display = 'block';
  } else {
    OUTPUT.innerHTML = "<h3 style=\"font-family: 'Zen Old Mincho', serif;\">I'm sorry, you don't have any items on your order. Try pressing 'Add To Order' when you enter an amount.</h3>";
  }
}

function clearCancel(){
  OUTPUT.innerHTML = "";
  FLAT_WHITE.value = "";
  item.flatWhite.amount = 0;
  item.flatWhite.price = 0;
  LONG_BLACK.value = "";
  item.longBlack.amount = 0;
  item.longBlack.price = 0;
  HOT_CHOCOLATE.value = "";
  item.hotChocolate.amount = 0;
  item.hotChocolate.price = 0;
  ORANGE_JUICE.value = "";
  item.orangeJuice.amount = 0;
  item.orangeJuice.price = 0;
  APPLE_JUICE.value = "";
  item.appleJuice.amount = 0;
  item.appleJuice.price = 0;
  L_P.value = "";
  item.lP.amount = 0;
  item.lP.price = 0;
  BLUEBERRY_MUFFIN.value = "";
  item.blueberryMuffin.amount = 0;
  item.blueberryMuffin.price = 0;
  CHEESE_SCONE.value = "";
  item.cheeseScone.amount = 0;
  item.cheeseScone.price = 0;
  QUICHE_LORRAINE.value = "";
  item.quicheLorraine.amount = 0;
  item.quicheLorraine.price = 0;
  GET_NAME.value = "";
  name.amount = "";
  GET_MONEY.value = "";
  money.amount = 0;
  item.finalNumber = 0;
  OUTPUT.style.display = 'none';
  NAME_MONEY.style.display = 'none';
}

//Clear everything
function clearAll(){
  clearCancel()
  RECEIPT_BUTTON.style.display = 'none';
  CLEAR_BUTTON.style.display = 'none';
}

//Cancel order
function cancelAll(){
  clearCancel()
  ORDER_BUTTON.style.display = 'block';
  CANCEL_BUTTON.style.display = 'none';
}

//Show receipt
  function getReceipt(){
  item.finalNumber = Number(Number(item.flatWhite.price) + Number(item.longBlack.price) + Number(item.hotChocolate.price) + Number(item.orangeJuice.price) + Number(item.appleJuice.price) + Number(item.lP.price) + Number(item.blueberryMuffin.price) + Number(item.cheeseScone.price) + Number(item.quicheLorraine.price)).toFixed(2);
  if (GET_NAME.checkValidity() === false){
    OUTPUT.innerHTML = "<h3 style=\"font-family: 'Zen Old Mincho', serif;\">Please enter a name into the 'Name' section to complete your order.</h3>";
    CLEAR_BUTTON.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
  } else if (GET_MONEY.checkValidity() === false){
    OUTPUT.innerHTML = "<h3 style=\"font-family: 'Zen Old Mincho', serif;\">Please enter an amount into the 'Money' section to complete your order.</h3>";
    CLEAR_BUTTON.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
  } else if (Number(item.finalNumber) > Number(money)){
    OUTPUT.innerHTML = "<h1 style=\"font-family: 'Zen Old Mincho', serif;\">I'm sorry, you don't have enough money to complete this purchase.</h1>";
    CLEAR_BUTTON.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
  } else {
    OUTPUT.innerHTML = "<h2 style=\"font-family: 'Zen Old Mincho', serif;\"> Name: " + name + "</h2>";
    OUTPUT.innerHTML += "<h3 style=\"font-family: 'Zen Old Mincho', serif;\">These are the items on your receipt:</h3>";
    fastDisplay()
    OUTPUT.innerHTML += "<h3 style=\"font-family: 'Zen Old Mincho', serif;\">Total: $" + Number(item.finalNumber).toFixed(2) + "</h3>";
    OUTPUT.innerHTML += "<h3 style=\"font-family: 'Zen Old Mincho', serif;\">Money given: $" + Number(money).toFixed(2) + "</h3>";
    OUTPUT.innerHTML += "<h3 style=\"font-family: 'Zen Old Mincho', serif;\">Change: $" + (Number(money) - Number(item.finalNumber)).toFixed(2) + "</h3>";
    ORDER_BUTTON.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
    CLEAR_BUTTON.style.display = 'none';
    NAME_MONEY.style.display = 'none';
    CANCEL_BUTTON.style.display = 'block';
    }
  }
