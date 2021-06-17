AFRAME.registerComponent('flower-sync',{
    schema: {
    event: {type: 'string', default: ''},
    isGoodJob: {type: 'boolean', default: false}}, 
    init: function () {
      
     
      let el = this.el;
       let data = this.data;
       console.log('flower sync');
     
      el.addEventListener('flower-grow',function(){      
       
        
          
      });
      el.addEventListener('flower-reverse',function(){      
       
        
          
    });

    el.addEventListener('flower-finished',function(){      
       
      
          
    });
             
    }
      
  });