function main() {
    console.log('Answer task A:')

    const teststr = 'MDCXVI';
    // const teststr2 = 'CMCDIIXIV';

    const strArray = splitNummerals(teststr);
}

var I = 1;
var V = 5;
var X = 10;
var L = 50;
var C = 100;
var D = 500;
var M = 1000;

function splitNummerals(a){
    const letters = [];

    const tmpStr = '';
    for(let i = 0; i < a.length; i ++){
        console.log(a[i]);
        //letters.push(a[i]);
        if(tmpStr == ''){
            tmpStr = a[i];
        }
        else{
            if(tmpStr == 'I' && a[i] ==
        }
    }

    return letters;
}

function splitNummerals(a){
    const letters = [];

    const tmpStr = '';
    for(let i = 0; i < a.length; i ++){
        console.log(a[i]);
        letters.push(a[i]);
    }

    return letters;
}

function convertNummeralsToNumber(b){
    tmpNum = 0;
    lastNum = 0;
    outputNum = 0;

    for(let i = 0; i < b.length; i++){
        if(b[i] < lastNum){
            outputNum += tmpNum;
            tmpNum = b[i];
            lastNum = b[i];
        }
        else if (b[i] > tmpNum){
            outputNum += b[i] - tmpNum;
            tmpNum = 0;
            lastNum = 0;
        }
    }

    outputNum += tmpNum;

    return outputNum;
}

main()