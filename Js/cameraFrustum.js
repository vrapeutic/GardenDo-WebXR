AFRAME.registerComponent('camera-head', {
  schema: {
    event: { type: 'string', default: '' },
    canSee: { type: 'boolean', default: true },
  },

  update: function(oldData) {
    console.log(oldData);
  },

  tick: function (time) {
    let el = this.el;
    let data = this.data;
    // data.canSee = true;
    // let canReverse = true;
    if (data.canSee) {
      //canReverse = true
      if (this.el.sceneEl.camera) {
        let cam = this.el.sceneEl.camera;
        let sensor = document.getElementById('flower' + window.flowerIndex);
        let frustum = new THREE.Frustum();
        frustum.setFromMatrix(new THREE.Matrix4().multiplyMatrices(cam.projectionMatrix,
          cam.matrixWorldInverse));

        // Your 3d point to check
        let pos = new THREE.Vector3(sensor.getAttribute("position").x, sensor.getAttribute("position").y, sensor.getAttribute("position").z);

        if ( IAM == 'child' && conn && gameStarted ) {
          var position = this.el.object3D.position;
          var rotation = this.el.object3D.rotation;

          console.log('position', position)
          console.log('rotation', rotation)

          // var position = this.el.object3D.getWorldPosition(new THREE.Vector3());
          // var quaternion = this.el.object3D.getWorldQuaternion(new THREE.Quaternion());

          var objectInfo = {
            object3D: 'camera',
            position: position,
            rotation: rotation,
          }
          conn.send(JSON.stringify(objectInfo));
          // console.log(IAM, position, rotation)
        } else if ( IAM == 'doctor' && conn && gameStarted ) {
          // console.log(this.el.sceneEl.camera)
        }

        // let cameraDiv = document.querySelector('#cam');

        // if ( IAM == 'child' && conn && gameStarted ) {
        //   cameraDiv.setAttribute('wasd-controls', 'enabled', true)
        // } else if ( IAM == 'doctor' && conn && gameStarted ) {
        //   cameraDiv.setAttribute('wasd-controls', 'enabled', false)
        //   console.log(cameraDiv)
        // }

        if (frustum.containsPoint(pos)) {
          if (!window.isLooking) {
            sensor.emit('looking');
            window.isLooking = true;
            console.log("yes");
          }

        }
        else {

          if (window.isLooking) {
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