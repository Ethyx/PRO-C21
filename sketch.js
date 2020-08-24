var bullet, wall;
var speed, weight, thickness;
function setup()
{
    createCanvas(1600, 600);
    
    speed = random(123,221);
    
    weight = random(30,52);
    
    bullet = createSprite(50,200,50,10);
    bullet.shapeColor = "white";
    
    wall = createSprite(1200,200,thickness,height/2);
    wall.shapeColor = rgb(80,80,80);
    
    bullet.velocityX = speed;
    
    thickness = random(12,103);

}

function draw()
{
    background(0);

    if (hasCollided(bullet, wall))
    {
        bullet.velocityX = 0;
        var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
        
        if (damage < 10)
        {
            wall.shapeColor = color(0,255,0);
        }
        
        if (damage > 10)
        {
            wall.shapeColor = color(255,0,0);
        }

    } 
    
    drawSprites();    
}

function hasCollided(lbullet, lwall)
{
    bulletRightEdge = lbullet.x + lbullet.width;
    wallLeftEdge = lwall.x;
    
    if (bulletRightEdge >= wallLeftEdge)
    {
        return true
    }
    return false;
}