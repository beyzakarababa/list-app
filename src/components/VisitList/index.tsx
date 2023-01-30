import { Table } from "antd";
import { IVisit } from "../../api/modals/IVisit";
import { IVisitList } from "./modal";
import { FC, useState } from "react";
import Column from "antd/es/table/Column";
import "../../App.css"

const VisitList: FC<IVisitList> = ({
    list,
}) => {
   
    return (
    <>
        <Table dataSource={list} className="custom-table" >
            <Column title={"Firma Adı"} dataIndex={"companyName"} key={"companyName"}></Column>
            <Column title={"İlgili Ad / Soyad"} dataIndex={"name"} key={"name"}></Column>
            <Column title={"Adres"} dataIndex={"address"} key={"address"}></Column>
            <Column title={"İl"} dataIndex={"city"} key={"city"}></Column>
            <Column title={"Varış Saati"} dataIndex={"arrivalTime"} key={"arrivalTime"}></Column>
            <Column title={"Ayrılış Saati"} dataIndex={"departureTime"} key={"departureTime"}></Column>
            <Column title={"İşlem"} dataIndex={"operation"} key={"operation"}></Column>
        </Table>
    </>

    );
};

export default VisitList;