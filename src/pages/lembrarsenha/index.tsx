import React, { useState } from 'react';
import Router from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import Logo from '../../components/Logo';
import Input from '../../components/Inputs';

import 'font-awesome/css/font-awesome.min.css';

type dadosForm = {
  email: string
}

const LembrarSenha = () => {

  const [term, setTerm] = useState<dadosForm>({
    email: ''
  });

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (term.email !== "") {
      console.log(term)
      return
    }

    console.log("error")
  }
  
  const handleChange = (event: React.FormEvent<HTMLElement>) =>{
    const { name, value }: any = event.target;
    setTerm(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <div>
      <div className='cursor-pointer m-3 text-white text-xl' onClick={() => Router.back()}><FontAwesomeIcon icon={faAngleLeft as IconProp}/> Voltar</div>
      <div className="flex justify-center mb-12">
        <div className="mt-10">
          <Logo style="w-48"/>
        </div>
      </div>

      <form onSubmit={submitForm}>
        <div className="w-full flex justify-center flex-col items-center">
          <Input 
            type="text"
            name="email"
            placeholder="&#xf007;  E-mail"
            onChange={handleChange}
            margin="mb-5"
          />

          <Input 
            type="submit"
            name="btn-login"
            bgbutton="bg-violet-500 hover:bg-violet-600 duration-150 active:bg-violet-800"
            value="&#xf090; Entrar"
          />
        </div>   
      </form>
    </div>
  )
}

export default LembrarSenha
