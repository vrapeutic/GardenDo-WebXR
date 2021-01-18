let flowers =[];
let flower1 = document.getElementById('flower1');
flowers.push(flower1);
let flower2 = document.getElementById('flower2')
flowers.push(flower2);
//let flower3 = document.getElementById('flower3');
//flowers.push(flower3);
let flowerIndex = 0;

AFRAME.registerComponent('next-flower', {
  schema: {
    message: {type: 'string', default: '!'}
  },

  init: function () {
    console.log(this.data.message);
  }
});