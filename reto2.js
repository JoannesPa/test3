let primernum = 1;
let segundonum = 2;

for (let i = 0; i < 2; i++) {

    while(i < 1){
        document.write(i + " ",i+1 + " ")
        i = i+1;
        break;
    }
}
for (let i = 0; i < 49 ; i++){
    document.write(primernum + "  " ,segundonum + "  ");
    primernum = primernum + segundonum ;
    segundonum = segundonum + primernum ;
}