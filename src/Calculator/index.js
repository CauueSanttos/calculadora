import React from 'react';

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
  return (
    <Container>
      <Visor>
        <VisorText>00000</VisorText>
      </Visor>

      <Area>
        <Button>
          <TextButton>7</TextButton>
        </Button>
        <Button>
          <TextButton>8</TextButton>
        </Button>
        <Button>
          <TextButton>9</TextButton>
        </Button>
        <Button>
          <TextButtonAction>/</TextButtonAction>
        </Button>
      </Area>
      <Area>
        <Button>
          <TextButton>4</TextButton>
        </Button>
        <Button>
          <TextButton>5</TextButton>
        </Button>
        <Button>
          <TextButton>6</TextButton>
        </Button>
        <Button>
          <TextButtonAction>X</TextButtonAction>
        </Button>
      </Area>
      <Area>
        <Button>
          <TextButton>1</TextButton>
        </Button>
        <Button>
          <TextButton>2</TextButton>
        </Button>
        <Button>
          <TextButton>3</TextButton>
        </Button>
        <Button>
          <TextButtonAction>-</TextButtonAction>
        </Button>
      </Area>
      <Area>
        <Button>
          <TextButton>.</TextButton>
        </Button>
        <Button>
          <TextButton>0</TextButton>
        </Button>
        <Button>
          <TextButton>{'<'}</TextButton>
        </Button>
        <Button>
          <TextButtonAction>+</TextButtonAction>
        </Button>
      </Area>
    </Container>
  );
}
