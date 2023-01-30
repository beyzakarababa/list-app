import React from 'react';
import './App.css';
import HomePage from './pages/homePage';
import {Button} from "antd";
import { useState } from 'react';
import PopUp from './components/PopUp';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
};

const handleCancel = () => {
    setIsModalOpen(false);
};
const showModal = () => {
  setIsModalOpen(true);
};


  return (
    <div className="App">
      <div className='app-container'>
      <div className='title'>Ziyaret Listesi</div>
      <div className='button-container'>
        <PopUp
        cancelHandle={handleCancel}
        okHandle={handleOk}
        name ='Yeni Ziyaret'
        isOpen = {isModalOpen}
        showHandle={showModal}/>
      </div><HomePage></HomePage></div>
    </div>
  );
}
export default App;
