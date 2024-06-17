const drawMagnifiedImage = (
  x: number,
  y: number,
  canvas: HTMLCanvasElement,
  magnifierCanvas: HTMLCanvasElement,
  magnifierCtx: CanvasRenderingContext2D
) => {
  const magnificationFactor = 5;
  const sx = Math.max(0, x - magnifierCanvas.width / magnificationFactor / 2);
  const sy = Math.max(0, y - magnifierCanvas.height / magnificationFactor / 2);
  const sw = Math.min(magnifierCanvas.width / magnificationFactor, canvas.width - sx);
  const sh = Math.min(magnifierCanvas.height / magnificationFactor, canvas.height - sy);

  magnifierCtx.clearRect(0, 0, magnifierCanvas.width, magnifierCanvas.height);
  magnifierCtx.drawImage(
    canvas,
    sx, sy, sw, sh,
    0, 0, magnifierCanvas.width, magnifierCanvas.height
  );

  const imageDataUrl = magnifierCanvas.toDataURL();
  const magnifierCircle = document.getElementById('magnifier-circle') as SVGImageElement | null;
  if (magnifierCircle) {
    magnifierCircle.setAttribute('href', imageDataUrl);
  }
};

export default drawMagnifiedImage;
