import { Routes, Route, Navigate } from 'react-router-dom';
import '../src/components/SideBar.css';
import Finish from './components/Finish';
import FirstStep from './components/FirstStep';
import PickAdd from './components/PickAdd';
import SelectPlan from './components/SelectPlan';
import SideBar from './components/Sidebar';
import Thanks from './components/Thanks';

function App() {



  return (
    <div className={'appCont d-flex align-items-center container justify-content-evenly'} style={{
      columnGap: "5%", height: '85vh', width: '100%', marginTop: 'calc((100vh - 85vh) / 2)'
    }}>

      <SideBar />
      <Routes>
        <Route path='/' element={<FirstStep />} />
        <Route path='/selectPlan' element={<SelectPlan arcadeMon={'$9/mo'} arcadeyr={'$90/yr'} advMon={'$12/mo'} advYr={'$120/yr'} proMon={'$15/mo'} proYr={'$150/yr'} />} />
        <Route path='/PickAdd' element={<PickAdd onlineMon={'+$1/mo'} onlineYr={'+$10/yr'} storageMon={'+$2/mo'} storageYr={'+$20/yr'} profileMon={'+$2/mo'} profileYr={'+$20/yr'} />} />
        <Route path='/Finish' element={<Finish arcadeMon={'$9/mo'} arcadeyr={'$90/yr'} advMon={'$12/mo'} advYr={'$120/yr'} proMon={'$15/mo'} proYr={'$150/yr'} onlineMon={'+$1/mo'} onlineYr={'+$10/yr'} storageMon={'+$2/mo'} storageYr={'+$20/yr'} profileMon={'+$2/mo'} profileYr={'+$20/yr'} />} />
        <Route path='/Thanks' element={<Thanks />} />
{/*         <Route path='/Multi-Step-form-App' element={<Navigate to="/" replace />} /> */}
      </Routes>

    </div>

  );
}

export default App;


