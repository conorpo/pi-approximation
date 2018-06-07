function init(){
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  ctx.arc(450,450,450,0,2*Math.PI);
  ctx.stroke();
  setInterval(draw,30);
  inside = 0;
  total = 0;
}
function draw(){
  for(let i = 0;i<10000;i++){
    let x = Math.random()*900;
    let y = Math.random()*900;
    var dist = (x-450)*(x-450)+(y-450)*(y-450)
    if(450*450>dist){
      inside++;
      ctx.fillStyle="green";
    }
    else{
      ctx.fillStyle="red";
    }
    ctx.fillRect(x,y,1,1);
  }
  total+=10000;
  ctx.clearRect(0,900,900,100);
  ctx.font = "60px Serif";
  ctx.fillStyle = "black";
  ctx.fillText("Approximate PI: " + 4*inside/total,50,990)
}
