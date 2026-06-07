


const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>"

let receiptArray = [];

function getFlatWhite(){
    const FLAT_WHITE = document.getElementById("flat");
    let item = FLAT_WHITE.value;
    receiptArray.push(item);
  }

  function getReceipt(){
    OUTPUT.innerHTML += "<h3>These are the items on your receipt:</h3>"
  for (let i=0; i<receiptArray.length; i++){
    OUTPUT.innerHTML += "<p> + ("flat") + ": " + receiptArray[i] + "</p>";
  }
    }

function receipt(){
    getReceipt()
}