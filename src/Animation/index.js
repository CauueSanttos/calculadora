import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react-native';

import Calculator from '../Calculator';

import { Container } from './styles';

import calculator from './calculator.json';

export default function Animation() {
  const [showLottie, setShowLottie] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLottie(false);
    }, 4000);
  }, []);

  return (
    <>
      {showLottie && (
        <Container>
          <Lottie source={calculator} autoPlay resizeMode="contain" />
        </Container>
      )}
      {!showLottie && (
        <Calculator />
      )}
    </>
  );
}
