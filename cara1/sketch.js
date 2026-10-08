function setup() {
  createCanvas(600, 600);//Crea un àrea de 600 píxels quadrats, 600 píxels d'amplada i 600 píxels d'alçada, canvas es l'area de dibuix. Setup és la configuració o carcterístiques del nostre codi
}

function draw() {//Draw significa dibuixar
  background(220);//Fons de color gris perqué hi ha un número entre 0 i 255 i el 0 és negre i el 255 és blanc
  strokeWeight(1)
  fill(33,3567,45);//Fill és omplir de color el que hi ha a continuació en aquest cas el·lipse. El primer número es el nivel de vermellor(R:red), e segon es el nivell de verdor(G:green) i el tercer número  es el nivell de blavor(B:blue). Podem fer 255·255·255=16.700.000 de colors diferents. He de posar el color que vulgui als ulls i a la cara canviant els 3 números, buscan a googlecolors RGB
  ellipse(300,300,230,250); //Es la cara sensera. El pimer número significa la posició x del centre de l'el·lipse. el segón número significa la posició y del centre de l'el·lipse. El tercer número significa  l'amlada de l'el·ipse, i el quart número alçada de l'el·lipse. Sempre els números són píxels contats desde la cantonada superior esquerra, és a dir, el punt 0,0 es troba diferent que a matemàtiques(cantonada inferior esquera.)
  fill(300,7380, 217);//Color de de l'ull 
  ellipse(250,250,50,45);// es l'ull dret perquè està a 350 píxels de x al centre.
  ellipse(350,250,50,45);//És l'ull esquerre perqué està a 250 píxels de x al centre.
  fill(255,51,51);// es el color de la boca, es vermellós perqué té de vermell.
  arc(300,350,100,80,0,PI);//Boca
  noFill();//No omplir de color de la la cella
   strokeWeight(4);
  arc(250,230,80,35,PI,0);//Cella esquerra
  strokeWeight(4);
  line(325,215,375,225);//Cella dreta: esl dos primers números són la x
}
