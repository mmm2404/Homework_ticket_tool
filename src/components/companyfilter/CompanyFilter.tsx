import { ChangeEvent, useState, useEffect } from "react";
import { removeFilter, setFilter } from "../../reducers/filterSlice";
import { getCompanyList } from "../../reducers/ticketSlice";
import { useAppDispatch } from "../../provider/provider.types";
import style from "./company.module.css"

function CompanyFilter() {
  const companyList = Array.from(getCompanyList());
  const [companies, setCompanies] = useState<string[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (companies.length > 0) {
      dispatch(
        setFilter({
          type: "companies",
          filterCb: (tickets) =>
            tickets.filter((ticket) => companies.includes(ticket.company)),
        })
      );
    } else {
      dispatch(removeFilter("companies"));
    }
  }, [companies]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    const companyName = e.target.id;

    if (companies.includes(companyName)) {
      setCompanies(companies.filter((company) => company !== companyName));
    } else {
      setCompanies([...companies, companyName]);
    }
  };

  return (
    <div className={style.filter}>
      <h3 className={style.company}>Компании</h3>
      <div className={style.list}>
        {companyList?.map((company) => (
            <div className={style.row} key={company}>
                <div className={style.wrapper}>
                  <input className={style.radio}
                    type="checkbox" 
                    id={company}
                    onChange={handleChange} 
                    />
                    <div className={style.circle}></div>    
                </div>
          
            <label htmlFor={company}>{company}</label>
            

          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyFilter;