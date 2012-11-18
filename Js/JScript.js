//global variables
var param1;
var param2;
var param3;
var selectedwine;
var subpar1;
var subpar2;
var query_string;
function getdata() {
    var currentNav = $('a.ui-btn-active').text();
    // Do fancy things with it
    //alert(currentNav);
    query_string = currentNav.split(">");
     
     param1 = query_string[1];
     param2 = query_string[2];
    // alert(query_string[0]);
    //alert(param1);
    //subpar1 = param1.split("&");
    subpar1 = param1.charAt(2) + param1.charAt(3)
   //alert(subpar1);
    subpar2 = param2.charAt(1) + param2.charAt(2) + param2.charAt(3)
    //subpar2 = param2.split("&");
   //  alert(subpar2);
}
function SortByRating(x, y) {
  //  alert("reviewstars");
    return ((y.reviewstars == x.reviewstars) ? 0 : ((y.reviewstars > x.reviewstars) ? 1 : -1));
}
function SortByPrice(x, y) { 
      //  alert("Price-1");
        return y.price - x.price;
}
function SortByName(x, y) {     
       // alert("Name");
        return ((x.winename == y.winename) ? 0 : ((x.winename > y.winename) ? 1 : -1));
 
}
// When the user views the Track Info page
$('#BindWines').live('pageshow', function() {
    //alert("Enter");
    jQuery.getJSON("Js/newwinecurrent.json", function(data) {


        $('#completeWines li').remove();

        wines = data.rows;
        if (query_string[0] == "Rating") {
            //alert("reviewstars");
            wines.sort(SortByRating);
        }
        else if (query_string[0] == "Price") {
            //alert("Price -2");
            wines.sort(SortByPrice);
        }
        else {
            //alert("name");
            wines.sort(SortByName);
        }
        $.each(wines, function(index, wine) {
            if (parseInt(wine.price) >= parseInt(subpar1) && wine.reviewstars >= subpar2) {
                //alert("Enter" + wine.price + "-" + subpar1 + ";" + reviewstars + "-" + subpar2);
                //alert("enter" + wine.price + "-" + subpar1 + ";");
                $('#completeWines').append('<li><span style="font-size:Medium; font-family:Verdana; color:Black;">ID:' + wine.uniqueid + '.</span><Br />' +
                '<span style="font-size:small; font-family:Verdana; color:Black;">Price :' + wine.price + '</span><Br />' +
                '<span style="font-size:small; font-family:Verdana; color:Black;">Review Stars :' + wine.reviewstars + '</span><Br />' +
                '<span style="font-size:small; font-family:Verdana; color:Black;">Review Text:' + wine.reviewtext + '</span><Br />' +
                '</li>');
            }
            $('#completeWines').listview('refresh');

        });
    });

});

