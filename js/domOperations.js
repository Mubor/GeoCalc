
function getElem(ID) {
    return document.getElementById(ID);
}

function correctInput(fieldValue) {
    debugger;
    correct = true;
    if(fieldValue == "" || fieldValue <= 0) {
        correct = false;
    }
    return correct;
}

function calculate(firstID, secondID){
    let sideValues = {
        first:getElem(firstID).value,
        second:getElem(secondID).value
    };
    if(correctInput(sideValues.first) && correctInput(sideValues.second)) {
        return multiply(sideValues);
    }
    else {
        return 'Ошибка! Проверьте значения в полях ввода!';
    }
}


function squareKvadrat() {
    getElem("ploschadKvadrata").innerHTML = `${calculate("dlinaStoroniKvadrata", "dlinaStoroniKvadrata")}`;
}
function squareRectangle() {
    getElem("ploschadPriamougolnika").innerHTML = `${calculate("pervayaStoronaPriamougolnika", "drugayaStoronaPriamougolnika")}`;
}
function squareParalelogram() {
    getElem("ploschadParalelograma").innerHTML = `${calculate("dlinaStoronyParalelograma", "dlinaVisotyParalelograma")}`;
}
function squareRomb() {
    getElem("ploschadRomba").innerHTML = `${calculate("dlinaStoronyRomba", "dlinaVisotyRomba")}`;
}