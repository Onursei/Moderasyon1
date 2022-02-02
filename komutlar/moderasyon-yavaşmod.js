const Discord = require('discord.js');
const db = require('croxydb')

exports.run = async(client, message, args) => {
  
 
 
if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.MessageEmbed()
                .setDescription(`Doğru kullanım: \` e?yavaş-mod [0/15]\``)
                  
                .setTimestamp()
            message.channel.send({embed})
            return
          }
     if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('``Bu komutu kullanabilmek için`` **Yönetici** ``yetkisine sahip olmalısın``')
if (limit > 15) {
    return message.channel.send(new Discord.MessageEmbed().setDescription("Süre limiti maksimum **15** saniye olabilir.")  );
}
    message.channel.send(new Discord.MessageEmbed().setDescription(`>  Yazma süre limiti **${limit}** saniye olarak ayarlanmıştır.`)  );
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],
  permLevel: 3,
};

exports.help = {
  name: 'yavaş-mod',
  description: 'Sohbete yazma sınır (süre) ekler.',
  usage: 'yavaş-mod [1/120]',
};