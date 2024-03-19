import React, { useEffect } from 'react';
import styles from './App.module.css';
import '../../App.css';
import { Header } from '../Header/Header';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage/MainPage';
import { SettingsPage } from '../../pages/SettingsPage/SettingsPage';
import { useLocation } from 'react-router-dom';
import Modal from '../Modal/Modal';
import AddEmployee from '../../pages/AddEmploye/AddEmployee';
import { useDispatch } from 'react-redux';
import { loadEmployees } from '../../services/actions/InputAction';
import { employeesData } from '../../utils/utilsData';
import Shirm from '../Shirm/Shirm';
import StatisticsPage from '../../pages/StatisticsPage/StatisticsPage';


function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const closePopup = () => {
    navigate(-1)
  }
  

  useEffect(() => {
    dispatch(loadEmployees(employeesData))
  },[])

  const backgroundLocation = location.state?.background;
  return (
    <div className="App">
      <Header />
      <Shirm />
      <div className={styles.main}>
        <Routes location={backgroundLocation || location}>
          <Route path='/' element={<MainPage title='сотрудники' />} />
          <Route path='/statistics' element={<StatisticsPage />} />
          <Route path='/settings' element={<SettingsPage />} />
        </Routes>

        {backgroundLocation && <Routes>
          <Route path='/add-employe' element={
            <Modal title='добавить сотрудника' handleClose={closePopup}>
              <AddEmployee />
            </Modal>
          } />
        </Routes>

        }
      </div>
    </div>
  );
}

export default App;
