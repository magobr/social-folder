import * as React  from "react";
import logo from "../../public/logo.png";

type Props = {
    style: string
}

const Logo: React.FC<Props> = (props) => {
    const { style } = props;

    return (
        <img src={`${logo.src}`} alt='logo' className={`${style}`}/>
    )
}

export default Logo
