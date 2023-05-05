import CompanyFilter from "../companyfilter/CompanyFilter";
import TransferFilter from "../transferfilter/TransferFilter";
import style from "./mobile.module.css";
import optionArrow from "../../../public/optionarrow.png";
import { useState } from "react";



function MobileOption(){

    const[menuActive, setMenuActive] = useState<boolean>(false);

//     const handleMenu = (e) =>{
//         setMenuActive(!menuActive)
// }

    return(
        <>
        <div className={style.wrapper}>
            <div className={style.panel}>
                <p className={style.tablet}>Любая авиакомпания, любое кол-во пересадок</p>
                <p className={style.mobile}>Любая авиакомпания, пересадок: 0, 1, 2, 3</p>
                <div className={style.btnWrapper}>
                    <p className={style.settings}> Открыть настройки</p>
                    <img onClick={(e) => setMenuActive(!menuActive)} width={20} height={12}className={style.optionBtn} alt="arrow down to show the options"src={optionArrow}/>
                </div>   
            </div>
            
            {menuActive && (
            <div className={style.options}>
                <CompanyFilter/>
                <TransferFilter/>
            </div>)}
        </div>
       
        </>
    )
}
export default MobileOption;