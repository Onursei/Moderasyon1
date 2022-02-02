const req = event => require(`../events/${event}`)

module.exports = client => {
  client.setMaxListeners(15);
  client.on('ready',() => req('ready')(client))
  client.on('message',req('message'))
  client.on('guildMemberAdd',req('guildMemberAdd'))
  client.on('guildMemberRemove',req('guildMemberRemove'))
  client.on("message", req("etiket-yardım"))
  //client.on('messageReactionAdd', req('messageReactionAdd'))
  //client.on('messageReactionRemove', req('messageReactionRemove'))

}