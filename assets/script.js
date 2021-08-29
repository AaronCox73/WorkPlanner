
// creating the current time 
var rightNow = moment().format("MMMM Do, YYYY kk:mm");
console.log(rightNow);

var hour = parseInt(moment().format("kk"));
console.log(hour);
console.log(moment(hour).isSame(hour, "hour"))
// grabbing the id of the <p> and appending our current time into it 
$("#currentDay").append(rightNow);

$(".time-block").each(function () {
    // console.log($(this).text().slice(2))
    var blockHour = (parseInt($(this).attr("id")))
    console.log(blockHour, hour)
    if (blockHour < hour) {
        $(this).addClass('bg-secondary').removeClass('bg-light');
    } else if (blockHour === hour) {
        $(this).addClass('bg-danger').removeClass('bg-light');
    } else {
        $(this).addClass('bg-success').removeClass('bg-light');
    }
});


$('.saveBtn').click(function () {
    console.log(this)
});



