// utils/api.js

const generateVideoContent = async (input) => {
  try {
    // Convert input to lowercase for case-insensitive comparisons
    const lowerCaseInput = input.toLowerCase();

    // Check if the input is a number
    if (!isNaN(input)) {
      const num = parseInt(input, 10);

      if (num === 7) {
        return 'Thala for a reason';
      } else if (num < 10) {
        // Check if adding or subtracting any digit results in 7
        for (let i = 0; i <= 9; i++) {
          if (num + i === 7 || num - i === 7) {
            return `${num}${num + i > num ? '+' : '-'}${i} = 7 Thala for a reason`;
          }
        }
        return 'Thala for no reason 😔';
      } else {
        // Calculate the sum of all digits for numbers with more than one digit
        const sumOfDigits = input.split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);

        // Check if any combination of digits results in 7
        const digitCombinations = getDigitCombinations(input.split(''));
        for (const combination of digitCombinations) {
          if (combination.reduce((sum, digit) => sum + digit, 0) === 7) {
            return `${combination.join('+')} = 7 Thala for a reason`;
          }
        }

        return `${input.split('').join('+')} = ${sumOfDigits} Thala for no reason 😔`;
      }
    } else {
      // Check if the input is a word
      if (lowerCaseInput === '7' || lowerCaseInput === 'seven') {
        return 'Thala for a reason';
      } else {
        // Count the number of letters for words, ignoring spaces
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

    // Include the current digit in the combination
    generateCombinations(index + 1, [...currentCombination, parseInt(digits[index], 10)]);

    // Exclude the current digit from the combination
    generateCombinations(index + 1, currentCombination);
  };

  generateCombinations(0, []);

  return result;
};

export { generateVideoContent };
