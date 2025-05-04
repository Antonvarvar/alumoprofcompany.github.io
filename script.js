var $headline = $(".headline"),
  $inner = $(".inner"),
  $nav = $("nav"),
  navHeight = 75;

$(window).scroll(function () {
  var scrollTop = $(this).scrollTop(),
    headlineHeight = $headline.outerHeight() - navHeight,
    navOffset = $nav.offset().top;

  $headline.css({
    opacity: 1 - scrollTop / headlineHeight,
  });
  $inner.children().css({
    transform: "translateY(" + scrollTop * 0.4 + "px)",
  });
  if (navOffset > headlineHeight) {
    $nav.addClass("scrolled");
  } else {
    $nav.removeClass("scrolled");
  }
});
document.addEventListener("itc.successSendForm", (e) => {
  const el = e.target.closest(".form-container").querySelector(".form-success");
  el.classList.remove("form-success_hide");
});
document.querySelector(".form-success__btn").addEventListener("click", (e) => {
  const el = e.target.closest(".form-container").querySelector("form");
  const form = ItcSubmitForm.getOrCreateInstance(el);
  form.reset();
  e.target
    .closest(".form-container")
    .querySelector(".form-success")
    .classList.add("form-success_hide");
});
ItcSubmitForm.getOrCreateInstance("form");
ItcSubmitForm.getOrCreateInstance("form", {
  isCheckValidationOnClient: true,
  attachMaxItems: 5,
  attachMaxFileSize: 512,
  attachExt: ["jpg", "jpeg", "bmp", "gif", "png"],
});
const HAS_ATTACH_REQUIRED = false;
const ALLOWED_MIME_TYPES = ["image/jpeg", "image/gif", "image/png"];
const MAX_FILE_SIZE = 512 * 1024;
