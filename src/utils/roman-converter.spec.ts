import { getRomanEquivalent } from './roman-converter.util';

describe('getRomanEquivalent', () => {
    it('should return correct roman equivalent for integer [units]', () => {
        const integerToRomanMap: any = {
            1: 'I',
            3: 'III',
            4: 'IV',
            5: 'V',
            7: 'VII'
        };

        Object.keys(integerToRomanMap).forEach((integer) => {
            const expectedRomanEquivalent = integerToRomanMap[integer];
            expect(getRomanEquivalent(parseInt(integer))).toBe(expectedRomanEquivalent);
        });
    });

    it('should return correct roman equivalent for integer [tens]', () => {
        const integerToRomanMap: any = {
            10: 'X',
            14: 'XIV',
            18: 'XVIII',
            19: 'XIX',
            22: 'XXII',
            25: 'XXV',
            27: 'XXVII',
            33: 'XXXIII',
            51: 'LI',
            66: 'LXVI',
            71: 'LXXI',
            77: 'LXXVII',
            89: 'LXXXIX',
            90: 'XC',
        };

        Object.keys(integerToRomanMap).forEach((integer) => {
            const expectedRomanEquivalent = integerToRomanMap[integer];
            expect(getRomanEquivalent(parseInt(integer))).toBe(expectedRomanEquivalent);
        });
    });

    it('should return correct roman equivalent for integer [hundreds]', () => {
        const integerToRomanMap: any = {
            101: 'CI',
            111: 'CXI',
            222: 'CCXXII',
            400: 'CD',
            540: 'DXL',
            889: 'DCCCLXXXIX'
        };

        Object.keys(integerToRomanMap).forEach((integer) => {
            const expectedRomanEquivalent = integerToRomanMap[integer];
            expect(getRomanEquivalent(parseInt(integer))).toBe(expectedRomanEquivalent);
        });
    });

    it('should return correct roman equivalent for integer [thousands]', () => {
        const integerToRomanMap: any = {
            1200: 'MCC',
            1681: 'MDCLXXXI',
            1857: 'MDCCCLVII',
            1900: 'MCM',
            2001: 'MMI',
            2019: 'MMXIX',
            2020: 'MMXX',
            2021: 'MMXXI',
            2035: 'MMXXXV',
            3020: 'MMMXX'
        };

        Object.keys(integerToRomanMap).forEach((integer) => {
            const expectedRomanEquivalent = integerToRomanMap[integer];
            expect(getRomanEquivalent(parseInt(integer))).toBe(expectedRomanEquivalent);
        });
    });
})