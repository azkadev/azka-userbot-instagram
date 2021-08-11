var fetch = require('node-fetch')
var covid = {
  name: 'covid',
  status: true,
  clue: ['Fungsi: menjalankan mencari kasus covid', 'Format: .covid jakarta'],
  regex: /^[!\/\.]covid /gi,
  run: async function (msg) {
    if (this.regex.exec(msg.content)) {
      try {
        msg.markSeen();
        var url = `https://azkadev.herokuapp.com/api/information/covid?query=${msg.content.replace(/(\/covid )/ig, "")}`;
        var scrape = await fetch(encodeURI(url))
        var hasil = await scrape.json()
        if (hasil.status) {
          return msg.reply(hasil.message.replace(/<[^>]*>?/gm, ''))
        } else {
          return msg.reply(hasil.message.replace(/<[^>]*>?/gm, ''))
        }
      } catch (e) {
        msg.markSeen()
        return msg.reply(`ERROR\n${e.msg}`)
      }
    }
  }
}
module.exports = { covid }