var csvtojson = require('csvtojson');
var csInterFace = new CSInterface();

function init() {
    var csvInput = document.getElementById('csv-input');
    csvInput.addEventListener('change', createSubtitles);
}

async function createSubtitles(event) {
    var file = event.target.files[0];
    var csv = await readCsv(file);
    var subtitles = await convertCsvToJson(csv);
    await csEvalScript('init()');
    console.log(subtitles)
    var res = await Promise.all(subtitles.map((subtitle) => {
        var str = subtitle[0];
        var inPointFrame = subtitle[1];
        var endPointFrame = subtitle[2];
        console.log(`createSubtitle("${str}", ${inPointFrame}, ${endPointFrame})`);
        return csEvalScript(`createSubtitle("${str}", ${inPointFrame}, ${endPointFrame})`);
    }));
    console.log(res);
    if (!res.every((r) => r === '0')) alert('処理を失敗しました');
    else alert('完了');
}

function readCsv(data) {
    return new Promise((resolve) => {
        var reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result);
        }
        reader.readAsText(data);
    });
}

function convertCsvToJson(text) {
    return new Promise((resolve, reject) => {
        csvtojson({noheader: true, output: "csv"})
            .fromString(text)
            .then(resolve)
            .catch(reject);
    });
}

function csEvalScript(str) {
    return new Promise((resolve, reject) => {
        try {
            console.log(str);
            csInterFace.evalScript(str, resolve);
        } catch (err) {
            reject(err);
        }
    });
}

init();