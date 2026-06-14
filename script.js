


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
    if (GET_NAME.checkValidity() === false){
    OUTPUT.innerHTML = "Please enter a name into the 'Name' section to complete your order.";
  } else if (/[^a-zA-Z' .-]/g.test(GET_NAME.value)){
    OUTPUT.innerHTML = "Numbers or symbols are not part of a valid name. Please enter a valid name into the 'Name' section to complete your order.";
   } else{
  name = GET_NAME.value;
   }
}

function getMoney(){
  const GET_MONEY = document.getElementById("money");
  money = GET_MONEY.value;
}

function displayStuff(_name, _amount, _price){
    if (_amount > 0) {
      OUTPUT.innerHTML += "<p>" + _name + ": " + _amount + " = $" + _price + "</p>";
    } else {
      OUTPUT.innerHTML += "";
    }
}

function viewItems(){
  const RECEIPT_BUTTON = document.getElementById("receipt");
  OUTPUT.innerHTML = "<h3>These are the items on your order:</h3>";
  displayStuff("Flat White", item.flatWhite.amount, item.flatWhite.price);
  displayStuff("Orange Juice", item.orangeJuice.amount, item.orangeJuice.price);
  displayStuff("Blueberry Muffin", item.blueberryMuffin.amount, item.blueberryMuffin.price);
  OUTPUT.innerHTML += "<h3>Total: $" + calcFunc() + "</h3>";
  RECEIPT_BUTTON.style.display = 'block';
}

  function getReceipt(){
  const ORDER_BUTTON = document.getElementById("order");
  const RECEIPT_BUTTON = document.getElementById("receipt");
  const GET_NAME = document.getElementById("name");
    if (calcFunc() > money){
      OUTPUT.innerHTML = "<h1>I'm sorry, you don't have enough money to complete this purchase.</h1>";
    } else if (GET_NAME.checkValidity() === false){
    OUTPUT.innerHTML = "Please enter a name into the 'Name' section to complete your order.";
  } else if (/[^a-zA-Z' .-]/g.test(GET_NAME.value)){
    OUTPUT.innerHTML = "Numbers or symbols are not part of a valid name. Please enter a valid name into the 'Name' section to complete your order.";
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
    }
  }
