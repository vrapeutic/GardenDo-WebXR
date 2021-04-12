AFRAME.registerComponent('cam-sync-reader', {
    /**
     * We use IIFE (immediately-invoked function expression) to only allocate one
     * vector or euler and not re-create on every tick to save memory.
     */
    tick: (function () {
      var position = new THREE.Vector3();
      var quaternion = new THREE.Quaternion();

      return function () {
        if ( IAM == 'child' && conn && gameStarted ) {
            this.el.object3D.getWorldPosition(position);
            this.el.object3D.getWorldQuaternion(quaternion);
            // position and rotation now contain vector and quaternion in world space.

            console.log(position, quaternion)

            var objectInfo = {
                object3D: 'camera',
                position: position,
                rotation: quaternion,
            }
            conn.send(JSON.stringify(objectInfo));
            // console.log(IAM, position, rotation)
        }
      };
    })
  });