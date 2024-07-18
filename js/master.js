$(() => {
  // Loader
  $(".loader-section").fadeOut(500);
  $("body , html").css({ overflow: "visible" });
  // Loader

  countDate();

  // Sidebar
  $(".openbtn").on("click", function () {
    $(".sidebar").addClass("open");

    $(".home-content").animate({ marginLeft: "250px" }, 400);
  });
  $(".closebtn").on("click", function () {
    $(".sidebar").removeClass("open");
    $(".home-content").animate({ marginLeft: "0" }, 400);
  });
  // Sidebar

  // Accordion
  $(".slide").on("click", function (e) {
    $(e.target).next().slideToggle(200);
  });
  // Accordion

  // Sidebar links
  $(".sidebar ul li a[href^='#'").on("click", function (e) {
    e.preventDefault();
    const section = $(e.target).attr("href");
    const sectionOffset = $(section).offset().top;
    $("html, body").animate({ scrollTop: sectionOffset }, 10);
  });
  // Sidebar links

  // Count Date
  function countDate() {
    const currentDate = new Date(Date.now());
    const dateTo = new Date("2024/8/5 10:55:00");
    const diff = dateTo.getTime() / 1000 - currentDate.getTime() / 1000;
    const days = Math.floor(diff / (24 * 60 * 60));
    const hours = Math.floor((diff - days * (24 * 60 * 60)) / 3600);
    const mins = Math.floor((diff - days * (24 * 60 * 60) - hours * 3600) / 60);
    const secs = Math.floor(
      diff - days * (24 * 60 * 60) - hours * 3600 - mins * 60
    );

    $(".day").html(`${days} D`);
    $(".hour").html(`${hours} H`);
    $(".min").html(`${mins} M`);
    $(".sec").html(`${secs} S`);
  }
  setInterval(() => {
    countDate();
  }, 1000);
  // Count Date

  // Message Number
  const count = 100;
  $("#message").on("keyup", function (e) {
    const currentLength = -($("#message").val().length - count);
    if (currentLength <= 0) {
      $(".chars-number").html("your available character finished");
    } else {
      $(".chars-number").html(currentLength);
    }
  });
  // Message Number
});
