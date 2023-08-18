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
interface urlSearch {
  pathTable: string;
  pathPlusOne: string;
  pathPlusTwo: string;
  pathPlusThree: string;
  pathPlusFour: string;
}


export const useGetAPI = (urlSearch: urlSearch, params: GetAPIParams, formData: FormData) => {
  const url = `${urlSearch.pathTable}/search?page=${params.page}&pageSize=${params.pageSize}&${urlSearch.pathPlusOne}=${formData.selectType}&searchKey=${formData.key}`;
  const [{ data, loading, error }, refetch] = useAxios(`api/${url}`);

  return [{ data, loading, error }, refetch];
}

export const usePostAPI = (urlSearch: urlSearch, data: any) => {  // if you're not sure about the data's shape, 'any' is okay, but it's better to use a specific type
  const [{ loading, error }, sendPost] = useAxios({ url: `api/${urlSearch.pathTable}`, method: 'POST', data }, { manual: true });
  return [{ loading, error }, sendPost];
}

export const usePutAPI = (urlSearch: urlSearch, id: string | number, data: any) => {
  const [{ loading, error }, sendPut] = useAxios({ url: `api/${urlSearch.pathTable}/${id}`, method: 'PUT', data }, { manual: true });
  return [{ loading, error }, sendPut];
}

export const useDeleteAPI = (urlSearch: urlSearch, id: string | number) => {
  const [{ loading, error }, sendDelete] = useAxios({ url: `api/${urlSearch.pathTable}/${id}`, method: 'DELETE' }, { manual: true });
  return [{ loading, error }, sendDelete];
}