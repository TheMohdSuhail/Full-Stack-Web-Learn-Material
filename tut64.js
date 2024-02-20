const fs = require("fs");
// const text = fs.readFileSync("msp.txt", "utf-8");
let text = fs.readFileSync("msp.txt", "utf-8");
text = text.replace("Lorem", "MOHD SUHAIL")


console.log(text);


console.log("Creatin A New File....");

fs.writeFileSync("suhail.txt", text);
