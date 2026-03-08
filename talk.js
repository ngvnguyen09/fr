$(function () {
  // Nút "Rồi!" → bắn pháo hoa thẳng, không popup
  $("#yes").click(function (event) {
    fireworks();
  });
});

function A() {
  modal("Hôm nay là 8/3 — Ngày Quốc tế Phụ nữ 🌍", B);
}

function B() {
  modal("Ngày dành riêng để tôn vinh những người phụ nữ tuyệt vời 💐", C);
}

function C() {
  modal("Như em đó — xinh đẹp, tốt bụng và rất đặc biệt ❤️", D);
}

function D() {
  modal("Hôm nay em được phép vui hết mình nhé! 🎉", E);
}

function E() {
  modal("Chúc em luôn tươi cười và hạnh phúc mãi mãi! 😊", F);
}

function F() {
  modal("Được yêu thương, được trân trọng — em xứng đáng với tất cả! 💝", G);
}

function G() {
  modal("Nhân ngày 8/3, xin tặng em một màn pháo hoa thật đẹp! 🎆", H);
}

function H() {
  modal("🌹 Chúc mừng ngày 8/3! Yêu em nhiều lắm! 🌹", function () {
    fireworks();
  });
}

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
