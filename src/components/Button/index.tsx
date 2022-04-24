import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement>{
    name: string;
    placeholder: string
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div className="mb-10">
        <Button {...props} />
    </div>
  )
}

export default Button
