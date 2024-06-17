import { CSSPropertiesSetterType } from './types';
import { DEFAULT_STYLE } from './constants';

const handleMouseLeaveEvent = (setPickerHexCodeStyle: CSSPropertiesSetterType, setPickerCircleStyle: CSSPropertiesSetterType) => {
  setPickerHexCodeStyle(DEFAULT_STYLE);
  setPickerCircleStyle(DEFAULT_STYLE);
};

export default handleMouseLeaveEvent;