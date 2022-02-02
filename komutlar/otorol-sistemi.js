const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  
  let role = message.mentions.roles.first();
  let channel = message.mentions.channels.first();
  let system = args[0];
  let parameters = ["set", "reset"];
  
  if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply(`Oops! Rol iznini yönetmediniz.`);
  if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply(`Hata! Bot'a rolleri yönetme izni vermelisiniz.`);
  
  if(!system) return message.reply(`Hata! Doğru parametreyi yazmalısınız. \`Parametreler\` set, reset.`);
  if (!system.includes(parameters[0]) && !system.includes(parameters[1])) return message.reply(`Hata! Lütfen geçerli bir parametre yazın. set, reset.`);
//(Ç)alanlara selam Juni#0002:)
  if (system === parameters[0]) {
    
    if (db.has(`autorole.${message.guild.id}.system`) === true) return message.reply(`<:pempe:932898261252079677> Heyy, sanırım ufak bir sorunumuz var, bu sunucu için zaten otomatik rol ayarladınız.`);
  
    if (!role) return message.reply(`<:pempe:932898261252079677> Hata! E etiketi rolünü @Rol olarak girmelisiniz.`);
    if (!channel) return message.reply(`<:pempe:932898261252079677> Hata! Bir etiket kanalı girmelisiniz.`);
    if(message.guild.members.cache.find(e => e.id == client.user.id).roles.highest.position < role.position || message.guild.members.cache.find(e => e.id == client.user.id) == role.position) {
      message.channel.send(`<:pempe:932898261252079677> Hata! Bu rolü sen seçmedin.`);
      return;
    }
    //(Ç)alanlara selam lewis#8996 :)
    message.channel.send(`<:pempe:932898261252079677> Başarılı! Bu sunucuda otomatik rol (<@&${role.id}>), otomatik rol kanalı (<#${channel.id}>) ayarladınız.`);
    db.set(`autorole.${message.guild.id}`, {role: role.id, channel: channel.id, system: true})
    
  } else {
    
    if (db.has(`autorole.${message.guild.id}.system`) === false) return message.reply(`<:pempe:932898261252079677> Hey, sanırım ufak bir hatamız var, bu sunucu için otomatik rolü zaten sıfırladınız veya ayarlamadınız.`)
    
    message.reply(`<:pempe:932898261252079677> İştee, bu sunucuda otomatik rol sistemini sıfırladınız.`)
    db.delete(`autorole.${message.guild.id}`)
    
  }//This command is codare's.
  
};

exports.conf = {
  aliases: ['otorol', 'oto-rol'],
  permLevel: 0
};

exports.help = {
  name: "auto-role",
  guildOnly: true,
  perms: ['MANAGE_MESSAGES'],
  enabled: true,
  aliases: ['ar']
}; //Made with <3 lewis#8996 && Juni#0002.


