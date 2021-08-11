const { exec } = require("child_process");
var bash = {
  name: 'bash',
  status: true,
  clue: ['Fungsi: menjalankan bash', 'Format: .bash ls'],
  regex: /^[!\/\.](?:ba)?sh (.*)/i,
  run: async function (msg) {
    if (this.regex.exec(msg.content)) {
      exec(msg.content.replace(/([!\/\.](?:ba)?sh )/ig, ""), async function (error, stdout, stderr) {
        if (error) {
          pesan = `🚫 error: ${error.msg}`
        } else
          if (stderr) {
            pesan = `🚫 stderr: ${stderr}`
          } else {
            pesan = stdout
          }
        msg.reply(pesan)
      });
      return true
    }
  }
}
module.exports =  { bash }
