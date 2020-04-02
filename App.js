import React from 'react';
import { StatusBar } from 'react-native';

import Animation from './src/Animation';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#01911e" />
      <Animation />
    </>
  );
}
