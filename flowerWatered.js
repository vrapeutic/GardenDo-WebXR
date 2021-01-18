    AFRAME.registerComponent('flower-finished', {
  init: function () {
    console.log('new flower');
    let el = this.el;
    let npc = document.getElementById('npc')
    let sensor_el = document.getElementById('sensor'+window.flowerIndex);
    let flower_el = document.getElementById('flower'+window.flowerIndex);
    let WVFX = document.getElementById('particle');
    let nextSensor ;
    let nextFlower;
    let bird = document.getElementById('myDs')
    el.addEventListener('animation-loop',function(){
      console.log('loop finisihed');
      if(window.isReversing)
      {
         console.log('reversing loop finisihed');
        el.removeAttribute('animation-mixer');
         window.isRevesred = true;
      }
           
      if(window.isBucketWatering&&window.isPlayerLooking)
        {     
        if(!window.isReversing)
          {
              if(window.flowerIndex < 4)
                {
                    console.log("good job");
                    el.removeAttribute('animation-mixer');
                    el.removeAttribute('flower-finished');
                    bird.emit('next');    
              
                    npc.setAttribute('sound','src','#goodjob-sound'+window.language+window.npc);
                    npc.setAttribute('sound','playSound');
                    npc.setAttribute('sound-handler','isGoodJob','true');    
                    npc.setAttribute('animation-mixer','timeScale','1');
                  
                 
                   sensor_el = document.getElementById('sensor'+window.flowerIndex);
                   flower_el = document.getElementById('flower'+window.flowerIndex);
                   sensor_el.setAttribute('start-collision','canCollide','false');
                   sensor_el.setAttribute('material','color','#ffffff')
                   flower_el.setAttribute('player-looking','canWater','false');
               //    flower_el.removeAttribute('player-looking');
                   window.isPlayerLooking = true;
                   window.isBucketWatering = false;
                  
                  window.flowerIndex++;
                  console.log("index :"+window.flowerIndex);
                  nextSensor= document.getElementById('sensor'+window.flowerIndex);
                  nextSensor.setAttribute('material','color','green');
                  
                  
                  nextSensor.setAttribute('start-collision','canCollide','true');
                  nextFlower = document.getElementById('flower'+window.flowerIndex);
                  nextFlower.setAttribute('flower-finished','');
                  nextFlower.setAttribute('player-looking','canWater','true');
                    WVFX.setAttribute('visible','false');
              }
              else 
              {
                  WVFX.setAttribute('visible','false');
                  console.log('all flower finsihed');
                  npc.setAttribute('sound','src','#finisihing-sound'+window.language+window.npc);
                  npc.setAttribute('sound','playSound');
                  npc.setAttribute('animation-mixer','timeScale','1');
                  el.removeAttribute('animation-mixer');
                  el.removeAttribute('flower-finished');
                  sensor_el.setAttribute('player-looking','canWater','false');
                  sensor_el.setAttribute('start-collision','canCollide','false');
                  window.isPlayerLooking = false;
                  window.isBucketWatering = false;
                }
             
            }          
        }      
    })
    
  }
});