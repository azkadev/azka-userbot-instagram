var fetch = require('node-fetch')
var gempa = {
  name: 'gempa',
  status: true,
  clue: ['Fungsi: mencari data gempa', 'Format: /gempa'],
  regex: /^[!\/\.]gempa$/i,
  only_admin: false,
  run: async function (msg) {
    if (this.regex.exec(msg.content)) {
      try {
        msg.markSeen();
        var url = `https://azkadev.herokuapp.com/api/information/autogempa`;
        var scrape = await fetch(encodeURI(url))
        var hasil = await scrape.json()
        if (hasil.status) {
          var hasil_msg = hasil.message;
          var info_gempa = hasil_msg.Infogempa.gempa;
          var pesan = "\nData Gempa"
          pesan += `\nWilayah: ${info_gempa.Wilayah}, Kedalaman: ${info_gempa.Kedalaman}`
          pesan += `\nTanggal: ${info_gempa.Tanggal}, Jam: ${info_gempa.Jam}\nPotensi ${info_gempa.Potensi}`
          return msg.reply(pesan)
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
module.exports = { gempa }