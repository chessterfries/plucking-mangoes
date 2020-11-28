class Mango extends BaseClass {
    constructor(x, y, r){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
        }
        super(x,y,r,40,40);
        this.x = x;
        this.y = y;
        this.r = r;
      this.image = loadImage("mango.png");
      this.body = Bodies.circle(this.x,this.y,this.r,options)
      World.add(world,this.body);
    } 

    display(){
      super.display();
    }

  };