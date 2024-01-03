const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber =  "265886949444"
global.ownername = "Ehubprime Company"
global.ytname = "YT: @ehubprime"
global.socialm = "GitHub: romumods"
global.location = "malawian"

global.ownername = 'Romu' //owner name
global.botname = 'EntertainHub Tv' //name of the bot

//sticker details
global.stickername = 'Ehub Tv Company_✰'
global.packname = 'Sticker By'
global.author = 'Ehub tv'
//console view/theme
global.themeemoji = '🧩'
global.wm = "Ehub Guy."

//theme link
global.link = 'www.tiktok.com/@ehubprime/'

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
    owner: '*This feature can be used by Bealth Guy only*',
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
