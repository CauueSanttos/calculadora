import React from 'react';
import { StatusBar } from 'react-native';

import Calculator from './src/Calculator';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#01911e" />
      <Calculator />
    </>
  );
}
