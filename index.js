console.clear();
console.log('[INFO]: Loading...');
const { Client, Collection } = require('discord.js');//ÇALANLARA SELAM :)

//EWİNG CODE & EMRE.CONF
const { prefix, token } = require('./ayarlar.json');
const client = new Client({ 
	disableMentions: 'everyone'
});
//ÇALANLARA SELAM :)

//EWİNG CODE & EMRE.CONF
const moment = require('moment');
const db = require('quick.db');
const fs = require('fs');
require('./util/eventLoader.js')(client);
const ayarlar = require('./ayarlar.json');
const Discord = require('discord.js');
client.cooldowns = new Discord.Collection()
  const log = message => {
   console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`); 
 };
 client.commands = new Discord.Collection();
 client.aliases = new Discord.Collection();
 fs.readdir("./commands/", (err, files) => { 
    if (err) console.error(err);
    files.forEach(f => {
  fs.readdir(`./commands/${f}/`, (err, filess) => {
    if (err) console.error(err);
    log(`${f} Klasöründen ${filess.length} Komut Yüklenecek;`);
    filess.forEach(fs => { 
      let props = require(`./commands/${f}/${fs}`);
      log(`${props.help.name} // Yüklendi`);
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
     });
    });
   });
  });

//ÇALANLARA SELAM :)

//EWİNG CODE & EMRE.CONF
  client.setMaxListeners(30)
client.elevation = message => {
	if (!message.guild) {
		return;
	}
	let permlvl = 0;
	if (message.member.hasPermission('BAN_MEMBERS')) permlvl = 2;
	if (message.member.hasPermission('ADMINISTRATOR')) permlvl = 3;
	if (message.author.id === ayarlar.sahip || message.author.id === "793437146181664798") permlvl = 4;
	return permlvl;
};
client.on('ready', () => {
	console.log(`[INFO]: Run (${client.user.tag})`);
	client.user.setActivity(',yardım', { type: 'WATCHING' });
  client.user.setStatus("idle")

  console.log ('_________________________________________');
  console.log (`Kullanıcı İsmi     : ${client.user.username}`);
  console.log (`Sunucular          : ${client.guilds.cache.size}`);
  console.log (`Kullanıcılar       : ${client.users.cache.size}`);
  console.log (`Prefix             : ${ayarlar.prefix}`);
  console.log (`Durum              : Bot Çevrimiçi!`);
  console.log ('_________________________________________');
});
client.login(token)//EWİNG CODE & EMRE.CONF


//ÇALANLARA SELAM :)

//EWİNG CODE & EMRE.CONF


//                               ↓               KOMUTLAR                ↓      


//————————————————————————————————————————————————————————————————————————————————————————————————————————




//————————————————————————————————————————————————————————————————————————————————————————————————————————
//                                         ↓CAPS ENGEL SİSTEMİ↓                                         //                
function percentage(partialValue, totalValue) {
  return (100 * partialValue) / totalValue;
} 

client.on('message', async(message) => {
if (!message.guild) return
let acikmi = await db.fetch(`${message.guild.id}.capsengel`)
if (!acikmi) return
if (message.author.bot) return
if (message.member.hasPermission("MANAGE_MESSAGES")) return
let matched = message.content.replace(/[^A-Z]/g, "").length
let yuzde = percentage(matched, message.content.length)
if (Math.round(yuzde) > acikmi.yuzde) {
 message.delete()
 message.author.send(new Discord.MessageEmbed().setColor("RED").setTimestamp().setFooter(`${message.guild.name}`,message.guild.iconURL({dynamic:true})).setAuthor("Fynx").setDescription("<:kirmizi:933264837654478918> *Hey, "+message.guild.name+" sunucusunda büyük harfle yazı yazma engeli* **bulunmaktadır!**\n<:kirmizi:933264837654478918> *Bu nedenle göndermiş olduğun mesaj* **silindi.**"))
 message.channel.send(new Discord.MessageEmbed().setColor("RED").setTimestamp().setFooter(`${message.guild.name}`,message.guild.iconURL({dynamic:true})).setAuthor("Fynx",message.author.displayAvatarURL({dynamic:true})).setDescription(message.author.username+"  "+(message.member.nickname ? `` : message.author.id)+"\n<:kirmizi:933264837654478918> *Hey, bu sunucuda büyük harfle yazı yazma engeli* **bulunmaktadır!**\n<:kirmizi:933264837654478918> *Bu nedenle göndermiş olduğun mesaj* **silindi.**")).then(msg=>msg.delete({timeout:30000}))
}else{return}
})
//                                         CAPS ENGEL SİSTEMİ                                         //                
//————————————————————————————————————————————————————————————————————————————————————————————————————————



