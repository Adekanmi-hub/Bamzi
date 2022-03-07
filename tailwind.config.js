module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#000033",
        secondary: "#FDD25A",
        darkGray: "rgba(48, 48, 48, 255)",
        lightPurple: "#d772fb",
        lightBrown: "#ff9cb1",
        bluelight: "#e9f0ff",
        lightorange: "#fcd25a",
        fadewhite: "#f9f8f8",
        blueshade: "#141738",
        lightgray: "#c0c2c5",
        lightpink: "#eac2bf",
        colorange: "#fed65f",
        lightgrey: "#ececec",
        green: "#3AA837",
        
      },
      fontFamily: {
        poppins: "Poppins",

      },
      backgroundImage: {
        seller: "url(../assets/seller-bg.png)",
        drawer: "url(../assets/bg-drawer.png)",
        store: "url(../assets/bg-seller-store.png)",
        storeHeader: "url(../assets/bg-store-header.png)",
        errorbg: "url(../assets/Group-11551.png)",
      },
    },
  },
}
