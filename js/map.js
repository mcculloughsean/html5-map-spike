
$( function () { 
  var myOptions = {
    center: new google.maps.LatLng(41.960558,-87.698719),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  window.map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
  $('.trucks .truck').each(function(i,e) {
    var el = $(e);
    var latLon = undefined;
    if(typeof(el.attr("data-lat")) != "undefined") { 
      var myLat=parseFloat(el.attr("data-lat"));
      var myLon=parseFloat(el.attr("data-lon"));
      latlon = new google.maps.LatLng(myLat, myLon)
    } 
    else if (typeof(el.attr("data-address")) != "undefined") { 
      var myAddress = el.attr('data-address');
      var geocodeUrl = "http://maps.googleapis.com/maps/api/geocode/json?address=" + escape(myAddress) + "&sensor=false"
      console.log("WE NEED TO CALL  "+ geocodeUrl);
      $.get(geocodeUrl, function(data) {
        console.log("WE GOT SOMETHING");
        console.log(data);
      });
    }
    var marker = new google.maps.Marker({
      position: latlon, 
      map: map,
      title:"Hello World!"
    });
    var infowindow = new google.maps.InfoWindow({
      content: "FOO this works BAR" 
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });

  }
                          );


} ); 
