$(document).ready(function() {
    $("#buttons").on("click", getData);


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
                timer();


            },
            error: function(xhr) {
                console.log('request failed');
            }
        });
    }

    $("#buttons").on("click", '#rightClick', addCurrentSlide);
    $("#buttons").on("click", '#leftClick', subCurrentSlide);

    // adds to current slide and checks if it is higher than 19, or less that 1
    function addCurrentSlide() {
        currentSlide++;
        if (currentSlide == 19) {
            currentSlide = 1;

        }

        console.log(currentSlide);
    }

    function subCurrentSlide() {
        currentSlide--;
        if (currentSlide == 0) {
            currentSlide = 18;

        }
        console.log(currentSlide);
    }


    //appends student data to the DOM
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

    //adds a unique ID to bottom bar squares.
    function addBottom() {
        for (var i = 0; i < 19; i++) {
            $('#carousel').append('<div id="' + i + '" class="boxes"> </div>').children();
        };
    }

    //changes color based on unique ID given above.
    function squarecolor() {
        $('.boxes').css('background-color', 'white');
        $('#' + currentSlide).css('background-color', 'red');
    }




});
