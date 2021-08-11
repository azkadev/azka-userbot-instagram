var helloworld = {
  name: 'helloworld',
  status: true,
  clue: ['Fungsi: upload file', 'Format: hello'],
  run: async function (update) {
    var msg = update[0]
    var text = msg.content;
    if (RegExp("/hello", "i").exec(text)) {
        return msg.reply("Hello world")
    }
  }
}
module.exports = {
  helloworld
}
