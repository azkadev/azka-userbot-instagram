var fetch = require('node-fetch')
var gempaterkini = {
  name: 'gempaterkini',
  status: true,
  clue: ['Fungsi: mencari data gempaterkini', 'Format: /gempaterkini'],
  regex: /^[!\/\.]gempaterkini$/i,
  run: async function (msg) {
    if (this.regex.exec(msg.content)) {
      try {
        msg.markSeen();
        var url = `https://azkadev.herokuapp.com/api/information/gempaterkini`;
        var scrape = await fetch(encodeURI(url))
        var hasil = await scrape.json()
        if (hasil.status) {
          var hasil_msg = hasil.message
          var pesan = "Gempa terkini"
          hasil_msg.forEach(function(data) {
            pesan += `\n\nTanggal ${data.tanggal} ${data.jam}\nMagintude ${data.magnitude} , ${data.kedalaman}\n${data.wilayah}`
            
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
module.exports = { gempaterkini }