


/*class baseclass{
  constructor(x, y, width, height) {
      var options = {
          "isStatic":false,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.x=x;
      this.y=y;
      World.add(world, this.body);
    }
    display(){
      
      rectMode(CENTER);
      fill("grey");
      stroke("grey");
  
      var a=this.body.position;
        var b=this.body.width;
        var c=this.body.height;
  
        rect(a.x,a.y, this.width, this.height);

    }
    }*/

/*class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}
*/
