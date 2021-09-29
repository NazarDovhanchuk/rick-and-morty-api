import React from 'react';

import './style.scss';

interface FormProps {
  handlerSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
  className: string,
}

const CustomForm: React.FC<FormProps> = ({ handlerSubmit, children, className }) => (
  <>
    <form className={className} onSubmit={handlerSubmit}>
      {children}
    </form>
  </>
);

export default CustomForm;
