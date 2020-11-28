class Ground extends BaseClass{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      super(x,y,width,height);
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      super.display();
      var pos =this.body.position;
      rectMode(CENTER);
      fill("#292c30");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
