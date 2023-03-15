function getTime() {
  $.ajax({
    url: "http://worldtimeapi.org/api/timezone/America/Los_Angeles",
    type: "GET",
    success: function (response) {
      let timezone = response;
      let html = document.getElementById("time");
      html.innerHTML = timezone.datetime;
      console.log(timezone.datetime);
    },
    error: function () {
      console.log(details);
    },
  });
}
getTime();
