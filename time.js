var wakeuptime = 5;
var noon = 12;
var lunchtime = 12;
var dinnertime = 20;
var rest;
var evening = 16;

//To show current time on webpage
var showCurrentTime =() =>{ 

var currentTime = new Date();    
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();

//display in a string
var clock = document.getElementById("clock"); //accessing the span tag
    
    var meridian = "HRS";
    //setting hours

    if(hours >= noon){
        meridian = "HRS";
    };
    
    //setting minutes
    if(minutes < 10){
        minutes = "0" + minutes;
    };

    //setting seconds
    if(seconds <10 ){
        seconds = "0" + seconds;
    };
    //putting them together
   var clockTime = `${hours} : ${minutes} : ${seconds} ${meridian}`;
   clock.innerText = clockTime;

}

//Getting clock to increament on its own while changing pictures

var clockUpdate = () =>{
    var time = new Date().getHours();
  
    
       
    var messageText;
    image = " ";
   
    var timeEvent = document.getElementById("timeEvent");
    var clockpics = document.getElementById("clockpic");
   
    if (time === rest){
        image = "resting.jpeg";
        messageText = "Take a break!";
    }
    else if(time === wakeuptime){
        image = "wakeup2.png";
    messageText = "Time to Wake Up";

    }
    else if(time === lunchtime){
        image = "lunchtime.jpeg";
        messageText = "If only we could survive without food";
    }
    else if (time === dinnertime){
        image = "dinner.jpeg";
        messageText = "This is Dinner!";
    }
    else if (time < noon){
        image = "morning.jpg";
        messageText = "Good Morning";
    }
    else if(time >= evening){
        image = "evening.jpeg";
        messageText = "Good Evening";
    }
    else {
        image = "afternoon.jpeg";
        messageText = "Good Afternoon";
    }
    console.log(messageText);
    timeEvent.innerText = messageText;
    clockpics.src = image;
    

   showCurrentTime();
}
clockUpdate();


//setting clock to increase once a second
var oneSecond = 1000;
setInterval(clockUpdate,oneSecond);
//Making rest button to work
var restingTime = document.getElementById("enjoymenttime");
var restEvent = () => {
    if(rest < 0){
        rest = new Date().getHours();
        restingTime.innerText = "Rest Time Over!";
        restingTime.style.backgroundColor = "gold";
    }
    else{
        rest = -1;
        restingTime.innerText = "Rest!";
        restingTime.style.backgroundColor = "white";
    }
}
restingTime.addEventListener("click",restEvent);
restEvent();

//Activating wake up time selector
var wakeUpTimeSelector = document.getElementsByClassName("wakeuptimeselector");
var wakeUpEvent = ()=>{
     wakeuptime = wakeUpTimeSelector.value;
    }
    wakeUpTimeSelector.addEventListener("change",wakeUpEvent);

  //Activating lunch time selector
  
  var lunchTimeSelector = document.getElementsByClassName("lunchtimeselector");
  var lunchTimeEvent = ()=> {
      lunchtime = lunchTimeSelector.value;
  }
  lunchTimeSelector.addEventListener("change",lunchTimeEvent);

  //Activate naptime selector

  var dinnerTimeSelector = document.getElementsByClassName("dinnertimeselector");
  var dinnerTimeEvent = () => {
      dinnertime = dinnerTimeSelector.value;
  }
  dinnerTimeSelector.addEventListener("change",dinnerTimeEvent);
