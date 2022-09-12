/**
 * setting up emailjs service for 
 * thank you form
 */
thankYouForm.addEventListener("submit", function (event) {
    event.preventDefault();
    emailjs.init("8BNEosXr4MeYw-4I0");
   submitBtn.value = "Sending..."; //change value of the button when sending is in progress

    emailjs.sendForm('service_uklo3ca', 'template_eiz3yrh', this)
        .then(() => {
            submitBtn.value = "Send";
            
            console.log('succes');
            submitBtn.setAttribute('disabled',true);
            document.querySelector('#thnx-message').style.display="flex"
            thankYouForm.reset();


        }, (err) => {
           console.log('error');
           alert('failed')
        });
});

