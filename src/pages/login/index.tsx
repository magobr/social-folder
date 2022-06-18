import React, { useState } from 'react';
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

import Logo from '../../components/Logo';
import Input from '../../components/Inputs';
import Button from '../../components/Button';

type dadosForm = {
  usuario: string,
  senha: string
}

import 'font-awesome/css/font-awesome.min.css';

const Login = () => {

  const [term, setTerm] = useState<dadosForm>({
    usuario: '',
    senha: ''
  });

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(term)
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
          />
          <Input 
            type="password"
            name="senha"
            placeholder="&#xf084;  Senha"
            onChange={handleChange}
          />

          <Input 
            type="submit"
            name="btn-login"
            bgbutton="bg-violet-500 hover:bg-violet-600 duration-150 active:bg-violet-800"
            value="&#xf090; Entrar"
          />
        </div>   
      </form>

      <div className="flex justify-center mb-3">
        <div className="w-[250px] h-[1px] bg-white"></div>
      </div>

      <div className="flex justify-center mb-8 mt-8">
        <Link href="/cadastro">
          <a className="font-bold text-white hover:text-black duration-150">Cadastre-se</a>
        </Link>
      </div>

      <div className="flex justify-center items-center self-center flex-col mb-3">
        <Button 
          name="Facebook"
          value="Facebook"
          id="Facebook"
          icon={<FontAwesomeIcon icon={faFacebookF as IconProp}/>}
          styleCustom="hover:bg-indigo-500"
        />
        <Button 
          name="Google"
          value="Google"
          id="Google"
          icon={<FontAwesomeIcon icon={faGoogle as IconProp}/>}
          styleCustom="hover:bg-[#e74c3c]"
        />
      </div>

      <div className="flex justify-center mb-8 mt-8">
        <Link href="/lembrarsenha">
          <a  className="font-bold underline text-white hover:text-black duration-150">Esqueceu a Senha?</a>
        </Link>
      </div>

    </div>
  )
}

export default Login
