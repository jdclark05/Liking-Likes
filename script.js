
var count = 0;

function add() {

    var countElement = document.getElementById("count");
    console.log(countElement);
    count++;
    countElement.innerText =  count;
}

