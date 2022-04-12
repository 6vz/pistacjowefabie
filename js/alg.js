console.log('Witaj na mojej epickiej stronie\nNie powinieneś tego widzieć, ale to widzisz także haha śmiesze')
// count from 0 to 10 using while loop
var i = 0;
while (i <= 10) {
    const counter = document.getElementById('counter');
    counter.innerHTML = `${i} `
    i++;
}