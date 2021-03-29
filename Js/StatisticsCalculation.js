AFRAME.registerComponent('calculate-stats', {
  schema: {
    canStart: {type: 'boolean', default: false}
  },

  init: function () {
   
    let el = this.el;
    
    let finalStats_text = document.getElementById("final-stats");
   let data = this.data;
   let statString;
    let statsDict;
    let statsArray = [];
  
    if(sessionStorage.getItem("statsArray"))
      {
        statsArray = JSON.parse(sessionStorage.getItem("statsArray"));
      }
       
    
    
    el.addEventListener('gameEnded',function(){
      
         window.TaR= window.tasksLimitedInterupted / window.numberOfTasks;
        window.TiR =window.timeTaken / window.typicalTime;
        window.avgResponseTime=window.responseTime / 3;
        
        window.impulsivityScore = 1 / (window.TaR * -1)*( ( (Math.log10(window.TiR) -1) +  Number.EPSILON))
        
        window.omissionScore = window.𝑇𝐴𝑆/(window.AAS +  Number.EPSILON)
      
       statString = "TaR ="+window.TaR+", TiR ="+ window.TiR+",Impulsivity Score ="+window.impulsivityScore+"AAS ="+window.AAS+",avg Response Time ="+window.avgResponseTime+",omissionScore ="+window.omissionScore;
      
      statsDict = {
        TaR : window.TaR,
        TiR : window.TiR,
        ImpulsivityScore:window.impulsivityScore,
        AAS :window.AAS,
        avgResponseTime:window.avgResponseTime,
        omissionScore:window.omissionScore
      }
      
      statsArray.push(statsDict);
      sessionStorage.setItem('statsArray',JSON.stringify(statsArray));
      
      sessionStorage.setItem('stats',JSON.stringify(statsDict));
      // finalStats_text.setAttribute('text','value',statString);
      
       window.open('finalPage.html',"_self");
    })
    
    
  }
 
});

AFRAME.registerComponent('calculate-limited-interuption', {
  schema: {
    canStart: {type: 'boolean', default: false}
  },

  init: function () {
   
    let el = this.el;
    let myIndex = 1;
    let interuptionCounter = 0;
    let limtedInteruptText = document.getElementById('limitedInteruptText');
        limtedInteruptText.setAttribute('text','value',"limted interuption = "+window.tasksLimitedInterupted);
   let data = this.data;
   let cantInterupt = true;
    
    el.addEventListener('interupt',function(){
      
      if(myIndex == window.flowerIndex &&cantInterupt){
        interuptionCounter ++;    
        limtedInteruptText.setAttribute('text','value',"limted interuption = "+window.tasksLimitedInterupted);
        cantInterupt =false;
        if(interuptionCounter == 3)
          {
            window.tasksLimitedInterupted --;
            limtedInteruptText.setAttribute('text','value',"limted interuption = "+window.tasksLimitedInterupted);
            myIndex ++;
            interuptionCounter = 0;
          }
      }
      
    })
    
    el.addEventListener('canInterupt',function(){
      cantInterupt = true;
      
    })
  }
 
});
