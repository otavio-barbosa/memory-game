const input = document.querySelector('.login-input'); //O primeiro elemento no documento com a classe "login_input" é retornado:
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');

const  inputValidator = ({ target }) => { //destructing de event.target
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
        return; //Atendeu o if, retorna para o final da função pulando as linhas de baixo
    } 
    
    button.setAttribute('disabled', '')
}

const handleSubmit = (event) => {
    event.preventDefault(); // Previnir do padrão (carregar página com submit);

    localStorage.setItem('Player', input.value); //Registra no local storage (navegador) um key com um valor. 
    window.location = './pages/game.html';  //Redireciona para a página (janela) da url.
}

input.addEventListener('input', inputValidator); //registra uma única espera de evento em um único alvo
form.addEventListener('submit', handleSubmit);
