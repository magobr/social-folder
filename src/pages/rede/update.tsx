import React, { useState, useEffect } from 'react';
import Router from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import Logo from '../../components/Logo';
import Input from '../../components/Inputs';

import redeMock from '../../mock/rede';

import 'font-awesome/css/font-awesome.min.css';

type dadosForm = {
  rede_social: string,
  nickname: string,
  link_rede: string
}

const RedeNew = () => {

  const [term, setTerm] = useState<dadosForm>({
    rede_social: '',
    nickname: '',
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

  useEffect(()=>{
    return setTerm(redeMock.rede);
  },[])

  return (
    <div>
      <div className='cursor-pointer m-3 text-white text-xl' onClick={() => Router.back()}><FontAwesomeIcon icon={faAngleLeft as IconProp}/> Voltar</div>
      <div className="flex justify-center mb-12">
        <div className="mt-10">
          <Logo style="w-48"/>
        </div>
      </div>

        <div className={`pb-10 font-bold text-white text-xl text-center`}>
            Atualizar Rede
        </div>
        <form onSubmit={submitForm}>
            <div className="w-full flex justify-center flex-col items-center">
                <Input 
                  type="text"
                  name="rede_social"
                  placeholder="Rede Social"
                  onChange={handleChange}
                  value={term.rede_social}
                  margin="mb-5"
                />
                <Input 
                  type="text"
                  name="nickname"
                  placeholder="@nickname"
                  onChange={handleChange}
                  value={term.nickname}
                  margin="mb-5"
                />
                <Input 
                  type="text"
                  name="link_rede"
                  placeholder="Link da Rede"
                  onChange={handleChange}
                  value={term.link_rede}
                  margin="mb-5"
                />
                
                <Input 
                  type="submit"
                  name="btn-login"
                  bgbutton="bg-[#e67e22] hover:bg-[#d35400] duration-150 active:bg-[#d35400]"
                  value="&#xf090; Atualizar"
                />
            </div>   
        </form>
    </div>
  )
}

export default RedeNew
