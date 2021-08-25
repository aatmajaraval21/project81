canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
ctx.begeinPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();


ctx.begeinPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.arc(230,210,40,0,2*Math.PI);
ctx.stroke();


ctx.begeinPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(450,210,40,0,2*Math.PI);
ctx.stroke();


ctx.begeinPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=5;
ctx.arc(300,250,40,0,2*Math.PI);
ctx.stroke();


ctx.begeinPath();
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.arc(400,250,40,0,2*Math.PI);
ctx.stroke();



