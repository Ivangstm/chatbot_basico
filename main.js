const chatBot = document.getElementById("chatBot");
const chats = document.getElementById("chats");

function responder(mensaje) {
    mensaje = mensaje.toLowerCase(); // <-- Aquí estaba el error antes (doble paréntesis)

    if (mensaje.includes("hola")) return "Hola, como estas?";
    if (mensaje.includes("bien")) return "Me alegra mucho eso!";
    if (mensaje.includes("autor")) return `Esta pagina fue creada por Ivan Andres castillo.
    Colombiano y adolecente Autonomo cuya vision es nutrirse de conocimiento.
    El sabra como sacarle provecho a sus saberes.`;
    if (mensaje.includes("fecha")) return `Fue creada el <em>29 de julio del 2025</em>`;
     if (mensaje.includes("github")) return `<a class="githubDecoration" href = "https://www.github.com/Ivangstm"> Click para ver el perfil del autor </a>`;

    return `Soy un bot con limites de conversas. Estoy configurado para darte informacion establecida. <br>
    > Si quieres saber del autor de este sitio web, pon "Autor" <br>
    > Si quieres saber la fecha en la que se creo esta pagina, pon "fecha" <br>
    > Si quieres saber mas del creador, puedes poner "github" <br>`;
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
            <p>${mensaje}</p>
        </div>`;

    // Respuesta del bot
    const respuesta = responder(mensaje);
    chater.innerHTML += `   
        <div class="chatOfBot">
            <img class="logoOfBotChat" src="./img/robot2.png" alt="">
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
                    <img src="./img/robot2.png" class="logoInChat">
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
