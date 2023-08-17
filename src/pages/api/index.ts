import useAxios from "axios-hooks";
interface GetAPIParams {
  page: number;
  pageSize: number;
  total:number;
}

interface FormData {
  selectType: string;
  [key: string]: string | number;
}
interface urlData {
  pathTable: string;
  pathPlusOne: string;
  pathPlusTwo: string;
  pathPlusThree: string;
  pathPlusFour: string;
}


export const useGetAPI = (urlData: urlData, params: GetAPIParams, formData: FormData) => {
  const url = `${urlData.pathTable}/search?page=${params.page}&pageSize=${params.pageSize}&${urlData.pathPlusOne}=${formData.selectType}&searchKey=${formData.key}`;
  const [{ data, loading, error }, refetch] = useAxios(`api/${url}`);

  return [{ data, loading, error }, refetch];
}

export const usePostAPI = (urlData: urlData, data: any) => {  // if you're not sure about the data's shape, 'any' is okay, but it's better to use a specific type
  const [{ loading, error }, sendPost] = useAxios({ url: `api/${urlData.pathTable}`, method: 'POST', data }, { manual: true });
  return [{ loading, error }, sendPost];
}

export const usePutAPI = (urlData: urlData, id: string | number, data: any) => {
  const [{ loading, error }, sendPut] = useAxios({ url: `api/${urlData.pathTable}/${id}`, method: 'PUT', data }, { manual: true });
  return [{ loading, error }, sendPut];
}

export const useDeleteAPI = (urlData: urlData, id: string | number) => {
  const [{ loading, error }, sendDelete] = useAxios({ url: `api/${urlData.pathTable}/${id}`, method: 'DELETE' }, { manual: true });
  return [{ loading, error }, sendDelete];
}