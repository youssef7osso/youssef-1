const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("611799502440890368")
setInterval(function() {
channel.send(`سبام ليووسف المعلم فشخ اوي وجامد جدا جدا جدا وبيفهم في كل حاجة `);
}, 30)
})

client.login(process.env.BOT_TOKEN);