const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {

const TensorWindows="╔╗╚╝═║╠╣╦╩╬";

const tensorReplie = '├┤┬┴┼╠╣╩';

const tensorRendu = '─│·░▒▓█';

const Tensor = `${TensorWindows}+${tensorReplie}+${tensorRendu}`

const chunk00 = `
    echo "  ╔═══════════════════════════════════════════════════════════════════════════╗";
    echo "  ║ [💫] [💻] [📱] [💬] [🔷] [🧾] [💳] [💾]                                [🛰]║";
    echo "  ╠═══════════════════════════════════════════════════════════════════════════╣";
    echo "  ║  ███████████████████████████████████████████████████████████████████████  ║";
    echo "  ║ █████████████████████████████████████████████████████████████████████████ ║";
    echo "  ║███████████████████████████████████████████████████████████████████████████║";
    echo "  ║███████████████████████████████████████████████████████████████████████████║";
    echo "  ║███████████████████████████████████████████████████████████████████████████║";
    echo "  ║███████████████████████████████████████████████████████████████████████████║";
    echo "  ║███████████████████████████████████████████████████████████████████████████║";
    echo "  ║███████████████████████████████████████████████████████████████████████████║";
    echo "  ║███████████████████████████████████████████████████████████████████████████║";
    echo "  ║███████████████████████████████████████████████████████████████████████████║";
    echo "  ║███████████████████████████████████████████████████████████████████████████║";
    echo "  ║███████████████████████████████████████████████████████████████████████████║";
    echo "  ║███████████████████████████████████████████████████████████████████████████║";
    echo "  ║███████████████████████████████████████████████████████████████████████████║";
    echo "  ║ █████████████████████████████████████████████████████████████████████████ ║";
    echo "  ║  ███████████████████████████████████████████████████████████████████████  ║";
    echo "  ╠═══════════════════════════════════════════════════════════════════════════╣";
    echo "  ║[🌴.✨]:/<                                                             /📡>║";
    echo "  ╚═══════════════════════════════════════════════════════════════════════════╝"
    echo ""
    `
const chunk01 = `
    echo "  ╔═══════════════════════════════════════════════════════════════════════════╗";
    echo "  ║ [💫] [💻] [📱] [💬] [🔷] [🧾] [💳] [💾]                                [🛰]║";
    echo "  ╠═══════════════════════════════════════════════════════════════════════════╣";
    echo "  ║                                                                           ║";
    echo "  ║                                                                           ║";
    echo "  ║                                                                           ║";
    echo "  ║                                                                           ║";
    echo "  ║                                                                           ║";
    echo "  ║                                                                           ║";
    echo "  ║                                                                           ║";
    echo "  ║                                                                           ║";
    echo "  ║                                                                           ║";
    echo "  ║                                                                           ║";
    echo "  ║                                                                           ║";
    echo "  ║                                                                           ║";
    echo "  ║                                                                           ║";
    echo "  ║                                                                           ║";
    echo "  ║                                                                           ║";        
    echo "  ║                                                                           ║";
    echo "  ║                                                                           ║";
    echo "  ╠═══════════════════════════════════════════════════════════════════════════╣";
    echo "  ║[🌴.✨]:/<                                                             /📡>║";
    echo "  ╚═══════════════════════════════════════════════════════════════════════════╝"
    echo ""`
const chunk10 = `
    echo "  ╔═══════════════════════════════════════════════════════════════════════════╗";
    echo "  ║ [💫] [💻] [📱] [💬] [🔷] [🧾] [💳] [💾]                                [🛰]║";
    echo "  ╠═══════════════════════════════════════════════════════════════════════════╣";
    echo "  ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   ║";
    echo "  ║ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ║";
    echo "  ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║";
    echo "  ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║";
    echo "  ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║";
    echo "  ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║";
    echo "  ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║";
    echo "  ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║";
    echo "  ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║";
    echo "  ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║";
    echo "  ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║";
    echo "  ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║";
    echo "  ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║";
    echo "  ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║";
    echo "  ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║";
    echo "  ║ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ║";
    echo "  ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║";
    echo "  ╠═══════════════════════════════════════════════════════════════════════════╣";
    echo "  ║[🌴.✨]:/<                                                             /📡>║";
    echo "  ╚═══════════════════════════════════════════════════════════════════════════╝"
    echo ""
`

const chunk11 = `${chunk00}+${chunk01}+${chunk10}`

const chatCompletion = await groq.chat.completions.create({
    "messages": [
        
      {role: "system",name:"[🌌_system", content:`Response in ${chunk11}+${Tensor}`},
    
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.6,
    max_tokens: 4096,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const gqlContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "ascii-lvl-_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".gql";
    fs.writeFileSync(outputFilePath, gqlContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}
main();