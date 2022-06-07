import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement>{
  name: string;
  value: string;
  id: string;
  icon?: any;
  styleCustom?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div className="mb-4">
      <button className={`${props.styleCustom} word-space duration-150 font-bold bg-white hover:text-white w-64 rounded-md h-9 text-center px-5`} {...props}>{props.icon} {props.value}</button>
    </div>
  )
}

export default Button