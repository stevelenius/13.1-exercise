// 13.1-exercise.js
//
// A kid playing jumprope
//
// An expansion of principles in the oscillation demonstration video
//

// initial declaration for variables
// x position (really just a number, not just the x position)
let xPos;
// variable for increment value
let inc;

function setup() {
  createCanvas(720, 460);
  angleMode(DEGREES);

// these values give the look I want
  xPos = 1.0;
  inc = 2.0;
}

function draw() {

// sky blue background
  background(140, 211, 241);
  noStroke();
// change fill to grass green
  fill(140, 240, 0);
// add a lawn for the kid to play on
  rect(0, 325, 720, 135);

// move starting point for action to center of canvas
  translate(width/2, height/2);
// get a sine value to control all the motion on the canvas
  var mySinVal = sin(xPos);
// horizontal motion is sine value multiplied by 300 
// so horizontal motion goes almost from edge to edge of canvas
  horizMotion = mySinVal * 300;
// vertical motion of head, shirt and rope are the same:
// sine value multiplied by 20
  vMotionHeadShirt = mySinVal * 20;
// vertical motion of top of pants (top blue circle) is a little more:
// sine value multiplied by 25
  vMotionPantsTop = mySinVal * 25;
// vertical motion of bottom of pants (bottom blue circle) is still more:
// sine value multipled by 30
  vMotionPantsBottom = mySinVal * 30;
// differing vertical motion values for pants will make them look like
// springs, compressing toward the middle and expanding down at the edges

// all the vertical motions take the square of the applicable vertical
// motion value, then divide it by different numbers, then offset it
// by adding or subtracting a value; all values have been chosen so all 
// parts of the kid jump over the swinging rope;

// first is the rope, which is divided by a negative number to make its
// arc inverted from the arc of the other shapes;
// rope fill is yellow
  fill(255 , 255, 0);
// then draw the rope
  ellipse(horizMotion, (sq(vMotionHeadShirt)/-2) + 90, 40, 40);
// now a flesh-colored fill for the head
  fill(255, 205, 148);
// and here's the head
  ellipse(horizMotion, (sq(vMotionHeadShirt)/3) - 50, 60, 60);
// now change to a denim-blue fill for the two parts of the pants
// (draw pants first so they disappear behind shirt when compressed)
  fill(21, 96, 189);
// top part of pants
  ellipse(horizMotion, (sq(vMotionPantsTop)/4) + 20, 60, 60);
// bottom part of pants
  ellipse(horizMotion, (sq(vMotionPantsBottom)/5) + 20, 60, 60);
// change fill to red for shirt
  fill(255, 64, 0);
// draw the shirt; head and shirt move in the same arc, with shirt
// always the same amount lower on the canvas so edges of head and shirt
// always just touch
  ellipse(horizMotion, (sq(vMotionHeadShirt)/3) + 10, 60, 60);

// finally, increment the x position value
  xPos = xPos + inc;
}