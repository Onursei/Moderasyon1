const Discord = require("discord.js");
const moment = require("moment");
const chalk = require('chalk');
const ayarlar = require('../ayarlar.json');
const prefix = '-'

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
};



module.exports = client => {
  setInterval(function() {
 }, 8000);
   var msgArray = [
 "✨ | -yardım          ",
 "⭐ | -istatistik          ",
 "🌠 | Bir yıldız kayıyor.             "
  ];
 
  setInterval(() => {
   var rastgeleOyun = Math.floor(Math.random() * msgArray.length);
   client.user.setActivity(`${msgArray[rastgeleOyun]}`, { type: 'STREAMING' ,  url: 'https://www.twitch.tv/emrefilans' })
 }, 5000);
     console.log(`Bot Hazır | Valley & Home`);
 }
