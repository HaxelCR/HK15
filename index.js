const Telebot = require("telebot");
const CONSTANTS = require("./constants");

const bot = new Telebot({
    token: CONSTANTS.TELEGRAM_TOKEN
})

bot.on(["/15"], (msg) => {
    bot.sendMessage(msg.chat.id, `Hola,fui creado por tu flako dienton, y quiere recordarte que te ama demasiado y eres una mujer muy especial para el, por si acaso si se te olvida ❤. Pronto habra mas funciones.`)
})

bot.start();