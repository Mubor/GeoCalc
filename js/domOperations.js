
let showResultInDomKvadrat = () => document.getElementById("ploschadKvadrata")
    .innerHTML = `${squareKvadrat(document.getElementById("dlinaStoroniKvadrata").value)}`;


let showResultInDomPriamougolnika = () => document.getElementById("ploschadPriamougolnika")
    .innerHTML = `${squareRectangle(
    document.getElementById("pervayaStoronaPriamougolnika").value, 
    document.getElementById("drugayaStoronaPriamougolnika").value)}`;

let showResultInDomParalelograma = () => document.getElementById("ploschadParalelograma")
    .innerHTML = `${squareRectangle(
    document.getElementById("dlinaStoronyParalelograma").value,
    document.getElementById("dlinaVisotyParalelograma").value)}`;

let showResultInDomRomba = () => document.getElementById("ploschadRomba")
    .innerHTML = `${squareRectangle(
    document.getElementById("dlinaStoronyRomba").value, 
    document.getElementById("dlinaVisotyRomba").value)}`;

// {
//     let side = document.getElementById("dlinaStoronyParalelograma");
//     let height = document.getElementById("dlinaVisotyParalelograma");
//     let resultObj = document.getElementById("ploschadParalelograma")
//     resultObj.innerHTML = `${squareRectangle(side, height)}`;
// }