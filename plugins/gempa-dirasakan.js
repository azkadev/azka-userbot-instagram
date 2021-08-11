var fetch = require('node-fetch')
var gempadirasakan = {
  name: 'gempadirasakan',
  status: true,
  clue: ['Fungsi: mencari data gempadirasakan', 'Format: /gempadirasakan'],
  regex: /^[!\/\.]gempadirasakan$/i,
  only_admin: false,
  run: async function (msg) {
    if (this.regex.exec(msg.content)) {
      try {
        msg.markSeen();
        var url = `https://azkadev.herokuapp.com/api/information/gempadirasakan`;
        var scrape = await fetch(encodeURI(url))
        var hasil = await scrape.json()
        if (hasil.status) {
          var hasil_msg = hasil.message
          var pesan = "Gempa dirasakan\n"
          hasil_msg.forEach(function(data) {
            pesan += `\n\nTanggal ${data.tanggal}\n${data.ketearangan}\nMagintude ${data.magnitude} , ${data.kedalaman}`
            
          });
          return msg.reply(pesan)
        } else {
          return msg.reply(hasil.message)
        }
      } catch (e) {
        msg.markSeen()
        return msg.reply("❌ error: " + err.msg)
      }
    }
  }
}
module.exports = { gempadirasakan }