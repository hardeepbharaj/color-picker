import React from 'react';

import ColorPickerBtn from './ColorPickerBtn';
import SelectedColor from './SelectedColor';
import { HeaderPropsType } from './types';

import './header.scss';

const Header: React.FC<HeaderPropsType> = ({ dropperCursor, pickedColor, setDropperCursor }) => {

  const onColorPickerBtnClick = () => {
    setDropperCursor(prevState => !prevState);
  };

  return (
    <div className="header-container">
      <ColorPickerBtn dropperCursor={dropperCursor} onclick={onColorPickerBtnClick} />
      <SelectedColor pickedColor={pickedColor} />
    </div>
  );
};

export default Header;