//————————————————————————————————————————————————————————————————————————————————————————————————————————
//                                         ↓KAYIT SİSTEMİ↓                                         //                
client.on('guildMemberAdd', async member => {
  const database = require('quick.db');
  const guild = member.guild;
  const user = member.user;
  
  if(database.fetch(`kayıt-kayıtsız.${guild.id}`)) {
    if(!guild.roles.cache.get(database.fetch(`kayıt-kayıtsız.${guild.id}`)) || member.roles.cache.has(database.fetch(`kayıt-kayıtsız.${guild.id}`))) return;
    const kadınData = database.fetch(`kayıt-kadın.${guild.id}`);
    if(!kadınData) return;
    const kadın = guild.roles.cache.get(kadınData);
    const erkekData = database.fetch(`kayıt-erkek.${guild.id}`);
    if(!erkekData) return;
    const erkek = guild.roles.cache.get(erkekData);

    member.roles.add(database.fetch(`kayıt-kayıtsız.${guild.id}`));
    member.setNickname('İsiminizi Yazın');

    const kayıtkanal = guild.channels.cache.get(await database.fetch(`kayıt-kanal.${guild.id}`));
    if(!kayıtkanal) return;

    if(database.fetch(`k.${guild.id}.${user.id}`)) {
      member.roles.remove(database.fetch(`kayıt-kayıtsız.${guild.id}`));
      const data = await database.fetch(`k.${guild.id}.${user.id}`);
      if(data.sex == 'K') {
        member.roles.add(kadın.id);
      } else {
        member.roles.add(erkek.id);
      };

      member.setNickname(`${database.fetch(`kayıt-tag.${guild.id}`) ? `${database.fetch(`kayıt-tag.${guild.id}`)} ` : ''}${data.name} | ${data.yaş}`);
      return kayıtkanal.send(`<:pempe:932898261252079677> İştee, kayıt işlemini başarıyla tamamladım. İyi eğlenceler **${data.name}**.`);

    };

    var ç = false;
    var s = false;

    const embed = new Discord.MessageEmbed()
    .setColor('ff00a1')
    .setImage('https://cdn.discordapp.com/attachments/922059318692552764/933060455067439104/kayitsistemi.gif')
    kayıtkanal.send(`<@${member.user.id}> Sunucumuza hoş geldin, kayıt olman için;\n **gerçek ismini yaz** ve hemen kayıt işlemini gerçekleştirelim! <:pempe:932898261252079677>`);
    kayıtkanal.send(embed);

    const filter = m => m.author.id === member.user.id;
    const collector = kayıtkanal.createMessageCollector(filter, { time: 0 });

    collector.on('collect', async collected => {
      if(s == true) return;
          if(ç == false) {
          const cm = collected;
          if(cm.content.split('').some(x => !isNaN(x))) cm.reply('<:pempe:932898261252079677> **Hey, sadece gerçek ismini yazmalısın.** *Yaşını değil.*');

            const isimler = require('./isimler.json').map(x => x);
            if(!isimler.some(x => x.name.toLowerCase() === cm.content.toLowerCase())) cm.reply(`<:pempe:932898261252079677> **İşlemi tamamlamam için ismini yazman gerekiyor!**\n<:pempe:932898261252079677> **Bilgi:**\` Eğer ki ismin Elifnur gibiyse Elif yazmalısın, sadece isimini yazman gerek!\``);
            const data = isimler.find(x => x.name.toLowerCase() === cm.content.toLowerCase());
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setFooter(`Bilgi: İsmini yanlış yazdıysan: -sıfırla`, `https://images-ext-2.discordapp.net/external/6eGBGtaebZg_DNdSL4jVLiZ2YQuovw227N4TKd30gzo/https/images-ext-2.discordapp.net/external/H1DYiroEN5EFPujb_YvV-LhXsuIWi3w8gqs69BQbAJ0/%253Fsize%253D2048/https/cdn.discordapp.com/avatars/602585371489861634/59d888f59b9e01bdebb98e8f0548ac2d.png`)
            .setDescription(`Merhaba ${data.name.split('')[0].toUpperCase()}${data.name.split('').slice(1).join('')}, şimdi seni kayıt edebilmem için; bana **yaşını** belirtmelisin. <:pempe:932898261252079677>`)
            kayıtkanal.send(embed);
            ç = true;
            if(s == false) {
            const collectorr = kayıtkanal.createMessageCollector(filter, { time: 0 });
            var x = false;
            collectorr.on('collect', collectedd => {
              if(x == true) return;
              const cd = collectedd;
              if(isNaN(cd.content)) return cd.reply(`**Yaşını **\`(sayı)\`** olarak sadece yazmalısın... <:pempe:932898261252079677>**`);
              if(cd.content == 31) return cd.reply(`<:pempe:932898261252079677> Aaaa. 31 ne alaka! 31 yaşında olamazsın sanırım öyle değil mi?`);
              if(Number(cd.content) > 32) return cd.reply(`Merhaba saygı değer büyüğümüz. ${cd.content} yaşında olduğunuzu tespit edmemiz gerek. Yetkili birisine yazın. <:pempe:932898261252079677>`);
              member.roles.remove(database.fetch(`kayıt-kayıtsız.${guild.id}`));
              if(data.sex == 'K') {
                member.roles.add(kadın.id);
              } else {
                member.roles.add(erkek.id);
              };
              database.set(`k.${guild.id}.${user.id}`, { 
                name: `${data.name.split('')[0].toUpperCase()}${data.name.split('').slice(1).join('')}`,
                sex: data.sex,
                yaş: Number(cd.content)
              });
              s = true;
              x = true;
              member.setNickname(`${database.fetch(`kayıt-tag.${guild.id}`) ? `${database.fetch(`kayıt-tag.${guild.id}`)} ` : ''}${data.name.split('')[0].toUpperCase()}${data.name.split('').slice(1).join('')} | ${cd.content}`);
              return kayıtkanal.send(`<:pempe:932898261252079677> İştee, kayıt işlemini başarıyla tamamladımm. İyi eğlenceler **${data.name.split('')[0].toUpperCase()}${data.name.split('').slice(1).join('')}**.`);
      
            });
          };
        };
        });

  };

});
//                                         KAYIT SİSTEMİ                                         //                
//————————————————————————————————————————————————————————————————————————————————————————————————————————


