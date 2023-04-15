const DICES = {
    d4: {
      name: "d4",
      faceAmount: 4,
    },
    d6: {
      name: "d6",
      faceAmount: 6,
    },
    d8: {
      name: "d8",
      faceAmount: 8,
    },
    d10: {
      name: "d10",
      faceAmount: 10,
    },
    d12: {
      name: "d12",
      faceAmount: 12,
    },
    d16: {
      name: "d16",
      faceAmount: 16,
    },
    d20: {
      name: "d20",
      faceAmount: 20,
    },
  };

  function rollDice(dice){
    const diceRandomInteger = Math.floor(Math.random() * dice.faceAmount + 1)
    console.log(`${diceRandomInteger} : ${dice.name}`);
  }

  rollDice(DICES.d4)