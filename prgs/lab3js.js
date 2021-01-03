var tsize=0;
var timeout1,timeout2;
var text;
function startA(){
    text=document.getElementById("text");
    timeout1=window.setInterval("incr()",100);
}
function incr(){
    tsize+=1;
    text.innerHTML="TEXT GROWING   "+tsize+"pt";
    text.style.fontSize=tsize+"pt";
    text.style.color="red";
    if(tsize>49){
        window.clearInterval(timeout1);
        timeout2=window.setInterval("decr()",100);    
    }

}
function decr(){
    tsize-=1;
    text.innerHTML="TEXT SHRINKING   "+tsize+"pt";
    text.style.fontSize=tsize+"pt";
    text.style.color="blue";
    if(tsize<6){
        window.clearInterval(timeout2);
        timeout1=window.setInterval("incr()",100);    
    }

}