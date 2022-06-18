import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLElement>{
  name: string;
  type: string;
  bgbutton?: string;
  ref?: any;
  margin?: string;
}

const Input: React.FC<InputProps> = (props) => {


  return (
    <div className={!props.margin ? 'mb-9' : props.margin }>
      <input {...props} className={`${props.type !== "submit" ? "bg-transparent focus:border-slate-400" : props.bgbutton} text-sm p-2 w-64 border border-solid border-slate-50 placeholder:text-slate-200 text-slate-50 rounded-md`} />
    </div>
  )
}

export default Input
