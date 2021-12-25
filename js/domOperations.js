
function showResultInDomKvadrat() {
    let side = document.getElementById("dlinaStoroniKvadrata");
    let resultObj = document.getElementById("ploschadKvadrata")
    resultObj.innerHTML = `${squareKvadrat(side)}`;
}
function showResultInDomPriamougolnika() {
    let firstSide = document.getElementById("pervayaStoronaPriamougolnika");
    let secondSide = document.getElementById("drugayaStoronaPriamougolnika");
    let resultObj = document.getElementById("ploschadPriamougolnika")
    resultObj.innerHTML = `${squareRectangle(firstSide, secondSide)}`;
}
function showResultInDomParalelograma() {
    let side = document.getElementById("dlinaStoronyParalelograma");
    let height = document.getElementById("dlinaVisotyParalelograma");
    let resultObj = document.getElementById("ploschadParalelograma")
    resultObj.innerHTML = `${squareRectangle(side, height)}`;
}
function showResultInDomRomba() {
    let side = document.getElementById("dlinaStoronyParalelograma");
    let height = document.getElementById("dlinaVisotyParalelograma");
    let resultObj = document.getElementById("ploschadParalelograma")
    resultObj.innerHTML = `${squareRectangle(side, height)}`;}