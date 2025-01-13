/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('serviceID', 'templateID', '##form', 'publicKey')
        .then(() => {
            // Show message and add color
            contactMessage.textContent = 'Message sent successfully ✅'

            // Remove message after five seconds
            setTimeout(() => {
               contactMessage.textContent = '' 
            }, 5000);

            // To clear the input field
            contactForm.reset()
        }, () => {
            // Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
        
    }

contactForm.addEventListener('submit', sendEmail)