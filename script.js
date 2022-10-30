let select = []
const tab = document.querySelector('select#seltab')
const result = document.querySelector('div#result')

function add() {
    const num = document.querySelector('input#num')
    const number = num.value

    if (num.value.length == 0) 
    {
        alert("Preencha o campo")
    }
    else if (number <= 100) 
    {
        if (select.includes(parseInt(number)) == true) 
        {
            alert("Este valor já foi adicionado")
        }
        else
        {
            const option = document.createElement("option")

            select.push(parseInt(number))
            option.text = `Valor ${select[select.length - 1]} adicionado.`
            tab.appendChild(option)
        }
    }
    else 
    {
        alert("Digite um número menor ou igual a 100")
    }
    num.value = ''
    num.focus()
    result.innerHTML = ''
}

function end() {
    if (select.length == 0) 
    {
        alert("Adicione valores antes de finalizar")
    }
    else 
    {
        const qty = select.length
        let sum = 0
        for (let c = 0; c < select.length; c++) {
            sum += select[c];
        }
        const sumres = sum
        const av = sum / qty

        select.sort((a,b) => a - b)
        const min = select[0]
        const max = select[select.length - 1]

        result.innerHTML = 
        `<p>Ao todo, temos ${qty} números cadastrados.</p>
        <p>O maior valor informado foi ${max}.</p>
        <p>O menor valor informado foi ${min}.</p>
        <p>Somando todos os valores, temos ${sumres}.</p>
        <p>A média dos valores digitados é ${av}.</p>`
    }
}

function clean() {
    select = []
    num.value = ''
    result.innerHTML = ''
    tab.innerHTML = ''
}