var jsondump = {
    name: 'jsondump',
    status: true,
    clue: ['Fungsi: menjalankan ping', 'Format: .jsondump'],
    regex: /^[!\/\.]jsondump/i,
    only_admin: false,
    run: async function (msg) {
        if (this.regex.exec(msg.content)) {
            return msg.reply(JSON.stringify(msg, null, 2))
        }
    }
}
module.exports = { jsondump }
