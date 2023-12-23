const generateVideoContent = async (input) => {
  try {
    const lowerCaseInput = input.toLowerCase();
    if (!isNaN(input)) {
      const num = parseInt(input, 10);

      if (num === 7) {
        return 'Thala for a reason';
      } else if (num < 10) {
        for (let i = 0; i <= 9; i++) {
          if (num + i === 7 || num - i === 7) {
            return `${num}${num + i > num ? '+' : '-'}${i} = 7 Thala for a reason`;
          }
        }
        return 'Thala for no reason 😔';
      } else {
        const sumOfDigits = input.split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);

        const digitCombinations = getDigitCombinations(input.split(''));
        for (const combination of digitCombinations) {
          if (combination.reduce((sum, digit) => sum + digit, 0) === 7) {
            return `${combination.join('+')} = 7 Thala for a reason`;
          }
        }

        return `${input.split('').join('+')} = ${sumOfDigits} Thala for no reason 😔`;
      }
    } else {
      if (lowerCaseInput === '7' || lowerCaseInput === 'seven') {
        return 'Thala for a reason';
      } else {
        const letterCount = lowerCaseInput.replace(/\s/g, '').length;
        if (letterCount === 7) {
          return `${input} = ${letterCount} Thala for a reason`;
        } else {
          return 'Thala for no reason 😔';
        }
      }
    }
  } catch (error) {
    console.error(error);
    throw new Error('Error generating video content');
  }
};

const getDigitCombinations = (digits) => {
  const result = [];
  const generateCombinations = (index, currentCombination) => {
    if (index === digits.length) {
      result.push([...currentCombination]);
      return;
    }
    generateCombinations(index + 1, [...currentCombination, parseInt(digits[index], 10)]);
    generateCombinations(index + 1, currentCombination);
  };

  generateCombinations(0, []);

  return result;
};

export { generateVideoContent };
