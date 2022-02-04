
const getCadastroHtml = () => {
const main = document.getElementById('root')
const dadosHtml = `
<form id="formulario">
<h1>Novo Cliente</h1> 
<label for="">Nome do Cliente</label>
<input id="name" type="text" required placeholder="Digite o seu nome">
<br/><br/>
<label for="">Modelo</label>
<input id="modelo" type="text" required placeholder="Digite o modelo do veículo">
<br/><br/>
<label for="">Tipo</label>
<select id="tipo" type="text" required placeholder="Digite o tipo do veículo">
    <option value="1">Carro</option>
    <option value="0">Moto</option>
</select> <br/><br/>

<label for="">Placa</label>
<input id="placa" type="text" required placeholder="Digite a placa do veículo">
<br/><br/>
<label for="">Observações</label>
<input id="observacoes" type="text" required placeholder="Observações">
<br/><br/>
<div>
    <button id="cancelar" type="button">Cancelar</button>
    <button id= "salvar" type="submit">Salvar</button>
</div>
</form> `

main.innerHTML = dadosHtml
}
    const getListaClienteHtml = () => {
    const main = document.getElementById('root')
    const dadosHtml = `
    const getListaClienteHtml = () => {
        <section>
        <h1>Lista de Clientes</h1>
        <table>
            <tr>
                <th>Cliente</th>
                <th>Modelo</th>
                <th>Placa</th>
                <th>Tipo</th>
                <th>Observaçoes</th>
                <th><a>Novo</a></th>
            </tr>
        </table>
      </section>`
    
    main.innerHTML = dadosHtml
    }

    export const view = {
        getListaClienteHtml,
        getCadastroHtml
    }
    
    

