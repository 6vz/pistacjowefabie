function obliczSpalanie() {
    // get value from id liters
    var liters = document.getElementById("liters").value;
    // check if value is empty
    if (liters == "") {
        swal('Ups!', 'Podaj ilość paliwa', 'error');
        return
    }
    // check if value is a number
    if (isNaN(liters)) {
        swal('Ups!', 'Podaj liczbę', 'error');
        return
    }
    // check if value is a positive number
    if (liters < 0) {
        swal('Ups!', 'Podaj dodatnią liczbę', 'error');
        return
    }
    // check if value is bigger than 40
    if (liters > 40) {
        swal('Ups!', 'Nie możesz zalać więcej niż 40! Bak jest za mały', 'error');
        return
    }
    var result = liters * 20
    swal('Obliczono!', `Z ${liters} l. paliwa przejedziesz ${result} kilometrów`);
}

function obliczEmisje() {
    var emission = document.getElementById("emission").value;
    // check if value is empty
    if (emission == "") {
        swal('Ups!', 'Podaj ilość kilometrow', 'error');
        return
    }
    // check if value is a number
    if (isNaN(emission)) {
        swal('Ups!', 'Podaj liczbę', 'error');
        return
    }
    // check if value is a positive number
    if (emission < 0) {
        swal('Ups!', 'Podaj dodatnią liczbę', 'error');
        return
    }
    var result = emission * 113
    swal('Obliczono!', `Przejeżdzając ${emission} km wydalisz ${result} g. CO2 i spalin`);
}