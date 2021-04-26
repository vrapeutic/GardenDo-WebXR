AFRAME.registerComponent('start-collision', {
  schema: {
  event: {type: 'string', default: ''},
  canCollide: {type: 'boolean', default: false},
  flower: {type:'string',default:'flower1'},
    interuption:{type:'number',defult:0},
    isLimetedInterupted:{type:'boolean',defult:'false'},
    
}, 
  
       init: function ()
     {
    
       
         let el = this.el;
           let data = this.data;  
          let floweranim = document.getElementById(data.flower) ;
        let response_el = document.getElementById('responsTime');
       let AAS_el = document.getElementById('AAS');
        let WVFX = document.getElementById('particle');
      let canInterupt = false;
       let limitedInteruption_el = document.getElementById("limited-interuption");
      // let flowerSync = document.getElementById("flower-sync");
       
        el.addEventListener("hitstart",function(){
          
          if(data.canCollide)
            {
                 console.log("collided");
                 window.isBucketWatering = true;
                 window.isReversing = false;
              if(window.isPlayerLooking)
                {
                  
                  el.setAttribute('material','color','black');
                  floweranim.setAttribute('animation-mixer','timeScale','1');
                 // flowerSync.emit('flower-grow');
                  limitedInteruption_el.emit('canInterupt');
                  response_el.emit('stop');
                  AAS_el.emit('calculate');
                  WVFX.setAttribute('visible','true');
                  canInterupt = true;
                  
                }
              else
              {
                  el.setAttribute('material','color','red');  
              }
            }
      
        
         
          
     })
     el.addEventListener('hitend',function(){
       console.log('exit collision');
    
       if(data.canCollide)
         {
           if(canInterupt)
              {
                limitedInteruption_el.emit('interupt');
              }
           //deactivate AAS calculation here;
            window.isBucketWatering = false;
            floweranim.setAttribute('animation-mixer','timeScale','-1');
            //flowerSync.emit('flower-reverse');
            AAS_el.emit('stop');
           WVFX.setAttribute('visible','false');
            window.isReversing = true;
           if(window.isPlayerLooking)
             {
               el.setAttribute('material','color','blue')
             }
           else
             {
               el.setAttribute('material','color','#ffffff');
             }
           
         }
      
     })
     }

});