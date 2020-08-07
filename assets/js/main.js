$(window).scroll(function() {
    if (document.documentElement.scrollTop >= 100) {
        $("nav").addClass("bg-dark");
    } else {
        $("nav").removeClass("bg-dark");
    }
});