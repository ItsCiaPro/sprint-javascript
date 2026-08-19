const formButton = document.querySelector('.form_button');
console.log(formButton.innerText);

//class contato
class contato {
    constructor (nome, email, telefone, contato) {
        this.nome = nome;
        this.email= email;
        this.telefone = telefone;
        this.contato = contato;

        console.log(this);
    }
}

function Post(form) {

    let data = new contato(
        form.elements['nome'].value,
        //form.elements.namedItem("sobrenome").value, 
        form.elements['email'].value, 
        //form.elements.namedItem("cpf").value, 
        form.elements['telefone'].value, 
        form.elements['contato'].value
    );

    
}

function SincronizarBotao(checkbox = null) {
    if (checkbox === null) {
        formButton.disabled = true;
        return
    }

    formButton.disabled = !checkbox.checked;
} 

window.addEventListener('pageshow', (event) => {
    SincronizarBotao();
});

function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}