const inputModelo = document.getElementById('modeloCarro');
const inputMarcaCarro = document.getElementById('marcaCarro');
const inputAnoCarro = document.getElementById('anoCarro'); 
const inputPrecoCarro = document.getElementById('precoCarro');
const descricaoCarro = document.getElementById('descricaoCarro');

const btnCadastro = document.getElementById('btn-cadastro');

btnCadastro.addEventListener('click', async (event) => {
    event.preventDefault(); 

    const modelo = inputModelo.value.trim();
    const marca = inputMarcaCarro.value.trim();
    const ano = parseInt(inputAnoCarro.value);
    const preco = parseFloat(inputPrecoCarro.value);
    const descricao = descricaoCarro.value.trim();

    
    if (modelo.length < 3) {
        alert("O modelo precisa ter pelo menos 3 caracteres");
        return;
    }else if(marca.length < 2) {
        alert("A marca precisa ter pelo menos 2 caracteres");
        return;
    }else if(ano < 1900 || ano > new Date().getFullYear()) {
        alert("Ano inválido");
        return;
    }else if(preco <= 0) {
        alert("Preço inválido");
        return;
    }else if(descricao.length < 10) {
        alert("Descrição muito curta");
        return;
    }else {
        alert('Cadastrado feito com sucesso!')
        inputModelo.value = '';
        inputMarcaCarro.value = '';
        inputAnoCarro.value = '';
        inputPrecoCarro.value = '';
        descricaoCarro.value = '';
        return
    }

    
})


