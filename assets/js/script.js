

var desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta, lectus non eleifend malesuada, odio felis elementum massa, nec vehicula enim risus at dolor."



var dados = [
    {
        "nomePlano": "Basic", 
        "descPlano": desc,
        "precoPlano": "300,00",
        "imgPlano": "/assets/img/card4.jpeg",
    }, 
    {
        "nomePlano": "Confort", 
        "descPlano": desc,
        "precoPlano": "400,00",
        "imgPlano": "/assets/img/card3.jpeg",
    },
    {
        "nomePlano": "Plus", 
        "descPlano": desc,
        "precoPlano": "600,00",
        "imgPlano": "/assets/img/card2.jpeg",
    },
    {
        "nomePlano": "All Inclusive", 
        "descPlano": desc,
        "precoPlano": "900,00",
        "imgPlano": "/assets/img/card1.jpeg",
    }
]

function preencheCards(params){
    let planos = params 

    console.log(planos)
    
    var htmlCards = ""

    for (let i = 0; i < planos.length; i++) {

        htmlCards += ` 
        <div class="card">
            <div class="imgCard" style="background-image: url(${planos[i].imgPlano});"></div>
            <div class="infProd">
                <h3>${planos[i].nomePlano}</h3>
                <p>${planos[i].descPlano}</p>
            </div>
            <div class="precoBotao">
                <div class="precoProd">
                    <span>A partir de</span>
                    <p>R$ ${planos[i].precoPlano}</p>
                </div>
                <button>Reservar</button>
            </div>
        </div>`      
    }

    document.getElementById("cardsItens").innerHTML  += htmlCards
}
