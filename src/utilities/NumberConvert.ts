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
    const integerNum = Math.floor(num);
    const decimalNum = num - integerNum;

    let strNumber = isNegative ? 'negative ' : '';
    if (decimalNum === 0) {
        return strNumber + baseNumbers[integerNum];
    }

    return 'unimplemented';
};
