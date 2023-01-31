import dayjs, { Dayjs } from 'dayjs';

export interface IVisit {
    id?:string;
    companyName: string;
    name: string;
    address: string;
    city: string;
    arrivalTime: Dayjs;
    departureTime: Dayjs;
}