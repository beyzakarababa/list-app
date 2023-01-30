import { ChangeEvent, FC,useState } from "react";
import { Modal,Input,Select,TimePicker,Button} from "antd";
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { IPopUp } from "./modal";
import { IVisit } from "../../api/modals/IVisit";
dayjs.extend(customParseFormat);

const PopUp: FC<IPopUp> = ({
    cancelHandle,
    okHandle,
    showHandle,
    name,
    isOpen
}) => {
    const [value, setValue] = useState<Dayjs | null>(null);
    const [currentVisit, setCurrentVisit] = useState<IVisit>();
    
    const onChange = (time: Dayjs) => {
        setValue(time);
    };
    
    return(
        <>
        <Button className='button1' onClick={showHandle} >
        {name}
        </Button>
        <Modal
        title="Basic Modal"
        open={isOpen}
        onOk={() => {
            okHandle();
        }}
        onCancel={cancelHandle}>
        <Input defaultValue="Firma adı" value={currentVisit?.companyName}/>
        <Input defaultValue="İlgili Ad / Soyad" value={currentVisit?.name}/>
        <Input defaultValue="Adress" value={currentVisit?.address}/>
        <Select
        value={currentVisit?.city}
        defaultValue={'İl'}
        style={{ width: 120 }}
        options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
        ]}>
        </Select>
        <TimePicker placeholder="Varış Saati" value={currentVisit?.arrivalTime} />
        <TimePicker placeholder="Ayrılış Saati" value={currentVisit?.departureTime} />
      </Modal>
      </>
    );
};
export default PopUp;