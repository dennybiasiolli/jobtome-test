const baseNumbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
];

const decNumbers = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
];


function getIntegerString(num: number) {
    return baseNumbers[num];
}

function getDecimalString(strNum: string) {
    const digits = strNum.split('');
    return digits.reduce((acc: string, d: string) =>
        `${acc} ${getIntegerString(parseInt(d))}`,
        ' point'
    );
}

export function numberToEnglish(originalNumber: number | string): string {
    let num: number;
    if (typeof originalNumber === 'string') {
        num = parseFloat(originalNumber);
    } else {
        num = originalNumber;
    }
    if (isNaN(num)) {
        throw new Error(`"${originalNumber}" is not a number.`);
    }
    if (num === Number.POSITIVE_INFINITY) {
        return 'infinity';
    } else if (num === Number.NEGATIVE_INFINITY) {
        return 'negative infinity';
    }

    const isNegative = num < 0;
    num = Math.abs(num);
    const strNum = num.toString();
    let integerNum: number = num;
    let decimalStr: string = '';
    const dotIndex = strNum.indexOf('.');
    if (dotIndex > -1) {
        integerNum = parseInt(strNum.substr(0, dotIndex));
        decimalStr = strNum.substr(dotIndex + 1);
    }
    let strNumber = isNegative ? 'negative ' : '';
    strNumber += getIntegerString(integerNum);
    if (decimalStr !== '') {
        strNumber += getDecimalString(decimalStr);
    }
    return strNumber;
};
