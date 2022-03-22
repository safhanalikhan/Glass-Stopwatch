var hr = 0;
var min = 0;
var sec = 0;
var milisec = 0;

var timer = false;

// Stop Watch
function stopwatch(){
    if(timer == true){
        milisec = milisec+1;
        var a = document.getElementById('milisec');
         a.className += " Watchon"
        // INCREASING SECTION
            if(milisec == 100){
                sec = sec+1;
                milisec = 0
                var a = document.getElementById('sec');
                a.className += " Watchon"
            }
            if(sec == 60){
                min = min+1;
                sec = 0
                var a = document.getElementById('min');
                a.className += " Watchon"
            }
            if(min == 60){
                hr = hr+1;
                min = 0;
                var a = document.getElementById('hr');
                a.className += " Watchon"
            }


        // FOR 00
        var hrString = hr;
        var minString = min;
        var secString = sec;
        var milisecString = milisec;
            if(hr < 10){
                hrString = "0" + hrString
            }
            if(min < 10){
                minString = "0" + minString
            }
            if(sec < 10){
                secString = "0" + secString
            }
            if(milisec < 10){
                milisecString = "0" + milisecString
            }


        
        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('milisec').innerHTML = milisecString;
        setTimeout('stopwatch()',10);
    }
}

// start Function
function start(){
    timer = true;
    stopwatch();
    document.getElementById('start').disabled = true;

}
    
// stopFunction
function stop(){
    timer = false;  
    
    if(milisec > 00){
        document.getElementById('milisec').className = 'Watchpouse' 
    }
    if(sec > 00){
        document.getElementById('sec').className = 'Watchpouse' 
    }
    if(min > 00){
        document.getElementById('min').className = 'Watchpouse' 
    }
    if(hr > 00){
        document.getElementById('hr').className = 'Watchpouse' 
    }
    
    var a = document.getElementById('start').disabled = false;
    
    
}


// reset Function
function reset(){
    timer = false;

    hr = 0;
    min = 0;
    sec = 0;
    milisec = 0;

    document.getElementById('hr').innerHTML ='00';
    document.getElementById('min').innerHTML = '00';
    document.getElementById('sec').innerHTML = '00';
    document.getElementById('milisec').innerHTML = '00';

    document.getElementById('milisec').className -= 'watchon' 
    document.getElementById('sec').className -= 'watchon' 
    document.getElementById('min').className -= 'watchon' 
    document.getElementById('hr').className -= 'watchon' 


    var a = document.getElementById('start').disabled = false;
   
}