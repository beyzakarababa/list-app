export interface IPopUp {
    cancelHandle: () => void,
    okHandle: () => void,
    showHandle: () => void,
    name:string,
    isOpen: boolean;
}