$('#completeWines li').live('vclick', function() {
    //alert("Works"); // id of clicked li by directly accessing DOMElement property
    selectedwine = $(this).text();
    //alert(selectedwine);

    var query_string2 = selectedwine.split(":");
    var sparam1 = query_string2[1];
    //alert(sparam1);

    var query_string3 = sparam1.split(".");
    var tparam1 = query_string3[0];
    //alert(tparam1);
    $.mobile.changePage("#WineDetailsPage", { transition: "slideup" });
    jQuery.getJSON("Js/newwinecurrent.json", function(data) {

        $('#ClearWinesDetail li').remove();
        wines = data.rows;
        $.each(wines, function(index, wine) {
            //alert(wine.winename + "," + tparam1);


            if (wine.uniqueid == tparam1) {
                // alert("enter2");
                $('#ClearWinesDetail').append('<li><span style="color:#336699">ID</span> : ' + wine.uniqueid + '<Br />' +
                '<span style="color:#336699">Type</span> : ' + wine.type + '<Br />' +
                '<span style="color:#336699">Price</span> : ' + wine.price + '<Br />' +
                '<span style="color:#336699">Region </span>: ' + wine.region + '<Br />' +
                '<span style="color:#336699">Review Stars</span> : ' + wine.reviewstars + '<Br />' +
                '<span style="color:#336699">Reviewer</span> : ' + wine.reviewer + '<Br />' +
                '<span style="color:#336699">Potential </span>: ' + wine.potential + '<Br />' +
                '<span style="color:#336699">Review Date </span>: ' + wine.reviewdate + '<Br />' +
                '<span style="color:#336699">Food Pairing</span> : ' + wine.foodpairing + '<Br />' +
                '<span style="color:#336699">Varietal</span> : ' + wine.varietal + '<Br />' +
                '<span style="color:#336699">Producer</span> : ' + wine.producer + '<Br />' +
                '<span style="color:#336699">Review Text</span> : ' + wine.reviewtext + '<Br />' +
                '<span style="color:#336699">Vintages </span>: ' + wine.vintages + '<Br />' +
                '<span style="color:#336699">Alcohol</span> : ' + wine.alcohol + '<Br />' +
                '<span style="color:#336699">Vintage </span>: ' + wine.vintage + '<Br />' +
                '<span style="color:#336699">Year </span>: ' + wine.year + '<Br />' +
                '<span style="color:#336699">Lcbonum </span>: ' + wine.lcbonum + '<Br />' +
                '<span style="color:#336699">Wine Name</span> : ' + wine.name + '<Br />' +
                '</li>');
                //save in var
                tracking_data = '<span style="color:#336699">ID</span>: ' + wine.uniqueid + '<Br />' +
                '<span style="color:#336699">Price </span>: ' + wine.price + '<Br />' +
                '<span style="color:#336699">Region </span>: ' + wine.region + '<Br />' +
                '<span style="color:#336699">Review Stars </span>: ' + wine.reviewstars + '<Br />' +
                '<span style="color:#336699">Reviewer </span>: ' + wine.reviewer + '<Br />' +
                '<span style="color:#336699">Potential </span>: ' + wine.potential + '<Br />' +
                '<span style="color:#336699">Review Date</span> : ' + wine.reviewdate + '<Br />' +
                '<span style="color:#336699">Food Pairing </span>: ' + wine.foodpairing + '<Br />' +
                '<span style="color:#336699">Varietal </span>: ' + wine.varietal + '<Br />' +
                '<span style="color:#336699">Producer : ' + wine.producer + '<Br />' +
                '<span style="color:#336699">Review Text : ' + wine.reviewtext + '<Br />' +
                '<span style="color:#336699">Vintages </span>: ' + wine.vintages + '<Br />' +
                '<span style="color:#336699">Alcohol</span> : ' + wine.alcohol + '<Br />' +
                '<span style="color:#336699">Vintage</span> : ' + wine.vintage + '<Br />' +
                '<span style="color:#336699">Year </span>: ' + wine.year + '<Br />' +
                '<span style="color:#336699">Lcbonum</span> : ' + wine.lcbonum + '<Br />' +
                 '<span style="color:#336699">Wine Name</span> : ' + wine.name + '<Br />';
                //$('#track_id').text(wine.winename);
                track_id = wine.uniqueid;
                //alert(track_id);
                //alert(tracking_data);

            }
            //tracking_data=WinesDetails.val();           

        });
        $('#ClearWinesDetail').listview('refresh');
    });
});
//Save the data

function addtolist() {
    //alert("watch list");
    // Tidy up the UI
    //track_id = $("#track_id").val();
    //alert(track_id);
    //$("#track_id").hide();
    window.localStorage.setItem(track_id, JSON.stringify(tracking_data));
    alert("Succesfully added to watchlist");
}

//Wish list
// When the user views the history page
var tracks_recorded = '';
$('#watchlistpage').live('pageshow', function() {

    // Count the number of entries in localStorage and display this information to the user
    tracks_recorded = window.localStorage.length;
    //alert(tracks_recorded);
    $("#tracks_recorded").html("<strong>" + tracks_recorded + "</strong> Wines(s) added");

    // Empty the list of recorded tracks
    $("#history_tracklist").empty();

    // Iterate over all of the recorded tracks, populating the list
    for (i = 0; i < tracks_recorded; i++) {
        $("#history_tracklist").append("<li><a href='#track_info' data-ajax='false'>" + window.localStorage.key(i) + "</a></li>");
    }

    // Tell jQueryMobile to refresh the list
    $("#history_tracklist").listview('refresh');

});
// When the user clicks a link to view track info, set/change the track_id attribute on the track_info page.
$("#history_tracklist li a").live('click', function() {

    $("#track_info").attr("track_id", $(this).text());

});

// When the user views the Track Info page
$('#track_info').live('pageshow', function() {

    // Find the track_id of the workout they are viewing
    var key = $(this).attr("track_id");
    //alert(key);
    // Update the Track Info page header to the track_id
    $("#track_info div[data-role=header] h1").text(key);

    // Get all the GPS data for the specific workout
    var data = window.localStorage.getItem(key);
    //alert(data);
    // Turn the stringified GPS data back into a JS object
    data = JSON.parse(data);

    // Calculate the total distance travelled
    total_km = 0;

    for (i = 0; i < data.length; i++) {

        total_km += data[i];
    }
    // Display total distance and time
    $("#track_info_info").html(total_km);
});