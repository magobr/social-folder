import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLElement>{
  name: string;
  type: string;
  bgbutton?: string;
}

const Input: React.FC<InputProps> = (props) => {


  return (
    <div className="mb-9">
        <input {...props} className={`${props.type !== "submit" ? "bg-transparent" : props.bgbutton} text-sm p-2 w-64 border-solid border border-slate-50 placeholder:text-slate-200 text-slate-50 rounded-md`} />
    </div>
  )
}

export default Input
