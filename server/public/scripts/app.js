$(document).ready(function(){
  $("#buttons").on("click", getData);
  // getData();


var currentSlide = 0;

  function getData() {
    $.ajax({
      type: 'GET',
      url: '/data', // http://localhost:5000/data
      beforeSend: function() {
        console.log("hey, i'm about to make a request");
      },
      success: function(data) {
        updateDom(data.sigmanauts);
      },
      error: function(xhr) {
        console.log('request failed');
      }
    });
  }


$("#buttons").on("click", '#rightClick', addCurrentSlide);
$("#buttons").on("click", '#leftClick',  subCurrentSlide);

function addCurrentSlide () {
  currentSlide++
  console.log(currentSlide);
}

function subCurrentSlide () {
  currentSlide--
  console.log(currentSlide);
}



function updateDom(sigmanauts) {

  $.each(sigmanauts, function(i, person) {
    console.log("index number: ", i);
    person.id = i;
    if (currentSlide == person.id) {
    $("#person-container").append('<div class="person"></div>');
    var $el = $("#person-container").children().last();

    $el.append('<h2>' + this.name + '</h2>');
    $el.append('<p>' + this.git_username + '</p>');
    $el.append('<p>' + this.shoutout + '</p>');

    }
  });
 }


});
