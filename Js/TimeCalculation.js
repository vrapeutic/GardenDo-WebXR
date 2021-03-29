AFRAME.registerComponent('calculate-response', {
  schema: {
    canStart: {type: 'boolean', default: false}
  },

  init: function () {
    let el = this.el;
    let data = this.data ;
    let myText = document.getElementById('resonseText');
   let timer;
     myText.setAttribute('text','value',"response time = "+window.responseTime.toString());
  
  el.addEventListener("calculate",function(){
    
   timer = setInterval(() => { 
    window.responseTime ++;   
    myText.setAttribute('text','value',"response time = "+window.responseTime.toString());
      console.log('time rresponse');
}, 1000);

  })
    
    
    el.addEventListener('stop',function(){
        clearInterval(timer);
    })
 
      }
 
});

AFRAME.registerComponent('calculate-time-taken', {
  schema: {
    canStart: {type: 'boolean', default: false}
  },

  init: function () {
   let el = this.el;
    let data = this.data ;
   let myText = document.getElementById('timeTakenText');
  myText.setAttribute('text','value',"time taken = "+window.timeTaken.toString());
    
    let timer;
  
  el.addEventListener("calculate",function(){
    
   timer = setInterval(() => { 
    window.timeTaken ++;   
     
    myText.setAttribute('text','value',"time taken = "+window.timeTaken.toString());
     
}, 1000);

  })
    
    
    el.addEventListener('stop',function(){
        clearInterval(timer);
    })
 
      }
    
      }
 
);

AFRAME.registerComponent('calculate-aas', {
  schema: {
    canStart: {type: 'boolean', default: false}
  },

  init: function () {
   let el = this.el;
    let data = this.data ;
    let myText = document.getElementById('AASText');
    myText.setAttribute('text','value',"AAS ="+window.AAS.toString());
    let timer;
  
  el.addEventListener("calculate",function(){
    
   timer = setInterval(() => { 
    window.AAS ++;   
    myText.setAttribute('text','value',"AAS ="+window.AAS.toString());
      
}, 1000);

  })
    
    
    el.addEventListener('stop',function(){
        clearInterval(timer);
    })
 
      }
      
 
});