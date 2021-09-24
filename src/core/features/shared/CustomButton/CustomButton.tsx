import React from 'react';

interface ButtonProps {
  handlerOnClick: (e: React.MouseEvent) => void;
  className: string,
  field: string,
}

const CustomButton: React.FC<ButtonProps> = ({
  handlerOnClick, className, field,
}) => (
  <button onClick={handlerOnClick} className={`button ${className}`}>{field}</button>
);

export default CustomButton;
