const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Enable CORS
app.use(cors());

// Proxy middleware to forward requests from '/api' to the target server
app.use(
  "/api",
  createProxyMiddleware({
    target: "https://movieforkhapi.vercel.app",
    changeOrigin: true,
    pathRewrite: {
      "^/api": "", // Remove '/api' from the request URL when forwarding
    },
  })
);

app.get("/", (req, res) => {
  res.json({
    moviedata: [
      {
        id: "2",
        name: "Iron man 2",
        rate: 7,
        img: "https://i.pinimg.com/564x/82/a7/fa/82a7fa58560c78869a5dc25f5e5cfcd9.jpg",
        release: 2010,
        genere: "sci-fi, action",
        runtime: "245mn",
        type: "movie",
        cover:
          "https://ticketdirect.co.nz/wp-content/uploads/2024/07/twisters-poster-03-cropped.jpg",
        trending: false,
        source: "https://rabbitstream.net/v2/embed-4/yPkQQebvYeqe?z=",
        detail:
          "Iron Man 3 (titled onscreen as Iron Man Three) is a 2013 American superhero film based on the Marvel Comics character Iron Man, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.[a] It is the sequel to Iron Man (2008) and Iron Man 2 (2010), and the seventh film in the Marvel Cinematic Universe (MCU).",
      },
      {
        id: "3",
        name: "Iron man 3",
        rate: 8,
        img: "https://i.pinimg.com/564x/6d/15/0c/6d150c6e17f6c7f33362e34fab1c10c7.jpg",
        release: "2012",
        genere: "sci-fi, action",
        runtime: "245mn",
        type: "movie",
        cover:
          "https://ticketdirect.co.nz/wp-content/uploads/2024/07/twisters-poster-03-cropped.jpg",
        trending: false,
        source: "https://www.youtube.com/embed/KAE5ymVLmZg?si=piGoAkciQ3YSfaBe",
        detail:
          "Iron Man 3 (titled onscreen as Iron Man Three) is a 2013 American superhero film based on the Marvel Comics character Iron Man, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.[a] It is the sequel to Iron Man (2008) and Iron Man 2 (2010), and the seventh film in the Marvel Cinematic Universe (MCU).",
      },
      {
        id: "4",
        name: "Spider-man: Home coming",
        rate: 8,
        img: "https://i.pinimg.com/736x/c0/56/7d/c0567d063eac24c50109c2ee34943ec5.jpg",
        release: "2015",
        genere: "sci-fi, action",
        runtime: "245mn",
        type: "movie",
        cover:
          "https://ticketdirect.co.nz/wp-content/uploads/2024/07/twisters-poster-03-cropped.jpg",
        trending: false,
        source: "https://www.youtube.com/embed/rk-dF1lIbIg?si=Yanb3dfamOGXxG4f",
        detail:
          "Iron Man 3 (titled onscreen as Iron Man Three) is a 2013 American superhero film based on the Marvel Comics character Iron Man, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.[a] It is the sequel to Iron Man (2008) and Iron Man 2 (2010), and the seventh film in the Marvel Cinematic Universe (MCU).",
      },
      {
        id: "5",
        name: "Spider-man 1",
        rate: 8,
        img: "https://i.pinimg.com/564x/92/9a/df/929adf829d021d06c16101ac26a535d1.jpg",
        release: "2002",
        genere: "sci-fi, action",
        runtime: "245mn",
        type: "movie",
        cover:
          "https://ticketdirect.co.nz/wp-content/uploads/2024/07/twisters-poster-03-cropped.jpg",
        trending: false,
        source: "https://www.youtube.com/embed/KAE5ymVLmZg?si=piGoAkciQ3YSfaBe",
        detail:
          "Iron Man 3 (titled onscreen as Iron Man Three) is a 2013 American superhero film based on the Marvel Comics character Iron Man, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.[a] It is the sequel to Iron Man (2008) and Iron Man 2 (2010), and the seventh film in the Marvel Cinematic Universe (MCU).",
      },
      {
        id: "6",
        name: "Avengers infinity war",
        rate: 9,
        img: "https://i.pinimg.com/736x/47/f4/18/47f418cb2a974adc22a6379626ea0e0a.jpg",
        release: "2018",
        genere: "sci-fi, action",
        runtime: "245mn",
        type: "movie",
        cover:
          "https://ticketdirect.co.nz/wp-content/uploads/2024/07/twisters-poster-03-cropped.jpg",
        trending: false,
        source: "https://www.youtube.com/embed/KAE5ymVLmZg?si=piGoAkciQ3YSfaBe",
        detail:
          "Iron Man 3 (titled onscreen as Iron Man Three) is a 2013 American superhero film based on the Marvel Comics character Iron Man, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.[a] It is the sequel to Iron Man (2008) and Iron Man 2 (2010), and the seventh film in the Marvel Cinematic Universe (MCU).",
      },
      {
        id: "7",
        name: "Avengers End game",
        rate: 9,
        img: "https://i.pinimg.com/originals/b0/64/21/b064212de856129e00ee8246a95d78cd.jpg",
        release: "2019",
        genere: "sci-fi, action",
        runtime: "245mn",
        type: "movie",
        cover:
          "https://ticketdirect.co.nz/wp-content/uploads/2024/07/twisters-poster-03-cropped.jpg",
        trending: false,
        source: "https://www.youtube.com/embed/KAE5ymVLmZg?si=piGoAkciQ3YSfaBe",
        detail:
          "Iron Man 3 (titled onscreen as Iron Man Three) is a 2013 American superhero film based on the Marvel Comics character Iron Man, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.[a] It is the sequel to Iron Man (2008) and Iron Man 2 (2010), and the seventh film in the Marvel Cinematic Universe (MCU).",
      },
      {
        id: "8",
        name: "The Avengers",
        rate: 9,
        img: "https://i.pinimg.com/736x/09/3b/17/093b174493302830c8f2fcffc618ff0f.jpg",
        release: "2012",
        genere: "sci-fi, action",
        runtime: "245mn",
        type: "movie",
        cover:
          "https://ticketdirect.co.nz/wp-content/uploads/2024/07/twisters-poster-03-cropped.jpg",
        trending: false,
        source: "https://www.youtube.com/embed/KAE5ymVLmZg?si=piGoAkciQ3YSfaBe",
        detail:
          "Iron Man 3 (titled onscreen as Iron Man Three) is a 2013 American superhero film based on the Marvel Comics character Iron Man, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.[a] It is the sequel to Iron Man (2008) and Iron Man 2 (2010), and the seventh film in the Marvel Cinematic Universe (MCU).",
      },
      {
        id: "9",
        name: "Avengers: Age of ultron",
        rate: 9,
        img: "https://i.pinimg.com/564x/1a/59/eb/1a59eba7c54a8ec6a83dc245bfab3880.jpg",
        release: "2012",
        genere: "sci-fi, action",
        runtime: "245mn",
        type: "movie",
        cover:
          "https://ticketdirect.co.nz/wp-content/uploads/2024/07/twisters-poster-03-cropped.jpg",
        trending: false,
        source: "https://www.youtube.com/embed/KAE5ymVLmZg?si=piGoAkciQ3YSfaBe",
        detail:
          "Iron Man 3 (titled onscreen as Iron Man Three) is a 2013 American superhero film based on the Marvel Comics character Iron Man, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.[a] It is the sequel to Iron Man (2008) and Iron Man 2 (2010), and the seventh film in the Marvel Cinematic Universe (MCU).",
      },
      {
        id: "10",
        name: "Captain america: Civil war",
        rate: 9,
        img: "https://i.pinimg.com/originals/b6/5c/87/b65c87ba055bb5e582ac5023e2c60e96.jpg",
        release: "2012",
        genere: "sci-fi, action",
        runtime: "245mn",
        type: "movie",
        cover:
          "https://ticketdirect.co.nz/wp-content/uploads/2024/07/twisters-poster-03-cropped.jpg",
        trending: false,
        source: "https://www.youtube.com/embed/KAE5ymVLmZg?si=piGoAkciQ3YSfaBe",
        detail:
          "Iron Man 3 (titled onscreen as Iron Man Three) is a 2013 American superhero film based on the Marvel Comics character Iron Man, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.[a] It is the sequel to Iron Man (2008) and Iron Man 2 (2010), and the seventh film in the Marvel Cinematic Universe (MCU).",
      },
      {
        id: "11",
        name: "Gaurdian of the galaxy vol 3",
        rate: 9,
        img: "https://m.media-amazon.com/images/I/71OLMNKaKEL._AC_UF894,1000_QL80_.jpg",
        release: "2012",
        genere: "sci-fi, action",
        runtime: "245mn",
        type: "movie",
        cover:
          "https://ticketdirect.co.nz/wp-content/uploads/2024/07/twisters-poster-03-cropped.jpg",
        trending: false,
        source: "https://www.youtube.com/embed/KAE5ymVLmZg?si=piGoAkciQ3YSfaBe",
        detail:
          "Iron Man 3 (titled onscreen as Iron Man Three) is a 2013 American superhero film based on the Marvel Comics character Iron Man, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.[a] It is the sequel to Iron Man (2008) and Iron Man 2 (2010), and the seventh film in the Marvel Cinematic Universe (MCU).",
      },
      {
        id: "12",
        name: "How ot tran your dragon 1",
        rate: 9,
        img: "https://i.pinimg.com/736x/58/ca/9f/58ca9f51c8409998f6c1e8186004b3f5.jpg",
        release: "2010",
        genere: "cartoon",
        runtime: "245mn",
        type: "movie",
        cover:
          "https://ticketdirect.co.nz/wp-content/uploads/2024/07/twisters-poster-03-cropped.jpg",
        trending: false,
        source: "https://www.youtube.com/embed/2AKsAxrhqgM?si=qkLl0KYf-8Nmijrn",
        detail:
          "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
      },
      {
        id: "13",
        name: "Frozen",
        rate: 8,
        img: "https://i.pinimg.com/474x/38/39/d5/3839d5e37ace70d0d82a7ff5c018e619.jpg",
        release: "2012",
        genere: "cartoon",
        runtime: "245mn",
        type: "movie",
        cover:
          "https://ticketdirect.co.nz/wp-content/uploads/2024/07/twisters-poster-03-cropped.jpg",
        trending: false,
        source: "https://www.youtube.com/embed/2AKsAxrhqgM?si=qkLl0KYf-8Nmijrn",
        detail:
          "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
      },
      {
        id: "14",
        name: "Spider-man into the spiderverse",
        rate: 9,
        img: "https://picfiles.alphacoders.com/421/thumb-421554.jpg",
        release: "2018",
        genere: "cartoon",
        runtime: "245mn",
        type: "movie",
        cover:
          "https://ticketdirect.co.nz/wp-content/uploads/2024/07/twisters-poster-03-cropped.jpg",
        trending: false,
        source: "https://www.youtube.com/embed/2AKsAxrhqgM?si=qkLl0KYf-8Nmijrn",
        detail:
          "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
      },
      {
        id: "15",
        name: "Moana",
        rate: 8,
        img: "https://i.pinimg.com/originals/2a/76/ba/2a76bab1baf74b5dac15e3f9ec3f6b61.jpg",
        release: "2016",
        genere: "cartoon",
        runtime: "245mn",
        type: "movie",
        cover:
          "https://ticketdirect.co.nz/wp-content/uploads/2024/07/twisters-poster-03-cropped.jpg",
        trending: false,
        source: "https://www.youtube.com/embed/2AKsAxrhqgM?si=qkLl0KYf-8Nmijrn",
        detail:
          "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
      },
      {
        id: "16",
        name: "Kong Fu Panda 4",
        rate: 8,
        img: "https://m.media-amazon.com/images/M/MV5BZDY0YzI0OTctYjVhYy00MTVhLWE0NTgtYTRmYTBmOTE3YTViXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
        release: "2024",
        genere: "cartoon",
        runtime: "245mn",
        type: "movie",
        cover:
          "https://ticketdirect.co.nz/wp-content/uploads/2024/07/twisters-poster-03-cropped.jpg",
        trending: false,
        source: "https://www.youtube.com/embed/2AKsAxrhqgM?si=qkLl0KYf-8Nmijrn",
        detail:
          "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
      },
      {
        id: "17",
        name: "Puss in Boots: The Last Wish",
        rate: 7,
        img: "https://m.media-amazon.com/images/M/MV5BNjMyMDBjMGUtNDUzZi00N2MwLTg1MjItZTk2MDE1OTZmNTYxXkEyXkFqcGdeQXVyMTQ5NjA0NDM0._V1_.jpg",
        release: "2024",
        genere: "cartoon",
        runtime: "245mn",
        type: "movie",
        cover:
          "https://ticketdirect.co.nz/wp-content/uploads/2024/07/twisters-poster-03-cropped.jpg",
        trending: false,
        source: "https://www.youtube.com/embed/2AKsAxrhqgM?si=qkLl0KYf-8Nmijrn",
        detail:
          "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
      },
      {
        id: "18",
        name: "Despicable Me",
        rate: 8,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfSwi5a1u9-ykbiFUkHo0KbHJb6h_wKfb9Mg&s",
        release: "2010",
        genere: "cartoon",
        runtime: "245mn",
        type: "movie",
        cover:
          "https://ticketdirect.co.nz/wp-content/uploads/2024/07/twisters-poster-03-cropped.jpg",
        trending: false,
        source: "https://www.youtube.com/embed/2AKsAxrhqgM?si=qkLl0KYf-8Nmijrn",
        detail:
          "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
      },
      {
        id: "19",
        name: "The Croods",
        rate: 8,
        img: "https://upload.wikimedia.org/wikipedia/en/6/63/The_Croods.png",
        release: "2013",
        genere: "cartoon",
        runtime: "245mn",
        type: "movie",
        cover:
          "https://ticketdirect.co.nz/wp-content/uploads/2024/07/twisters-poster-03-cropped.jpg",
        trending: false,
        source: "https://www.youtube.com/embed/2AKsAxrhqgM?si=qkLl0KYf-8Nmijrn",
        detail:
          "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
      },
      {
        id: "20",
        name: "The notebook",
        rate: 8,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPgd55ObXtv-Ah4zZHOEaQOkJA5D4Hk6X-mQ&s",
        release: "2017",
        genere: "romance",
        runtime: "245mn",
        type: "movie",
        cover:
          "https://ticketdirect.co.nz/wp-content/uploads/2024/07/twisters-poster-03-cropped.jpg",
        trending: false,
        source: "https://www.youtube.com/embed/BjJcYdEOI0k?si=laE53a6x4YkmhMwc",
        detail:
          "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
      },
      {
        id: "21",
        name: "La La Land",
        rate: 6,
        img: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg",
        release: "2021",
        genere: "romance",
        runtime: "245mn",
        type: "movie",
        cover:
          "https://ticketdirect.co.nz/wp-content/uploads/2024/07/twisters-poster-03-cropped.jpg",
        trending: false,
        source: "https://www.youtube.com/embed/BjJcYdEOI0k?si=laE53a6x4YkmhMwc",
        detail:
          "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
      },
      {
        id: "22",
        name: "Call Me by Your Name",
        rate: 8,
        img: "https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_FMjpg_UX1000_.jpg",
        release: "2016",
        genere: "romance",
        runtime: "245mn",
        type: "movie",
        cover:
          "https://ticketdirect.co.nz/wp-content/uploads/2024/07/twisters-poster-03-cropped.jpg",
        trending: false,
        source: "https://www.youtube.com/embed/BjJcYdEOI0k?si=laE53a6x4YkmhMwc",
        detail:
          "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
      },
      {
        id: "23",
        name: "Romeo + Juliet",
        rate: 9,
        img: "https://m.media-amazon.com/images/M/MV5BMGU4YmI1ZGQtZjExYi00M2E0LTgyYTAtNzQ5ZmVlMTk4NzUzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        release: "1996",
        genere: "romance",
        runtime: "245mn",
        type: "movie",
        cover:
          "https://ticketdirect.co.nz/wp-content/uploads/2024/07/twisters-poster-03-cropped.jpg",
        trending: false,
        source: "https://www.youtube.com/embed/BjJcYdEOI0k?si=laE53a6x4YkmhMwc",
        detail:
          "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
      },
      {
        id: "24",
        name: "Titanic",
        rate: 9,
        img: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
        release: "1999",
        genere: "romance",
        runtime: "245mn",
        type: "movie",
        cover:
          "https://ticketdirect.co.nz/wp-content/uploads/2024/07/twisters-poster-03-cropped.jpg",
        trending: false,
        source: "https://www.youtube.com/embed/kVrqfYjkTdQ?si=kOKUZMTlZzn4JNbH",
        detail:
          "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
      },
      {
        id: "25",
        name: "Forrest Gump",
        rate: 9,
        img: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        release: "2008",
        genere: "romance",
        runtime: "245mn",
        type: "movie",
        cover:
          "https://ticketdirect.co.nz/wp-content/uploads/2024/07/twisters-poster-03-cropped.jpg",
        trending: false,
        source: "https://www.youtube.com/embed/kVrqfYjkTdQ?si=kOKUZMTlZzn4JNbH",
        detail:
          "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
      },
      {
        id: "26",
        name: "Beauty and the beast",
        rate: 9,
        img: "https://lumiere-a.akamaihd.net/v1/images/p_beautyandthebeast_19752_32e65c36.jpeg",
        release: "2008",
        genere: "romance",
        runtime: "245mn",
        type: "movie",
        cover:
          "https://ticketdirect.co.nz/wp-content/uploads/2024/07/twisters-poster-03-cropped.jpg",
        trending: false,
        source: "https://www.youtube.com/embed/e3Nl_TCQXuw?si=C6z-9Epwoz2z9qjf",
        detail:
          "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
      },
      {
        id: "27",
        name: "The twister",
        rate: 9,
        img: "https://m.media-amazon.com/images/I/71sDLtiIL5L._AC_UF894,1000_QL80_.jpg",
        release: "2024",
        genere: "action",
        runtime: "245mn",
        type: "movie",
        cover:
          "https://ticketdirect.co.nz/wp-content/uploads/2024/07/twisters-poster-03-cropped.jpg",
        trending: true,
        source: "https://rabbitstream.net/v2/embed-4/XX48IX24sbBw?z=",
        detail:
          "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
      },
      {
        id: "29",
        name: "Deadpool and wolverine",
        rate: 8,
        img: "https://m.media-amazon.com/images/M/MV5BNzRiMjg0MzUtNTQ1Mi00Y2Q5LWEwM2MtMzUwZDU5NmVjN2NkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        release: "2024",
        genere: "action, sci-fi",
        runtime: "245mn",
        type: "movie",
        cover:
          "https://www.baltana.com/files/wallpapers-39/Deadpool-and-Wolverine-HD-Desktop-Wallpaper.jpg",
        trending: true,
        source: "blob:https://kisskh.co/b38b08b2-baad-4be3-bac5-73a4673e6c8c",
        detail:
          "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
      },
      {
        id: "30",
        name: "House of the dragon",
        rate: "9",
        img: "https://m.media-amazon.com/images/I/711C3RIqA7L._AC_UF894,1000_QL80_.jpg",
        release: "2024",
        genere: "action , sci-fi",
        runtime: "245mn",
        type: "tv-show",
        cover: "https://images6.alphacoders.com/131/1319758.jpeg",
        trending: true,
        source: "blob:https://kisskh.co/b38b08b2-baad-4be3-bac5-73a4673e6c8c",
        detail:
          "apless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
      },
      {
        id: "31",
        name: "The boys",
        rate: 9,
        img: "https://preview.redd.it/official-poster-for-the-boys-season-4-v0-jsy9kgg33uyc1.jpeg?width=1080&crop=smart&auto=webp&s=2969a03ab9dbd033f5ad9310a4768afe4af4b8b3",
        release: "2024",
        genere: "action , sci-fi , drama",
        runtime: "245mn",
        type: "tv-show",
        cover:
          "https://assets.aboutamazon.com/dims4/default/0815d77/2147483647/strip/true/crop/2548x1434+1+0/resize/2640x1486!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F34%2F65%2Ffb00aebc49a7985bc9571d042264%2Ffull-width-mobile-first-hero-2550x1434.jpg",
        trending: true,
        source:
          "https://assets.aboutamazon.com/dims4/default/0815d77/2147483647/strip/true/crop/2548x1434+1+0/resize/2640x1486!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F34%2F65%2Ffb00aebc49a7985bc9571d042264%2Ffull-width-mobile-first-hero-2550x1434.jpg",
        detail:
          "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
      },
      {
        id: "32",
        name: "godzila x Kong",
        img: "https://preview.redd.it/new-poster-for-godzilla-x-kong-the-new-empire-v0-ya6zbdrdqkic1.jpeg?auto=webp&s=422f95175aa06554065ed2c2f8f79b9756270fe7",
        cover:
          "https://nerdreactor.com/wp-content/uploads/2024/03/Godzilla-X-Kong-The-New-Empire-Chinese-PromoMedium-1024x560.jpg",
        rate: "7",
        runtime: "245mn",
        release: "2024",
        genere: "action",
        detail:
          "Godzilla x Kong: The New Empire is a 2024 American monster film directed by Adam Wingard. Produced by Legendary Pictures and distributed by Warner Bros.",
        trending: true,
        source:
          "https://nerdreactor.com/wp-content/uploads/2024/03/Godzilla-X-Kong-The-New-Empire-Chinese-PromoMedium",
        type: "movie",
      },
      {
        id: "33",
        name: "Spider-man: No no way home",
        img: "https://sportshub.cbsistatic.com/i/2022/01/21/6c422820-0c68-41e2-8496-ccc76599f26a/spider-man-no-way-home-multiverse-poster.jpg?auto=webp&width=928&height=1374&crop=0.675:1,smart",
        cover:
          "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/11/Spider-Man-NWH-Poster-1.jpeg",
        rate: "7",
        runtime: "240mn",
        release: "2022",
        genere: "action",
        detail:
          "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor",
        trending: true,
        source:
          "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/11/Spider-Man-NWH-Poster-1.jpeg",
        type: "movie",
      },
      {
        id: "34",
        name: "Star Wars: The Last Jedi",
        img: "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_.jpg",
        cover:
          "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1A17D0D449D5A9E24FD41D3A849B47FF902363B58410EBF2EC49349D62C7AEBF/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp",
        rate: "7",
        type: "movie",
        runtime: "145mn",
        release: "2016",
        genere: "action",
        detail:
          "Star Wars: The Last Jedi (also known as Star Wars: Episode VIII – The Last Jedi) is a 2017 American epic space opera film written and directed by Rian",
        trending: false,
        source:
          "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1A17D0D449D5A9E24FD41D3A849B47FF902363B58410EBF2EC49349D62C7AEBF/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp",
      },
    ],
    account: [
      {
        id: "1",
        username: "samonbk",
        password: "123",
        role: "Admin",
        picture:
          "https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp",
        cover: "https://i.imgur.com/n7u6qMl.jpeg",
        phone: "+85511339845",
        dob: "7/9/2001",
        bio: "game, movie, football",
      },
    ],
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
