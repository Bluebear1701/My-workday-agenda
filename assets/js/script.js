// the current date
var today = moment().format('ddd MM/DD/YYYY');
$("#currentDay").html(today);

//save button click listener
$(".saveBtn") .on(".click", function(){
    text = $(this).setItem(text).val()  
   
    //local.storage 
    localStorage.setItem("text", "time")
});





//if current time <>= time block then add a class past, present or future 
  function updateColor () {
var time = moment().hours 
$(".time-block").each(function() {
    var timeColor = $(this).attr("id")
    if (timeColor < time) {
        $(this).addClass(".past")        
    } else if (timeColor === time) {
        $(this).addClass(".present")
    } else if (timeColor > time) {
        $(this).addClass(".future")
    };
});
  };
 

//get current time  
//loop over time blocks
//check the time and add the class
//get from local storage 