AFRAME.registerComponent('player-looking', {
    schema: {
        event: { type: 'string', default: '' },
        canWater: { type: 'boolean', default: false },
        flower: { type: 'string', default: 'flower1' },
        interuption: { type: 'number', defult: 0 },

    },

    init: function() {


        let el = this.el;
        let sensor = document.getElementById('sensor' + window.flowerIndex);
        let data = this.data;
        let floweranim = document.getElementById(data.flower);
        let WVFX = document.getElementById('particle');
        //let flowerSync = document.getElementById("flower-sync");
        let limitedInteruption_el = document.getElementById("limited-interuption");
        let canInterupt = false;

       // document.querySelector('a-scene').enterVR();
        //when player is looking
        this.eventHandlerFn = function(event) {

            if (data.canWater) {

                window.isPlayerLooking = true;
                console.log("looking to flower event");
                sensor = document.getElementById('sensor' + window.flowerIndex);
                sensor.setAttribute('material', 'color', 'blue');
                if (window.isBucketWatering) {
                    window.isReversing = false;
                    canInterupt = true;
                    //activate AAS calculation here
                    floweranim.setAttribute('animation-mixer', 'timeScale', '1');
                    //   flowerSync.emit('flower-grow');
                    limitedInteruption_el.emit('canInterupt');
                    WVFX.setAttribute('visible', 'true');
                    sensor.setAttribute('material', 'color', 'black');
                }
            }



        }
        el.addEventListener('looking', this.eventHandlerFn);


        //when player looks away
        el.addEventListener('notLooking', function() {
            console.log('player Looks away');

            if (data.canWater) {
                if (canInterupt) {
                    limitedInteruption_el.emit('interupt');
                }


                window.isPlayerLooking = false;
                //deactivate AAs calculation here

                floweranim.setAttribute('animation-mixer', 'timeScale', '-1');
                // flowerSync.emit('flower-reverse');
                WVFX.setAttribute('visible', 'false');
                window.isReversing = true;
                sensor = document.getElementById('sensor' + window.flowerIndex);
                if (window.isBucketWatering) {
                    sensor.setAttribute('material', 'color', 'red');
                } else {
                    sensor.setAttribute('material', 'color', '#ffffff');
                }
            }

        })
    },
    remove: function() {
        let el = this.el;
        let sensor = document.getElementById('sensor' + window.flowerIndex);
        el.removeEventListener('looking', this.eventHandlerFn);
        window.isPlayerLooking = false;
        console.log('player looking removed');
        sensor.setAttribute('material', 'color', 'yellow')
    }
});