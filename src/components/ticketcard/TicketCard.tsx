import { TicketCardProps } from "./ticket.types";
import style from "./ticket.module.css";

import S7Logo from "../../../public/sseven.svg";
import pobedaLogo from "../../../public/pobeda.svg";
import redwingsLogo from "../../../public/redwings.svg";

function TicketCard({ ticket }:TicketCardProps){

    const logos: Record<string, string>={
        "S7 Airlines": S7Logo,
        "Pobeda Airlines": pobedaLogo,
        "Red Wings": redwingsLogo,
    };

    const getTransferCount =  () => {
    
        const { transfersCount} = ticket;
        if (!transfersCount) return "Без пересадок";
        if (transfersCount === 1) return "1 пересадка";
        return `${transfersCount} пересадки`;
    
    };

    return(
        <div className={style.ticket}>
            <div className={style.header}>
                <p className={style.price}>
                    {ticket.price}{ticket.currency === "RUB"? "P" : ticket.currency}
                </p>
                <img src={logos[ticket.company]} alt="Logo of the airplane company"/>
            </div>
            <div className={style.info}>
                <div className={style.column}>
                    {ticket.from} - {ticket.to}
                    <div className={style.row}>
                        {ticket.time.startTime} - {ticket.time.endTime}
                    </div>
                </div>
                <div className={style.column}>
                    В пути
                    <div className={style.row}>
                        {ticket.duration.hours } ч. {ticket.duration.minutes} мин.
                    </div>
                </div>
                <div className={style.column}>
                    Пересадки
                    <div className={style.row}>{getTransferCount()}</div>
                        
                </div>
            </div>
        </div>
    )
}

export default TicketCard;