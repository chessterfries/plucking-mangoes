class Tree extends BaseClass{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        super(x,y,550,600);
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("tree.png");
        World.add(world,this.body);
    }
    display(){
        super.display();
    }
}