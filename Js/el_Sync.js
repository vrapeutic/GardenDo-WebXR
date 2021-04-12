let el_sync = {};
AFRAME.registerComponent('el-sync', {
    schema: {
      canStart: {type: 'boolean', default: false}
    },
  
    tick: function () {
     
      let el = this.el;
      let xPos = el.object3D.position.x ;
      let yPos = el.object3D.position.y ;
      let zPos = el.object3D.position.z ;
      let xRot = el.object3D.rotation.x;
      let yRot = el.object3D.rotation.y;
      let zRot = el.object3D.rotation.z;
     
      el_sync.xPos = xPos;
      el_sync.yPos = yPos; 
      el_sync.zPos = zPos;
      el_sync.xRot = xRot;
      el_sync.yRot = yRot;
      el_sync.zRot = zRot;
    // console.log(el_sync);
    }
   
  });
  