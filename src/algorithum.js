const axios = require("axios");

class Encryption {
  async encrypt(publicKey, data) {
    return await axios.post(`https://encryption-server.vercel.app/encrypt`, {
      publicKey: publicKey,
      data: data,
    });
  }

  async decrypt(publicKey, data) {
    return await axios.post(`https://encryption-server.vercel.app/decrypt`, {
      publicKey: publicKey,
      data: data,
    });
  }
}

module.exports = Encryption;

new Encryption()
  .decrypt(
    "172000",
    "726f626f746963WzEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdd146e6563ec7fa9aa031ee3295a377cc062ec9a40b45abdc020f43979bec2835"
  )
  .then((ele) => {
    console.log(JSON.parse(ele.data.decrypted));
  });
