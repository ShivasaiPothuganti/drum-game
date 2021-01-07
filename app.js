var btns = document.querySelectorAll("button");
for(var i=0;i<btns.length;i++)
{
    btns[i].addEventListener("click",sound);
}
function keyPress(drum)
{
    if(drum.toLowerCase()=='W'.toLowerCase())
    {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }
    else if(drum.toLowerCase()=='A'.toLowerCase())
    {
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    else if(drum.toLowerCase()=='S'.toLowerCase())
    {
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    else if(drum.toLowerCase()=='D'.toLowerCase())
    {   
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }
    else if(drum.toLowerCase()=='J'.toLowerCase())
    {
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
    else if(drum.toLowerCase()=='K'.toLowerCase())
    {
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    }
    else if(drum.toLowerCase()=='L'.toLowerCase())
    {
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
    else
    {
        console.log(drum);
    }
}
function sound ()
{
    var drum = this.textContent;
    keyPress(drum);
}
document.addEventListener("keypress",function(event){
    keyPress(event.key);
})
