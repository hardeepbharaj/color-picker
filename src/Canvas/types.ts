import { MutableRefObject, Dispatch, SetStateAction } from 'react';

export type CSSPropertiesSetterType = Dispatch<SetStateAction<PickerStyleType>>;

export interface PickerStyleType {
  display: string;
  left?: number;
  top?: number;
  width?: number;
  height?: number;
  lineHeight?: string;
}

export interface CanvasPropsType {
  dropperCursor: boolean;
  setPickedColor: React.Dispatch<React.SetStateAction<string>>;
}

export interface CanvasSetupArgsTYpe {
  canvasRef: MutableRefObject<HTMLCanvasElement | null>;
  imageMagnifierCanvasRef: MutableRefObject<HTMLCanvasElement | null>;
  dropperCursorRef: MutableRefObject<boolean | null>;
  setColor: Dispatch<SetStateAction<string>>;
  setPickerCircleStyle: CSSPropertiesSetterType;
  setPickerHexCodeStyle: CSSPropertiesSetterType;
}

export interface HandleMouseMoveEventType {
  e: MouseEvent,
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  magnifierCanvas: HTMLCanvasElement,
  magnifierCtx: CanvasRenderingContext2D,
  dropperCursorRef: MutableRefObject<boolean | null>,
  setColor: Dispatch<SetStateAction<string>>,
  setPickerCircleStyle: CSSPropertiesSetterType,
  setPickerHexCodeStyle: CSSPropertiesSetterType
}

export interface PickerCirclePropsType {
  color: string;
  pickerHexCodeStyle: PickerStyleType;
  pickerCircleStyle: PickerStyleType;
}
