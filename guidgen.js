// Guidgen-js
// Creates pseudo random 8 character guid prefixed with 'sbx-'
// Useful for automation / orchestration
// Author: Brian Snyder

function guid() {
 function s4() {
   return Math.floor((1 + Math.random()) * 0x10000)
     .toString(16)
     .substring(1);
 }
 return s4()+s4();
}

var miniguid = guid();
var machineName = 'sbx' + '-' + miniguid
