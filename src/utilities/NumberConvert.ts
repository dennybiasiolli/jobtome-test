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
    return 'unimplemented';
};
