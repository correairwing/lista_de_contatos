const form = document.getElementById('formContatos')
const nomeContato = [];
const numeroContato = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nomeContato')
    const inputNumeroContato = document.getElementById('numeroContato')

    if(nomeContato.includes(inputNomeContato.value)) {
        alert(`O contato já foi inserido`)
    } else {
        nomeContato.push(inputNomeContato.value);
        numeroContato.push(parseFloat(inputNumeroContato.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `</tr>`;
    
        linhas += linha
    }


    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}
