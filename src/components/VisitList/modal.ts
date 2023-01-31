import { IVisit } from "../../api/modals/IVisit";
export interface IVisitList {
    list: IVisit[];
    setter: React.Dispatch<React.SetStateAction<IVisit[]>>
}