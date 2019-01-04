AFRAME.registerComponent('box', {
    schema: { 
      changingValues: {type: 'array',default:[2,1.3,1.5,1,0.5]},
      offset:{type:'int',default:0}
     },
    init: function () {
    


    } ,
    init: function () {
          
          var box1 = document.getElementById("box1");
          var box2 = document.getElementById("box2");
          var box3 = document.getElementById("box3");
          var box4 = document.getElementById("box4");
          
          var pos1 = 2;
          var pos2 = 2.2;
          var pos3 = 2.4;
          var pos4 = 2.6;
                for(var i = 0; i< this.data.changingValues.length ; i++)
                {
                 var x = Math.floor(Math.random() * 5);
                  this.changeValues(x,box1,pos1);
                  var y = Math.floor(Math.random() * 5);
                  this.changeValues(x,box2,pos2);
                  var z = Math.floor(Math.random() * 5);
                  this.changeValues(x,box3,pos3);
                  var w = Math.floor(Math.random() * 5);
                  this.changeValues(x,box4,pos4);
                  var m = Math.floor(Math.random() * 5);

                }
                
            
    },
    changeValues: function(index2,boxx,poss){
      var a = this.data.changingValues;
      var index = index2;
      var box = boxx;
      var pos = poss;
      setInterval(function() {
            
            box.setAttribute('height',a[index]);
            box.setAttribute('position',{x:pos,y:0,z:-a[index]/2});
          
           }, 2000+ this.data.offset)
           this.data.offset += 2000;
    }
  });

  AFRAME.registerComponent('detect-collision', {

        init: function ( t ) {

         this.el.addEventListener( 'collide', function ( e ) {
        console.log( 'collision' );
           } );
            }
});
