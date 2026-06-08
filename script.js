


const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

var item = {
  flatWhite: 0,
  orangeJuice: 0,
  blueberryMuffin: 0,
}


function getFlatWhite(){
    const FLAT_WHITE = document.getElementById("flat");
    item.flatWhite = FLAT_WHITE.value;
  }

function getOrangeJuice(){
    const ORANGE_JUICE = document.getElementById("orange");
    item.orangeJuice = ORANGE_JUICE.value;
  }

function getBlueberryMuffin(){
    const BLUEBERRY_MUFFIN = document.getElementById("blueberry");
    item.blueberryMuffin = BLUEBERRY_MUFFIN.value;
  }

function calcFunc() {
  return price.flatWhite + price.orangeJuice + price.blueberryMuffin
}

function getName(){
  const GET_NAME = document.getElementById("name");
  name = GET_NAME.value;
}

var price = {
  flatWhite: (6 * item.flatWhite),
  orangeJuice: (6 * item.orangeJuice),
  blueberryMuffin: (5 * item.blueberryMuffin),
}
  function getReceipt(){
    OUTPUT.innerHTML = "<h2> Name: " + name + "</h2>"
    OUTPUT.innerHTML += "<h3>These are the items on your receipt:</h3>"
    OUTPUT.innerHTML += "<p>Flat White: " + item.flatWhite + " = $" + price.flatWhite + "</p>"
    OUTPUT.innerHTML += "<p>Orange Juice: " + item.orangeJuice + " = $" + price.orangeJuice + "</p>"
    OUTPUT.innerHTML += "<p>Blueberry Muffin: " + item.blueberryMuffin + " = $" + price.blueberryMuffin + "</p>"
    
    OUTPUT.innerHTML += "<h3>Total: $" + calcFunc() + "</h3>"
    }

function receipt(){
    getReceipt();
}