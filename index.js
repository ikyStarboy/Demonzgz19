const express = require('express');
const app = express();

const archData = [
    {
      "archname": "airi",
      "link": "https://i.ibb.co/NCrGwKF/image.jpg",
      "stars": "☆",
      "possibility": "79%",
      "price": "80",
      "archid": "267"
    },
    {
      "archname": "hibiki",
      "link": "https://i.ibb.co/bsYTCGq/image.jpg",
      "stars": "☆",
      "possibility": "76%",
      "price": "120",
      "archid": "266"
    },
    {
      "archname": "fuuka",
      "link": "https://i.ibb.co/gTVvmCs/image.jpg",
      "stars": "☆☆",
      "possibility": "53%",
      "price": "210",
      "archid": "232"
    },
    {
      "archname": "akane",
      "link": "https://i.ibb.co/jW6bQc6/image.jpg",
      "stars": "☆",
      "possibility": "79%",
      "price": "65",
      "archid": "265"
    },
    {
      "archname": "hoshino",
      "link": "https://i.ibb.co/dgN10k5/image.jpg",
      "stars": "☆☆☆☆☆☆",
      "possibility": "2%",
      "price": "999999999999999",
      "archid": "1"
    },
    {
      "archname": "chinatsu",
      "link": "https://i.ibb.co/PrqCXKS/image.jpg",
      "stars": "☆☆☆",
      "possibility": "32%",
      "price": "340",
      "archid": "677"
    },
    {
      "archname": "shiroko",
      "link": "https://i.ibb.co/J5qwqsT/image.jpg",
      "stars": "☆☆",
      "possibility": "62%",
      "price": "120",
      "archid": "627"
    },
    {
      "archname": "yuuka",
      "link": "https://i.ibb.co/KwWq7Mw/image.jpg",
      "stars": "☆☆☆☆",
      "possibility": "23%",
      "price": "570",
      "archid": "172"
    },
    {
      "archname": "maki",
      "link": "https://i.ibb.co/bHNTH6g/image.jpg",
      "stars": "☆☆☆",
      "possibility": "54%",
      "price": "320",
      "archid": "816"
    },
    {
      "archname": "serina",
      "link": "https://i.ibb.co/j4N0d33/image.jpg",
      "stars": "☆☆☆☆",
      "possibility": "23%",
      "price": "570",
      "archid": "127"
    },
    {
      "archname": "iori",
      "link": "https://i.ibb.co/cCWpn5S/image.jpg",
      "stars": "☆",
      "possibility": "79%",
      "price": "80",
      "archid": "262"
    },
    {
      "archname": "hasumi",
      "link": "https://i.ibb.co/tP2hCYM/image.jpg",
      "stars": "☆☆",
      "possibility": "62%",
      "price": "120",
      "archid": "617"
    },
    {
      "archname": "hifumi",
      "link": "https://i.ibb.co/HtgvXLc/image.jpg",
      "stars": "☆☆☆",
      "possibility": "42%",
      "price": "320",
      "archid": "872"
    },
    {
      "archname": "ayane",
      "link": "https://i.ibb.co/QY3cT7T/image.jpg",
      "stars": "☆☆☆",
      "possibility": "21%",
      "price": "370",
      "archid": "122"
    },
    {
      "archname": "pina",
      "link": "https://i.ibb.co/G3k0605/image.jpg",
      "stars": "☆☆",
      "possibility": "64%",
      "price": "120",
      "archid": "154"
    },
    {
      "archname": "kotori",
      "link": "https://i.ibb.co/HnSsNYt/image.jpg",
      "stars": "☆",
      "possibility": "79%",
      "price": "80",
      "archid": "667"
    },
    {
      "archname": "kotama",
      "link": "https://i.ibb.co/8mVByd4/image.jpg",
      "stars": "☆☆",
      "possibility": "64%",
      "price": "120",
      "archid": "811"
    },
    {
      "archname": "eimi",
      "link": "https://i.ibb.co/hKk1j8C/image.jpg",
      "stars": "☆☆☆",
      "possibility": "32%",
      "price": "320",
      "archid": "512"
    },
    {
      "archname": "kayoko",
      "link": "https://i.ibb.co/cvdT21w/image.jpg",
      "stars": "☆☆☆☆",
      "possibility": "21%",
      "price": "570",
      "archid": "562"
    },
    {
      "archname": "momoka",
      "link": "https://i.ibb.co/fpgtw7N/image.jpg",
      "stars": "☆",
      "possibility": "79%",
      "price": "80",
      "archid": "761"
    },
    {
      "archname": "izumi",
      "link": "https://i.ibb.co/d6cY11y/image.jpg",
      "stars": "☆☆☆",
      "possibility": "34%",
      "price": "370",
      "archid": "789"
    },
    {
      "archname": "shimiko",
      "link": "https://i.ibb.co/QDNnbpb/image.jpg",
      "stars": "☆",
      "possibility": "79%",
      "price": "80",
      "archid": "129"
    },
    {
      "archname": "akari",
      "link": "https://i.ibb.co/7y67GRx/image.jpg",
      "stars": "☆☆",
      "possibility": "64%",
      "price": "120",
      "archid": "638"
    },
    {
      "archname": "hina",
      "link": "https://i.ibb.co/Yhvb7N0/image.jpg",
      "stars": "☆☆☆",
      "possibility": "34%",
      "price": "234",
      "archid": "172"
    },
    {
      "archname": "junko",
      "link": "https://i.ibb.co/2MhRZZ8/image.jpg",
      "stars": "☆☆☆☆☆",
      "possibility": "15%",
      "price": "1200",
      "archid": "991"
    },
    {
      "archname": "chise",
      "link": "https://i.ibb.co/qM1tDmN/image.jpg",
      "stars": "☆☆☆",
      "possibility": "15%",
      "price": "250",
      "archid": "992"
    },
    {
      "archname": "saya",
      "link": "https://i.ibb.co/KqDQgp6/image.jpg",
      "stars": "☆",
      "possibility": "79%",
      "price": "80",
      "archid": "6154"
    },
    {
      "archname": "juri",
      "link": "https://i.ibb.co/yY9V2Sy/image.jpg",
      "stars": "☆☆☆",
      "possibility": "42%",
      "price": "320",
      "archid": "5244"
    },
    {
      "archname": "nonomi",
      "link": "https://i.ibb.co/DKRYYww/image.jpg",
      "stars": "☆☆☆",
      "possibility": "42%",
      "price": "320",
      "archid": "7283"
    },
    {
      "archname": "rin",
      "link": "https://i.ibb.co/K7yXf5w/image.jpg",
      "stars": "☆☆☆",
      "possibility": "42%",
      "price": "320",
      "archid": "8153"
    },
    {
      "archname": "haruka",
      "link": "https://i.ibb.co/hgZJk6j/image.jpg",
      "stars": "☆☆",
      "possibility": "79%",
      "price": "120",
      "archid": "9173"
    },
    {
      "archname": "serika",
      "link": "https://i.ibb.co/hV2sbVV/image.jpg",
      "stars": "☆☆",
      "possibility": "79%",
      "price": "120",
      "archid": "9173"
    },
    {
      "archname": "utaha",
      "link": "https://i.ibb.co/gj7yJ1d/image.jpg",
      "stars": "☆☆☆",
      "possibility": "62%",
      "price": "240",
      "archid": "9163"
    },
    {
      "archname": "sumire",
      "link": "https://i.ibb.co/grjG74V/image.jpg",
      "stars": "☆☆☆",
      "possibility": "62%",
      "price": "240",
      "archid": "9121"
    },
    {
      "archname": "aru",
      "link": "https://i.ibb.co/hZBZMvD/image.jpg",
      "stars": "☆☆☆",
      "possibility": "62%",
      "price": "240",
      "archid": "7152"
    },
    {
      "archname": "junko",
      "link": "https://i.ibb.co/RvqBZWC/image.jpg",
      "stars": "☆☆☆",
      "possibility": "62%",
      "price": "240",
      "archid": "9163"
    },
    {
      "archname": "yoshimi",
      "link": "https://i.ibb.co/D1K312p/image.jpg",
      "stars": "☆☆☆☆",
      "possibility": "42%",
      "price": "432",
      "archid": "81738"
    },
    {
      "archname": "tsurugi",
      "link": "https://i.ibb.co/VVQ9Z3j/image.jpg",
      "stars": "☆☆☆",
      "possibility": "62%",
      "price": "320",
      "archid": "91737"
    },
    {
      "archname": "hare",
      "link": "https://i.ibb.co/XscVv0G/image.jpg",
      "stars": "☆☆☆",
      "possibility": "62%",
      "price": "320",
      "archid": "81538"
    }
  ];

app.get('/', (req, res) => {
  res.json(archData);
});

app.listen(3000, () => {
  console.log('API server running on port 3000');
});
