import { useState, ChangeEvent, useEffect } from "react";
import { removeFilter, setFilter } from "../../reducers/filterSlice";
import { useAppDispatch } from "../../provider/provider.types";
import style from "./transfer.module.css";

function TransferFilter() {
  const [transfers, setTransfers] = useState<number | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (transfers) {
      dispatch(
        setFilter({
          type: "transfers",
          filterCb: (tickets) =>
            tickets.filter((ticket) => ticket.transfersCount === transfers),
        })
      );
    } else {
      dispatch(removeFilter("transfers"));
    }
  }, [transfers]);

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTransfers(+e.target.value);
  };

  return (
    <div className={style.filter}>
      <h3 className={style.name}>Количество пересадок</h3>
      <div className={style.list}>
        <div className={style.row}>
          <input
            value="0"
            type="checkbox"
            id="no-transfers"
            name="transfers"
            checked={transfers === 0}
            onChange={handleRadioChange}
          />
        <label htmlFor="no-transfers">Без пересадок</label>
        </div>
        <div className={style.row}>
          <input
            value="1"
            type="checkbox"
            id="1-transfers"
            name="transfers"
            checked={transfers === 1}
            onChange={handleRadioChange}
          />
        <label htmlFor="1-transfers">1 пересадка</label>
        </div>
        <div className={style.row}>
          <input
            value="2"
            type="checkbox"
            id="2-transfers"
            name="transfers"
            checked={transfers === 2}
            onChange={handleRadioChange}
          />
        <label htmlFor="2-transfers">2 пересадки</label>
        </div>
        <div className={style.row}>
          <input
            value="3"
            type="checkbox"
            id="3-transfers"
            name="transfers"
            checked={transfers === 3}
            onChange={handleRadioChange}
          />
        <label htmlFor="3-transfers">3 пересадки</label>
        </div>
      </div>
    </div>
  )
}

export default TransferFilter;