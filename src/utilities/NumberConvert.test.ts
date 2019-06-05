import { numberToEnglish } from './NumberConvert';

it('shouold convert numbers correctly', () => {
    expect(() => numberToEnglish(NaN)).toThrow(Error('"NaN" is not a number.'));
    expect(numberToEnglish(Number.POSITIVE_INFINITY)).toBe("infinity");
    expect(numberToEnglish(Number.NEGATIVE_INFINITY)).toBe("negative infinity");
    expect(numberToEnglish(0)).toBe("zero");
    expect(numberToEnglish(1)).toBe("one");
    expect(numberToEnglish(5)).toBe("five");
    expect(numberToEnglish("6")).toBe("six");
    expect(numberToEnglish(10)).toBe("ten");
    expect(numberToEnglish(11)).toBe("eleven");
    expect(numberToEnglish(12)).toBe("twelve");
    expect(numberToEnglish(18)).toBe("eighteen");
    expect(numberToEnglish(20)).toBe("twenty");
    expect(numberToEnglish(-50)).toBe("negative fifty");
    expect(numberToEnglish(19000)).toBe("nineteen thousand");
    expect(numberToEnglish(319000)).toBe("three hundred and nineteen thousand");
    expect(numberToEnglish(1000000)).toBe("one million");
    expect(numberToEnglish(1000001)).toBe("one million and one");
    expect(numberToEnglish(1011011)).toBe("one million eleven thousand and eleven");
    expect(numberToEnglish(1101101)).toBe("one million one hundred and one thousand one hundred and one");
    expect(numberToEnglish(-6000006)).toBe("negative six million and six");
    expect(numberToEnglish(100023999)).toBe("one hundred million twenty-three thousand nine hundred and ninety-nine");
    expect(numberToEnglish(3.14159)).toBe("three point one four one five nine");
    expect(numberToEnglish(0.0001)).toBe("zero point zero zero zero one");
    expect(numberToEnglish(-65721.55531)).toBe("negative sixty-five thousand seven hundred and twenty-one point five five five three one");
    expect(numberToEnglish(-1234567899)).toBe("negative one billion two hundred and thirty-four million five hundred and sixty-seven thousand eight hundred and ninety-nine");
});
