$(function () {
  // Nút "Mở ra" → bắn pháo hoa thẳng, không popup
  $("#yes").click(function (event) {
    fireworks();
  });
});

function fireworks() {
  $(".page_one").addClass("hide");
  // Play nhạc ngay sau user interaction → browser luôn cho phép
  var music = document.getElementById("music");
  if (music) music.play().catch(function () {});
  initAnimate();
}

function modal(content, callback) {
  var tpl =
    '<div class="container">' +
    '<div class="mask"></div>' +
    '<div class="modal">' +
    "<p>" +
    content +
    "</p>" +
    '<button type="button" id="confirm" class="confirm">💖 OK</button>' +
    "</div>" +
    "</div>";
  $("body").append(tpl);
  $(document).on("click", ".confirm", function () {
    $(".container").remove();
    callback();
  });
}
