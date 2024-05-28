const axios = require("axios");

class Encryption {
  async encrypt(publicKey, data) {
    const res = await axios.post(
      `https://encryption-server.vercel.app/encrypt`,
      {
        publicKey: publicKey,
        data: data,
      }
    );
    return res.data;
  }

  async decrypt(publicKey, data) {
    const res = await axios.post(
      `https://encryption-server.vercel.app/decrypt`,
      {
        publicKey: publicKey,
        data: data,
      }
    );
    return res.data;
  }
}

// ? Type of exports the modules
module.exports = Encryption;
exports.Encryption = Encryption;
exports['Encryption'] = Encryption;
// * 1) exports module in normal way
// * 2) exports module in named way
// * 3) exports module in named way
