let isTurnedOff = true;


AFRAME.registerComponent('handle', {
  init: function () {
   let el = this.el ;
    el.setAttribute('aabb-collider');
    this.eventHandlerFn = function(event){
      
      if(isTurnedOff)
      {
       el.setAttribute('animation-mixer');
        el.setAttribute('animation-mixer','timeScale','1');      
      }
      else
      {
      el.setAttribute('animation-mixer');
        el.setAttribute('animatoin-mixer','timeScale','-1');
        
      }
    }
    
    el.addEventListener('hitstart',this.eventHandleFn);
  },
  remove:function()
  {
  let el = this.el;
    el.removeEventLisetener('hitstart',this.eventHandleFn);
  }
  
});

AFRAME.registerComponent('handle-anim',{
  
  init:function(){
    
    let el = this.el;
    
    this.eventHandlerFn = function(){
      
      if(isTurnedOff)
      {
      el.removeAttribute('aniation-mixer');  
        isTurnedOff = false;
        //raise event to play water particle effect
      }
      else
      {
        el.removeAttribute('animation-mixer');
        el.removeAttribute('handle');
        //raise event to disable particle effect
      }
    }
    
  }
  
});