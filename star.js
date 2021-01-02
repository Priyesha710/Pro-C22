class Star{
    constructor(x,y,scale){

      this.body = Bodies.circle(x,y,10, {restitution:0, isStatic:true});
      World.add(userWorld,this.body);
    }
    show(){
        var sprite = createSprite(x,y,10,10);
        sprite.scale = scale;
        sprite.addImage(starImg);
        sprite.x = this.body.position.x;
        sprite.y = this.body.position.y;
    }
    fall(){
        Matter.Body.setStatic(this.body,false);

    }
}