function szamol1()
{
    var random= Math.random() * (111 - 33) + 33;
    var kes= ((random*8)-270).toFixed(0)
    document.getElementById('a').innerHTML = random.toFixed(0);
    document.getElementById('b').innerHTML = ((random*8)-270).toFixed(0);
    document.getElementById('c').innerHTML = (random/100).toFixed(1)+'%';
    document.getElementById('d').innerHTML = kes*7;
}

function kiir()
{
    var random1= Math.random() * (1111 - 333) + 333;
    var random2= random1-(Math.random() * (111 - 33) + 33);
    var random3= random2-(Math.random() * (99 - 23) + 23);
    document.getElementById('a1').innerHTML = random1.toFixed(0);
    document.getElementById('b1').innerHTML = prompt('Mi a HonoLulu-i reptér azonosítója?')
    document.getElementById('a2').innerHTML = random2.toFixed(0);
    document.getElementById('b2').innerHTML = prompt('Mi a Denver-i reptér azonosítója?')
    document.getElementById('a3').innerHTML = random3.toFixed(0);
    document.getElementById('b3').innerHTML = prompt('Mi a Knoxxville-i reptér azonosítója?')
}

function szamol2()
{
    var random1= Math.random() * (9999 - 3333) + 3333;
    var random2= random1-(Math.random() * (3000 - 1111) + 1111);
    var random3= random2-(Math.random() * (1800 - 23) + 23);
    document.getElementById('a').innerHTML = random3.toFixed(0);
    document.getElementById('b').innerHTML = random2.toFixed(0);
    document.getElementById('c').innerHTML = random1.toFixed(0);s
}