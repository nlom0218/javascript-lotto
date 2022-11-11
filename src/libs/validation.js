const validation = {
  checkMoney(money) {
    if (isNaN(money)) {
      throw new Error('[ERROR] 숫자만 입력할 수 있습니다.');
    }

    if (money < 1000) {
      throw new Error('[ERROR] 최소 구입금액은 1000원입니다.');
    }

    if (money % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위로 로또를 구입해야 합니다.');
    }
  },

  checkNumberList(numbers) {
    if (numbers.length !== 6)
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');

    if ([...new Set(numbers)].length !== 6)
      throw new Error(
        '[ERROR] 로또 번호는 중복되지 않은 숫자로 이루어져야 합니다.'
      );

    if (!isNumberType(numbers))
      throw new Error('[ERROR] 로또 번호는 숫자이어야 합니다.');

    if (!isCorrectRange(numbers))
      throw new Error('[ERROR] 로또 번호의 범위는 1~45이어야 합니다.');
  },

  checkBonusNumber(number, winningNumbers) {
    if (winningNumbers.includes(number))
      throw new Error(
        '[ERROR] 보너스 번호가 이미 당첨 번호에 포함되어 있습니다.'
      );

    if (isNaN(number))
      throw new Error('[ERROR] 보너스 번호는 숫자이어야 합니다.');

    if (number > 45 || number < 1)
      throw new Error('[ERROR] 보너스 번호의 범위는 1~45이어야 합니다.');
  },
};

function isNumberType(numbers) {
  return numbers.every((number) => !isNaN(number));
}

function isCorrectRange(numbers) {
  return numbers.every((number) => number <= 45 && number >= 1);
}

module.exports = validation;
