import React, { useState } from 'react';

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

  const [dot] = useState('.');
  const [clear] = useState('<');

  function handleCalculate(item) {
    console.log(item);
  }

  return (
    <Container>
      <Visor>
        <VisorText>{total}</VisorText>
      </Visor>

      <Area>
        <Button onPress={() => { handleCalculate(numberSeven) }}>
          <TextButton value={numberSeven} editable={false} />
        </Button>
        <Button onPress={() => { handleCalculate(numberEigth) }}>
          <TextButton value={numberEigth} editable={false} />
        </Button>
        <Button onPress={() => { handleCalculate(numberNine) }}>
        <TextButton value={numberNine} editable={false} />
        </Button>
        <Button onPress={() => { handleCalculate(operatorDivison) }}>
          <TextButtonAction value={operatorDivison} editable={false} />
        </Button>
      </Area>
      <Area>
        <Button onPress={() => { handleCalculate(numberFour) }}>
          <TextButton value={numberFour} editable={false} />
        </Button>
        <Button onPress={() => { handleCalculate(numberFive) }}>
          <TextButton value={numberFive} editable={false} />
        </Button>
        <Button onPress={() => { handleCalculate(numberSix) }}>
          <TextButton value={numberSix} editable={false} />
        </Button>
        <Button onPress={() => { handleCalculate(operatorMultiplication) }}>
          <TextButtonAction value={operatorMultiplication} editable={false} />
        </Button>
      </Area>
      <Area>
        <Button onPress={() => { handleCalculate(numberOne) }}>
          <TextButton value={numberOne} editable={false} />
        </Button>
        <Button onPress={() => { handleCalculate(numberTwo) }}>
          <TextButton value={numberTwo} editable={false} />
        </Button>
        <Button onPress={() => { handleCalculate(numberThree) }}>
          <TextButton value={numberThree} editable={false} />
        </Button>
        <Button onPress={() => { handleCalculate(operatorMinus) }}>
          <TextButtonAction value={operatorMinus} editable={false} />
        </Button>
      </Area>
      <Area>
        <Button onPress={() => { handleCalculate(dot) }}>
          <TextButtonAction value={dot} editable={false} />
        </Button>
        <Button onPress={() => handleCalculate(numberZero)}>
          <TextButton value={numberZero} editable={false} />
        </Button>
        <Button onPress={() => { handleCalculate(clear) }}>
          <TextButtonAction value={clear} editable={false} />
        </Button>
        <Button onPress={() => { handleCalculate(operatorMore) }}>
          <TextButtonAction value={operatorMore} editable={false} />
        </Button>
      </Area>
    </Container>
  );
}
