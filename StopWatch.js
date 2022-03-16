window.addEventListener('load',function(){
    seconds=0;
    minutes=0;
    hours=0;

    stopwatch.innerText="0"+hours+":"+"0"+minutes+":"+"0"+seconds;
    

    start.addEventListener('click',function(){
        this.disabled=true;
        setTimeout(function(){seconds=1;},1000);
        timerid=setInterval(function(){
           
            if (seconds==60){
                seconds=0;
                minutes++;
               if (minutes==60){
                  minutes=0;
                  hours++; 
                }
            }

            //Possibilities
            if(seconds<=9 && minutes<=9 && hours<=9){
                stopwatch.innerText="0"+hours+":"+"0"+minutes+":"+"0"+seconds; 
            }
            if(seconds<=9 && minutes<=9 && hours>9){
                stopwatch.innerText=hours+":"+"0"+minutes+":"+"0"+seconds;
            }
            if(seconds<=9 && minutes>9 && hours<=9){
                stopwatch.innerText="0"+hours+":"+minutes+":"+"0"+seconds; 
            }
            if(seconds<=9 && minutes>9 && hours>9){
                stopwatch.innerText=hours+":"+minutes+":"+"0"+seconds; 
            }

            if (seconds>9 && minutes<=9 && hours<=9){
                stopwatch.innerText="0"+hours+":"+"0"+minutes+":"+seconds;
            }
            if (seconds>9 && minutes<=9 && hours>9){
                stopwatch.innerText=hours+":"+"0"+minutes+":"+seconds;
            }
            if(seconds>9 && minutes>9 && hours<=9){
                stopwatch.innerText="0"+hours+":"+minutes+":"+seconds;
            }
            if(seconds>9 && minutes>9 && hours>9){
                stopwatch.innerText=hours+":"+minutes+":"+seconds;
            }

        seconds++;
    },1000)//end of set interval
    })//End of start event

    Stop.addEventListener('click',function(){
        start.disabled=false;
        seconds=0;
        minutes=0;
        hours=0;
        setTimeout(function(){clearInterval(timerid);},1000);
    })//End of stop event
})//End of load event
