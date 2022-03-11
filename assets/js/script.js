//make textarea persistent using local.storage
//add time to jumbotron
//add color to textarea
//give textarea color
//make textarea change color as due dates get closer
//make able to change text area and keep current changes
//add save button and icon
//make save button move in and out when cursor is over it to save
var tasks = {};

var today = moment().format('ddd MM/DD/YYYY');
$("#currentDay").html(today);

//if current time <>= time block then add a class past prestent or future 

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
  