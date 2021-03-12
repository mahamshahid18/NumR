const getDivisionSet = (number: number) => {
    const singleDigitDividers = [1, 5];
    const doubleDigitDividers = [10, 50];
    const tripleDigitDividers = [100, 500];
    const quadrupleDigitDividers = [1000];
    let divisionSet;
    
    // switch(number.toString().length) {
    //   case 1:
    //     divisionSet = singleDigitDividers;
    //     break;
    //   case 2:
    //     divisionSet = doubleDigitDividers;
    //     break;
    //   case 3:
    //     divisionSet = tripleDigitDividers;
    //     break;
    //   case 4:
    //     divisionSet = quadrupleDigitDividers;
    //     break;
    // }
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

  const getDivisorToConsider = (divisionResultMap: any) => {
    const quotients = divisionResultMap.map((item: any) => parseInt(item.result));
    const maxQuotient = Math.min(...quotients);
  
    const divisor = divisionResultMap.filter((divisionObject: any) => parseInt(divisionObject.result) === maxQuotient)[0];
  
    console.log(divisionResultMap); 
    console.log(quotients);  
    console.log(divisor)
  
    return divisor;
}

export const getRomanEquivalent = (number: number): any => {
    const intToRomanMap: any = {
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
      1000: 'M'
    };
    
    const intToRomanKeys = Object.keys(intToRomanMap).map(key => parseInt(key));
    
    if (intToRomanKeys.includes(number)) {
      return intToRomanMap[number];
    }
    
    const divisionSet = getDivisionSet(number);
    const divisionResultMap: any[] = [];
  
    divisionSet.forEach((divisionNumber) => {
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
    
      // console.log('divisior to consider: ', getDivisorToConsider(divisionResultMap));
    
    const divisorToConsider = getDivisorToConsider(divisionResultMap);
    // console.log('divisior to consider: ', divisorToConsider);
    // console.log('---------recursive call now going through---------')
    const romanRemainder = getRomanEquivalent(divisorToConsider.remainder);
    
    // console.log('remainder resolved: ', romanRemainder);
  
    
    const romanEquivalent = `${intToRomanMap[divisorToConsider.divisor].repeat(divisorToConsider.result)}${romanRemainder}`;
  
    return romanEquivalent;
  }