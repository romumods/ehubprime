const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber =  "254791811982"
global.ownername = "Bealth-Wave Company"
global.ytname = "YT: Bealth.inc"
global.socialm = "GitHub: Kyle6012"
global.location = "Kenyan"

global.ownername = 'Kyle Meshack' //owner name
global.botname = '𝐌𝐀𝐑𝐈𝐀-𝐌𝐃' //name of the bot

//sticker details
global.stickername = 'Bealth-Wave Company_✰'
global.packname = 'Sticker By'
global.author = 'Maria Bot'
//console view/theme
global.themeemoji = '🧩'
global.wm = "Bealth Guy."

//theme link
global.link = 'https://chat.whatsapp.com/Jllsl2OaQNoBjepxzuVsZM'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: '*job done* ✅️',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
