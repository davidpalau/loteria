   let numBolas = 50;
   // numSorteos = números de sorteos
   let numSorteos = 50;
   // numEnLosSorteos = numeros en cada sorteo;
   let numEnLosSorteos = 6;
   let sorAleatorio = NaN;
   let segir = true;
   // Posición primer numero guardado.
   let pos = 0;

   function bombo(max, min) {

       return (Math.floor(Math.random() * (max - min)) + min);
   }



   function loteria() {

       let loteria = [];
       let numPremiad = [];
       let bola = 0;

       //Llenado del bombo
       for (let i = 0; i < numBolas; i++) {
           loteria[i] = i;
       }

       for (let j = 0; j < 6; j++) {
           bola = bombo(loteria.length, 1);
           numPremiad[j] = loteria[bola];
           loteria.splice(bola, 1);
       }

       console.log(" " + numPremiad[0] + ", " + numPremiad[1] + ", " +
           numPremiad[2] + ", " + numPremiad[3] + ", " + numPremiad[4] + ", " +
           numPremiad[5] + ".");

   }

   function CuantasVeces(numSorteos) {

       for (let i = 0; i < numSorteos; i++) {
           loteria();
       }
   }