var mouseEvent="empty";

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="red"
width_of_the_line=2;

canvas.addEventListener("mousedown",my_mousedowwn);
function my_mousedowwn()
{
    color=document.getElementById("color").value;
    width_of_the_line=document.getElementById("width_of_the_line").value
    radius=document.getElementById("radius").value
    mouseEvent="mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    var current_position_of_mouse_x=e.clientX - canvas.offsetLeft;
    var current_position_of_mouse_y=e.clientY - canvas.offsetTop;
    if(mouseEvent == "mouseDown")
    {
        console.log("Current position of X and Y Coordinates = ")
        console.log("X = "+current_position_of_mouse_x+",Y = "+current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.linewidth=width_of_the_line;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
        ctx.stroke();
    }
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseup";
}


canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}

function clear_area()
{
    ctx.clear_Rect(0,0,canvas.width,canvas.height);
}