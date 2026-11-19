function setup() {
  createCanvas(600, 600);//Crea un àrea de 600 píxels quadrats, 600 píxels d'amplada i 600 píxels d'alçada, canvas es l'area de dibuix. Setup és la configuració o carcterístiques del nostre codi
}
function draw() {//Draw significa dibuixar
  //mouseX=300;mouseY=300
background(220);//Fons de color gris perqué hi ha un número entre 0 i 255 i el 0 és negre i el 255 és blanc
  print("mouseX:"+mouseX)
    print("mouseY:"+mouseY)
  strokeWeight(1)
  fill(253,221,202);//Fill és omplir de color el que hi ha a continuació en aquest cas el·lipse. El primer número es el nivel de vermellor(R:red), e segon es el nivell de verdor(G:green) i el tercer número  es el nivell de blavor(B:blue). Podem fer 255·255·255=16.700.000 de colors diferents. He de posar el color que vulgui als ulls i a la cara canviant els 3 números, buscan a googlecolors RGB
  ellipse(mouseX,mouseY,mouseX/10-230,mouseY/10-250); //Es la cara sensera. El pimer número significa la posició x del centre de l'el·lipse. el segón número significa la posició y del centre de l'el·lipse. El tercer número significa  l'amlada de l'el·ipse, i el quart número alçada de l'el·lipse. Sempre els números són píxels contats desde la cantonada superior esquerra, és a dir, el punt 0,0 es troba diferent que a matemàtiques(cantonada inferior esquera.)
  fill(255,255,255);//Color de de l'ull 
  ellipse(mouseX-45,mouseY-50,50,45);// es l'ull dret perquè està a 350 píxels de x al centre.
    fill(mouseX-284,mouseY-196,mouseX-275);//color del iris
  ellipse(mouseX-45,mouseY-50,20,25);//iris esquerra
    fill(0,0,0);//color pupil·la
  ellipse(mouseX-45,mouseY-50,10,10);//pupil·la
  fill(255,255,255)
  ellipse(mouseX+50,mouseY-50,55,45);//És l'ull esquerre perqué està a 250 píxels de x al centre.
  fill(mouseX-284,mouseY-196,mouseX-275)
  ellipse(mouseX+50,mouseY-50,20,25)
    fill(0,0,0)
  ellipse(mouseX+50,mouseY-50,10,10)
  fill(255,51,51);// es el color de la boca, es vermellós perqué té de vermell.
  arc(mouseX,mouseY+50,100,80,0,PI);//Boca
  noFill();//No omplir de color de la la cella
   strokeWeight(4);
  arc(mouseX-50,mouseY-70,80,35,PI,0);//Cella esquerra
  strokeWeight(4);
  line(mouseX+25,mouseY-85,mouseX+75,mouseY-75);//Cella dreta: els dos primers números són la x
}
