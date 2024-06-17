export interface HeaderPropsType {
  dropperCursor: boolean;
  pickedColor: string;
  setDropperCursor: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SelectedColorPropsType {
  pickedColor: string;
}

export type ColorPickerBtnPropsType = {
  dropperCursor: boolean;
  onclick: () => void;
}