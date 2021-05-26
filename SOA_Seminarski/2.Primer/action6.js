function main(params) {
    var he;
    var hs;
    var hn;
    var ht;
    var hf;
    const fs = require('fs');
    const data = fs.readFileSync("Engleski.txt", 'utf8');
    he = JSON.parse(data).h;
    const data1 = fs.readFileSync("Francuski.txt", 'utf8')
    hf = JSON.parse(data1).h;
    const data2 = fs.readFileSync("Srpski.txt", 'utf8')
    hs = JSON.parse(data2).h;
    const data3 = fs.readFileSync("Nemacki.txt", 'utf8')
    hn = JSON.parse(data3).h;
    const data4 = fs.readFileSync("Turski.txt", 'utf8')
    ht = JSON.parse(data4).h;
    let engl = 0;
    for (let i = 0; i < params.h.length; i++) {
        let v = 9999;
        for (let j = 0; j < he.length; j++)
            if (params.h[i].key === he[j].key) {
                v = Math.abs(i - j);
                break;
            }
        engl += v;
    }
    let tur = 0;
    for (let i = 0; i < params.h.length; i++) {
        let v = 9999;
        for (let j = 0; j < ht.length; j++)
            if (params.h[i].key === ht[j].key) {
                v = Math.abs(i - j);
                break;
            }
        tur += v;
    }
    let franc = 0;
    for (let i = 0; i < params.h.length; i++) {
        let v = 9999;
        for (let j = 0; j < hf.length; j++)
            if (params.h[i].key === hf[j].key) {
                v = Math.abs(i - j);
                break;
            }
        franc += v;
    }
    let srp = 0;
    for (let i = 0; i < params.h.length; i++) {
        let v = 9999;
        for (let j = 0; j < hs.length; j++)
            if (params.h[i].key === hs[j].key) {
                v = Math.abs(i - j);
                break;
            }
        srp += v;
    }
    let nem = 0;
    for (let i = 0; i < params.h.length; i++) {
        let v = 9999;
        for (let j = 0; j < hn.length; j++)
            if (params.h[i].key === hn[j].key) {
                v = Math.abs(i - j);
                break;
            }
        nem += v;
    }
    let res;
    if (engl < franc && engl < srp && engl < nem && engl < tur)
        res = "Engleski jezik";
    else if (franc < engl && franc < srp && franc < nem && franc < tur)
        res = "Francuski jezik";
    else if (srp < franc && srp < engl && srp < nem && srp < tur)
        res = "Srpski jezik";
    else if (nem < franc && nem < srp && nem < engl && nem < tur)
        res = "Nemacki jezik";
    else if (tur < franc && tur < srp && tur < engl && tur < nem)
        res = "Turski jezik";
    return res;
}