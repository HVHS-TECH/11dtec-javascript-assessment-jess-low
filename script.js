


const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

let itemArray = [];
let amountArray = [];
let priceArray = [];

function getFlatWhite(){
    const FLAT_WHITE = document.getElementById("flat");
    let item = "Flat White";
    itemArray.push(item);
    let amount = FLAT_WHITE.value;
    amountArray.push(amount);
    let price = (FLAT_WHITE.value * 6);
    priceArray.push(price);
  }

function getOrangeJuice(){
    const ORANGE_JUICE = document.getElementById("orange");
    let item = "Orange Juice";
    itemArray.push(item);
    let amount = ORANGE_JUICE.value;
    amountArray.push(amount);
    let price = (ORANGE_JUICE.value * 6);
    priceArray.push(price);
  }

function getBlueberryMuffin(){
    const BLUEBERRY_MUFFIN = document.getElementById("blueberry");
    let item = "Blueberry Muffin";
    itemArray.push(item);
    let amount = BLUEBERRY_MUFFIN.value;
    amountArray.push(amount);
    let price = (BLUEBERRY_MUFFIN.value * 5);
    priceArray.push(price);
  }

function calcFunc(total, num) {
  return total + num;
}

function getName(){
  const GET_NAME = document.getElementById("name");
}

  function getReceipt(){
    OUTPUT.innerHTML = "<h3>These are the items on your receipt:</h3>"
  for (let i=0; i<itemArray.length; i++){
    OUTPUT.innerHTML += "<p>" + itemArray[i] + ": " + amountArray[i] + " = $" + priceArray[i] + "</p>";
  }
  OUTPUT.innerHTML += "<h3>Total: $" + priceArray.reduce(calcFunc) + "</h3>"
    }

function receipt(){
    getReceipt();
}