import { CSSPropertiesSetterType } from './types';

const updatePickerCircleAndHexStyle = (
  e: MouseEvent,
  rect: DOMRect,
  setPickerCircleStyle: CSSPropertiesSetterType,
  setPickerHexCodeStyle: CSSPropertiesSetterType
) => {
  const pickerCircleSize = 100;
  const pickerCircleLeft = e.clientX - pickerCircleSize / 2;
  const pickerCircleTop = (e.clientY - pickerCircleSize / 2) - rect.top;

  setPickerCircleStyle({
    display: 'block',
    left: pickerCircleLeft,
    top: pickerCircleTop,
    width: pickerCircleSize,
    height: pickerCircleSize,
  });

  updatePickerHexcodeStyle(pickerCircleLeft, pickerCircleTop, pickerCircleSize, setPickerHexCodeStyle);
};

const updatePickerHexcodeStyle = (
  pickerCircleLeft: number,
  pickerCircleTop: number,
  pickerCircleSize: number, 
  setPickerHexCodeStyle: CSSPropertiesSetterType
) => {
  const hexWidth = 40;
  const hexHeight = 15;
  const hexLeft = pickerCircleLeft + pickerCircleSize / 2 - hexWidth / 2;
  const hexTop = pickerCircleTop + pickerCircleSize - 30;

  setPickerHexCodeStyle({
    display: 'block',
    left: hexLeft,
    top: hexTop,
    width: hexWidth,
    height: hexHeight,
    lineHeight: `${hexHeight}px`,
  });
};

export default updatePickerCircleAndHexStyle;
