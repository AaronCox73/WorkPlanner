
// creating the current time 
var rightNow = moment().format("MMMM Do, YYYY kk:mm");

var storageInput = $(".text").val();

var loadTasks = function () {
    localStorage.getItem("text");
};


var hour = parseInt(moment().format("kk"));

// grabbing the id of the <p> and appending our current time into it 
$("#currentDay").append(rightNow);

$(".time-block").each(function () {

    var blockHour = (parseInt($(this).attr("id")))

    if (blockHour < hour) {
        $(this).addClass('bg-secondary').removeClass('bg-light');
    } else if (blockHour === hour) {
        $(this).addClass('bg-danger').removeClass('bg-light');
    } else {
        $(this).addClass('bg-success').removeClass('bg-light');
    }
});


$('.saveBtn').click(function () {
    var storageInput = $(".text").val();
    localStorage.setItem("text", storageInput);
});


