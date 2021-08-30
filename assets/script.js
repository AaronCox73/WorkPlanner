
// creating the current time 
var rightNow = moment().format("MMMM Do, YYYY kk:mm");
//var storageTime = $(this).parent().siblings(".hour").children().text()
var storageInput = $(".text").val();
//var storageInput = $(this).parent().siblings(".description").children().val();



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




// getting items from local storage!
$("#9am").val(localStorage.getItem("09:00"));
$("#10am").val(localStorage.getItem("10:00"));
$("#11am").val(localStorage.getItem("11:00"));
$("#12pm").val(localStorage.getItem("12:00"));
$("#1pm").val(localStorage.getItem("13:00"));
$("#2pm").val(localStorage.getItem("14:00"));
$("#3pm").val(localStorage.getItem("15:00"));
$("#4pm").val(localStorage.getItem("16:00"));
$("#5pm").val(localStorage.getItem("17:00"));


$('.saveBtn').click(function () {
    var storageInput = $(this).parent().siblings(".description").children().val();
    console.log(storageInput)
    var storageTime = $(this).parent().siblings(".hour").children().text();
    console.log(storageTime)

    localStorage.setItem(storageTime, storageInput);
});


