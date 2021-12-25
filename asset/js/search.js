$(document).ready(() => {
  $("#search-game-form").submit(function (event) {
    event.preventDefault();
    searchGame();
  });

  function searchGame() {
    const input = document.getElementById("gameValue").value.toLowerCase();

    switch (input) {
      case "damdaman":
        return (window.location.href = "damdaman.html");
      case "ular tangga":
        return (window.location.href = "ulartangga.html");
      case "dakon":
        return (window.location.href = "dakon.html");
      case "gedrik":
        return (window.location.href = "gedrik.html");
      case "gobak sodor":
        return (window.location.href = "gobaksodor.html");
      case "gangsing":
        return (window.location.href = "gangsing.html");
      case "tentang kami":
        return (window.location.href = "tentangKami.html");
      case "permainan":
        return (window.location.href = "permainan.html");
      case "belanja":
        return (window.location.href = "belanja.html");
      default:
        return (window.location.href = "404.html");
    }
  }
});
