function setup() {
    // put setup code here
    createCanvas(900,500);
    background('#99CCFF');
    x = 600;
    y = 630;
    z = 740;
    a = 770;
    b = 644;
    j = 0;
}


function draw() {
    // garis tengah
    line(450,0, 450, 500)
    strokeWeight(2);

    // bacground 
    fill('#F7F712')
    rect(0, 450 , 450, 50)
    fill('#F74712')
    rect(450, 450, 450,50)

    // badan
    fill('#FFFFFF')
    rect(80, 190, 225, 100, 15)
    fill('#000000')
    arc(180 , 190, 80,80 ,0, PI, PIE)
    fill('#000000')
    rotate(-0.02);
    ellipse(180, 270, 40, 20);
    rotate(0.02)
    fill('#000000')
    arc(80, 240, 40, 30,PI+HALF_PI, HALF_PI, PIE)

    // ekor
    fill('#FFFFFF')
    rect(30, 210, 50, 10, 10, 0, 0, 10 )
    fill('#000000')
    ellipse(25,215, 15,15,)

    // kaki 
    fill('#FFFFFF')
    rect(100, 290, 20,45, 0,0,5,5)
    fill('#FFFFFF')
    rect(130, 290, 20,45, 0,0,5,5)
    fill('#FFFFFF')
    rect(240, 290, 20,45, 0,0,5,5)
    fill('#FFFFFF')
    rect(270, 290, 20,45, 0,0,5,5)
    fill('#000000')
    arc(100,310, 15,15,PI+HALF_PI, HALF_PI, PIE)
    fill('#000000')
    ellipse(144,310, 10,20,)
    fill('#000000')
    arc(270,310, 29,28,PI+HALF_PI, HALF_PI, PIE)

    // kepala
    fill('#FFFFFF')
    rect(260, 160, 90,100, 15)
    fill('#FFA2D7')
    rect(260, 230, 90,30,0,0,15,15,)
    fill('#000000')
    ellipse(290,245, 10,15,)
    fill('#000000')
    ellipse(320,245, 10,15,)
    fill('#FFFFFF')
    ellipse(282,190, 30, 30)
    fill('#FFFFFF')
    ellipse(315,190, 30, 30)
    fill('#000000')
    ellipse(317,196, 15, 15)
    ellipse(282,196, 15, 15)
    fill('#000000')
    arc(350, 190, 40, 25,PI+HALF_PI, HALF_PI, PIE)
    arc(260, 190, 40, 25, HALF_PI, PI+HALF_PI, PIE)
    arc(348, 192, 37, 50, HALF_PI, PI+HALF_PI, PIE)
    fill('#CC9933')
    rect(278, 145, 15,15,15,15,0,0)
    rect(315, 145, 15,15,15,15,0,0)

// bagaian kanan
    // badan
    fill('#FFFFFF')
    rect(580, 190, 225, 100, 15)
    fill('#000000')
    arc(680 , 190, 80,80 ,0, PI, PIE)
    fill('#000000')
    rotate(-0.02);
    ellipse(680, 270, 40, 20);
    rotate(0.02)
    fill('#000000')
    arc(580, 240, 40, 30,PI+HALF_PI, HALF_PI, PIE)

    // kepala
    fill('#FFFFFF')
    rect(760, 160, 90,100, 15)
    fill('#FFA2D7')
    rect(760, 230, 90,30,0,0,15,15,)
    fill('#000000')
    ellipse(790,245, 10,15,)
    fill('#000000')
    ellipse(820,245, 10,15,)
    fill('#FFFFFF')
    ellipse(782,190, 30, 30)
    fill('#FFFFFF')
    ellipse(815,190, 30, 30)
    fill('#000000')
    ellipse(817,196, 15, 15)
    ellipse(782,196, 15, 15)
    fill('#000000')
    arc(850, 190, 40, 25,PI+HALF_PI, HALF_PI, PIE)
    arc(760, 190, 40, 25, HALF_PI, PI+HALF_PI, PIE)
    arc(848, 192, 37, 50, HALF_PI, PI+HALF_PI, PIE)
    fill('#CC9933')
    rect(778, 145, 15,15,15,15,0,0)
    rect(815, 145, 15,15,15,15,0,0)
    
    // ekor
    fill('#FFFFFF')
    rect(530, 210, 50, 10, 10, 0, 0, 10 )
    fill('#000000')
    ellipse(525,215, 15,15,)

    // kaki 
   
    var x = 600 + 8*Math.sin(radians(90)/50*j)
    j+=1
    fill('#FFFFFF');
    rect(x, 290, 20,45,0,0,5,5); 

    var y = 630 + 8*Math.sin(radians(90)/50*j)
    j+=1
    fill('#FFFFFF')
    rect(y, 290, 20,45, 0,0,5,5)

    var z = 740 + 8*Math.sin(radians(90)/50*j)
    j+=1
    fill('#FFFFFF')
    rect(z, 290, 20,45, 0,0,5,5)

    var a = 770 + 8*Math.sin(radians(90)/50*j)
    j+=1
    fill('#FFFFFF')
    rect(a, 290, 20,45, 0,0,5,5)

    var x = 600 + 8*Math.sin(radians(90)/50*j)
    j+=1
    fill('#000000')
    arc(x,310, 15,15,PI+HALF_PI, HALF_PI, PIE)

    var b = 644 + 8*Math.sin(radians(90)/50*j)
    j+=1
    fill('#000000')
    ellipse(b,310, 10,20,)

    var a = 770 + 8*Math.sin(radians(90)/50*j)
    j+=1
    fill('#000000')
    arc(a,310, 29,28,PI+HALF_PI, HALF_PI, PIE)

    

    // fill(200,150,200)
    // rect(x, y, panjangpersegi, lebarpersegi);

    // fill("YELLOW")
    // ellipse(a, b, panjangpersegi - 30 * Math.sin(PI/10*k), lebarpersegi);
    // k+=1

    // fill("MAGENTA")
    // arc(e, f, panjangpersegi, lebarpersegi, 0, 2*PI *a/b);
    // for (var j=10; j<=390;j++){
    //     c = j
    //     d = 350+ 30 * Math.sin(PI/10*c)
    //     point(c,d)
    // }
}