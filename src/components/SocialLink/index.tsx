import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { icon, IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
    style?: string
    socialName: string | undefined
    socialLink: string | undefined
}

const SocialLink = (props:Props) => {

    const Icon = ():JSX.Element=>{
        if (props.socialName == "Instagram") {
            return <><FontAwesomeIcon icon={faInstagram as IconProp} className="text-2xl"/></>
        }
        if (props.socialName == "Facebook") {
            return <><FontAwesomeIcon icon={faFacebook as IconProp} className="text-2xl"/></>
        }
        if (props.socialName == "Linkedin") {
            return <><FontAwesomeIcon icon={faLinkedin as IconProp} className="text-2xl"/></>
        }
        if (props.socialName == "Twitter") {
            return <><FontAwesomeIcon icon={faTwitter as IconProp} className="text-2xl"/></>
        }

        return <FontAwesomeIcon icon={faLink as IconProp} className="text-2xl"/> 
    }

    return (
        <div className="flex flex-col items-center py-5">
            <a target="_blank" href={props.socialLink}>
                <div className='rounded-md bg-white h-12 w-60 grid grid-cols-1 content-center'>
                    <div className="text-left grid grid-cols-3 content-left">
                        <div className='mx-4'>
                            <Icon />
                        </div>
                        <div className='text-center'>
                            {props.socialName}
                        </div>
                        <div className=""></div>
                    </div>
                </div>
            </a>
        </div>    
    )
}

export default SocialLink
