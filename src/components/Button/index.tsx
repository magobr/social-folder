import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement>{
  name: string;
  value: string;
  id: string;
  icon?: any;
  styleCustom?: string | undefined;
}

const Button: React.FC<ButtonProps> = (props): JSX.Element=> {
  const { name, value, id, icon, styleCustom, ...rest} = props;
  return (
    <div className="mb-4">
      <button {...rest} className={`${styleCustom} word-space duration-150 font-bold bg-white hover:text-white w-64 rounded-md h-9 text-center px-5`}>{icon} {value}</button>
    </div>
  )
}

export default Button