
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    $body.append("<img class='bgimg'" +
    "src = 'https://maps.googleapis.com/maps/api/streetview?" +
    "size=600x300&location=" + $('#street').val() + "," + $('#city').val() + "&" +
    "heading=151.78&pitch=0&" +
    "key=AIzaSyDECcFSTGlCwrIY6Oopv87JozbQDkko_e0' alt='background image'>");
    // YOUR CODE GOES HERE!
    console.log($('#street').val(), $('#city').val());
    return false;
}

$('#form-container').submit(loadData);

// loadData();
