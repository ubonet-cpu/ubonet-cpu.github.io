function setup() {
  createCanvas(600, 600);//Crea un àrea de 600 píxels quadrats, 600 píxels d'amplada i 600 píxels d'alçada, canvas es l'area de dibuix. Setup és la configuració o carcterístiques del nostre codi
}
//Farem canvis aleatoris amb random i canvis suaus amb noise.
function draw() {//Draw significa dibuixar
  let canvigran= random(0,255)
  let canvisuau= noise(0.001*frameCount)*25;
  let canvisuau2= noise(0.001*frameCount+10000)*127
   
   background(220);//Fons de color gris perqué hi ha un número entre 0 i 255 i el 0 és negre i el 255 és blanc
  let tremolor= random(0,10)
   print(canvisuau)
  print(canvigran)
  strokeWeight(canvisuau)
  fill(253,221+canvigran,202);//Fill és omplir de color el que hi ha a continuació en aquest cas el·lipse. El primer número es el nivel de vermellor(R:red), e segon es el nivell de verdor(G:green) i el tercer número  es el nivell de blavor(B:blue). Podem fer 255·255·255=16.700.000 de colors diferents. He de posar el color que vulgui als ulls i a la cara canviant els 3 números, buscan a googlecolors RGB
  ellipse(300+tremolor,300,230,250); //Es la cara sensera. El pimer número significa la posició x del centre de l'el·lipse. el segón número significa la posició y del centre de l'el·lipse. El tercer número significa  l'amlada de l'el·ipse, i el quart número alçada de l'el·lipse. Sempre els números són píxels contats desde la cantonada superior esquerra, és a dir, el punt 0,0 es troba diferent que a matemàtiques(cantonada inferior esquera.)
  fill(255,255,255);//Color de de l'ull 
  ellipse(250+tremolor,250,50,45);// es l'ull dret perquè està a 350 píxels de x al centre.
    fill(16,104,25);//color del iris
  ellipse(250+tremolor,250,20,25);//iris esquerra
    fill(0,0,0);//color pupil·la
  ellipse(250+tremolor,250,10,10);//pupil·la
  fill(255,255,255)
  ellipse(350+tremolor,250,55,45);//És l'ull esquerre perqué està a 250 píxels de x al centre.
  fill(16,104,25)
  ellipse(350+tremolor,250,20,25)
    fill(0,0,0)
  ellipse(350+tremolor,250,10,10)
  fill(255,51,51);// es el color de la boca, es vermellós perqué té de vermell.
  arc(300+tremolor,350,100,80,0,PI);//Boca
  noFill();//No omplir de color de la la cella
   strokeWeight(4);
  arc(250+tremolor,230,80,35,PI,0);//Cella esquerra
  strokeWeight(4);
  line(325+tremolor,215,375+tremolor,225);//Cella dreta: els dos primers números són la x
}
