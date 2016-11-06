$(document).ready(function(){
  $("#buttons").on("click", getData);
  // getData();

var currentSlide = 0;

addBottom();


  function getData() {
    $.ajax({
      type: 'GET',
      url: '/data', // http://localhost:5000/data
      beforeSend: function() {
          console.log('hellooo');
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
  currentSlide++;
  if (currentSlide == 19) {
    currentSlide = 1;
  }

  console.log(currentSlide);
}

function subCurrentSlide () {
  currentSlide--;
  if (currentSlide == 0) {
    currentSlide = 18;
    $(this).fadeIn();
  }
  console.log(currentSlide);
}


function updateDom(sigmanauts) {

  $.each(sigmanauts, function(i, person) {

    person.id = i;
    if (currentSlide == person.id) {
    squarecolor();

    $("#person-container").empty();
    $("#person-container").append('<div class="person"></div>');
    var $el = $("#person-container").children().last();

    $el.append('<h2>' + this.name + '</h2>');
    $el.append('<p>' + this.git_username + '</p>');
    $el.append('<p>' + this.shoutout + '</p>');

    }

  });
 }

function addBottom () {
 for (var i = 1; i < 20; i++ ) {
   $('#carousel').append('<div id="' + i + '" class="boxes"> </div>').children();
 };
}

function squarecolor () {
  $('.boxes').css('background-color', 'white');
  $('#' + currentSlide).css('background-color', 'red');
}


});
