import {Link} from "react-router-dom";

import './zamowienia-emial.css'
import {selectLang} from "../../assets/assets";
import {dataZamowianie} from "./data-zamowianie";

export const ZamowieniaEmail = () => {
    const {message, back} = selectLang(dataZamowianie);
    return (
        <>
        <section className='mr30'>
            <h1 className='mr30'>{message}</h1> <br/>
            <Link to='/#portfolio'><h2 className='mr30'>{back}</h2></Link>
        </section>
</>
)
}