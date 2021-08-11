var ping = {
    name: 'ping',
    status: true,
    clue: ['Fungsi: menjalankan ping', 'Format: .ping'],
    regex: /^[!\/\.]ping/i,
    only_admin: false,
    run: async function (update) {
      var msg = update[0]
        if (this.regex.exec(msg.content)) {
            return msg.reply("pong")
        }
    }
}
module.exports = { ping }