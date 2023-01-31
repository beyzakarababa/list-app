import { api } from "..";

export const getVisits = async () => {
    const response = await api.get('/visits');
    return response.data;
}
export const addVisit = async (visit:any) => {
    await api.post('/visits',visit);
    const response = await getVisits();
    return response;
}
export const deleteVisit = async (visitId:string) => {
    await api.delete(`/visits/${visitId}`);
    const response = await getVisits();
    return response;
}