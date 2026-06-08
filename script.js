


const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

var item = {
  flatWhite: 0,
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
      OUTPUT.innerHTML += ""
    } else {
    item.flatWhite = FLAT_WHITE.value;
    price.flatWhite = (6 * item.flatWhite);
  }
}

function getOrangeJuice(){
    const ORANGE_JUICE = document.getElementById("orange");
    if (ORANGE_JUICE.checkValidity() === false){
      OUTPUT.innerHTML += ""
    } else {
    item.orangeJuice = ORANGE_JUICE.value;
    price.orangeJuice = (6 * item.orangeJuice);
  }
}

function getBlueberryMuffin(){
    const BLUEBERRY_MUFFIN = document.getElementById("blueberry");
    if (BLUEBERRY_MUFFIN.checkValidity() === false){
      OUTPUT.innerHTML += ""
    } else {
    item.blueberryMuffin = BLUEBERRY_MUFFIN.value;
    price.blueberryMuffin = (5 * item.blueberryMuffin);
  }
}

function calcFunc(){
  return (price.flatWhite + price.orangeJuice + price.blueberryMuffin)
}


function getName(){
  const GET_NAME = document.getElementById("name");
  name = GET_NAME.value;
}

function getMoney(){
  const GET_MONEY = document.getElementById("money");
  money = GET_MONEY.value;
}


  function getReceipt(){
    OUTPUT.innerHTML = "<h2> Name: " + name + "</h2>"
    OUTPUT.innerHTML += "<h3>These are the items on your receipt:</h3>"
    if (item.flatWhite > 0) {
    OUTPUT.innerHTML += "<p>Flat White: " + item.flatWhite + " = $" + price.flatWhite + "</p>"
    } else {
      OUTPUT.innerHTML += ""
  }
    if (item.orangeJuice > 0) {
    OUTPUT.innerHTML += "<p>Orange Juice: " + item.orangeJuice + " = $" + price.orangeJuice + "</p>"
    } else {
      OUTPUT.innerHTML += "";
    }
    if (item.blueberryMuffin > 0) {
    OUTPUT.innerHTML += "<p>Blueberry Muffin: " + item.blueberryMuffin + " = $" + price.blueberryMuffin + "</p>"
    } else {
      OUTPUT.innerHTML += "";
    }
    OUTPUT.innerHTML += "<h3>Total: $" + calcFunc() + "</h3>"
    OUTPUT.innerHTML += "<h4>Change: $" + money-calcFunc() + "</h4>"
    }

function receipt(){
    getReceipt();
}