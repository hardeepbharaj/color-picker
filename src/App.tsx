import React, { useState } from 'react';

import Canvas from './Canvas';
import Header from './Header';
import Cursor from './components/svg/ColorPicker.svg';

import './App.scss';

function App() {
  const [dropperCursor, setDropperCursor] = useState<boolean>(false);
  const [pickedColor, setPickedColor] = useState<string>('');

  return (
    <div className="App" style={{ cursor: dropperCursor ? `url('${Cursor}') 0 15, auto` : 'default' }}>
      <Header
        dropperCursor={dropperCursor}
        pickedColor={pickedColor}
        setDropperCursor={setDropperCursor}
      />
      <Canvas
        dropperCursor={dropperCursor}
        setPickedColor={setPickedColor}
      />
    </div>
  );
}

export default App;
