//make textarea persistent using local.storage
//add time to jumbotron
//add color to textarea
//give textarea color
//make textarea change color as due dates get closer
//make able to change text area and keep current changes
//add save button and icon
//make save button move in and out when cursor is over it to save

var today = moment().format('ddd MM/DD/YYYY');
$("#currentDay").html(today);

var time = moment().format('HH:MM:SS');
$("#currentTime").html(time);