window.language;
window.npc;
window.isFullcourse = false;
window.level = 3;
//////////////////////////////////////////////////////////////////////////////////////////////////// 
window.sensors = [];
window.sensor1 = document.getElementById('sensor1');
window.sensors.push(window.sensor1);
window.sensor2 = document.getElementById('sensor2');
window.sensors.push(window.sensor2);
window.sensor3 = document.getElementById('sensor3');
window.sensors.push(window.sensor3);
window.sensor4 = document.getElementById('sensor4');
window.sensors.push(window.sensor4);

window.flowerIndex = 1;
window.isLooking = false;
//////////////////////////////////////////////////////////////////////////////////////////////////////      
window.isBucketWatering = false;
window.isPlayerLooking = false;
window.flower;
window.canReverse = false;
window.isFinished = false;
window.isReversing = false;
window.isRevesred = false;
////////////////////////////////////////
window.tasksLimitedInterupted = 4;


var IAM = 'standalone';
var peer = null;
var lastPeerId = null;
var peerId = null;
var myCall = null;
var conn = null;
var gameStarted = false;
var gameHTMLFile = {
    gardenDo: '',
}


$(document).ready(function() {
    //fetch text file
    $.get('game.scene', function(data) {
        gameHTMLFile['gardenDo'] = data;
    });
});