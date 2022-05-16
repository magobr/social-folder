import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
    style?: string
    name:string | undefined
    nickname:string | undefined
    image: string | undefined
}

const Avatar = (props:Props) => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className="grid rounded-full bg-white w-28 h-28 place-content-center">
            <div>
            {
                props.image != undefined ? 
                <img src={props.image} alt="avatar" className='rounded-full w-28 h-28'/>:
                <FontAwesomeIcon icon={faUser as IconProp} className="text-7xl"/>
            }
            </div>
        </div>
        <div className={`${props.style} py-4 font-bold text-white text-xl w-52 text-center`}>
            {props.name}
        </div>
        <div className="font-semibold text-white text-xl w-52 text-center italic">
            {props.nickname}
        </div>
    </div>    
  )
}

export default Avatar
