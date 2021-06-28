AFRAME.registerComponent('vfx-position', {
    
    tick: (function () {
      let el = this.el;
      let VFX_el = document.getElementById("particles-holder");
      let vfx_position = VFX_el.object3D.getWorldPosition();
      
      el.setAttribute('position',vfx_position);


      
    
    })
  });