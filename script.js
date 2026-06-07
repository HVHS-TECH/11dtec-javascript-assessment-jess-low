


const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>"

let itemArray = [];
let amountArray = [];

function getFlatWhite(){
    const FLAT_WHITE = document.getElementById("flat");
    let item = "Flat White";
    itemArray.push(item);
    let amount = FLAT_WHITE.value;
    amountArray.push(amount);
  }

  function getReceipt(){
    OUTPUT.innerHTML += "<h3>These are the items on your receipt:</h3>"
  for (let i=0; i<itemArray.length; i++){
    OUTPUT.innerHTML += "<p>" + itemArray[i] + ": " + receiptArray[i] + "</p>";
  }
    }

function receipt(){
    getReceipt()
}