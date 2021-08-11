const Insta = require('@androz2091/insta.js');
var { plugins } = require("plugins-script");
var plugin = new plugins("./plugins/");
var { username, password } = process.env;
var fs = require("fs");
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
        } else  {var plugins = []
            fs.readdirSync(require("path").join(__dirname, "./plugins/")).forEach(function (file) {
              var data = require("./plugins/" + file);
              plugins.push(data)
            })
            var jumlah = 0
            var data_plugin = []
            plugins.forEach(function (plugin) {
              for (var key in plugin) {
                if (Object.prototype.hasOwnProperty.call(plugin, key)) {
                  var data_json = plugin[key];
                  data_plugin.push(data_json)
                }
              }
            })
            data_plugin.forEach(function (plugin) {
              if (plugin.status) {
                return plugin.run(msg)

              }
            })
        }
    }
});
client.login(username, password);
console.log("script run")