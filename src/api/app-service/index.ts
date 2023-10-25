import { http } from '../_http-client/http-client';

interface PaginationPayload {
  pageNumber: number;
  pageSize: number;
}

interface WithPaginationDTO {
  totalCount: number;
}

interface AppDTO {
  appId: string;
  appName: string;
  appSources: string[];
  category: string;
}

interface AppsListDTO extends WithPaginationDTO {
  appRows: AppDTO[];
}

const url = '/api/v1/app-service/get-apps';

export const getApps = (pagination: PaginationPayload) => {
  return http.put<AppsListDTO, PaginationPayload>(url, pagination);
};
