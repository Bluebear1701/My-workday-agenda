// the current date and time
var today = 
moment().format('ddd MM/DD/YYYY, hh:mm:ss');
$("#currentDay").html(today);

//save button click listener
$(".saveBtn") .on("click", function(){
 var description=$(this).siblings(".description").val()  
 var time=$(this).parent().attr("id")  
    //local.storage 
    localStorage.setItem(time, description)
    
});

//get from local storage 
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));


//if current time <>= time block then add a class past, present or future 
function updateColor () {
    var time = moment().hours() 
    console.log(time)
    $(".time-block").each(function() {
        var timeColor = $(this).attr("id")
        console.log(timeColor)
        if (timeColor < time) {
            $(this).addClass("past")        
        } else if (timeColor === time) {
            $(this).removeClass("past")
            $(this).addClass("present")
        } else if (timeColor > time) {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        };
    });
};
updateColor();


