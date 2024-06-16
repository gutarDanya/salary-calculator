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
import Shirm from '../Shirm/Shirm';
import StatisticsPage from '../../pages/StatisticsPage/StatisticsPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import { checkUserAuth } from '../../services/actions/LoginAction';
import { useAppDispatch, useAppSelector } from '../../services/store';
import Desserts from '../../pages/Desserts/Desserts';
import DessertPopup from '../../pages/DessertPopup/DesserPopup';
import EmployeePopup from '../../pages/EmployeePopup/EmployeePopup';
import { getEmployees } from '../../services/slices/EmployeeSlice';
import EmployeePage from '../../pages/EmployeePage/EmployeePage';


function App() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  //u wanna create function of login/logout
  const userLogined = "login"

  function closePopup () {
    navigate(-1)
  }

  useEffect(() => {
    dispatch(getEmployees())
    dispatch(checkUserAuth())
  },[])

  const backgroundLocation = location.state?.background;

  if (userLogined === 'login') {
    return (
      <div className="App">
        <Header />
        <Shirm />
        <div className={styles.main}>
          <Routes location={backgroundLocation || location}>
            <Route path='/' element={<MainPage title='сотрудники' />} />
            <Route path='/statistics' element={<StatisticsPage />} />
            <Route path='/settings' element={<SettingsPage />} />
            <Route path='/desserts' element={<Desserts />} />
            <Route path='/change-employee/:id' element={<EmployeePage />}/>
          </Routes>
  
          {backgroundLocation && <Routes>
            <Route path='/add-employe' element={
              <Modal title='добавить сотрудника' handleClose={closePopup}>
                <AddEmployee />
              </Modal>
            } />

            <Route path='/desserts/:id' element={
              <Modal title='Состав' handleClose={closePopup}>
                <DessertPopup />
              </Modal>
            } />

            <Route path='/:id' element={
              <Modal title='Сотрудник' handleClose={closePopup}>
                <EmployeePopup />
              </Modal>
            } />
          </Routes>
  
          }
        </div>
      </div>
    );
  } else {
    return (
      <LoginPage />
    )
  }
  
}

export default App;
