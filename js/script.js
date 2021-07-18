const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email= document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let content = document.getElementById ('content')

    let carregando = `<p>Carregando...</p>`

    content.innerHTML= carregando

    setTimeout (() => {
        content.innerHTML = "Pronto!"
    },1000)

})

function calculaContagemRegressiva(){
    let dataBlackFriday = new Date(2021, 10, 26)
    let dataAtual = new Date()
    let diferencaSegundos =  Math.floor((dataBlackFriday.getTime() - dataAtual.getTime()) / 1000)

    let dias = Math.floor(diferencaSegundos / 86400)  
    diferencaSegundos = diferencaSegundos % 86400

    let horas = Math.floor(diferencaSegundos / 3600)  
    diferencaSegundos = diferencaSegundos % 3600

    let minutos = Math.floor(diferencaSegundos / 60)  

    let segundos = diferencaSegundos % 60

    document.getElementById('contagemregressiva-dias').innerHTML = dias.toString().padStart(2,"0")
    document.getElementById('contagemregressiva-horas').innerHTML = horas.toString().padStart(2,"0")
    document.getElementById('contagemregressiva-minutos').innerHTML = minutos.toString().padStart(2,"0")
    document.getElementById('contagemregressiva-segundos').innerHTML = segundos.toString().padStart(2,"0")
}

calculaContagemRegressiva()

setInterval (() => {
    calculaContagemRegressiva() 
}, 1000)