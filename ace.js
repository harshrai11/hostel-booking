document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    form.reset();
    window.location.href = "form.html";
  });
});

 document.querySelector(".read-more-btn").addEventListener('click',function(e){
 e.preventDefault();
  document.querySelector(".paraA").innerText=`We, at Book My PG, take pride in being India's fastest-growing and most trusted platform for managed Paying Guest (PG) accommodations. Our mission is to revolutionize the rental experience by making it smarter, safer, and more convenient for students, working professionals, and anyone seeking hassle-free living spaces.
With our technology-driven approach, we offer a wide range of verified PG options across major cities in India, tailored to meet your preferences and budget. From well-designed living spaces to high standards of hygiene, security, and comfort — we bring everything under one roof to make your stay comfortable and worry-free.
Whether you're relocating for work, education, or lifestyle, D hostels is your one-stop solution to discover, compare, and book PG homes with ease. Backed by a dedicated support team and innovative tools, we ensure you enjoy a smooth and transparent rental journey from search to stay.`
 });


