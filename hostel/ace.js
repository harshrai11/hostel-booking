document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    form.reset();
    window.location.href = "form.html";
  });
});