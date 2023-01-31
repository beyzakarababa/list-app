import { Table, Button, Modal } from "antd";
import { IVisitList } from "./modal";
import { FC, useState } from "react";
import Column from "antd/es/table/Column";
import "../../App.css"
import dayjs from "dayjs";
import { deleteVisit } from "../../api/service/visit";

const VisitList: FC<IVisitList> = ({
    list,
    setter,
}) => {
    const [open, setOpen] = useState(false);
    const [deletedId, setDeletedId] = useState<string>('');
    const showPopconfirm = (id:string) => {
      setDeletedId(id)
      setOpen(true);
    };
    
    const handleOk = async () =>  {
      const newVisitList = await deleteVisit(deletedId);
      setter(newVisitList);
      setOpen(false);
    };
    
    const handleCancel = () => {
      setOpen(false);
    };
   
    return (
    <>
        <Table dataSource={list} className="custom-table" >
            <Column title={"Firma Adı"} dataIndex={"companyName"} key={"companyName"}></Column>
            <Column title={"İlgili Ad / Soyad"} dataIndex={"name"} key={"name"}></Column>
            <Column title={"Adres"} dataIndex={"address"} key={"address"}></Column>
            <Column title={"İl"} dataIndex={"city"} key={"city"}></Column>
            <Column title={"Varış Saati"} dataIndex={"arrivalTime"} key={"arrivalTime"} render={(arrivalTime) => {return <>{dayjs(arrivalTime).format('HH:mm:ss')}</>}}></Column>
            <Column title={"Ayrılış Saati"} dataIndex={"departureTime"} key={"departureTime"} render={(departureTime) => { return <>{dayjs(departureTime).format('HH:mm:ss')} </> }}></Column>
            <Column title={"İşlem"} dataIndex={'id'} key={"id"} render={(id) => {return (
           
              <Button onClick={() => showPopconfirm(id)} className="delete-button">Sil</Button>
                
                )
            }}></Column>
        </Table>
        <Modal
        title="Kaydı sil"
        open={open}
        okText="Sil"
        cancelText="İptal"
        onOk={() => {
            handleOk();
        }}
        onCancel={handleCancel}>
        Bu kaydı silmek istiyor musunuz?
      </Modal>
    </>

    );
};

export default VisitList;