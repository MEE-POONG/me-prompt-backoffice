export type APIParams = {
  page: number;
  pageSize: number;
  total: number;
};

export type AppFormData = {
  selectType: { typeName: string; value: string }[];
  keyword: string;
  caseCheck: "" | "Get" | "GetID" | "Search" | "Post" | "Push" | "Delete";
};