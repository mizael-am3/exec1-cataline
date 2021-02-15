const submitButton = document.querySelector('#app form button')
const zipCodeFile = document.querySelector('#app form input')
const content = document.querySelector('#app main')

submitButton.addEventListener('click', run)

function run(event) {
    event.preventDefault()
    var zipCode = zipCodeFile.value
    zipCode = zipCode.replace(' ', '')
    zipCode = zipCode.replace('.', '')
    zipCode = zipCode.replace(',', '')
    zipCode = zipCode.replace('-', '')
    zipCode = zipCode.trim()


    axios
        .get(`http://viacep.com.br/ws/${zipCode}/json/`)
        .then(function (response) {
            content.innerHTML = ''
            creatLine('DDD ' + response.data.ddd)
            creatLine(response.data.logradouro)
            creatLine(response.data.localidade + ' - ' + response.data.uf)
            console.log(response.data)
        })
        .catch(function (error) {
            console.log("Erro")
        })
}

function creatLine(text) {
    var line = document.createElement('p')
    var text = document.createTextNode(text)

    line.appendChild(text)
    content.appendChild(line)
}