import useAxios from "axios-hooks";

const BASE_URL = '/api/partner';

export const useGetAPI = (page: number, pageSize: number, searchKey: string, selectTitle: string) => {
  const url = `${BASE_URL}/search?page=${page}&pageSize=${pageSize}&searchTeam=${selectTitle}&position=${searchKey}`;
  const [{ data, loading, error }, refetch] = useAxios(url);

  return [{ data, loading, error }, refetch];
}

export const usePostAPI = (data: any) => {  // if you're not sure about the data's shape, 'any' is okay, but it's better to use a specific type
  const [{ loading, error }, sendPost] = useAxios({ url: BASE_URL, method: 'POST', data }, { manual: true });
  return [{ loading, error }, sendPost];
}

export const usePutAPI = (id: string | number, data: any) => {
  const [{ loading, error }, sendPut] = useAxios({ url: `${BASE_URL}/${id}`, method: 'PUT', data }, { manual: true });
  return [{ loading, error }, sendPut];
}

export const useDeleteAPI = (id: string | number) => {
  const [{ loading, error }, sendDelete] = useAxios({ url: `${BASE_URL}/${id}`, method: 'DELETE' }, { manual: true });
  return [{ loading, error }, sendDelete];
}