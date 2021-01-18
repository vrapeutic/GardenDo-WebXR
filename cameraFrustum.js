AFRAME.registerComponent('camera-head', {
  schema: {
    event: {type: 'string', default: ''},
    canSee: {type: 'boolean', default: true}
  },

  tick: function(time) {
        let el = this.el;
       
       let data = this.data;
    data.canSee = true;
      // let canReverse = true;
if(data.canSee)
  {
    //canReverse = true
    if (this.el.sceneEl.camera) {
       let cam = this.el.sceneEl.camera;
       let sensor = document.getElementById('flower'+window.flowerIndex);
       let frustum = new THREE.Frustum();
       frustum.setFromMatrix(new THREE.Matrix4().multiplyMatrices(cam.projectionMatrix, 
       cam.matrixWorldInverse));  

      // Your 3d point to check
       let pos =  new THREE.Vector3(sensor.getAttribute("position").x,sensor.getAttribute("position").y,sensor.getAttribute("position").z);
     
     
       
           if (frustum.containsPoint(pos))
         {
             if(!window.isLooking)
            {
              sensor.emit('looking');
              window.isLooking =true;  
              console.log("yes");
            }
          
         }
         else
          {
      
            if(window.isLooking)
            {
            console.log('player Looks away');             
            console.log('no');
            sensor.emit('notLooking');
            window.isLooking = false;
            }
                
          }
     
   }
  }
   
    
  }
})