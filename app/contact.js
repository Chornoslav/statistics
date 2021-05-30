const handleSubmit1 = (e) => {
    e.preventDefault();
    let myForm = document.getElementById('contactForm');
    let formData = new FormData(myForm);
    fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    }).then(() => {
        document.querySelector('.active-form .main-headline').innerText = 'Thank you!';
        document.getElementById('contactForm').remove();
        setTimeout(function () {
            document.querySelector('aside').classList.remove('active-form');
        },3000)
    }).catch((error) =>
        alert(error))
};
document.querySelector("form").addEventListener("submit", handleSubmit1)