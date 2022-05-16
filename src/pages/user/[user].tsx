import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import Avatar from '../../components/Avatar';
import SocialLink from '../../components/SocialLink';
import user from "../../mock/user.js" //Dados Mocados

import 'font-awesome/css/font-awesome.min.css';

interface social {
    name: string,
    link: string
}


type user = { 
  name: string;
  nickname: string;
  avatar: string;
  social?: Array<social>;
}

const User = () => {

  const [usuario, setUsuario] = useState<user>();
  const router = useRouter()
  const slug = router.query.user

  useEffect(()=>{
    return setUsuario(user.user);
  },[])

  const SocialLinks = ():JSX.Element =>{
    return(
      <>
        {usuario?.social?.map((_dados)=>{
          return (
            <SocialLink 
              key={_dados.name}
              socialName={_dados.name}
              socialLink={_dados.link} 
            />
          )
        })}
      </>
    )
  }

  return (
    <div>
      <div className="flex flex-col justify-center mb-12">
        <div className="mt-20">
          <Avatar 
            style={''}
            name={usuario?.name}
            image={usuario?.avatar == "" ? undefined : usuario?.avatar} 
            nickname={usuario?.nickname}
          />
        </div>

        <div className='mt-14'>
          <div className={`py-4 font-bold text-white text-xl text-center`}>
              Mida Links
          </div>
          <div className="overflow-auto h-80 scrollbar-thin scrollbar-thumb-cyan-900 hover:scrollbar-thumb-cyan-700">
            <SocialLinks />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default User
