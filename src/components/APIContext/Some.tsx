import { useAPIContext } from "./index";
import { APIParams, AppFormData, UrlData } from "./type";

function SomeComponent() {
    const { logObjects } = useAPIContext();

    const apiParams: APIParams = {
      page: 1,
      pageSize: 10,
      total: 100
    };

    const formData: AppFormData = {
      selectType: ["aaa", "bbb", "ccc"],
      keyword: "aaa bbb csa"
    };

    const urlData: UrlData = ["aaa", "bbb", "csa"];

    // Use the function to log these objects
    logObjects(apiParams, formData, urlData);

    return <div>Objects logged! Check the console.</div>;
}

export default SomeComponent;