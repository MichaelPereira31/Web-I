const calculaParcelas = () => {
  const inpValor = document.querySelector("#valor")
  const inpPacelas = document.querySelector("#parcela")
  const table = document.querySelector("#table-list")

  const total = parseFloat(inpValor.value)
  const qtdParcelas = parseFloat(inpPacelas.value)

  const valorTotal = qtdParcelas > 5 ? (total * 0.1) + total : total
  const valorParcela = valorTotal / qtdParcelas
  
  let parcelas = ''

  for (let index = 0; index < qtdParcelas; index++) {
    parcelas += `
      <tr>
        <td>${index+1}</td>
        <td>R$ ${valorParcela}</td>
      </tr>
    `
  }
  table.innerHTML = parcelas
}