// Linjer som denne, der starter med to skråstreger, er kommentarer.
// Kommentarer er ikke en del af koden. Det er bare forklarende tekst.

// Her laver vi en variabel ved navn "x" med værdien 42
let x = 42

// Her laver vi en anden variabel ved navn "y" med værdien 50
let y = x + 8

// Her opdaterer vi variablen "y", så den efterfølgende har værdien 7
y = 7

// Her opdaterer vi variablen "y", ved at lægge 3 til, så den får værdien 10
y += 3

// Her laver vi en variabel "primes" med en liste af de første fire primtal
let primes = [2, 3, 5, 7]

// Her skubber vi en værdi ind i slutningen af listen, så den efterfølgende har de første fem primtal
primes.push(11)

// Her løber vi over værdierne i listen og lægger dem til variablen "total", så den efterfølgende indeholder summen af de første fem primtal
let total = 0
for(let p of primes) total += p

// Her laver vi en variabel "o" med et objekt der har felterne "a", "b" og "c", alle med værdien 1
let o = {a: 1, b: 1, c: 1}

// Her sætter vi feltet "a" på objektet i variablen "o" til værdien 2
o.a = 2

// Her laver vi en funktion "f" med to parametre "n" og "m". Funktionen retunerer summen af de to parametre
function f(n, m) {
    let sum = n + m
    return sum
}

// Her laver vi en variabel "r" med værdien af at anvende funktionen "f" på argumenterne 4 og 6, altså 10
let r = f(4, 6)

// Her laver vi en variabel "s" med et stykke tekst som værdi: Hej
let s = 'Hej'

// Her laver vi en variabel "t", med en sammensat tekst som værdi: Hej August
let t = s + ' Mattis'

// Her spørger vi om længden af teksten er større end 5 bogstaver. Hvis det er sandt, viser vi en besked til brugeren
if(t.length > 5) alert('Sikke en lang tekst!')

// Her viser vi en anden besked, hvis det ikke er sandt
if(t.length > 5) alert('Sikke en lang tekst!')
else alert('Sikke en kort tekst!')

// Med tuborgklammer "{}" kan man gøre flere ting efter hinanden med eksempelvis "if" eller "for"
if(t.length > 5) {
    let besked = 'Sikke en lang tekst!'
    alert(besked)
} else {
    let besked = 'Sikke en kort tekst!'
    alert(besked)
}

// Her har vi nogle sandhedsværdier, som enten er true eller false
true        // sand
false       // falsk
!a          // negation (sand hvis "a" er falsk)
a && b      // og (sand hvis både "a" og "b" er sande)
a || b      // eller (sand hvis mindst en af "a" eller "b" er sande)
a < b       // mindre end
a <= b      // mindre end eller lig med
a == b     // lighed (sand hvis "a" er lig med "b")

// Her viser vi en besked, hvis både "raining" og "weekend" er sande
if(raining && weekend) alert('Lad os programmere et spil!')

// Her laver vi en variabel "q" med et tomt objekt
let q = {}

// Her sætter vi et felt "etFelt" på "q" til 100. Feltnavnet er beregnet
let computed = 'et' + 'Felt'
q[computed] = 100

// Der er flere forskellige måder at få værdien af det samme felt på
q.etFelt == q[computed]
q.etFelt == q['etFelt']

// Her laver vi en variabel "number" med et tilfældigt tal, hvor 0 <= number < 1
let number = Math.random()

// Her laver vi en variabel "distance" med afstanden mellem to punkter (x1, y1) og (x2, y2)
let distance = Math.hypot(x2 - x1, y2 - y1)

// Det kan også skrived direkte med Pytagoros således, hvor x² skrives: x ** 2
let distance2 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

// Her beder vi om at funktionen "handleKeyDown" bliver kaldt når spilleren trykker på en tast
addEventListener('keydown', handleKeyDown)

// Her bruger vi en anonym funktion i stedet for at referere til en eksisterende funktion
addEventListener('keydown', function(event) {alert('Du trykkede på tasten: ' + event.key)})

// Her bruger vi en anonym funktion til at filtrere værdien 2 væk fra listen "primes"
primes = primes.filter(function(p) {return p != 2})

// Her laver vi et element, farver det rødt og sætter det in på hjemmesiden
let element = document.createElement('div')
element.style.backgroundColor = 'red'
document.body.appendChild(element)

// Her laver i en variabel "implodeSound" med en lyd vi kan afspille
let implodeSound = new Audio('sounds/implode.wav')

// Her sørger vi for, at lydfilen bliver hentet med det samme
implodeSound.preload = 'auto'

// Her afspiller vi lyden
implodeSound.play()

// Her spoler vi lyden tilbage, så vi kan spille den igen med det samme
implodeSound.currentTime = 0

// Her laver vi en variabel "found" med det første tal i listen, der er større end 3
let found = primes.find(function(p) {return p > 3})

// Her laver vi en variabel "radians" med vinklen fra et punkt (x1, y1) til et andet (x2, y2)
let radians = Math.atan2(y2 - y1, x1 - x2)

// Halv størrelse på mobilen (indsæt lige før <body>)
// <meta name="viewport" content="width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0">

// Her fortæller vi browseren, at vi selv vil styre touch events
document.body.parentElement.style.touchAction = 'none'

// Her lytter vi til touch events (preventDefault og passive fortæller at vi vil have fuld kontrol)
function handleTouchEvent(event) {
    event.preventDefault()
    let touches = [...event.touches] // Konverterer "TouchList" til en normal liste
    // ...
}
addEventListener('touchstart', handleTouchEvent, {passive: false})
addEventListener('touchmove', handleTouchEvent, {passive: false})
addEventListener('touchend', handleTouchEvent, {passive: false})
addEventListener('touchcancel', handleTouchEvent, {passive: false})
