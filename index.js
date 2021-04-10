

window.language = 'E';
window.npc = 'Ri';
window.isFullcourse = false;
window.level = 3;
//////////////////////////////////////////////////////////////////////////////////////////////////// 
window.sensors =[];
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
      window.isReversing= false;
      window.isRevesred = false;
//////////////////////////////////////////////////////////////////////////////////////////////
window.responseTime = 0;
window.avgResponseTime;
window.averageResponseTime = 0;
window.𝑇𝐴𝑆 = 54;
window.AAS = 0;
window.TaR ; //Targets Ratios = 𝑇𝑎𝑠𝑘𝑠 𝑤𝑖𝑡ℎ 𝑙𝑖𝑚𝑖𝑡𝑒𝑑 𝑖𝑛𝑡𝑒𝑟𝑟𝑢𝑝𝑡𝑖𝑜𝑛𝑠𝑇𝑜𝑡𝑎𝑙 /𝑁𝑢𝑚𝑏𝑒𝑟 𝑜𝑓 𝑇𝑎𝑠𝑘𝑠
window.numberOfTasks = 4;
window.timeTaken = 0;
window.typicalTime = 120;
window.TiR; // timeTaken/typicalTime
window.impulsivityScore = 0;
window.omissionScore = 0;
////////////////////////////////////////
window.tasksLimitedInterupted = 4;


var IAM = null;
var peer = null;
var lastPeerId = null;
var peerId = null;
var conn = null;
var gameStarted = false;