var exec = {
    name: 'exec',
    status: true,
    clue: ['Fungsi: menjalankan ping', 'Format: .jsondump'],
    regex: /^[!\/\.]exec /gi,
    only_admin: true,
    run: async function (msg) {
        if (this.regex.exec(msg.content)) {
            try {
                var data = await eval(msg.content.replace(/^[!\/\.]exec /ig, ""))
                return msg.reply(data)
            } catch (e) {
                return msg.reply(e.msg)
            }
        }
    }
}
module.exports = { exec }