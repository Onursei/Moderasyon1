
const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const db = require('quick.db')

//giriş çıkış //giriş çıkış//giriş çıkış//giriş çıkış//giriş çıkış//giriş çıkış//giriş çıkış//giriş çıkış
module.exports = async(member) => {
	if (member.user.bot) return;
	let user = member.user;
	let channelID = db.get(`girisRenk_${member.guild.id}`);
	if (channelID === null) return;
	let channel = member.guild.channels.cache.get(channelID);
	if (!channel) return;
	let joinMsg = db.get(`joinmsg_${member.guild.id}`);
		let cr = db.get(`cikisRenk_${member.guild.id}`)
	if (!joinMsg) return;
	let send = joinMsg
		.split('{member-mention}')
		.join(user.toString())
		.split('{member-tag}')
		.join(user.tag)
		.split('{member-username}')
		.join(user.username)
		.split('{member-id}')
		.join(user.id)
		.split('{member-created:duration}')
		.join(moment(user.createdTimestamp).fromNow())
		.split('{member-created:date}')
		.join(moment(user.createdTimestamp).format('YYYY/MM/DD'))
		.split('{server-name}')
		.join(member.guild.name)
		.split('{server-memberCount}')
		.join(member.guild.members.cache.size);
	const embedito1 = new Discord.MessageEmbed().setColor(`${cr}`) .setDescription(send);
	channel.send(embedito1);

  var rol = db.fetch(`otorolrolu_${member.guild.id}`)
  if(!rol) return;

  try {
    member.roles.add(rol)
  } catch(err) {}
}
