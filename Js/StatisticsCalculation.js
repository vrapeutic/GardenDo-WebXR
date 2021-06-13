AFRAME.registerComponent('calculate-stats', {
    schema: {
        canStart: { type: 'boolean', default: false }
    },

    init: function() {

        let el = this.el;
        let npc = document.getElementById("npc");
        console.log('npc' + npc);
        npc.setAttribute('sound-handler', '');
        var current = new Date();
        var startDate = current.toLocaleString();
        console.log(startDate);
        // console.log( current.toLocaleString());


        let statString;
        let statsDict;
        let allStats = {};

        if (sessionStorage.getItem("allStats") != null) {
            allStats = JSON.parse(sessionStorage.getItem("allStats"));
            console.log("all stats is" + allStats)
        }


        if (IAM == 'child' && conn && gameStarted) {
            el.addEventListener('gameEnded', function() {

                statString = ""

                statsDict = {}



                allStats[startDate] = statsDict;
                sessionStorage.setItem('allStats', JSON.stringify(allStats));

                sessionStorage.setItem('stats', JSON.stringify(statsDict));

                var objectInfo = {
                    object3D: 'game-finished',
                    allStatistics: allStats,

                }

                conn.send(JSON.stringify(objectInfo));
            })

        }




    }

});

AFRAME.registerComponent('calculate-limited-interuption', {
    schema: {
        canStart: { type: 'boolean', default: false }
    },

    init: function() {

        let el = this.el;
        let myIndex = 1;
        let interuptionCounter = 0;
        let limtedInteruptText = document.getElementById('limitedInteruptText');
        limtedInteruptText.setAttribute('text', 'value', "limted interuption = " + window.tasksLimitedInterupted);
        let data = this.data;
        let cantInterupt = true;

        el.addEventListener('interupt', function() {

            if (myIndex == window.flowerIndex && cantInterupt) {
                interuptionCounter++;
                limtedInteruptText.setAttribute('text', 'value', "limted interuption = " + window.tasksLimitedInterupted);
                cantInterupt = false;
                if (interuptionCounter == 3) {
                    window.tasksLimitedInterupted--;
                    limtedInteruptText.setAttribute('text', 'value', "limted interuption = " + window.tasksLimitedInterupted);
                    myIndex++;
                    interuptionCounter = 0;
                }
            }

        })

        el.addEventListener('canInterupt', function() {
            cantInterupt = true;

        })
    }

});