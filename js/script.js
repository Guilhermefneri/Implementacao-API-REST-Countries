function countryApi(){
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => mostrarPais(data))
}

// mostrar todos os países
function mostrarPais(paises){
    const paisesHTML = paises.map(pais => pegarPais(pais))

    //mostrar div no html
    const buscaPais = document.getElementById('buscaPais');
    buscaPais.innerHTML = paisesHTML.join(' ');
}

// pegar os dados dos países e colocar no html
function pegarPais(pais){
    console.log(pais)
    return `<div>
            <h2>${pais.name.common}</h2>
            </div>`
}

countryApi();