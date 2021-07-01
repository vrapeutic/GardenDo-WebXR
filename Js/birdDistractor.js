
AFRAME.registerComponent("bird",{
  schema: {
    canMoveBase: {type: 'boolean', default: false}
  }, 
  
    init: function()
    {
  
      let newpos, random=0;
      let targets = document.querySelectorAll(".targets");//Array of targets
  //    var ds = document.getElementById("Ds");// distractor element
      let ds =this.el
      let base = document.getElementById('base');
      let cam = document.getElementById('cam');
      let isToBase = false;
      let flowerIndex = 0;
      let isDestracting = false;
      let oldRandom = 10;
      
     
      
      ds.addEventListener('next',function(){
      flowerIndex ++;
        
      });
      ds.addEventListener('hitstart',function(){
        isDestracting = false;
        cam.setAttribute('camera-head','canSee','true');
        let sensor = document.getElementById('flower'+(flowerIndex+1));
         sensor.emit('looking');
      })
      
      function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
      
    function getNewRandom(oldRandomNumber){
      let randomNumber =getRndInteger(0,100);
       console.log("randomNumber"+randomNumber.toString());
      if(randomNumber < 50)
      {
        
        return flowerIndex;
      }
      else
      {
        console.log("not 0")
         do{
             randomNumber = getRndInteger(0,4)
         }
         while(randomNumber == flowerIndex)
      }
      /*
      if(oldRandomNumber == randomNumber)
        {
          console.log('same number');
          getNewRandom(oldRandomNumber);
          
        }
      else
        {
          
          console.log('not same');
          return randomNumber ;
        }*/
      
    }  
     let startDsMovement= function cycle(index) 
      {
  
        setTimeout(function() 
        {
   
          if(isToBase&&!isDestracting)
          {
             newpos=base.getAttribute("position");
             isToBase = false;
             console.log('to base');
            cam.setAttribute('camera-head','canSee','true')
          }
          else if(!isDestracting)
          {
            do{
               random =  getNewRandom(oldRandom);
            }
            while(random == undefined )
              console.log('random = '+random+'index = '+flowerIndex);
            
            newpos=targets[random].getAttribute("position");
            isToBase = true;
           oldRandom = random;
            if(random == flowerIndex)
            {
               isDestracting = true;
              cam.setAttribute('camera-head','canSee','false')
             //sensor = document.getElementById('flower'+flowerIndex);
              let sensor = document.getElementById('flower'+(flowerIndex+1));
              sensor.emit('notLooking');
              console.log('is Distracting')
            }
          }
 
    
          
    ds.setAttribute("animation","property:position; to:"+newpos.x+" "+newpos.y+" "+newpos.z+" dur:2000"); 
    
    
                            
     
            cycle(random);
     
      
        },4000);
    }
      
    startDsMovement( targets.length);

    }})