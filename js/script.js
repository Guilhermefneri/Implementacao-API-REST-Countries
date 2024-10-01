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
    
    // evento de clique
    const paisesDiv = document.querySelectorAll('.paises-div')
    
    paisesDiv.forEach((div, index) =>{
        div.addEventListener('click', () => info(paises[index]))
    })
}

// pegar os dados dos países e colocar no html
function pegarPais(pais){
    console.log(pais)
    return `<div class = "paises-div">
            <img id="flags" src="${pais.flags.png}" alt="${pais.flags.alt}">
            <h2>${pais.name.common}</h2>
            <h4>Capital: ${pais.capital}</h4>
            <h4>Region: ${pais.region}</h4>
            </div>`
        }
        
function info(pais){
    const button = document.getElementById('buttonClose');
    const modal = document.getElementById('modal');
    const conteudo = document.getElementById('conteudo');

    function openModal(){
        modal.showModal();

        conteudo.innerHTML = `<div class="headerModal">
                <h2>${pais.name.common}</h2>
                <img id="flagsModal" src="${pais.flags.png}" alt="${pais.flags.alt}">
                </div>
                <div class="mainModal">
                <h4>Capital: ${pais.capital}</h4>
                <h4>Region: ${pais.region}</h4>
                <h4>Subregion: ${pais.subregion}</h4>
                <h4>Population: ${pais.population}</h4>
                <h4>Area: ${pais.area}</h4>
                <h4>Languages: ${Object.values(pais.languages).join(', ')}</h4>
                <h4>Timezones: ${pais.timezones.join(', ')}</h4>
                <h4>Internet Domain (TLD Code): ${pais.tld}</h4>
                <h4>Dialing code: ${pais.idd.root}${pais.idd.suffixes}</h4>
                </div>
                `
    }
    
    function closeModal(){
        modal.close();
    }

    openModal()
    button.addEventListener('click', closeModal)
            }

countryApi();