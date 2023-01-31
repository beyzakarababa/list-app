import { FC,useState } from "react";
import { Modal,Input,Select,TimePicker,Button} from "antd";
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { IPopUp } from "./modal";
dayjs.extend(customParseFormat);

const PopUp: FC<IPopUp> = ({
    cancelHandle,
    okHandle,
    showHandle,
    name,
    isOpen,
    children
}) => {
    const [value, setValue] = useState<Dayjs | null>(null);
    
    const onChange = (time: Dayjs) => {
        setValue(time);
    };

    return(
        <>
        <Button className='button1' onClick={showHandle} >
        {name}
        </Button>
        <Modal
        title="Ziyaret Kartı"
        open={isOpen}
        okText = "Kaydet"
        cancelText ="Kapat"
        onOk={() => {
            okHandle();
        }}
        onCancel={cancelHandle}>
        {children}
      </Modal>
      </>
    );
};
export default PopUp;