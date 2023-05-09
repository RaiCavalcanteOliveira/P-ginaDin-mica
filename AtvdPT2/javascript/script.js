
var produtos = [["<img src='imagens/celular.png' alt=''>","<p class='move'>Celular</p>", "<p class='move'>R$2000,00</p>", "<button>Comprar</button>"], [ "<img src='imagens/cpu.png' alt=''>","<p class='move'>Computador</p>", "<p class='move'>R$2000,00</p>","<button>Comprar</button>"],["<img src='imagens/tablet.jpg' alt=''>","<p class='move'>Tablet</p>", "<p class='move'>R$2000,00</p>", "<button>Comprar</button>"],["<img src='imagens/celular.png' alt=''>","<p class='move'>Celular</p>", "<p class='move'>R$2000,00</p>", "<button>Comprar</button>"],["<img src='imagens/celular.png' alt=''>","<p class='move'>Celular</p>", "<p class='move'>R$2000,00</p>", "<button>Comprar</button>"]]

var enblobaprodutos = document.getElementById('englobaprodutos')



for (let x = 0; x < produtos.length; x++) {
    var ul = document.createElement('ul')
    var armazenax = produtos[x]
    for (let y = 0; y < armazenax.length; y++) {
        var item = armazenax[y]

        var divdentroenblobaprodutos = document.createElement('div')

        var li = document.createElement('li')
        
        enblobaprodutos.appendChild(divdentroenblobaprodutos)

        divdentroenblobaprodutos.appendChild(ul)

        ul.appendChild(li)
      

        li.innerHTML = item;
        
        ul.classList.add('lista')

        divdentroenblobaprodutos.classList.add('divengloba')
        
    }
  
}



