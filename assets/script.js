
$(document).ready(function () {

    $("#currentDay").text(moment().format("MMMM Do YYYY")); 

    $(".saveBtn").on("click", function () {
        console.log(this);
        var text = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id"); 

        localStorage.setItem(time, text);
    })
    
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));


  /* var currentHour = moment().format('H');

   
        if (currentHour < hour9) {
            $(".description").addClass("future");
        } else if (currentHour > hour9) {
            $(".description").addClass("past");
        } else if (currentHour = hour9) {
            $(".description).addClass("present");
        };
        */

       
        })
