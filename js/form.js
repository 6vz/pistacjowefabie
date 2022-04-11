function sendForm() {
    // get input value from name
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    swal('Success!', `${name}, już cię zlokalizowaliśmy! Spodziewaj się naszego kuriera za 15 minut!`)
}