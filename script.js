const randomcolor=function(){
    const hex='0123456789ABCDEF';
    let color="#";
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let intervalid;
const stratcolorchange=function(){
    if(!intervalid){
    intervalid=setInterval(colorchanger,1000);}

    function colorchanger(){
        
        document.body.style.backgroundColor=randomcolor();
    }
    }

const stopcolorchange=function(){
    clearInterval(intervalid);
    intervalid=null;

}
document.querySelector('#start').addEventListener('click',stratcolorchange);
document.querySelector('#stop').addEventListener('click',stopcolorchange);