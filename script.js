


const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

var item = {
  flatWhite: 0,
  orangeJuice: 0,
  blueberryMuffin: 0,
}

let itemArray = [];
let priceArray = [];

function getFlatWhite(){
    const FLAT_WHITE = document.getElementById("flat");
    item.flatWhite = FLAT_WHITE.value;
    let item = "Flat White";
    itemArray.push(item);
    let price = (FLAT_WHITE.value * 6);
    priceArray.push(price);
  }

function getOrangeJuice(){
    const ORANGE_JUICE = document.getElementById("orange");
    item.orangeJuice = ORANGE_JUICE.value;
    let item = "Orange Juice";
    itemArray.push(item);
    let price = (ORANGE_JUICE.value * 6);
    priceArray.push(price);
  }

function getBlueberryMuffin(){
    const BLUEBERRY_MUFFIN = document.getElementById("blueberry");
    item.blueberryMuffin = BLUEBERRY_MUFFIN.value;
    let item = "Blueberry Muffin";
    itemArray.push(item);
    let price = (BLUEBERRY_MUFFIN.value * 5);
    priceArray.push(price);
  }

function calcFunc(total, num) {
  return total + num;
}

function getName(){
  const GET_NAME = document.getElementById("name");
  name = GET_NAME.value;
}

  function getReceipt(){
    OUTPUT.innerHTML = "<h2> Name: " + name + "</h2>"
    OUTPUT.innerHTML += "<h3>These are the items on your receipt:</h3>"
  for (let i=0; i<itemArray.length; i++){
    OUTPUT.innerHTML += "<p>" + itemArray[i] + ": " + amountArray[i] + " = $" + priceArray[i] + "</p>";
  }
  OUTPUT.innerHTML += "<h3>Total: $" + priceArray.reduce(calcFunc) + "</h3>"
    }

function receipt(){
    getReceipt();
}