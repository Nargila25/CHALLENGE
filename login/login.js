<script>
  // Validação do formulário de login com variáveis
  (() => {
    'use strict';

    // Variáveis principais
    const validationClass = 'needs-validation';   // classe usada no form
    const validatedClass = 'was-validated';       // classe que será adicionada
    const forms = document.querySelectorAll(`.${validationClass}`);

    // Loop para cada formulário
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {

        // Variáveis dos campos
        const usuario = form.querySelector('#usuario');
        const senha = form.querySelector('#senha');
        console.log(usuario);
        // Verificação da validade do formulário
        const isFormValid = form.checkValidity();

        // Regras adicionais (caso queira reforçar)
        if (!usuario.value.trim() || !senha.value.trim()) {
          event.preventDefault();
          event.stopPropagation();
          alert("Por favor, preencha usuário e senha.");
        }

        if (!isFormValid) {
          event.preventDefault();
          event.stopPropagation();
        }

        // Aplica a classe de feedback visual
        form.classList.add(validatedClass);

      }, false);
    });
  })();
</script>