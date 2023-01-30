import dayjs, { Dayjs } from 'dayjs';

export enum CityType {
    Adana = "ADANA",
    Ankara = "ANKARA",
    Antalya = "ANTALYA",
    Bursa = "BURSA",
    Diyarbakır = "DIYARBAKIR",
    Izmir = "IZMIR",
    Istanbul = "ISTANBUL",
    Konya = "KONYA",
    Mersin = "MERSIN",
    Samsun = "SAMSUN",
}
export interface IVisit {
    companyName: string;
    name: string;
    address: string;
    city: CityType;
    arrivalTime: Dayjs;
    departureTime: Dayjs;
    operation: JSX.Element|null;
}