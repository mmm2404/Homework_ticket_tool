import { Ticket } from "../../api/datatype";
import { useAppDispatch, useAppSelector } from "../../provider/provider.types";
import { setSortType } from "../../reducers/sortingSlice";
import style from "./sort.module.css";
import clsx from "clsx";

interface ISortButton {
    id: string;
    title: string;
    field:keyof Ticket;
}

const buttons: ISortButton[] = [
    {
        id: "cheapest",
        title: "Самый дешевый",
        field: "price",
      },
      {
        id: "fastest",
        title: "Самый быстрый",
        field: "duration",
      },
      {
        id: "optimal",
        title: "Самый оптимальный",
        field: "transfersCount",
      },
];

function SortTickets(){
   
    const currentSortingType = useAppSelector((state) => state.sort.type)
    const dispatch = useAppDispatch();

    const handleButtonClick = (type: string, field: keyof Ticket) =>
        dispatch(setSortType({type, field}));
    
return(
    <div className={style.sort}>
        {buttons.map((button) => (
            <button
            onClick={() => handleButtonClick(button.id, button.field)}
            key={button.id}
            className={clsx(style.button, { [style.active]: currentSortingType === button.id})}
        
            >
              {button.title}  
            </button>
        ))}

    </div>
);
}


export default SortTickets;