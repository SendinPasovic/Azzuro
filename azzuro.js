// Given variables
const jelaPodaci = [
     {
         ime: "Pizza fungi",
         cijena: 7.00,
         porez: 0.17
     },
     {
         ime: "Pomfrit",
         cijena: 3.00,
         porez: 0.17
     },
     {
         ime: "Pilećiji sendvič",
         cijena: 4.00,
         porez: 0.17
     },
     {
         ime: "Uštipci",
         cijena: 4.0,
         porez: 0.17
     },
 ]
 
 function dajCijene (porezBoolean){
        let ukupanPorez;
        let finalPrice=0;
for (let i=0;i<jelaPodaci.length;i++){
     finalPrice+=jelaPodaci[i].cijena;
     let  konacnaCijena;
 if(porezBoolean){
     ukupanPorez+=jelaPodaci[i].cijena*jelaPodaci[i].porez;
 }else if(!porezBoolean) {
jelaPodaci[i][konacnaCijena]=jelaPodaci[i].cijena-(jelaPodaci[i].cijena*jelaPodaci[i].porez);
 }else {
     console.log("Trebate proslijediti logičnu vrijednost za poziv ove funkcije!")
 }
console.log(`"Jelo: " ${jelaPodaci[i].ime}   "Cijena: ${jelaPodaci[i].cijena} BAM"   ${finalPrice}  `);

}

}
function dajPopust (porezBoolean, gosti){
dajCijene(porezBoolean);
 popust=0;
if(gosti>0&&gosti<30){
          if(gosti<5){popust=5;console.log(` Popust je: ${popust}`);}
     else if(gosti>=5){popust=10;console.log(` Popust je: ${popust}`);}
else {
     console.log('Drugi argument je broj između 0 i 30.');

}
}
}
//Hamza ne da nikome popust
dajPopust(true, 2) 
//Pokušaji
dajPopust()
dajPopust (155,53)
