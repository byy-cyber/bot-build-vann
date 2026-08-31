module.exports = {
  BOT_NAME: "𝙱𝚘𝚝 𝙱𝚞𝚒𝚕𝚍 bizz",
  BOT_VERSION: "3.0",
  BOT_TOKEN: process.env.BOT_TOKEN || "8304026734:AAFezmjnX3a5qnNjjOSsYc-lXXsBYT69G_Q",
  ADMIN_IDS: (process.env.ADMIN_IDS || "8677127302").split(",").map(Number).filter(Boolean),

  
  CHANNEL_USERNAME: process.env.CHANNEL_USERNAME || "@maklojlek",
CHANNEL_USERNAME2: process.env.CHANNEL_USERNAME2 || "@maklocwe",
CHANNEL_USERNAME3: process.env.CHANNEL_USERNAME3 || "@paymentvannzx",
  
  OWNER_ID: parseInt(process.env.OWNER_ID || "8677127302"),

  WELCOME_PHOTO: process.env.WELCOME_PHOTO || "https://l.arzfun.com/lBTJS",
  NEW_USER: process.env.NEW_USER || "https://l.arzfun.com/lBTJS",
  TMP_DIR: "./tmp",

  BUILD_TIMEOUT_MS: 30 * 60 * 10000,
  POLL_INTERVAL_MS: 7000,       
  WEB2APK_MAINTENANCE: false,
};
