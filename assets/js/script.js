/*
PARA ACESSAR O DOM
Por Tag: getElementByTagName()
Por id: getElementById()
Por nome : getElementByName()
Por Classe : getElementsByClassName()
Por seletor : querySelector()
*/
let nome = document.getElementById('nome') 
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')
let assuntoOk = false
let emailOk = false
let nomeOk = false

nome.style.width = '100%'
email.style.width= '100%'
assunto.style.width= '100%'



function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3 ){
        txtNome.innerHTML = 'Nome Invalido'
        txtNome.style.color = 'red'
    }else {
        txtNome.innerHTML = 'Nome valido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

    function validaEmail() {
        let txtEmail = document.querySelector('#txtEmail')
        if (email.value.indexOf ('@') == -1 || email.value.indexOf('.') == -1){
           txtEmail.innerHTML = 'E-mail invalido'
           txtEmail.style.color = 'red'
        }else{
            txtEmail.innerHTML = 'E-mail valido'
           txtEmail.style.color = 'green'
           
           emailOk = true
        }
    }
        function validaAssunto(){
            let txtAssunto =document.querySelector('#txtAssunto')

            if(assunto.value.length >= 100){
                txtAssunto.innerHTML ='Texto é muito grande, no maximo 100 caracteres'
                txtAssunto.style.color= 'red'
                txtAssunto.style.display= 'block'
            }else{
                txtAssunto.style.display = 'none'
                assuntoOk = true
            }
        }
            function enviar(){
               
                console.log(nomeOk,emailOk,assuntoOk)
                
               
                if( nomeOk == true && emailOk == true && assuntoOk == true){
                    alert ('Formulario enviado com sucesso!')
                }else{
                    alert('Preencha o formuláio corretamente....')
                }
            }
            
                function mapaZoom(){
                     mapa.style.width ='800px'
                     mapa.style.height='600px'

                }

                function mapaNormal(){
                    mapa.style.width ='400px'
                     mapa.style.height='250px'


                }
                
            

        
    
    
