


alert("connected")

var start1 = document.querySelector("#start1");
var stop1 = document.querySelector("#stop1");

var rendon = document.querySelector("#modify");

var on = false;


    start1.addEventListener("click" , function(){   
        if(!on){ 
        alert("The Sprinklers are about to start");
        on = true;
        rendon.textContent = "on"; 
        }
    } );



    stop1.addEventListener("click" , function(){   
        if(on){ 
        alert("The sprinklers will stop");
        on = false; 
        rendon.innerHTML = "off";  
        }
    } );

    

    const fileUrl = 'file:///E:\fs\bootstrap_course\iot_roughh\data_soil_moisture.txt' // provide file location

    fetch(fileUrl)
       .then( r => r.text() )
       .then( t => console.log(t) )
