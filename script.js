function aktualizuj(element) {
    element.innerText = prompt("Podaj nową ilość:")
    zaznacz()
}

let id_zamowienia = 0

function zamow(element) {
    id_zamowienia += 1
    alert(`Zamówienie nr: ${id_zamowienia} Produkt: ${element.innerText}`)
}

function zaznacz() {
    for (let i = 1; i < 5; i++) {
        let tag = "#ilosc" + i
        let element = document.querySelector(tag)

        if (element.innerText == 0) element.style.background = "red"
        else if (element.innerText >= 1 && element.innerText <= 5) element.style.background = "yellow"
        else element.style.background = "honeydew"
    }
}

zaznacz(0)