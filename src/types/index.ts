import RouteDetails from '../components/RouteDetails';

export enum TableGroup {
  urlParams = 'URL Parameters',
  queryParams = 'Query Parameters',
  headers = 'Headers',
  body = 'Body',
}

export enum RouteTabs {
  request = 'request',
  response = 'response',
}

export enum GroupParamKeyEnum {
  name = 'name',
  pii = 'pii',
  masked = 'masked',
  type = 'type',
}

export enum GroupParamLabelEnum {
  name = 'Name',
  pii = 'PII',
  masked = 'Masking',
  type = 'Type',
}

export interface TableHeader {
  label: string;
  key: keyof GroupParam;
}

export interface GroupParam {
  name: string;
  pii: boolean;
  masked: boolean;
  type: string;
}

type ArrayType<T> = T[] | [] | null | undefined;
export type GroupParamArray = ArrayType<GroupParam>;

export interface RequestResponseParams {
  urlParams?: GroupParamArray;
  queryParams?: GroupParamArray;
  headers: GroupParamArray;
  body: GroupParamArray;
}

export interface RouteFilters {
  searchValue: string;
  piiChecked: boolean;
}

export interface Filters {
  filters: RouteFilters;
  tab: RouteTabs;
}

export interface RouteDetails {
  api: string;
  method: string;
  path: string;
  request: RequestResponseParams;
  response: RequestResponseParams;
}

export interface TabInput {
  title: string;
  panelContent: JSX.Element;
}
