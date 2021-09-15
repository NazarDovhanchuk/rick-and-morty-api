import React from 'react';

import './style.scss';

interface FormProps {
  handlerSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

const CustomForm: React.FC<FormProps> = ({ handlerSubmit, children }) => (
  <>
    <form className="form" onSubmit={handlerSubmit}>
      {children}
    </form>
  </>
);

export default CustomForm;
