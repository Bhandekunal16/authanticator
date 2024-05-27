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
