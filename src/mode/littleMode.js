// Variables et constantes du jeu

    //On définit la variable du context
    let context;
    let stopAnimation;

    // Variables des paddles
    const paddleWidth = 15;
    const paddleMargin = 20;
    const paddleHeight = 100;

    const firstPaddle = {
        x : 0,
        y : 0,
        width : paddleWidth,
        height : paddleHeight,
        dy : 5
    };

    const secondPaddle = {
        x : 0,
        y : 0,
        width : paddleWidth,
        height : paddleHeight,
        dy : 5
    };

    //Variables de la balle
    const ballRadius = 5;

    const ball = {
        x: 0,
        y: 0,
        radius : ballRadius,
        velocity: 3,
        velocityRate: 0.05,
        dx: 3,
        dy: 3*(Math.random()*2-1),
    }

    //Boolean pour dessiner la balle sur le paddle lors du reset
    let goalFor1 = false;
    let goalFor2 = false;


    //Variable des scores
    let score1 = 0;
    let score2 = 0;

//Dessiner le terrain
const drawBackground = () => {
    context.fillStyle = "black";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    
    context.beginPath();
    context.lineWidth=2;
    context.strokeStyle = "white"
    context.moveTo(context.canvas.width/2, 0);
    context.lineTo(context.canvas.width/2, context.canvas.height);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.lineWidth=2;
    context.arc(context.canvas.width/2, context.canvas.height/2 , 50, 0, Math.PI*2, false);
    context.stroke();
    context.closePath();
}

//Dessin des scores
function score() {    
    context.font = "48px sans-serif";
    context.fillText(`${score1}`, context.canvas.width/2 - 50,400);
    context.fillText(`${score2}`, context.canvas.width/2 + 25, 400);
}

// Dessin des barres
function drawFirstPaddle() {
    context.fillStyle = "white";
    context.fillRect(firstPaddle.x, firstPaddle.y, firstPaddle.width, firstPaddle.height);
}

function drawSecondPaddle() {
    context.fillStyle = "white";
    context.fillRect(secondPaddle.x, secondPaddle.y, secondPaddle.width, secondPaddle.height);
}

//Dessin de la balle
function drawBall() {

    if(goalFor1) {
        resetBallFor1();
    } else if (goalFor2) {
        resetBallFor2();
    }

    context.beginPath();
    context.arc(ball.x, ball.y ,ball.radius, 0, Math.PI*2);
    context.lineWidth = 10;
    context.strokeStyle = "white";
    context.stroke();
    context.closePath();
}

//Trajectoire de départ de la balle
function kickOffDirection() {
    let random = Math.random();
    if (random > 0.5) {
        ball.dx *= -1;
    }
}

//Mouvement de la balle
function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;
}

//Intéraction de la balle

//Collission avec les murs
function wallCollision() {
    if(ball.y + ball.radius > context.canvas.height || ball.y - ball.radius < 0) {
        ball.dy *= -1;
    }
}

//Collision avec les buts
function goalCollision() {
    if((ball.x - ball.radius < 0)) {
        score2 += 1;
        resetBallFor1();
    }
    if((ball.x + ball.radius > context.canvas.width)) {
        score1 += 1;
        resetBallFor2();
    }
}


//Collision avec les paddles
function paddleCollision() {

    if( (ball.x - ball.radius < firstPaddle.x + paddleWidth) &&
        (ball.y - ball.radius < firstPaddle.y + paddleHeight) &&
        (ball.y + ball.radius > firstPaddle.y) ) {

            //On crée un point de collision
            let collidPoint = ball.y - (firstPaddle.y - paddleHeight/2);

            // On normalise le point de collision de façon à n'avoir qu'un seul repère trigo
            collidPoint = collidPoint / (paddleHeight/2);

            
            //On défini l'angle du rebond
            let angle = collidPoint * Math.PI/3;

            ball.dx = ball.velocity * Math.sin(angle);
            ball.dy = ball.velocity * Math.cos(angle);
            ball.velocity += ball.velocityRate;


    } 
    else if((ball.x + ball.radius > secondPaddle.x) &&
            (ball.y - ball.radius < secondPaddle.y + paddleHeight) &&
            (ball.y + ball.radius > secondPaddle.y)) {

            //On crée un point de collision
            let collidPoint = ball.y - (secondPaddle.y - paddleHeight/2);

            // On normalise le point de collision de façon à n'avoir qu'un seul repère trigo
            collidPoint = collidPoint / (paddleHeight/2);

            
            //On défini l'angle du rebond
            let angle = collidPoint * Math.PI/3;

            ball.dx = ball.velocity * Math.sin(angle)*-1;
            ball.dy = ball.velocity * Math.cos(angle)*-1;
            ball.velocity += ball.velocityRate;
            
    }
}

