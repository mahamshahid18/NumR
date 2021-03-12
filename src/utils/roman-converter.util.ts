import { DivisionResult, IntToRomanMap } from "../types/roman-converter.interface";

const getDivisionSet = (number: number): number[] => {
  const singleDigitDividers = [1, 5];
  const doubleDigitDividers = [10, 50];
  const tripleDigitDividers = [100, 500];
  const quadrupleDigitDividers = [1000];
  let divisionSet: number[];

  switch(true) {
    case Math.floor(number/1000) > 0:
      divisionSet = quadrupleDigitDividers;
      break;
    case Math.floor(number/100) > 0:
      divisionSet = tripleDigitDividers;
      break;
    case Math.floor(number/10) > 0:
      divisionSet = doubleDigitDividers;
      break;
    default:
      divisionSet = singleDigitDividers;
      break;
  }

  return divisionSet;
}

const getDivisorToConsider = (divisionResultMap: DivisionResult[]): DivisionResult => {
  const quotients = divisionResultMap.map((item: DivisionResult) => parseInt(item?.result as any));
  const maxQuotient = Math.min(...quotients);

  const divisor = divisionResultMap.filter((divisionObject: DivisionResult) => parseInt(divisionObject?.result as any) === maxQuotient)[0];

  return divisor;
}

export const getRomanEquivalent = (number: number): string => {
    const intToRomanMap: IntToRomanMap = {
      0: '',
      1: 'I',
      4: 'IV',
      5: 'V',
      9: 'IX',
      10: 'X',
      40: 'XL',
      50: 'L',
      90: 'XC',
      100: 'C',
      400: 'CD',
      500: 'D',
      900: 'CM',
      1000: 'M',
    };
    
    const intToRomanKeys = Object.keys(intToRomanMap).map(key => parseInt(key));
    
    if (intToRomanKeys.includes(number)) {
      return intToRomanMap[number];
    }
    
    const divisionSet = getDivisionSet(number);
    const divisionResultMap: DivisionResult[] = [];
  
    divisionSet.forEach((divisionNumber: number) => {
      const result = number/divisionNumber;
      const remainder = number%divisionNumber;
      
      if (parseInt(result as any) > 0) {
        divisionResultMap.push({
          divisor: divisionNumber,
          result,
          remainder
        });
      }
    });
    
    const divisorToConsider = getDivisorToConsider(divisionResultMap);
    const romanRemainder = getRomanEquivalent(divisorToConsider?.remainder);
    
    const romanEquivalent = `${intToRomanMap[divisorToConsider?.divisor].repeat(divisorToConsider?.result)}${romanRemainder}`;
  
    return romanEquivalent;
  }