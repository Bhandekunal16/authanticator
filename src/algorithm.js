const axios = require("axios");

class Encryption {
  #Encrypt = `https://encryption-server.vercel.app/encrypt`;
  #Decrypt = `https://encryption-server.vercel.app/decrypt`;
  async encrypt(publicKey, data) {
    const res = await axios.post(this.#Encrypt, {
      publicKey: publicKey,
      data: data,
    });
    return res.data;
  }

  async decrypt(publicKey, data) {
    const res = await axios.post(this.#Decrypt, {
      publicKey: publicKey,
      data: data,
    });
    return res.data;
  }
}

module.exports = Encryption;
