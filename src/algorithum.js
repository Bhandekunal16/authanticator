const axios = require("axios");

async function encrypt() {
  return await axios.post(`https://encryption-server.vercel.app/encrypt`, {
    publicKey: "Robotic.js",
    data: "hello",
  });
}

async function decrypt() {
  return await axios.post(`https://encryption-server.vercel.app/decrypt`, {
    publicKey: "Robotic.js",
    data: "726f626f746963aGVsbG8=099f29be86cf77f32241bd81deb7038d37fbe4863bc66ab224f972133804ae0d",
  });
}

encrypt().then((ele) => {
  console.log(ele.data);
});

decrypt().then((ele) => {
  console.log(ele.data);
});