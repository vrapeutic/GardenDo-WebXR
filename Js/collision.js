AFRAME.registerComponent('start-collision', {
    schema: {
        event: { type: 'string', default: '' },
        canCollide: { type: 'boolean', default: false },
        flower: { type: 'string', default: 'flower1' },
        
    },

    init: function() {


        let el = this.el;
        let data = this.data;
        let floweranim = document.getElementById(data.flower);
        let WVFX = document.getElementById('particle');
        let isDistracted = false;
        
        // let flowerSync = document.getElementById("flower-sync");

        el.addEventListener("hitstart", function() {

            if (data.canCollide && !isDistracted) {
                console.log("collided");
                window.isBucketWatering = true;
                window.isReversing = false;
                if (window.isPlayerLooking ) {
                    el.setAttribute('material', 'color', 'black');
                    floweranim.setAttribute('animation-mixer', 'timeScale', '1');
                   
                   
                    WVFX.setAttribute('visible', 'true');
                    canInterupt = true;
                } else {
                    el.setAttribute('material', 'color', 'red');
                }
            }




        })
        el.addEventListener('hitend', function() {
            console.log('exit collision');

            if (data.canCollide) {
               
                window.isBucketWatering = false;
                floweranim.setAttribute('animation-mixer', 'timeScale', '-1');
                //flowerSync.emit('flower-reverse');
                WVFX.setAttribute('visible', 'false');
                window.isReversing = true;
                if (window.isPlayerLooking) {
                    el.setAttribute('material', 'color', 'blue')
                } else {
                    el.setAttribute('material', 'color', '#ffffff');
                }

            }

        })
        el.addEventListener('distracting',function(){
         
            isDistracted = true;
            window.isBucketWatering = false;
            console.log('collision distracted');
        })
        el.addEventListener('notDistracting',function(){
            isDistracted = false;
        })
    }

});