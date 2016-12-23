"use strict";
require('babel-register')({
	"presets": ["es2015"]
});
import expect, { createSpy, spyOn, isSpy } from 'expect';
const cBase = (s = "") => `C:/Users/dylan.foster/Documents/esgi/4ADW/S1/TestsUnitaires/101/node_modules/${s}`;
let _firstCallback = (d) => {console.log("first callback: ", d());}
let _errCallback = (data)=> {console.log("suce ma bite fdp: ", data);}
let _allLoaded = (data) => {console.log("every deps loaded: ", data);}
