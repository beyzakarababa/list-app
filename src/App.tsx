import React, { ChangeEvent } from 'react';
import './App.css';
import { Input, Select, TimePicker } from "antd";
import { useState, useEffect } from 'react';
import PopUp from './components/PopUp';
import { IVisit } from './api/modals/IVisit';
import dayjs from 'dayjs';
import { addVisit, getVisits } from './api/service/visit';
import VisitList from './components/VisitList';
import il_ilce from './il-ilce.json'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVisit, setCurrentVisit] = useState<IVisit>({companyName:"", name: "", address: "", city: undefined, arrivalTime: dayjs(), departureTime: dayjs()});
  const [visitList, setVisitList] = useState<IVisit[]>([]);
  
  const ilceTransform = (ililce:any) => {
    const cityOptions = [];
    for (let i = 0; i < 81; i++) {
       let il = ililce.data[i].il_adi
       console.log(il);
       cityOptions.push({ value: il, label: il });
    }
    console.log(cityOptions);
    return cityOptions;
  }
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
   ilceTransform(il_ilce);
   console.log(il_ilce);
   
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
        <Input name={'companyName'} onChange={onHandleChange} placeholder="Firma ad??" value={currentVisit?.companyName}/>&nbsp;
        <Input name={'name'} onChange={onHandleChange} placeholder="??lgili Ad / Soyad" value={currentVisit?.name}/>&nbsp;
        <Input name={'address'} onChange={onHandleChange} placeholder="Adres" value={currentVisit?.address}/>&nbsp;
        <div>
        <Select
        onChange={onHandleChangeSelect}
        showSearch
        placeholder={'??l'}
        style={{ width: 120 }}
        value={currentVisit?.city}
        options={ilceTransform(il_ilce)}>
        </Select>&nbsp;&nbsp;
        <TimePicker onChange={(value) =>onHandleChangeTime(value,"arrivalTime")} placeholder="Var???? Saati" value={currentVisit?.arrivalTime} />&nbsp;&nbsp;
        <TimePicker onChange={(value) =>onHandleChangeTime(value,"departureTime")} placeholder="Ayr??l???? Saati" value={currentVisit?.departureTime} />&nbsp;
        </div>
        </PopUp>
      </div><VisitList list={visitList} setter={setVisitList}/></div>
    </div>
  );
}
export default App;

