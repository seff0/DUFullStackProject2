$(document).ready(() => {
  const endTrip = $("#endBtn");

  endTrip.on("click", (event) => {
    event.preventDefault();

    let choices = "";
    function getChecked() {
      return $.map(
        $("input[name=check-fav]:checked"),
        (elem) => elem.dataset.id
      );
    }
    choices += getChecked();

    saveFavs(choices);
  });

  function saveFavs(favs) {
    $.post("/api/favs", {
      favs: favs,
    })
      .then(function () {
        window.location.replace("/end");
      })
      .catch();
  }
});
