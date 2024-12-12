var len = 0;
var result = "";
console.log("Calculator initialized");
function seven() {
    result = result + "7";
    document.getElementById("ans").innerHTML = result;
}

function eight() {
    result = result + "8";
    document.getElementById("ans").innerHTML = result;
}

function nine() {
    result = result + "9";
    document.getElementById("ans").innerHTML = result;
}

function del() {
    result = result.slice(0, -1);
    document.getElementById("ans").innerHTML = result;
}

function four() {
    result = result + "4";
    document.getElementById("ans").innerHTML = result;
}

function five() {
    result = result + "5";
    document.getElementById("ans").innerHTML = result;
}

function six() {
    result = result + "6";
    document.getElementById("ans").innerHTML = result;
}

function plus() {
    len = result.length - 1;
    if (result[len] != "+" && result[len] != "-" && result[len] != "*" && result[len] != "/") {
        result = result + "+";
        document.getElementById("ans").innerHTML = result;
}

}
function one() {
    result = result + "1";
    document.getElementById("ans").innerHTML = result;
}

function two() {
    result = result + "2";
    document.getElementById("ans").innerHTML = result;
}

function three() {
    result = result + "3";
    document.getElementById("ans").innerHTML = result;
}

function minus() {
    len = result.length - 1;
    if (result[len] != "+" && result[len] != "-" && result[len] != "*" && result[len] != "/") {
        result = result + "-";
        document.getElementById("ans").innerHTML = result;
    }

}
function dot() {
    len = result.length - 1;
    if (result[len] != ".") {
        result = result + ".";
        document.getElementById("ans").innerHTML = result;
    }

}
function zero() {
    result = result + "0";
    document.getElementById("ans").innerHTML = result;
}

function divide() {
    len = result.length - 1;
    if (result[len] != "+" && result[len] != "-" && result[len] != "*" && result[len] != "/") {
        result = result + "/";
        document.getElementById("ans").innerHTML = result;
    }

}
function multiply() {
    len = result.length - 1;
    if (result[len] != "+" && result[len] != "-" && result[len] != "*" && result[len] != "/") {
        result = result + "*";
        document.getElementById("ans").innerHTML = result;
    }

}
function reset() {
    result = "";
    document.getElementById("ans").innerHTML = result;
}

function equal() {
    try {
        document.getElementById("ans").innerHTML = eval(result);
        result = "";
        console.log("Equal pressed. Result: " + eval(result));
    } catch (e) {
        document.getElementById("ans").innerHTML = "Error";
        console.log("Error: " + e);
    }
}