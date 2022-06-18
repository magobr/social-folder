import React, { useState } from 'react';
import Router from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import Logo from '../../components/Logo';
import Input from '../../components/Inputs';

import 'font-awesome/css/font-awesome.min.css';

type dadosForm = {
    rede_social: string,
    link_rede: string
}

const Cadastro = () => {

  const [term, setTerm] = useState<dadosForm>({
    rede_social: '',
    link_rede: ''
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
      <div className='cursor-pointer m-3 text-white text-xl' onClick={() => Router.back()}><FontAwesomeIcon icon={faAngleLeft as IconProp}/> Voltar</div>
      <div className="flex justify-center mb-12">
        <div className="mt-10">
          <Logo style="w-48"/>
        </div>
      </div>

        <div className={`pb-10 font-bold text-white text-xl text-center`}>
            Cadastrar Rede
        </div>
        <form onSubmit={submitForm}>
            <div className="w-full flex justify-center flex-col items-center">
                <Input 
                type="text"
                name="rede_social"
                placeholder="Rede Social"
                onChange={handleChange}
                margin="mb-5"
                />
                <Input 
                type="text"
                name="link"
                placeholder="Link da Rede"
                onChange={handleChange}
                margin="mb-5"
                />
                
                <Input 
                type="submit"
                name="btn-login"
                bgbutton="bg-[#e67e22] hover:bg-[#d35400] duration-150 active:bg-[#d35400]"
                value="&#xf090; Cadastrar"
                />
            </div>   
        </form>
    </div>
  )
}

export default Cadastro
