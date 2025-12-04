const toggleButton = document.querySelector('.menu-toggle');
  const menu = document.getElementById('menu');

  toggleButton.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('menu--open');
    toggleButton.classList.toggle('is-open', isOpen);
    toggleButton.setAttribute('aria-expanded', isOpen);
  });

  /*
  emailjs.init("phd6wj1O613yZNK9w");

const form = document.getElementById("formulario");
const btnSubmit = document.getElementById("btnSubmit");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Validação simples
  const name = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!name || !email || !subject || !mensagem) {
    Toastify({
      text: "Preencha todos os campos obrigatórios antes de enviar.",
      duration: 4000
    }).showToast();
    return;
  }

  
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const formData = { name, email, subject, mensagem };

  const serviceID = "service_gywkank";
  const templateID = "template_prgoe01";

  btnSubmit.disabled = true;
  btnSubmit.textContent = "Enviando...";

  emailjs.send(serviceID, templateID, formData)
    .then(() => {
      Toastify({
        text: "Your message has been sent successfully!",
        duration: 4000
      }).showToast();
      form.reset();
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      Toastify({
        text: "Error sending message! Please check if all fields have been filled in.",
        duration: 4000
      }).showToast();
    
    })
    .finally(() => {
      btnSubmit.textContent = "Enviar mensagem";
      btnSubmit.disabled = false;
    });
});
*/