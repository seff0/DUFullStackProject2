$(document).ready(function() {
  function printLocs(){
    $.get("/api/fav_locs", data => {
      console.log(data.fav_locs);
    })
  }
  
  printLocs();
});