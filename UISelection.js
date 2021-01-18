AFRAME.registerComponent('select-langauge', {
  schema: {
    event:{type:'string',default:''}
    ,
    langauge: {type: 'string', default: 'E'}
  },

  init: function () {
    let data = this.data;
    let el = this.el;
    let langUI = document.querySelectorAll(".langUI");
    let npcUI = document.querySelectorAll(".npcUI");
    //console.log('button init')
    
     this.eventHandlerFn = function (event){
       window.language = data.langauge;
       
       
       console.log('language '+data.langauge);
      for (i = 0; i < langUI.length; i++)
         {
        langUI[i].setAttribute('visible','false');
       langUI[i].removeAttribute('select-language');
       langUI[i].setAttribute('position','0 25 0');
         }
      for(i = 0;i < npcUI.length;i++)
        {
          
          npcUI[i].object3D.position.y = 1;
          npcUI[i].setAttribute('visible','true');
          //npcUI[i].setAttribute('visible','true');
        }
       
     }
    
    el.addEventListener('click',this.eventHandlerFn)
  },
  remove:function(){
    let el = this.el;
    console.log('ui removed');
    el.removeEventListener('click',this.eventHandlerFn)
}
});

AFRAME.registerComponent('select-npc', {
  schema: {
    event:{type:'string',default:''}
    ,
    npc: {type: 'string', default: 'male'}
  },

  init: function () {
    let data = this.data;
    let el = this.el;
    let npcUI = document.querySelectorAll(".npcUI");
    //console.log('button init')
    
     this.eventHandlerFn = function (event){
       
      switch(window.language)
      {
  case "A":
          if(data.npc == "male")
            {
              window.npc = "H";
            }
          else
          {
             window.npc = "R"  ;
            window.language = "S";
          }
    break;
  case "E":
          if(data.npc == "male")
            {
              window.npc = "Ri";
            }
          else
          {
             window.npc = "L"  ;
            
          }
    
    break;
  default:
    
}
       
       
      console.log('npc '+window.npc);
      for (i = 0; i < npcUI.length; i++)
         {
        npcUI[i].setAttribute('visible','false');
       npcUI[i].removeAttribute('select-language');
       npcUI[i].setAttribute('position','0 25 0');
         }
    
       
     }
    
    el.addEventListener('click',this.eventHandlerFn)
  },
  remove:function(){
    let el = this.el;
    console.log('ui removed');
    el.removeEventListener('click',this.eventHandlerFn)
}
});