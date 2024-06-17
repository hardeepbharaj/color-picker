import React, { useRef, useEffect, useState } from 'react';

import PickerCircle from './PickerCircle';
import { CanvasPropsType, PickerStyleType } from './types';
import { DEFAULT_STYLE } from './constants';
import useCanvasSetup from './UseCanvasSetup';

import './canvas.scss';

const Canvas: React.FC<CanvasPropsType> = ({ dropperCursor, setPickedColor }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageMagnifierCanvasRef = useRef<HTMLCanvasElement>(null);
  const [color, setColor] = useState<string>('');
  const [pickerHexCodeStyle, setPickerHexCodeStyle] = useState<PickerStyleType>(DEFAULT_STYLE);
  const [pickerCircleStyle, setPickerCircleStyle] = useState<PickerStyleType>(DEFAULT_STYLE);  
  const dropperCursorRef = useRef<boolean>(false);

  useCanvasSetup({
    canvasRef,
    imageMagnifierCanvasRef,
    dropperCursorRef,
    setColor,
    setPickerCircleStyle,
    setPickerHexCodeStyle
  });

  useEffect(() => {
    dropperCursorRef.current = dropperCursor;
  }, [dropperCursor]);

  // Handle displaying picked color in the header on click
  const handleCanvasClick = () => {
    setPickedColor(color);
  };
  
  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} onClick={handleCanvasClick} />
      <canvas ref={imageMagnifierCanvasRef} style={DEFAULT_STYLE} /> {/* Hidden canvas for magnification */}
      <PickerCircle color={color} pickerHexCodeStyle={pickerHexCodeStyle} pickerCircleStyle={pickerCircleStyle} />
    </div>
  );
};

export default Canvas;
