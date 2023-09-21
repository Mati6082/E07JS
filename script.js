function aktualizuj() {
    let nowa = prompt("Podaj nową wartość: ")
}

function zamow() {
    
}

function zaznacz() {
    let ilosc1 = document.querySelector("#ilosc1")
    let ilosc2 = document.querySelector("#ilosc2")
    let ilosc3 = document.querySelector("#ilosc3")
    let ilosc4 = document.querySelector("#ilosc4")
    
    if (ilosc1.innerText == 0) ilosc1.style.background = "red"
    else if (ilosc1.innerText >= 1 && ilosc1.innerText <=5) ilosc1.style.background = "yellow"
    else ilosc1.style.background = "honeydew"
    
    if (ilosc2.innerText == 0) ilosc2.style.background = "red"
    else if (ilosc2.innerText >= 1 && ilosc2.innerText <=5) ilosc2.style.background = "yellow"
    else ilosc2.style.background = "honeydew"
    
    if (ilosc3.innerText == 0) ilosc3.style.background = "red"
    else if (ilosc3.innerText >= 1 && ilosc3.innerText <=5) ilosc3.style.background = "yellow"
    else ilosc3.style.background = "honeydew"
    
    if (ilosc4.innerText == 0) ilosc4.style.background = "red"
    else if (ilosc4.innerText >= 1 && ilosc4.innerText <=5) ilosc4.style.background = "yellow"
    else ilosc1.style.background = "honeydew"
}

zaznacz(0)