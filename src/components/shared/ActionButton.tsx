import React from 'react';

interface ActionButtonProps {
  text: string;
  style: string;
  isDisabled: boolean;
  onClick: () => void;
}

function ActionButton({ text, style, isDisabled, onClick }: ActionButtonProps): JSX.Element {
  return (
    <button disabled={isDisabled} onClick={onClick} className={style}>
      {text}
    </button>
  );
}

export default ActionButton;
