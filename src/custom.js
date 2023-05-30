// Import Dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from "fingerpose";

// Define Gesture Description

export const middleFingerGesture = new GestureDescription('middle_finger');


// Middle Finger 
middleFingerGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, .9);

middleFingerGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
middleFingerGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.25);
middleFingerGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.25);

// Thumb
middleFingerGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.5);
middleFingerGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, .75);

//Index

middleFingerGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.4);
middleFingerGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);

for(let finger of [Finger.Index, Finger.Ring, Finger.Pinky]) {
  middleFingerGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  middleFingerGesture.addCurl(finger, FingerCurl.HalfCurl, .9);
}