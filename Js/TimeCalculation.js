AFRAME.registerComponent('calculate-response', {
    schema: {
        canStart: { type: 'boolean', default: false }
    },

    init: function() {
        let el = this.el;
        let timer;

        el.addEventListener("calculate", function() {

            timer = setInterval(() => {}, 1000);

        })


        el.addEventListener('stop', function() {
            clearInterval(timer);
        })

    }

});

AFRAME.registerComponent('calculate-time-taken', {
        schema: {
            canStart: { type: 'boolean', default: false }
        },

        init: function() {
            let el = this.el;

            let timer;

            el.addEventListener("calculate", function() {

                timer = setInterval(() => {}, 1000);

            })


            el.addEventListener('stop', function() {
                clearInterval(timer);
            })

        }

    }

);

AFRAME.registerComponent('calculate-aas', {
    schema: {
        canStart: { type: 'boolean', default: false }
    },

    init: function() {
        let el = this.el;
        let timer;

        el.addEventListener("calculate", function() {

            timer = setInterval(() => {}, 1000);

        })


        el.addEventListener('stop', function() {
            clearInterval(timer);
        })

    }


});