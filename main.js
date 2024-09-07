noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550)
    canvas.position(800,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#969A97');
    
    document.getElementById("bob").innerHTML = "Width and height of text will be = " + difference + "px";
    size(400, 400);
    background(0);
    fill(255);
    textSize(104); 
    text("BOB", 40, 200); 
    
}

function modelLoaded(){
    console.log('PoseNet Is Initialised!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);

    }
}