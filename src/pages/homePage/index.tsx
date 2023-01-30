import { useState } from "react";
import { CityType, IVisit } from "../../api/modals/IVisit";
import VisitList from "../../components/VisitList";
import {Button, Popconfirm} from "antd";
import dayjs from "dayjs";

export default function HomePage() {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const showPopconfirm = () => {
        setOpen(true);
      };
    
    const handleOk = () => {
        setConfirmLoading(true);
    
        setTimeout(() => {
          setOpen(false);
          setConfirmLoading(false);
        }, 2000);
      };
    
    const handleCancel = () => {
        setOpen(false);
      };
    
    const [visitList, setVisitList] = useState<IVisit[]>([]);

    const [isNewVisitOpen, setIsNewVisitOpen] = useState(false);
    const x: IVisit[] = [
        {
            companyName: 'Atölye',
            name: "Beyza Karababa",
            address: "Beyzanın evi",
            city: CityType.Adana,
            arrivalTime: dayjs.prototype,
            departureTime: dayjs.prototype,
            operation: <Button className="delete-button" onClick={showPopconfirm}>Sil</Button>,

        },
        {
            companyName: 'Atölye',
            name: "Beyza Karababa",
            address: "Beyzanın evi",
            city: CityType.Adana,
            arrivalTime: dayjs.prototype,
            departureTime: dayjs.prototype,
            operation: <Button className="delete-button">Sil</Button>,

        },
        {
            companyName: 'Atölye',
            name: "Beyza Karababa",
            address: "Beyzanın evi",
            city: CityType.Adana,
            arrivalTime: dayjs.prototype,
            departureTime: dayjs.prototype,
            operation: <Button className="delete-button">Sil</Button>,

        }
    ]
    return(
    <>
    <Popconfirm
      title="Kaydı sil"
      description="Bu kaydı silmek istiyor musunuz?"
      open={open}
      onConfirm={handleOk}
      okButtonProps={{ loading: confirmLoading }}
      onCancel={handleCancel}
    >
    </Popconfirm>
    <VisitList list={x}/>
    </>
    )
}