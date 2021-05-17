const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')

const R6API = require('r6api.js')
const r6api = new R6API(config.email, config.password)

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', message => {
  console.log(message.content)
})

client.login(config.token)
