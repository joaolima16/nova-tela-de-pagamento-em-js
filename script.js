function verificar(){
    var escolha = window.document.getElementsByName('escolha')
    var res= document.querySelector('div#res')
    if(escolha[0].checked){
        res.innerHTML = `o resultado foi ${escolha}`
        window.location.href = 'http://127.0.0.1:5500/pagcomcartao.html'
    }
    else if(escolha[1].checked){
      window.location.href = 'http://127.0.0.1:5500/pagpix.html'
    }
    else if (escolha[2].checked){
        console.log("teste")
    }
    }