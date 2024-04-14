const form = document.getElementById('form-check');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const num1 = campo_a.value
    const num2 = campo_b.value
    const menssagemSucesso = 'VÁLIDO';
    const menssagemSemSucesso = 'INVÁLIDO';

    if(num2 > num1) {
        const containerMensagemsucesso = document.querySelector('.sucess-message');
        containerMensagemsucesso.innerHTML = menssagemSucesso;
        containerMensagemsucesso.style.display = 'block';

    } else{
        const containerMensagemSemsucesso = document.querySelector('.error-message');
        containerMensagemSemsucesso.innerHTML = menssagemSemSucesso;
        document.querySelector('.error-message').style.display = 'block';
    }

})

