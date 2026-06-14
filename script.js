


const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

var item = {
  flatWhite: {amount: 0, price: 0,},
  orangeJuice: {amount: 0, price: 0,},
  blueberryMuffin: {amount: 0, price: 0,},
}


function getFlatWhite(){
    const FLAT_WHITE = document.getElementById("flat");
    if (FLAT_WHITE.checkValidity() === false){
      OUTPUT.innerHTML += "";
    } else {
    item.flatWhite.amount = FLAT_WHITE.value;
    item.flatWhite.price = (6 * item.flatWhite.amount);
  }
}

function getOrangeJuice(){
    const ORANGE_JUICE = document.getElementById("orange");
    if (ORANGE_JUICE.checkValidity() === false){
      OUTPUT.innerHTML += "";
    } else {
    item.orangeJuice.amount = ORANGE_JUICE.value;
    item.orangeJuice.price = (6 * item.orangeJuice.amount);
  }
}

function getBlueberryMuffin(){
    const BLUEBERRY_MUFFIN = document.getElementById("blueberry");
    if (BLUEBERRY_MUFFIN.checkValidity() === false){
      OUTPUT.innerHTML += "";
    } else {
    item.blueberryMuffin.amount = BLUEBERRY_MUFFIN.value;
    item.blueberryMuffin.price = (5 * item.blueberryMuffin.amount);
  }
}

function calcFunc(){
  return (item.flatWhite.price + item.orangeJuice.price + item.blueberryMuffin.price);
}

function getName(){
  const GET_NAME = document.getElementById("name");
  const CLEAR_BUTTON = document.getElementById("clear");
  const RECEIPT_BUTTON = document.getElementById("receipt");
    if (GET_NAME.checkValidity() === false){
    OUTPUT.innerHTML = "<h3>Please enter a name into the 'Name' section to complete your order.</h3>";
    CLEAR_BUTTON.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
  } else if (/[^a-zA-Z' .-]/g.test(GET_NAME.value)){
    OUTPUT.innerHTML = "<h3>Numbers or symbols are not part of a valid name. Please enter a valid name into the 'Name' section to complete your order.</h3>";
    CLEAR_BUTTON.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
   } else{
  name = GET_NAME.value;
  OUTPUT.innerHTML = "";
   }
}

function getMoney(){
  const GET_MONEY = document.getElementById("money");
  const CLEAR_BUTTON = document.getElementById("clear");
  const RECEIPT_BUTTON = document.getElementById("receipt");
  if (GET_MONEY.checkValidity() === false){
    OUTPUT.innerHTML = "<h3>Please enter an amount into the 'Money' section to complete your order.</h3>";
    CLEAR_BUTTON.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
  } else {
  money = GET_MONEY.value;
  OUTPUT.innerHTML = "";
  }
}

function displayStuff(_name, _amount, _price){
    if (_amount > 0) {
      OUTPUT.innerHTML += "<p>" + _name + ": " + _amount + " = $" + _price + "</p>";
    } else {
      OUTPUT.innerHTML += "";
    }
}

function viewItems(){
  const CLEAR_BUTTON = document.getElementById("clear");
  const RECEIPT_BUTTON = document.getElementById("receipt");
  OUTPUT.innerHTML = "<h3>These are the items on your order:</h3>";
  displayStuff("Flat White", item.flatWhite.amount, item.flatWhite.price);
  displayStuff("Orange Juice", item.orangeJuice.amount, item.orangeJuice.price);
  displayStuff("Blueberry Muffin", item.blueberryMuffin.amount, item.blueberryMuffin.price);
  OUTPUT.innerHTML += "<h3>Total: $" + calcFunc() + "</h3>";
  RECEIPT_BUTTON.style.display = 'block';
  CLEAR_BUTTON.style.display = 'block';
}

function clearAll(){
  const RECEIPT_BUTTON = document.getElementById("receipt");
  const CLEAR_BUTTON = document.getElementById("clear");
  OUTPUT.innerHTML = "";
  document.getElementById("flat").value = "";
  item.flatWhite.amount = 0;
  item.flatWhite.price = 0;
  document.getElementById("orange").value = "";
  item.orangeJuice.amount = 0;
  item.orangeJuice.price = 0;
  document.getElementById("blueberry").value = "";
  item.blueberryMuffin.amount = 0;
  item.blueberryMuffin.price = 0;
  document.getElementById("name").value = "";
  name.amount = "";
  document.getElementById("money").value = "";
  money.amount = 0;
  RECEIPT_BUTTON.style.display = 'none';
  CLEAR_BUTTON.style.display = 'none';
}

function cancelAll(){
  const RECEIPT_BUTTON = document.getElementById("receipt");
  const CLEAR_BUTTON = document.getElementById("clear");
  OUTPUT.innerHTML = "";
  document.getElementById("flat").value = "";
  document.getElementById("orange").value = 0;
  document.getElementById("blueberry").value = 0;
  document.getElementById("name").value = "";
  document.getElementById("money").value = 0;
  RECEIPT_BUTTON.style.display = 'none';
  CLEAR_BUTTON.style.display = 'none';
}

  function getReceipt(){
  const GET_MONEY = document.getElementById("money");
  const ORDER_BUTTON = document.getElementById("order");
  const RECEIPT_BUTTON = document.getElementById("receipt");
  const CLEAR_BUTTON = document.getElementById("clear");
  const CANCEL_BUTTON = document.getElementById("cancel");
  const GET_NAME = document.getElementById("name");
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
  } else if (calcFunc() > money){
    OUTPUT.innerHTML = "<h1>I'm sorry, you don't have enough money to complete this purchase.</h1>";
    CLEAR_BUTTON.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
  } else {
    OUTPUT.innerHTML = "<h2> Name: " + name + "</h2>";
    OUTPUT.innerHTML += "<h3>These are the items on your receipt:</h3>";
    displayStuff("Flat White", item.flatWhite.amount, item.flatWhite.price);
    displayStuff("Orange Juice", item.orangeJuice.amount, item.orangeJuice.price);
    displayStuff("Blueberry Muffin", item.blueberryMuffin.amount, item.blueberryMuffin.price);
    OUTPUT.innerHTML += "<h3>Total: $" + calcFunc() + "</h3>";
    OUTPUT.innerHTML += "<h3>Money given: $" + money + "</h3>";
    OUTPUT.innerHTML += "<h3>Change: $" + (money - calcFunc()) + "</h3>";
    ORDER_BUTTON.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
    CLEAR_BUTTON.style.display = 'none';
    CANCEL_BUTTON.style.display = 'block';
    }
  }
