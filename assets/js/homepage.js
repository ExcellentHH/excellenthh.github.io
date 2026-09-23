/* Keep the template's smooth scrolling clear of its sticky navigation. */
$(function () {
  var menu = $("#navigation-overflow");
  var button = $("#site-nav button");

  function closeMenu() {
    menu.addClass("hidden");
    button.removeClass("close").attr("aria-expanded", "false");
  }

  $("a").smoothScroll({
    beforeScroll: function (options) {
      options.offset = -($(".masthead").outerHeight() + 16);
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        options.speed = 0;
      }
      closeMenu();
    }
  });

  button.on("click", function () {
    button.attr("aria-expanded", String(!menu.hasClass("hidden")));
  });
  $(window).on("resize", closeMenu);
  $(document).on("keydown", function (event) {
    if (event.key === "Escape" && !menu.hasClass("hidden")) {
      closeMenu();
      button.trigger("focus");
    }
  });
});
