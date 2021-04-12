AFRAME.registerComponent('flower-sync',{
    schema: {
    event: {type: 'string', default: ''},
    isGoodJob: {type: 'boolean', default: false}}, 
    init: function () {
      
     
      let el = this.el;
       let data = this.data;
       console.log('flower sync');
     
      el.addEventListener('flower-grow',function(){      
       
        console.log('flower grow');
          
      });
      el.addEventListener('flower-reverse',function(){      
       
        console.log('flower reverse');
          
    });

    el.addEventListener('flower-finished',function(){      
       
        console.log('flower finished');
          
    });
             
    }
      
  });
     