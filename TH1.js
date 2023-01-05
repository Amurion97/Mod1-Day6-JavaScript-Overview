var x, y ,z;
x = 8;
y = 10;
z = x*y;

function alert1(){
    alert("Testing in process!");
}

function changeinner(){
    document.getElementById("to-change").innerHTML="Testing is in progress!"
}

function showMessage(){
    console.log('Xin chào!');
}

let click = document.getElementById("click");

click.addEventListener("click", showMessage);