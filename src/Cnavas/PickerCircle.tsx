import React from 'react';

import PickerCircleSVG from '../components/PickerCircleSVG';
import { PickerCirclePropsType } from './types';

const PickerCircle: React.FC<PickerCirclePropsType> = ({ color, pickerHexCodeStyle, pickerCircleStyle }) => {

  return (
    <>
      <div className="hex-code" style={pickerHexCodeStyle}>{color}</div>
      <PickerCircleSVG color={color} pickerCircleStyle={pickerCircleStyle} />
    </>
  );
};

export default PickerCircle;
