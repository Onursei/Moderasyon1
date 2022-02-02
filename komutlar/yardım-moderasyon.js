const Discord = require('discord.js');
const qdb = require('quick.db');
const ayarlar = require('../../ayarlar.json');
exports.run = async(client, message, args) => {
  var a = qdb.fetch(`prefix_${message.guild.id}`) //ewing
  if(a){ 
    var p = a
  }
  if(!a){
    var p = ayarlar.prefix
  }

  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send("<:pempe:932898261252079677> Merhaba, bu sisteme erişim sağlaman için \`Yönetici\` yetkinin olması gerekir.");
   }
  const embed = new Discord.MessageEmbed()
  .setColor("purple")
  .setAuthor(`${client.user.username} Komutlar`, client.user.displayAvatarURL({dynamic: true}))
  //.setThumbnail(message.author.displayAvatarURL())
 .setDescription(`
  \n
  ━`)


  .addField(`**> ${p}küfür-engel**`, "> <:pempe:932898261252079677>", true)
  .addField(`**> ${p}küfür-log #kanal**`, "> <:pempe:932898261252079677>", true)
  .addField(`**> ${p}otorol set @rol**`, "> <:pempe:932898261252079677>", true)
  .addField(`**> ${p}toplurol al-ver**`, "> <:pempe:932898261252079677>", true)
  .addField(`**> ${p}sayaç**`, "> <:pempe:932898261252079677>", true)
  .addField(`**> ${p}sil**`, "> <:pempe:932898261252079677>", true)
  .addField(`**> ${p}yavaş-mod**`, "> <:pempe:932898261252079677>", true)
  .addField(`**> ${p}modlog**`, "> <:pempe:932898261252079677>", true)

  .addField(`**> ${p}ban-log**`, "> <:pempe:932898261252079677>", true)
  .addField(`**> ${p}ban-yetkili-rol**`, "> <:yesil:933264429179617290>", true)
  .addField(`**> ${p}ban **`, "> <:yesil:933264429179617290>", true)
  .addField(`**> ${p}unban**`, "> <:yesil:933264429179617290>", true)
  .addField(`**> ${p}banaffı**`, "> <:yesil:933264429179617290>", true)
  .addField(`**> ${p}kick-log**`, "> <:yesil:933264429179617290>", true)
  .addField(`**> ${p}kick-yetkili-rol**`, "> <:yesil:933264429179617290>", true)
  .addField(`**> ${p}kick**`, "> <:kirmizi:933264837654478918>", true)

  .addField(`**> ${p}mute-log #kanal**`, "> <:kirmizi:933264837654478918>", true)
  .addField(`**> ${p}mute-log-kapat**`, "> <:kirmizi:933264837654478918>", true)
  .addField(`**> ${p}mute-yetkili-rol**`, "> <:kirmizi:933264837654478918>", true)
  .addField(`**> ${p}muteyetki-sil**`, "> <:kirmizi:933264837654478918>", true)
  .addField(`**> ${p}mute**`, "> <:kirmizi:933264837654478918>", true)
  .addField(`**> ${p}panel-kur**`, "> <:kirmizi:933264837654478918>", true)
  .addField(`**> ${p}panel-sil**`, "> <:kirmizi:933264837654478918>", true)
  .addField(`**> ${p}botbilgi**`, "> <:kirmizi:933264837654478918>", true)

  .addField(`━`, " <:bilgi:924215711767875584> Beni kullanırken hata almamak için **rolümü** üstte tut! [**Tıkla!**](https://cdn.discordapp.com/attachments/922059318692552764/931829500038230036/xxxxx.gif)\n<:bilgi:924215711767875584> Beni sunucuna **davet** etmek ve kullanmak için: [**Tıkla!**](https://discord.com/oauth2/authorize?client_id=935853816497184768&scope=bot&permissions=10468982846)\n━",true)

  

  
  .setFooter(`${message.author.username} kullandı!`, message.author.displayAvatarURL({dynamic: true}))
  .setImage(`https://cdn.discordapp.com/attachments/935854672177152030/935857012904951808/standard.gif`)
  return message.channel.send(embed)
};
exports.conf = {
  aliases: ["moderasyon"],
  permLevel: 0
}
exports.help = {
  name: "yetkili-menüsü",
  cooldown: 8
}