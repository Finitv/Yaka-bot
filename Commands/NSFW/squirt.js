const axios = require("axios");

module.exports = {
  name: "squirt",
  alias: ["nsfwsquirt"],
  desc: "Hentai picture of squirting", 
  category: "Nsfw",
  usage: `squirt`,
  react: "👹",
  start: async (Miku, m, { prefix,NSFWstatus }) => {

    if (NSFWstatus == "false") return m.reply(`This group is not NSFW enabled!\n\nTo configure NSFW mode, type:\n\n*${prefix}nsfw*`);
    m.reply(mess.waiting)
    let buff= await axios.get(`https://fantox-apis.vercel.app/squirt`)
    let imgURL = buff.data.url
    

    let Button = [];
     
    let bmffg = {
      image: {url: imgURL},
      caption: `\n* Here What you are looking for 👀..*\n`,
      footer: `*${botName}*`,
      buttons: Button,
      headerType: 4,
    };
    
    await Miku.sendMessage(m.from, bmffg, { quoted: m }).catch((err) => {
      return "Error!";
    });
  },
};
