

AFRAME.registerComponent("level-manager", {
  
    init: function()
    {
  console.log('level manager');
  let bird = document.getElementById('myDs');
  let butterFly = document.getElementById('butterflymodel');
  
      if(sessionStorage.getItem('level') == 2)
        {
          butterFly.setAttribute('visible','true');
        }
      else if(sessionStorage.getItem('level') == 3)
        {
          butterFly.setAttribute('visible',true);
          bird.setAttribute('visible',true)
          bird.setAttribute('bird','');
        }
    },
     tick:function(){
       

 
    }})