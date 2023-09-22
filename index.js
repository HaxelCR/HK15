const Telebot = require("telebot");
const CONSTANTS = require("./constants");

const bot = new Telebot({
    token: CONSTANTS.TELEGRAM_TOKEN
})

bot.on(["/15"], (msg) => {
    bot.sendMessage(msg.chat.id, `Hola,fui creado por tu flako dienton, y quiere recordarte que te ama demasiado y eres una mujer muy especial para el, por si acaso si se te olvida ❤. Pronto habra mas funciones.`)
})

bot.on(["/triste"], (msg) => {
    bot.sendMessage(msg.chat.id, `Recuerda que tu puedes con todo, eres mi mujer, y mi mujer no se deja vencer por nada`)

})

bot.start();
