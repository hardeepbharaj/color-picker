import { useEffect } from 'react';

import { CanvasSetupArgsTYpe, HandleMouseMoveEventType } from './types';
import handleMouseLeaveEvent from './handleMouseLeaveEvent';
import drawMagnifiedImage from './drawMagnifiedImage';
import updatePickerCircleAndHexStyle from './updatePickerCircleAndHexStyle';

const useCanvasSetup = (args: CanvasSetupArgsTYpe) => {
  const { canvasRef, imageMagnifierCanvasRef, dropperCursorRef, setColor, setPickerCircleStyle, setPickerHexCodeStyle } = args;

  useEffect(() => {
    const canvas = canvasRef.current;
    const magnifierCanvas = imageMagnifierCanvasRef.current;

    if (!canvas || !magnifierCanvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const magnifierCtx = magnifierCanvas.getContext('2d', { willReadFrequently: true });

    if (!ctx || !magnifierCtx) return;

    initializeCanvas(canvas, magnifierCanvas);
    loadImage(ctx, canvas);

    const handleMouseMove = (e: MouseEvent) => 
      handleMouseMoveEvent({
        e,
        canvas,
        ctx,
        magnifierCanvas,
        magnifierCtx,
        dropperCursorRef,
        setColor,
        setPickerCircleStyle,
        setPickerHexCodeStyle 
    });
    const handleMouseLeave = () => handleMouseLeaveEvent(setPickerHexCodeStyle, setPickerCircleStyle);

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [canvasRef, imageMagnifierCanvasRef, setColor, setPickerCircleStyle, setPickerHexCodeStyle]);
};

export const initializeCanvas = (canvas: HTMLCanvasElement, magnifierCanvas: HTMLCanvasElement) => {
  canvas.width = 700;
  canvas.height = 500;
  magnifierCanvas.width = 200;
  magnifierCanvas.height = 200;
};

export const loadImage = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
  const image = new Image();
  image.src = process.env.PUBLIC_URL + '/images/photo.jpg';
  image.onload = () => {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  };
};

export const handleMouseMoveEvent = (args: HandleMouseMoveEventType) => {
  const {e, canvas, ctx, magnifierCanvas, magnifierCtx, dropperCursorRef, setColor, setPickerCircleStyle, setPickerHexCodeStyle } = args;

  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  if (x < 0 || x >= canvas.width || y < 0 || y >= canvas.height || !dropperCursorRef.current) {
    return;
  }

  const pixel = ctx.getImageData(x, y, 1, 1).data;
  const hexColor = `#${pixel[0].toString(16).padStart(2, '0')}${pixel[1].toString(16).padStart(2, '0')}${pixel[2].toString(16).padStart(2, '0')}`;

  setColor(hexColor);

  updatePickerCircleAndHexStyle(e, rect, setPickerCircleStyle, setPickerHexCodeStyle);

  drawMagnifiedImage(x, y, canvas, magnifierCanvas, magnifierCtx);
};

export default useCanvasSetup;
