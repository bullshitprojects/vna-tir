import React from 'react';
import { PrimaryButton, Label, TextField } from '@fluentui/react';

const App = () => (
  <section className='app'>
    <div className='app-entry'>
      <Label
        as='h1'
        className='app-entry__title'
      >
        Calculadora VNA - TIR
      </Label>
      <Label htmlFor='years'>Ingresa la cantidad de a&ntilde;os</Label>
      <div className='app-entry__input'>
        <TextField id='years' />
        <PrimaryButton text='Calcular' />
      </div>
    </div>
  </section>
);

export default App;
