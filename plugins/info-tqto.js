let handler = async (m, { conn, args, command }) => {
  conn.reply(
    m.chat,
    `*Zenn Bot MD by Nandaxy*
    
    Instagram : https://instagram.com/nandaaa_79
    `,
    m
  );
};

handler.help = ["tqto"];
handler.tags = ["info"];
handler.command = ["tqto"];
export default handler;
