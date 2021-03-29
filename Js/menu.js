

let set_language = function(lang){
    sessionStorage.setItem('langauage',lang);

}
let set_level = function(level){
   sessionStorage.setItem('level',level);  
 //  alert(sessionStorage.getItem('level'));
}
let set_growth_time = function(animationSpeed){
   sessionStorage.setItem('animationSpeed',animationSpeed);  
 
}
let set_npc = function(npc){
  if(sessionStorage.getItem('langauage') =='A')
    {
      if(npc =='male')
        {
          sessionStorage.setItem('npc','H');  
      //    alert(sessionStorage.getItem('npc'));
        }
      else
       {
          sessionStorage.setItem('npc','Re');  
        //    alert(sessionStorage.getItem('npc'));
       }
    }
  else
    {
      if(npc =='male')
        {
          sessionStorage.setItem('npc','Ri');  
          //alert(sessionStorage.getItem('npc'));
        }
      else
       {
          sessionStorage.setItem('npc','L');  
           // alert(sessionStorage.getItem('npc'));
       } 
      
    }
   
}

let start_game= function(){
  window.open('game.html',"_self");
}