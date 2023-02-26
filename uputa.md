# Lab Instrukcije: AZURO PROJEKAT I DIO
 
> ### **Savjet: Prije početka**
> #### **Da biste imali pogled u dvije kolone**, odaberite sljedeće u VSCode:
> - View -> Editor Layout -> Two Columns
> - Da vidite ovaj fajl u Preview modu desni klik na README.md te odaberite `Open Preview`
> - Odaberite vaš kod, te vaš zadatak odaberite da bude u drugoj koloni.
> - Neka vaš kod bude u drugoj koloni. 
> - Sjajno. Sada pogledajte instrukcije. 
> - 
> #### **Kako pokrenuti JS kod**
> - Odaberite vaš JavaScript dokument
> - Odaberite "Run Code" dugme iz gornjeg desnog dijela VSCode.  
 
<br><br>

<br>

## Instrukcije za projektni zadatak

U ovom zadatku, dobit ćete podatke sačuvane kao niz objekata o hrani za Azuro restoran.
<br><br>

**Korak 1:** U funkciji `dajCijene()`, dajte parametar `porezBoolean`.

**Korak 2:** U funkciji `dajCijene()`, napišite for peltju da prođe kroz sve objekte niza `jelaPodaci`.

**Korak 3:** Unutar for petlje, napraviti `konacnaCijena` varijablu, bez inicijalne vrijednosti.

**Korak 4:** Još uvijek, unutar for petlje, dodajte usluv koji provjerava da li je `porezBoolean` postavljen na `true`. Unutar if bloka, ako je `porezBoolean` `true` izračunajte iznos poreza za sva jela (dodati atribut za `jelaPodaci`).

**Korak 5:** Nakon if uslova, dodajte else if, koji provjerava `porezBoolean` ima vrijednost `false`. Unutar njega, dodajte svim elementima niza `jelaPodaci` polje `konacnaCijena` ima vrijednost bez poreza.
<br><br>

**Korak 6:** Skučaj `else`, dodajte dvije linije koda:

Ispišite sljedeću vrijednost:  

- "Trebate proslijediti logičnu vrijednost za poziv ove funkcije!"  

- return 
<br><br>


<b>Korak 7:</b> Nakon naredbi za grananje, ali unutar for petlje, dodajte još jedan ispis sa 4 argumenta:

1. string `"Jelo: "`

2. To je atribut koji se dobije iz objekta jelaPodaci

3. string `"Cijena: BAM"`

5. Vrijednost `finalPrice` 
<br><br>

**Korak 8:** Završili ste sa funkcijom `dajCijene()`, a sada pišete još jednu funkciju. Ime funkcije je `dajPopust()`, sa dva parametra: `porezBoolean` i `gosti`. 

**Korak 9:** Unutar `dajPopust()` funkcije, na početku funcije, pozovete `dajCijene()` funkciju, proslijeđujući `porezBoolean` kao argument.

**Korak 10:** U sljedećoj liniji vježbate "defanzivno programiranje", i provjeravajući varijablu `gosti` parametar je 'number' i treba da ima vrijednosti veću od  0 i manju od 30. Ako je iskaz tačan, unutar if iskaza pišete iz koraka 11. 
**Korak 11:** Napravite varijablu `popust`, i inicijalizirajte je na 0. U sljedećem redu dodajte sljedeće grananje  if...else if: U prvom if, provjeravate varijablu `gosti` da li je manji od 5. U tom slučaju popust je 5; 
- Unutar else if, provijerite da li je vrijednost veća ili jednaka 5 - tada je vrijednost popusta  10.
- Ispištie sljedeću naredbu: `'Popust je: $' + popust);`


**Korak 12:** U else uslovu ispišite sljedeći string: `'Drugi argument je broj između 0 i 30'`. kako ste napravili funkcije `dajCijene()` kao i `dajPopust()`, sada možete pozvati funkciju `dajPopust()` za različite vrijednosti, da provjerite ispis. <br>

Evo primjera: 
- `dajPopust(true, 2) `
- `dajPopust(false, 10)`

Šta se desi kad ne pošaljete argumente?  

Šta se desi kad pošaljete argumente koji nisu očekivani?