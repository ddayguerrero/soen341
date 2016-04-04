function hoverInLogo(){
  document.getElementById("nav-logo").src="../../static/images/NullPointer-noarrow.png";
}

function hoverOutLogo(){
  document.getElementById("nav-logo").src="../../static/images/NullPointer.png";
}

//////////
// HTTP Requests for searching for courses
//////////
$( document ).ready(function() {
  var url = window.location.pathname;
  console.log(url);
  if(url == '/change_fall/')
  {
    $.ajax({
      url: '/fall_lectures',
      type: 'POST',
      cache: false,
      dataType: "json",
      error: function(error) {
        console.log(error);
      },
      success: function(data) {
        $('#body').empty();
        $.each(data.lectures, function(idx, lecture) {
          var entry = '<tr>' + 
            '<td>' + lecture.section + '</td>' + 
            '<td>' + lecture.full_name + '</td>' +
            '<td>' + lecture.name + '</td>' + 
            '<td>' + lecture.start_time + '</td>' + 
            '<td>' + lecture.end_time + '</td>' + 
            '<td>' + lecture.instructor + '</td>' +
            '<td><input type="checkbox" value="class1"></td></tr>';
          $('#body').append(entry);
        });
      }
    });
  }
  else if(url == '/change_winter/')
  {
    $.ajax({
      url: '/winter_lectures',
      type: 'POST',
      cache: false,
      dataType: "json",
      error: function(error) {
        console.log(error);
      },
      success: function(data) {
        $('#body').empty();
        $.each(data.lectures, function(idx, lecture) {
          var entry = '<tr>' + 
            '<td>' + lecture.section + '</td>' + 
            '<td>' + lecture.full_name + '</td>' +
            '<td>' + lecture.name + '</td>' + 
            '<td>' + lecture.start_time + '</td>' + 
            '<td>' + lecture.end_time + '</td>' + 
            '<td>' + lecture.instructor + '</td>' +
            '<td><input type="checkbox" value="class1"></td></tr>';
          $('#body').append(entry);
        });
      }
    });
  }
  else if(url == '/change_summer/')
  {
    $.ajax({
      url: '/summer_lectures',
      type: 'POST',
      cache: false,
      dataType: "json",
      error: function(error) {
        console.log(error);
      },
      success: function(data) {
        $('#body').empty();
        $.each(data.lectures, function(idx, lecture) {
          var entry = '<tr>' + 
            '<td>' + lecture.section + '</td>' + 
            '<td>' + lecture.full_name + '</td>' +
            '<td>' + lecture.name + '</td>' + 
            '<td>' + lecture.start_time + '</td>' + 
            '<td>' + lecture.end_time + '</td>' + 
            '<td>' + lecture.instructor + '</td>' +
            '<td><input type="checkbox" value="class1"></td></tr>';
          $('#body').append(entry);
        });
      }
    });
  }


  $("#searchBox").on("change paste keyup", function() {
    var text = $(this).val(); 
    if(url == '/change_fall/')
    {
      $.ajax({
        url: '/fall_lectures_search',
        type: 'POST',
        cache: false,
        data: {
          'search' : text
        },
        dataType: "json",
        error: function(error) {
          console.log(error);
        },
        success: function(data) {
          $('#body').empty()
          $.each(data.lectures, function(idx, lecture) {
            var entry = '<tr>' + 
              '<td>' + lecture.section + '</td>' + 
              '<td>' + lecture.full_name + '</td>' +
              '<td>' + lecture.name + '</td>' + 
              '<td>' + lecture.start_time + '</td>' + 
              '<td>' + lecture.end_time + '</td>' + 
              '<td>' + lecture.instructor + '</td>' +
              '<td><input type="checkbox" value="class1"></td></tr>';
            $('#body').append(entry);
          });
        }
      });
    }
    else if(url == '/change_winter/')
    {
      $.ajax({
        url: '/winter_lectures_search',
        type: 'POST',
        cache: false,
        data: {
          search: text
        },
        dataType: "json",
        error: function(error) {
          console.log(error);
        },
        success: function(data) {
          $('#body').empty()
          $.each(data.lectures, function(idx, lecture) {
            var entry = '<tr>' + 
              '<td>' + lecture.section + '</td>' + 
              '<td>' + lecture.full_name + '</td>' +
              '<td>' + lecture.name + '</td>' + 
              '<td>' + lecture.start_time + '</td>' + 
              '<td>' + lecture.end_time + '</td>' + 
              '<td>' + lecture.instructor + '</td>' +
              '<td><input type="checkbox" value="class1"></td></tr>';
            $('#body').append(entry);
          });
        }
      });
    }
    else if(url == '/change_summer/')
    {
      $.ajax({
        url: '/summer_lectures_search',
        type: 'POST',
        cache: false,
        data: {
          search: text
        },
        dataType: "json",
        error: function(error) {
          console.log(error);
        },
        success: function(data) {
          $('#body').empty()
          $.each(data.lectures, function(idx, lecture) {
            var entry = '<tr>' + 
              '<td>' + lecture.section + '</td>' + 
              '<td>' + lecture.full_name + '</td>' +
              '<td>' + lecture.name + '</td>' + 
              '<td>' + lecture.start_time + '</td>' + 
              '<td>' + lecture.end_time + '</td>' + 
              '<td>' + lecture.instructor + '</td>' +
              '<td><input type="checkbox" value="class1"></td></tr>';
            $('#body').append(entry);
          });
        }
      });
    }
  });
});
