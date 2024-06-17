import React, { useState } from 'react';

import Toast from '../components/Toast';
import CopyButtonSVG from '../components/CopyButtonSVG';
import { SelectedColorPropsType } from './types';
 
const SelectedColor: React.FC<SelectedColorPropsType> = ({ pickedColor }) => {
  const [showToast, setShowToast] = useState<boolean>(false);

  const onCopyBtnClick = () => {
    navigator.clipboard.writeText(pickedColor)
    .then(() => {
      setShowToast(true);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <div className="selected-color">
      {pickedColor && (
          <div className="selected-hexcode">
            <span data-testid="picked-color">{pickedColor}</span>
            <button onClick={onCopyBtnClick} data-testid="copy-button">
              <CopyButtonSVG />
            </button>
            {showToast && <Toast message="Copied!" onClose={() => setShowToast(false)} />}
          </div>
        )}
    </div>
  );
};

export default SelectedColor;
