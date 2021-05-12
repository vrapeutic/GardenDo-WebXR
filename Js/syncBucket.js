AFRAME.registerComponent('bucket-sync-reader', {
    
    tick: (function () {
      var position = new THREE.Vector3();
      var quaternion = new THREE.Quaternion();

      
        if ( IAM == 'child' && conn && gameStarted ) {
            var position = this.el.object3D.position;
            var rotation = this.el.object3D.rotation;
  
            
            // console.log('rotation', rotation)
  
            // var position = this.el.object3D.getWorldPosition(new THREE.Vector3());
            // var quaternion = this.el.object3D.getWorldQuaternion(new THREE.Quaternion());

           
  
            var objectInfo = {
              object3D: 'water-bucket',
              position: position,
              rotation: rotation,
            }

          console.log("object info"+objectInfo);
            console.log('send bucket data')
            conn.send(JSON.stringify(objectInfo));
            
        
      };
    })
  });