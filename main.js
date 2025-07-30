const chatBot = document.getElementById("chatBot");
const chats = document.getElementById("chats");
const chater = document.getElementById("chater")

function responder(mensaje){
    mensaje = mensaje.toLowerCase();

    if(mensaje.includes("hola")) return "Hola, como vas?";

    return "No entendi";

}

function enviar(){
    const input = document.getElementById("input");
    const mensaje = input.value.trim();
    input.value = "";
    
    chater.innerHTML += ` 
                 <div class="chatOfMe">
                <img class="logoOfBotChat" src="./img/robot.svg" alt=""><p><b>Tu:</b> ${mensaje}</p>
                </div>`;
    const respuesta = responder(mensaje);

     chater.innerHTML += `   <div class="chatOfBot">
                    <img class="logoOfBotChat" src="./img/robot.svg" alt=""><p><b>Tu:</b> ${respuesta}</p>
                </div>
                 `;

     chater.scrollTop = chater.scrollHeight;

    

}

chatBot.addEventListener('click', ()=>{

    const openChat = document.createElement('div');

    openChat.classList.add("chats")

    openChat.innerHTML = ` <div class="togger-chat">
                <div class="bar-header">
                    <div class="nameCHat">
                        <img src="./img/robot.svg" class="logoInChat">
                        <h4>Bot</h4>
                    </div>
                    <div class="threePunts">
                        <span></span>
                        <span></span>
                        <span></span>
                    
                    </div>
                </div>

            <div class="chater" id="chater">


            </div>

            <div class="input">
            <input type="text" class="MSJ" id = "input">
            <button class="enviar" onclick="enviar()">Enviar</button>
            </div>


            </div>
    `
    chats.appendChild(openChat);
});


