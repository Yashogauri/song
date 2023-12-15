song1=""
song2=""
song1status=""
song2status=""
scorerightWrist=0
scoreleftWrist=0
leftWristX=0
rightWristX=0
leftWristY=0
rightWristY=0
function preload(){
    song1=loadSound("boombayah.mp3")
    song2=loadSound("shutdown.mp3")
}
function setup(){
    canvas=createCanvas(700,700)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
}
function draw(){
    image(video,0,0,700,700)
}