import React, { useState, useEffect } from 'react';

import {
  Container, 
  Visor, 
  VisorText,
  Area,
  Button,
  TextButton,
  TextButtonAction
} from './styles';

export default function Calculator() {
  const [total, setTotal] = useState(0);
  const [memoryNumber, setMemoryNumber] = useState(0);
  const [operator, setOperator] = useState('');

  const [numberZero] = useState('0');
  const [numberOne] = useState('1');
  const [numberTwo] = useState('2');
  const [numberThree] = useState('3');
  const [numberFour] = useState('4');
  const [numberFive] = useState('5');
  const [numberSix] = useState('6');
  const [numberSeven] = useState('7');
  const [numberEigth] = useState('8');
  const [numberNine] = useState('9');

  const [operatorDivison] = useState('/');
  const [operatorMultiplication] = useState('X');
  const [operatorMinus] = useState('-');
  const [operatorMore] = useState('+');

  const [equal] = useState('=');
  const [clear] = useState('<');

  useEffect(() => {
    setTotal(0);
    setMemoryNumber(0);
    setOperator('');
  }, []);

  function calculate() {
    let calc;

    switch (operator) {
      case operatorMore: // +
        calc = total + memoryNumber;
        break;
      case operatorMinus: // -
        calc = memoryNumber - total;
        break;
      case operatorMultiplication: // *
        calc = memoryNumber * total;
        break;
      case operatorDivison: // /
        calc = memoryNumber / total;
        break;
    }

    setTotal(calc);
    setMemoryNumber(0);
  }

  function handleOperator(operator) {
    setOperator(operator);
    setMemoryNumber(total);
    setTotal(0);
  }

  function handleVisor(number) {
    let element = Number(number);

    if (total > 0) {
      setTotal(Number(`${total}${element}`));
    } else {
      setTotal(element);
    }
  }

  function handleFunction(item) {
    switch (item) {
      case numberZero:
      case numberOne:
      case numberTwo:
      case numberThree:
      case numberFour:
      case numberFive:
      case numberSix:
      case numberSeven:
      case numberEigth:
      case numberNine:
        handleVisor(item);
        break;
      case operatorMore:
        handleOperator(operatorMore);
        break;
      case operatorMinus:
        handleOperator(operatorMinus);
        break;
      case operatorMultiplication:
        handleOperator(operatorMultiplication);
        break;
      case operatorDivison:
        handleOperator(operatorDivison);
        break;
      case equal:
        calculate();
        break;
      case clear:
        setTotal(0);
        setMemoryNumber(0);
        setOperator('');
        break;
    }
  }

  return (
    <Container>
      <Visor>
        <VisorText>{total}</VisorText>
      </Visor>

      <Area>
        <Button onPress={() => { handleFunction(numberSeven) }}>
          <TextButton value={numberSeven} editable={false} />
        </Button>
        <Button onPress={() => { handleFunction(numberEigth) }}>
          <TextButton value={numberEigth} editable={false} />
        </Button>
        <Button onPress={() => { handleFunction(numberNine) }}>
        <TextButton value={numberNine} editable={false} />
        </Button>
        <Button onPress={() => { handleFunction(operatorDivison) }}>
          <TextButtonAction value={operatorDivison} editable={false} />
        </Button>
      </Area>
      <Area>
        <Button onPress={() => { handleFunction(numberFour) }}>
          <TextButton value={numberFour} editable={false} />
        </Button>
        <Button onPress={() => { handleFunction(numberFive) }}>
          <TextButton value={numberFive} editable={false} />
        </Button>
        <Button onPress={() => { handleFunction(numberSix) }}>
          <TextButton value={numberSix} editable={false} />
        </Button>
        <Button onPress={() => { handleFunction(operatorMultiplication) }}>
          <TextButtonAction value={operatorMultiplication} editable={false} />
        </Button>
      </Area>
      <Area>
        <Button onPress={() => { handleFunction(numberOne) }}>
          <TextButton value={numberOne} editable={false} />
        </Button>
        <Button onPress={() => { handleFunction(numberTwo) }}>
          <TextButton value={numberTwo} editable={false} />
        </Button>
        <Button onPress={() => { handleFunction(numberThree) }}>
          <TextButton value={numberThree} editable={false} />
        </Button>
        <Button onPress={() => { handleFunction(operatorMinus) }}>
          <TextButtonAction value={operatorMinus} editable={false} />
        </Button>
      </Area>
      <Area>
        <Button onPress={() => { handleFunction(equal) }}>
          <TextButtonAction value={equal} editable={false} />
        </Button>
        <Button onPress={() => handleFunction(numberZero)}>
          <TextButton value={numberZero} editable={false} />
        </Button>
        <Button onPress={() => { handleFunction(clear) }}>
          <TextButtonAction value={clear} editable={false} />
        </Button>
        <Button onPress={() => { handleFunction(operatorMore) }}>
          <TextButtonAction value={operatorMore} editable={false} />
        </Button>
      </Area>
    </Container>
  );
}
