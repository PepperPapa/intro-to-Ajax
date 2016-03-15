
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr + ', ' + cityStr;

    $greeting.text('So, you want to live at ' + address + '?');


    // load streetview
    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '';
    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');


    // load nytimes
    var ntyURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?" +
        "q=" + cityStr + "&page=2&sort=oldest&" +
        "api-key=6c8e57991597a9eaefac86510963b66b:13:74704165";
    var $articleListElm = $('.article-list');
    $.getJSON(ntyURL,  function (data) {
      $.each(data.response.docs, function(key, val) {
        console.log(val);
        $nytHeaderElem.text("New York Times Articles about " + cityStr);
        $articleListElm.append("<li id='" + key + "'>" +
                "<a href='" + val.web_url + "'>" + val.headline.main + "</a>" +
                "<p>" + val.snippet + "</p>");
      });
    }).error(function () {
      $nytHeaderElem.text("New York Times Articles can't be loaded!");
    });

    return false;
}

$('#form-container').submit(loadData);
