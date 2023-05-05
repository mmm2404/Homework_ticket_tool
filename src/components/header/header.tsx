
import style from "./header.module.css";
import plain from "../../../public/plain.svg"

function Header (){
    return(
        <header className={style.header}>
            <img src={plain} alt="picture of the plain"></img>
            <h1 className={style.title}>Поиск авиабилетов</h1>

        </header>
    )
}

export default Header;