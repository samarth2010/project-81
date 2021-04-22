canvas = document.getElementById("myCanvas");
fcolor = "blue";
scolor = "yellow";
tcolor = "black";
frcolor = "green";
ficolor = "red";

ctx= canvas.getContext("2d")
 
ctx.beginPath();
ctx.strokeStyle= fcolor;
ctx.lineWidth =2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= scolor;
ctx.lineWidth =2;
ctx.arc(260,230,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= tcolor;
ctx.lineWidth =2;
ctx.arc(320,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= frcolor;
ctx.lineWidth =2;
ctx.arc(380,230,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= ficolor;
ctx.lineWidth =2;
ctx.arc(440,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 1;
ctx.rect(100, 120, 430, 200);
ctx.stroke();