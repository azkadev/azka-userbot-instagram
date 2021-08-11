const Insta = require('@androz2091/insta.js');
var { plugins } = require("plugins-script");
var plugin = new plugins("./plugins/");
var { username, password } = process.env;
const client = new Insta.Client({
    disableReplyPrefix: true
});
client.on('connect', async function() {
    console.log(`Logged in as !`);
});
client.on('messageCreate', async function(msg) {
    var text = msg.content;
    if (RegExp("/start", "i").exec(text)) {
        return msg.reply("Hello this is start message")
    }
    if (RegExp(".*", "i").exec(text)) {
        if (RegExp(`^[\/\.\!]help$`,"i").exec(text)){
            var teks = await plugin.all()
            return msg.reply(teks)
        }   else if (/([\/\.\!]help .*)/ig.exec(text)){
            var teks = await plugin.help(text.replace(/([\/\.\!]help )/ig,""))
            return msg.reply(teks)
        } else  {
            return await plugin.run([msg])
        }
    }
});
client.login(username, password);
console.log("script run")