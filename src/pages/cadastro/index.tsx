import React, { useState } from 'react';
import Link from 'next/link'
import Router from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import Logo from '../../components/Logo';
import Input from '../../components/Inputs';

import 'font-awesome/css/font-awesome.min.css';

type dadosForm = {
    usuario: string,
    email: string,
    senha: string,
    confirmar_senha: string
}

const Cadastro = () => {

  const [term, setTerm] = useState<dadosForm>({
    usuario: '',
    email: '',
    senha: '',
    confirmar_senha: ''
  });

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (term.senha === term.confirmar_senha) {
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
      <div className='cursor-pointer m-3 text-white text-2xl' onClick={() => Router.back()}><FontAwesomeIcon icon={faAngleLeft as IconProp}/></div>
      <div className="flex justify-center mb-12">
        <div className="mt-10">
          <Logo style="w-48"/>
        </div>
      </div>

      <form onSubmit={submitForm}>
        <div className="w-full flex justify-center flex-col items-center">
          <Input 
            type="text"
            name="usuario"
            placeholder="&#xf007;  Usuário"
            onChange={handleChange}
            margin="mb-5"
          />
          <Input 
            type="text"
            name="email"
            placeholder="&#xf007;  E-mail"
            onChange={handleChange}
            margin="mb-5"
          />
          <Input 
            type="password"
            name="senha"
            placeholder="&#xf084;  Senha"
            onChange={handleChange}
            margin="mb-5"
          />
          <Input 
            type="password"
            name="confirmar_senha"
            placeholder="&#xf084;  Confirme a Senha"
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

export default Cadastro
