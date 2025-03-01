// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Background Image Slideshow
const images = [
    "https://i.pinimg.com/736x/87/e4/a8/87e4a81289e53fd0814458ec60d44028.jpg",
    "https://example.com/another-image.jpg",
    "https://example.com/more-images.jpg"
];

let index = 0;
function changeBackground() {
    document.body.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
}

setInterval(changeBackground, 5000); // Change every 5 seconds

// Service Price Calculator
function calculateTotal() {
    let total = 0;
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(item => {
        total += parseInt(item.value);
    });
    document.getElementById("totalPrice").innerText = "Total: RM " + total;
}

// Contact Form Validation
function validateForm() {
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    
    if (!email.includes("@") || email.length < 5) {
        alert("Please enter a valid email.");
        return false;
    }
    
    if (isNaN(phone) || phone.length < 10) {
        alert("Please enter a valid phone number.");
        return false;
    }
    
    alert("Form submitted successfully!");
    return true;
}
