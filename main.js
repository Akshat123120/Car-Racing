canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_height = 70;
car1_width = 120;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_height = 70;
car2_width = 120;
car2_image = "images.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg";
function add() {
    background_imageTag = new Image();
    background_imageTag.onload = uploadbackground;
    background_imageTag.src = background_image;

    car1_imageTag = new Image();
    car1_imageTag.onload = uploadcar1;
    car1_imageTag.src = car1_image;

    car2_imageTag = new Image();
    car2_imageTag.onload = uploadcar2;
    car2_imageTag.src = car2_image;
}
function uploadbackground() {
    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}
function uploadcar1() {
    ctx.drawImage(car1_imageTag,car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2() {
    ctx.drawImage(car2_imageTag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
 key_pressed = e.keyCode;
 console.log(key_pressed);
 if(key_pressed==38) {
     car1up();
     car2up();
     console.log("up");
 }
 if(key_pressed==40) {
    car1down();
    car2down();
    console.log("down");
}
if(key_pressed==37) {
    car1left();
    car2left();
    console.log("left");
}
if(key_pressed==39) {
    car1right();
    car2right();
    console.log("right");
}
}
function car1up() {
    if(car1_y>=0) {
        car1_y = car1_y - 10;
        console.log("when up key is pressed  x ="+ car1_x + "| y = " +car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1down() {
    if(car1_y<=500) {
        car1_y = car1_y +10;
            console.log("when down key is pressed  x ="+ car1_x + "| y = " +car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();       
    }
}    
function car1right() {
    if(car1_x<=700) {
        car1_x = car1_x +10;
            console.log("when down key is pressed  x ="+ car1_x + "| y = " +car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();       
    }
}



function car1left() {
    if(car1_x>=0) {
        car1_x = car1_x - 10;
            console.log("when down key is pressed  x ="+ car1_x + "| y = " +car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();       
    }
}
function car2up() {
    if(car2_y>=0) {
        car2_y = car2_y - 10;
        console.log("when up key is pressed  x ="+ car2_x + "| y = " +car2_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2down() {
    if(car2_y<=500) {
        car2_y = car2_y +10;
            console.log("when down key is pressed  x ="+ car2_x + "| y = " +car2_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();       
    }
}    
function car2right() {
    if(car2_x<=700) {
        car2_x = car2_x +10;
            console.log("when down key is pressed  x ="+ car2_x + "| y = " +car2_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();       
    }
}



function car2left() {
    if(car2_x>=0) {
        car2_x = car2_x -10;
            console.log("when down key is pressed  x ="+ car2_x + "| y = " +car2_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();       
    }
}
 if( car1_x > 700 )  {
      console.log("Car 1 Won")
      document.getElementById("GameUpdater").innerHTML = "Car 1 Won !!!!"
  }    
  if( car2_x > 700 )  {
    console.log("Car 2 Won")
    document.getElementById("GameUpdater").innerHTML = "Car 2 Won !!!!"
}    