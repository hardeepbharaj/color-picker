import React from 'react';

import { PickerCircleSVGPropsType } from './types';

const PickerCircleSVG: React.FC<PickerCircleSVGPropsType> = ({ color, pickerCircleStyle }) => {

  return (
    <svg
      width="300"
      height="300"
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="picker-circle"
      style={pickerCircleStyle}
      data-testid="picker-circle-svg"
    >
      <defs>
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M10 0 L0 0 0 10" fill="none" stroke="gray" strokeWidth="2" />
        </pattern>
        <clipPath id="circle-clip">
          <circle cx="80" cy="80" r="80" />
        </clipPath>
      </defs>
      <image id="magnifier-circle" x="0" y="0" width="160" height="160" clipPath="url(#circle-clip)" />
      <circle cx="80" cy="80" r="80" fill="url(#grid)" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M80 148C117.555 148 148 117.555 148 80C148 42.4446 117.555 12 80 12C42.4446 12 12 42.4446 12 80C12 117.555 42.4446 148 80 148ZM80 160C124.183 160 160 124.183 160 80C160 35.8172 124.183 0 80 0C35.8172 0 0 35.8172 0 80C0 124.183 35.8172 160 80 160Z"
        fill={color}
         data-testid="picker-circle-svg-path"
      />
    </svg>
  );
};

export default PickerCircleSVG;
