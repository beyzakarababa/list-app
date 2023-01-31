import React, { ChangeEvent } from 'react';
import './App.css';
import {Button,Input,Select,TimePicker} from "antd";
import { useState,useEffect } from 'react';
import PopUp from './components/PopUp';
import { IVisit } from './api/modals/IVisit';
import dayjs, { Dayjs } from 'dayjs';
import { addVisit, getVisits } from './api/service/visit';
import VisitList from './components/VisitList';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVisit, setCurrentVisit] = useState<IVisit>({companyName:"", name: "", address: "", city: "Adana", arrivalTime: dayjs(), departureTime: dayjs()});
  const [visitList, setVisitList] = useState<IVisit[]>([]);
  
  const getInitialVisits = async () => {
  const visits = await getVisits();
  setVisitList(visits);
  }

  const handleOk = async () => {
    const newVisitList = await addVisit(currentVisit);
    setVisitList(newVisitList);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModal = () => {
   setIsModalOpen(true);
  };

  const onHandleChange = (e:ChangeEvent<HTMLInputElement>) => {
   setCurrentVisit((prevCurrentVisit) => ({...prevCurrentVisit, [e.target.name]:e.target.value}))
  }
  const onHandleChangeTime = (value:dayjs.Dayjs|null,type:string) => {
   setCurrentVisit((prevCurrentVisit) =>  ({...prevCurrentVisit, [type]:value}))
  }
  const onHandleChangeSelect = (value:any) => {
   setCurrentVisit((prevCurrentVisit) => ({...prevCurrentVisit, city:value}))
  }
  useEffect(() => {
   getInitialVisits();
  },[]);

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
        showHandle={showModal}>&nbsp;
        <Input name={'companyName'} onChange={onHandleChange} placeholder="Firma adı" value={currentVisit?.companyName}/>&nbsp;
        <Input name={'name'} onChange={onHandleChange} placeholder="İlgili Ad / Soyad" value={currentVisit?.name}/>&nbsp;
        <Input name={'address'} onChange={onHandleChange} placeholder="Adres" value={currentVisit?.address}/>&nbsp;
        <div>
        <Select
        onChange={onHandleChangeSelect}
        placeholder={'İl'}
        style={{ width: 120 }}
        value={currentVisit?.city}
        options={[
            { value: 'Adana', label: 'Adana' },
            { value: 'Ankara', label: 'Ankara' },
            { value: 'Antalya', label: 'Antalya' },
            { value: 'Bursa', label: 'Bursa' },
            { value: 'İstanbul', label: 'İstanbul' },
            { value: 'İzmir', label: 'Izmir' },
        ]}>
        </Select>&nbsp;&nbsp;
        <TimePicker onChange={(value) =>onHandleChangeTime(value,"arrivalTime")} placeholder="Varış Saati" value={currentVisit?.arrivalTime} />&nbsp;&nbsp;
        <TimePicker onChange={(value) =>onHandleChangeTime(value,"departureTime")} placeholder="Ayrılış Saati" value={currentVisit?.departureTime} />&nbsp;
        </div>
        </PopUp>
      </div><VisitList list={visitList} setter={setVisitList}/></div>
    </div>
  );
}
export default App;

