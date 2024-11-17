let handler = async (m) => {
  let replyMessage = `
*「 Owner Website 」*

Blog : blog-zenn.vercel.app
`.trim();

  m.reply(replyMessage);
};

handler.help = ["website"];
handler.tags = ["main"];
handler.command = /^(website)$/i;

handler.limit = false;

export default handler;
