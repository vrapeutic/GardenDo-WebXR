 AFRAME.registerComponent('npc-handler',{
  schema: {
  event: {type: 'string', default: ''},
  isGoodJob: {type: 'boolean', default: false}}, 
  init: function () {
    
   
    let el = this.el;
     let data = this.data;
    data.isGoodJob = false;
    let isWaterSound = false;
   el.setAttribute('animation-mixer','timeScale','0');
    
    
    setTimeout(function(){ 
          el.setAttribute('sound','src','#welcome-sound'+window.language+window.npc);
          el.setAttribute('sound','playSound');
          el.setAttribute('animation-mixer','timeScale','1');           
                          ; }, 5000);
    el.addEventListener('sound-ended',function(){      
      el.setAttribute('animation-mixer','timeScale','0');
      
      if(!isWaterSound)
        {
            el.setAttribute('sound','src','#letwater-sound'+window.language+window.npc);
           el.setAttribute('sound','playSound');
          el.setAttribute('animation-mixer','timeScale','1')
          console.log('let water flower');
          isWaterSound = true;
        }
         if(data.isGoodJob){
           el.setAttribute('sound','src','#blank-sound');
           el.setAttribute('sound','playSound');
          data.isGoodJob = false;
           console.log('blank played');
         }
    });
           
  }
    
});
   