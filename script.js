


const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

var item = {
  flatWhite: {amount: 0, price: 0,},
  orangeJuice: 0,
  blueberryMuffin: 0,
}

var price = {
  flatWhite: 0,
  orangeJuice: 0,
  blueberryMuffin: 0,
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
    item.orangeJuice = ORANGE_JUICE.value;
    price.orangeJuice = (6 * item.orangeJuice);
  }
}

function getBlueberryMuffin(){
    const BLUEBERRY_MUFFIN = document.getElementById("blueberry");
    if (BLUEBERRY_MUFFIN.checkValidity() === false){
      OUTPUT.innerHTML += "";
    } else {
    item.blueberryMuffin = BLUEBERRY_MUFFIN.value;
    price.blueberryMuffin = (5 * item.blueberryMuffin);
  }
}

function calcFunc(){
  return (item.flatWhite.price + price.orangeJuice + price.blueberryMuffin);
}

function getName(){
  const GET_NAME = document.getElementById("name");
  name = GET_NAME.value;
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
  displayStuff("Orange Juice", item.orangeJuice, price.orangeJuice);
  displayStuff("Blueberry Muffin", item.blueberryMuffin, price.blueberryMuffin);
  OUTPUT.innerHTML += "<h3>Total: $" + calcFunc() + "</h3>";
  RECEIPT_BUTTON.style.display = 'block';
}

  function getReceipt(){
  const ORDER_BUTTON = document.getElementById("order");
  const RECEIPT_BUTTON = document.getElementById("receipt");
    if (calcFunc() > money){
      OUTPUT.innerHTML = "<h1>I'm sorry, you don't have enough money to complete this purchase.</h1>";
    } else {
    OUTPUT.innerHTML = "<h2> Name: " + name + "</h2>";
    OUTPUT.innerHTML += "<h3>These are the items on your receipt:</h3>";
    displayStuff("Flat White", item.flatWhite.amount, item.flatWhite.price);
    displayStuff("Orange Juice", item.orangeJuice, price.orangeJuice);
    displayStuff("Blueberry Muffin", item.blueberryMuffin, price.blueberryMuffin);
    OUTPUT.innerHTML += "<h3>Total: $" + calcFunc() + "</h3>";
    OUTPUT.innerHTML += "<h3>Money given: $" + money + "</h3>";
    OUTPUT.innerHTML += "<h3>Change: $" + (money - calcFunc()) + "</h3>";
    ORDER_BUTTON.style.display = 'none';
    RECEIPT_BUTTON.style.display = 'none';
    }
  }
