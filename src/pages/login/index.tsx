import type { NextPage } from 'next';

import React, { useState } from 'react';

import 'font-awesome/css/font-awesome.min.css';

import Logo from '../../components/Logo';
import Input from '../../components/Inputs';

const Home: NextPage = () => {

  const [term, setTerm] = useState({});

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
            placeholder="&#xf007; Usuário"
            onChange={handleChange}
          />
          <Input 
            type="password"
            name="senha"
            placeholder="&#xf084; Senha"
            onChange={handleChange}
          />

          <Input 
            type="submit"
            name="btn-login"
            bgbutton="bg-violet-500"
            value="&#xf090; Entrar"
          />
        </div>   
      </form>
      
    </div>
  )
}

export default Home
