import { FC } from "react";
import { Modal,Button } from "antd";
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