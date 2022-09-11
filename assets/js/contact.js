// emailjs.init("8BNEosXr4MeYw-4I0");


// submitBtn.addEventListener("click", function (event) {
//     event.preventDefault();
   
//     const serviceID = 'service_uklo3ca';
//     const templateID = "template_eiz3yrh";
 
//     // send the email here
//     emailjs.sendForm('serviceID','templateID' , thankYouForm).then(
//       (response) => {
//         console.log("SUCCESS!", response.status, response.text);
//         return;
//         alert("SUCCESS!");
//       },
//       (error) => {
//         console.log("FAILED...", error);
//         alert("FAILED...", error);
//       }
//     );
//   });
 
//   submitBtn.addEventListener('click',function(){
     
 
//   });

// const sendFormButton = document.getElementById("btn-send-form");

thankYouForm.addEventListener("submit", function (event) {
    event.preventDefault();
    emailjs.init("8BNEosXr4MeYw-4I0");
   submitBtn.value = "Sending..."; //changing value of the button when sending in progress

    emailjs.sendForm('service_uklo3ca', 'template_eiz3yrh', this)
        .then(() => {
            submitBtn.value = "Send";
            // alert('success');
            console.log('succes');
            submitBtn.setAttribute('disabled',true);
            document.querySelector('#thnx-message').style.display="block"
            thankYouForm.reset();


        }, (err) => {
           console.log('error');
           alert('failed')
        });
});

// submitBtn.addEventListener('click',function(){
//     setTimeout(function(){
//         document.querySelector('#thnx-message').style.display="block";
//         thankYouForm.reset();
//         submitBtn.setAttribute('disabled',true);

//     },1500)   
// });