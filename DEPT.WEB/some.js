document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarMenu = document.querySelector("#navbarNav");

    if (navbarToggler && navbarMenu) {
        navbarToggler.addEventListener("click", function () {
            navbarMenu.classList.toggle("show");
        });
    }

    const form = document.querySelector("#register-form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = form.querySelector("input[type='text']").value;
            const email = form.querySelector("input[type='email']").value;

            if (name && email) {
                alert(`Registration Successful!\nName: ${name}\nEmail: ${email}`);
                form.reset();
            } else {
                alert("Please fill out all fields!");
            }
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        const myCarousel = document.querySelector("#carouselExampleIndicators");
        const carousel = new bootstrap.Carousel(myCarousel, {
            interval: 3000, // Change image every 3 seconds
            wrap: true // Loop back to first image after last
        });
    });
    

    const chatInput = document.querySelector('.chat-input');
    const chatBody = document.querySelector('.chat-body');

    if (chatInput && chatBody) {
        chatInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter' && this.value.trim() !== "") {
                const userMessage = this.value;
                this.value = "";

                const newMessage = document.createElement('p');
                newMessage.textContent = "You: " + userMessage;
                chatBody.appendChild(newMessage);

                setTimeout(() => {
                    const botMessage = document.createElement('p');
                    botMessage.textContent = "AI: I am here to help!";
                    chatBody.appendChild(botMessage);
                    chatBody.scrollTop = chatBody.scrollHeight;
                }, 1000);
            }
        });
    }
});
