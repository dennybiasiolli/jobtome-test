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

const mill = [
    '',
    ' thousand',
    ' million',
    ' billion',
    ' trillion',
    ' quadrillion',
];

function getIntegerString(
    num: number,
    millIndex = 0,
    useAnd = false,
): string {
    if (num <= 19) {
        return (useAnd && !millIndex ? 'and ' : '') +
            baseNumbers[num] +
            mill[millIndex];
    } else if (num <= 99) {
        const dec = Math.floor(num / 10);
        const n = num % 10;
        return (useAnd && !millIndex ? 'and ' : '') +
            decNumbers[dec] +
            ((n > 0) ? '-' + getIntegerString(n) : '') +
            mill[millIndex];
    } else if (num <= 999) {
        const dec = Math.floor(num / 100);
        const n = num % 100;
        return baseNumbers[dec] + ' hundred' +
            ((n > 0) ? ' and ' + getIntegerString(n) : '') +
            mill[millIndex];
    } else {
        const m = Math.floor(num / 1000);
        const n = num % 1000;
        if (millIndex + 1 >= mill.length) {
            throw new Error(`Number too large.`);
        }
        return getIntegerString(m, millIndex + 1) +
            ((n > 0) ? ' ' + getIntegerString(n, millIndex, true) : '');
    }
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
