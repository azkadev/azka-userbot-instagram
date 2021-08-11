var helloworld = {
  name: 'helloworld',
  status: true,
  clue: ['Fungsi: upload file', 'Format: hello'],
  run: async function (msg) {
    if (RegExp("/hello", "i").exec(msg.content)) {
        return msg.reply("Hello world")
    }
  }
}
module.exports = {
  helloworld
}
