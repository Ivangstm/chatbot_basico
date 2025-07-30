const chatBot = document.getElementById("chatBot");
const chats = document.getElementById("chats");

function responder(mensaje) {
    mensaje = mensaje.toLowerCase(); // <-- Aquí estaba el error antes (doble paréntesis)

    if (mensaje.includes("hola")) return "Hola, ¿cómo vas?";

    return "No entendí.";
}

function enviar() {
    // <-- Siempre buscar los elementos cada vez (porque se crean dinámicamente)
    const chater = document.getElementById("chater");
    const input = document.getElementById("input");

    const mensaje = input.value.trim();
    if (!mensaje) return; // Evita mensajes vacíos
    input.value = "";

    // Mensaje del usuario
    chater.innerHTML += ` 
        <div class="chatOfMe">
            <img class="logoOfBotChat" src="./img/robot.svg" alt="">
            <p><b>Tú:</b> ${mensaje}</p>
        </div>`;

    // Respuesta del bot
    const respuesta = responder(mensaje);
    chater.innerHTML += `   
        <div class="chatOfBot">
            <img class="logoOfBotChat" src="./img/robot.svg" alt="">
            <p><b>Bot:</b> ${respuesta}</p>
        </div>`;

    chater.scrollTop = chater.scrollHeight;
}

// Evento para abrir el chat al hacer click en el icono del bot
chatBot.addEventListener('click', () => {
    // Evita duplicar el chat si ya existe
    if (document.querySelector('.togger-chat')) return;

    const openChat = document.createElement('div');
    openChat.classList.add("chats");

    openChat.innerHTML = `
        <!---- Contenedor principal del chat ---->
        <div class="togger-chat">
            <!---- Barra superior ---->
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

            <!---- Área de mensajes ---->
            <div class="chater" id="chater"></div>

            <!---- Input para escribir ---->
            <div class="input">
                <input type="text" class="MSJ" id="input">
                <button class="enviar" onclick="enviar()">Enviar</button>
            </div>
        </div>
    `;

    chats.appendChild(openChat);
});