//————————————————————————————————————————————————————————————————————————————————————————————————————————
//                                         ↓OTO ROL SİSTEMİ↓                                         //                
client.on('guildMemberAdd', async member => {
  
  let role = await db.fetch(`autorole.${member.guild.id}.role`)
  let channel = await db.fetch(`autorole.${member.guild.id}.channel`)
  let system = await db.fetch(`autorole.${member.guild.id}.system`) === true;
  
  if (!system) return;
  

  
  member.roles.add(role);
  let ChannelSend = client.channels.cache.get(channel);
  ChannelSend.send(`Hey ${member.user.username} welcome to my server! I gave you role for members.`)

});
//                                         OTO ROL SİSTEMİ                                         //                
//————————————————————————————————————————————————————————————————————————————————————————————————————————







//————————————————————————————————————————————————————————————————————————————————————————————————————————
//                                         ↓SAYAÇ SİSTEMİ↓                                         //    
client.on("message", async message => {
  if (!message.guild) return;

  if (db.has(`sayac_${message.guild.id}`) === true) {
    if (db.fetch(`sayac_${message.guild.id}`) <= message.guild.members.cache.size) {
      const embed = new Discord.MessageEmbed()
        .setTitle(`Tebrikler ${message.guild.name}!`)
        .setDescription(`Başarıyla \`${db.fetch(`sayac_${message.guild.id}`)}\` kullanıcıya ulaştık! Sayaç sıfırlandı!`)
        .setColor("RANDOM");
      message.channel.send(embed);
      message.guild.owner.send(embed);
      db.delete(`sayac_${message.guild.id}`);
    }
  }
});
client.on("guildMemberRemove", async member => {
  const channel = db.fetch(`sKanal_${member.guild.id}`);
  if (db.has(`sayac_${member.guild.id}`) == false) return;
  if (db.has(`sKanal_${member.guild.id}`) == false) return;

    member.guild.channels.cache.get(channel).send(`**${member.user.tag}** Sunucudan ayrıldı! \`${db.fetch(`sayac_${member.guild.id}`)}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.memberCount}\` üye kaldı!`);
});
client.on("guildMemberAdd", async member => {
  const channel = db.fetch(`sKanal_${member.guild.id}`);
  if (db.has(`sayac_${member.guild.id}`) == false) return;
  if (db.has(`sKanal_${member.guild.id}`) == false) return;

    member.guild.channels.cache.get(channel).send(`**${member.user.tag}** Sunucuya Katıldı :tada:! \`${db.fetch(`sayac_${member.guild.id}`)}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.memberCount}\` üye kaldı!`);
});
//                                         SAYAÇ SİSTEMİ                                          //    
//————————————————————————————————————————————————————————————————————————————————————————————————————————