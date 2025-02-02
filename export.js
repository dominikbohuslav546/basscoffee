import fs from "fs";
import ejs from "ejs";

// Data, která by normálně šla z backendu
const data = {}; // Můžete vložit proměnné pro EJS

// Načtení EJS šablony a vytvoření HTML souboru
ejs.renderFile("views/index.ejs", data, (err, html) => {
  if (err) {
    console.error("Chyba při renderování:", err);
  } else {
    fs.writeFileSync("dist/index.html", html);
    console.log("✅ Stránka byla úspěšně exportována do dist/index.html");
  }
});
