var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span class="accent-100">%data%</span><hr class="accent-200"/>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="%class%">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="zocial-call"></span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="zocial-gmail"></span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="zocial-twitter"></span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="zocial-github"></span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="zocial-blogger"></span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="zocial-pinboard"></span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLWelcomeMsg = '<span class="welcome-message primary-100">%data%</span>';

var HTMLskillsStart = '<h3 id="skillsH3" class="accent-100 skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#" class="primary-500">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#" class="primary-500">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<div id="%id%-holder"><img id="%id%" src="%data%"></div>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="%url%" class="primary-500">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="%url%" class="primary-500">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="%url%">%data%</a>';

var internationalizeButton = '<button id="inname">Internationalize</button>';
var googleMap = '<div id="map"></div>';


$(document).ready(function() {
  $('#inname').click(function() {
    var iName = inName($('#name').text()) || function(){};
    $('#name').html(iName);
  });
  $('#project1-image-holder').click(function() {
    zoomInOut('project1-image');
  });
  $('#project2-image-holder').click(function() {
    zoomInOut('project2-image');
  });
  $('#project3-image-holder').click(function() {
    zoomInOut('project3-image');
  });
});

// internationalize name
function inName(name) {
  var names = name.split(' ');
  names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
  names[1] = names[1].toUpperCase();
  return names.join(' ');
}

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

// logs click locations
$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

function initialize() {
  var mapOptions = {
    disableDefaultUI: true,
    //center: new google.maps.LatLng(-23.8668283734, 151.2064891821),
    center: new google.maps.LatLng(20.933828, -84.096511),
    draggable: true,
    maxZoom: 15,
    styles: [
    {
      stylers: [{ visibility: 'simplified' }]
    }
    ],
    zoom: 3
  };

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var infoWindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  //google.maps.event.addListenerOnce(map, 'bounds_changed', performSearch);

  // For each locations, perform a search
  function performSearch(locations) {
    locations.forEach(function(location) {
      service.textSearch({query: location}, callback);
    });
  }

  // Callback for the search of the location service. If the search found results, create a marker
  // There are city names, with countries. Assume the first result is the one we look for
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMarker(results[0]);
    }
  }

  // Go through all schools and jobs to extract locations. It returns an array with no duplicates
  function locationFinder() {
    var locations = [];
    locations.push(bio.contacts.location);
    education.schools.forEach(function(school) {
      locations.push(school.location);
    });

    work.jobs.forEach(function(job) {
      job.location.forEach(function(loc) {
        locations.push(loc);
      });
    });

    // remove duplicates before returning
    return locations.filter(function(location, idx, self) {
      return self.indexOf(location) == idx;
    });
  }

  // Takes a 'place' returned by the google api, and create a marker on the map with information from that place
  function createMarker(place) {
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location,
      title: name
    });

    // Display a popup with the location name when the marker is clicked
    google.maps.event.addListener(marker, 'click', function() {
      service.getDetails(place, function(result, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          infoWindow.setContent('<h1>' + result.name + '</h1>');
          infoWindow.open(map, marker);
        }
      });
    });
  }

  var locations = locationFinder();
  performSearch(locations);
}

// initialize the map on page load
google.maps.event.addDomListener(window, 'load', initialize);