//Resets
function resetBallFor1() {
    ball.x = firstPaddle.x + paddleWidth + ballRadius + 4;
    ball.y = firstPaddle.y + paddleHeight/2;
    ball.dx = 0;
    ball.dy = 0;
    goalFor1 = true;
}

function resetBallFor2() {
    ball.x = secondPaddle.x - ballRadius - 4;
    ball.y = secondPaddle.y + paddleHeight/2;
    ball.dx = 0;
    ball.dy = 0;
    goalFor2 = true;
}


//Coup d'envoi
export const kickOff = (ctx) => {
    debugger
    context = ctx;
    stopAnimation = true;
    firstPaddle.x = paddleMargin;
    firstPaddle.y = context.canvas.height/2 - paddleHeight/2;
    secondPaddle.x = context.canvas.width - paddleMargin - paddleWidth;
    secondPaddle.y = context.canvas.height/2 - paddleHeight/2;
    ball.x = context.canvas.width/2;
    ball.y = context.canvas.height/2;
    goalFor1 = false;
    goalFor2 = false;
    score1 = 0;
    score2 = 0;
    ball.dx = 3;
    ball.dy = 3*(Math.random()*2-1);
    ball.velocity = 3;

    drawBackground();
    drawFirstPaddle();
    drawSecondPaddle();
    drawBall();

    context.font = "48px sans-serif";
    context.fillStyle = "white";
    context.fillText("Canvas Soccer", 280, 100); 
    context.font = "24px sans-serif";
    context.fillText("Appuyer sur \"espace\" lancer la balle", 245, 150); 
    
    kickOffDirection();

     //Coup d'envoi
     document.addEventListener("keydown", function(event) {
    if (event.key === " " && ball.y === context.canvas.height/2 && ball.x === context.canvas.width/2) {
        stopAnimation = false;
        loop();
    }})
}


//Function de la loop
function draw() {
    drawFirstPaddle();
    drawSecondPaddle();
    drawBall();
    score();
} 


function update() {
    moveBall();
    wallCollision();
    paddleCollision();
    goalCollision();
}



//Gestion des animations par la loop
function loop() {

    // stopAnimation = false;

    drawBackground();

    draw();

    update();
    
    if(stopAnimation) {
        debugger
        return;
    }

    requestAnimationFrame(loop);
}

//Actionlisteners pour le controle des joueurs

//Action du paddle pour le joueur 1
document.addEventListener("keydown", function(event) {
    if(event.key === "z" && firstPaddle.y > 0) {
        firstPaddle.y -= firstPaddle.dy ;  
    } else if(event.key === "s" && (firstPaddle.y + paddleHeight) < context.canvas.height) {
        firstPaddle.y += firstPaddle.dy;
    }
});

//Action du paddle pour le joueur 2
document.addEventListener("keydown", function(event) {
    if(event.key === "ArrowUp" && secondPaddle.y > 0) {
        secondPaddle.y -= secondPaddle.dy ;
    } else if(event.key === "ArrowDown" && (secondPaddle.y + paddleHeight) < context.canvas.height) {
        secondPaddle.y += secondPaddle.dy;
    }
});

//Action de coup d'envoi et de remise en jeu
document.addEventListener("keydown", function(event) {
    //Remise en jeu joueur 1
    if (event.key === " " && ball.dx === 0 && ball.x < context.canvas.width/2) {
        ball.dx = 3;
        ball.dy = 3*(Math.random()*2-1);
        goalFor1 = false;

    //Remise en jeu joueur 1
    } else if (event.key === " " && ball.dx === 0 && ball.x > context.canvas.width/2) {
        ball.dx = 3;
        ball.dy = -3*(Math.random()*2-1);
        goalFor2 = false;
    
    //Coup d'envoi
    } else if (event.key === " " && ball.y === context.canvas.height/2 && ball.x === context.canvas.width/2) {
        stopAnimation = false;
        loop();
    }
});


// document.addEventListener("mousedown", function(event) {
//     console.log(event.button);
// });
