// current date in header
var date = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").text(date);

// saveBtn and save to local storage
$(document).ready(function () {
         $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

    
        localStorage.setItem(time, text);
    })
   

})