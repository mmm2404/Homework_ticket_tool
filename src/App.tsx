
import Header from './components/header/header';
import Main from './components/main/main';
import './App.css'
import AppProvider from './provider/provider';
import TicketList from './components/ticketlist/TicketList';
import SortTickets from './components/sorting/SortTickets';
import CompanyFilter from './components/companyfilter/CompanyFilter';
import TransferFilter from './components/transferfilter/TransferFilter';
import MobileOption from './components/mobile/MobileOption';


function App() {
  
  return (
    <>
    <AppProvider>
    <Header/>
    <Main>
      <div className='filters'>
          <TransferFilter/>
          <CompanyFilter/>
      </div>
      <div className='tickets'>
          <SortTickets/>
            <MobileOption/>
          <TicketList/>
 
      </div> 
    </Main>
    </AppProvider>
     
    </>
  )
}

export default App;
