var container = window.document.getElementById('container')   
function enviar(){
    var num1 = Number(document.getElementById("nota1").value)
    var num2 = Number(document.getElementById("nota2").value)
    media = (num1 + num2)/2
    var msg = document.createElement('div') 
    msg.style.position = 'Relative'; msg.style.background = 'White'; msg.style.width = '25vw'; msg.style.height = '40vh'; msg.style.opacity = '0.5'; msg.style.borderRadius = '30px'; msg.style.textAlign = 'center'; msg.style.left = '14.5vw'
    var msgp = document.createElement('h1')
    msgp.style.background = 'White'; msgp.style.width = '30vw'; msgp.style.height = '5vh'; msgp.style.borderRadius = '5px'; msgp.style.position = 'Relative'; msgp.style.textAlign = 'center'; msgp.style.left = '-12vw'
    if(media == 10){ 
        msgp.textContent = `Aprovado com Distinção - Media: ${media}`; msgp.style.color = '#55dd55'
        window.document.getElementById('container').appendChild(msg)
        window.document.getElementById('container').appendChild(msgp)  
    }else if(media >= 7 && media <= 9){
        msgp.textContent = `Aprovado - Media: ${media}`; msgp.style.color = '#55dd55'
        window.document.getElementById('container').appendChild(msg)
        window.document.getElementById('container').appendChild(msgp) 
    }else if(media >= 0 && media <= 6.9){
        msgp.textContent = `Reprovado - Media: ${media}`; msgp.style.color = 'Red';
        window.document.getElementById('container').appendChild(msg)
        window.document.getElementById('container').appendChild(msgp) 
    }else{
        msgp.textContent = 'Por favor digite uma nota valida'; msgp.style.color = '#ebeb17'
        window.document.getElementById('container').appendChild(msg)
        window.document.getElementById('container').appendChild(msgp) 
    }
    timeoutId = setTimeout(() => {
        window.document.getElementById('container').removeChild(msg)
        window.document.getElementById('container').removeChild(msgp)
    }, 2000)
}  