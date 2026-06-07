


const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

let itemArray = [];
let amountArray = [];

function getFlatWhite(){
    const FLAT_WHITE = document.getElementById("flat");
    let item = "Flat White";
    itemArray.push(item);
    let amount = FLAT_WHITE.value;
    amountArray.push(amount);
  }

function getOrangeJuice(){
    const ORANGE_JUICE = document.getElementById("orange");
    let item = "Orange Juice";
    itemArray.push(item);
    let amount = ORANGE_JUICE.value;
    amountArray.push(amount);
  }

function getBlueberryMuffin(){
    const BLUEBERRY_MUFFIN = document.getElementById("blueberry");
    let item = "Blueberry Muffin";
    itemArray.push(item);
    let amount = BLUEBERRY_MUFFIN.value;
    amountArray.push(amount);
  }

  function getReceipt(){
    OUTPUT.innerHTML += "<h3>These are the items on your receipt:</h3>"
  for (let i=0; i<itemArray.length; i++){
    OUTPUT.innerHTML += "<p>" + itemArray[i] + ": " + amountArray[i] + "</p>";
  }
    }

function receipt(){
    getReceipt()
}