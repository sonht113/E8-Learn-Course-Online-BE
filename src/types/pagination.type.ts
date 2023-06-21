interface PaginationResultInterface<PaginationEntity> {
  result: PaginationEntity[];
  totalPage: number;
  page?: string;
  limit?: string;
}

export class Pagination<PaginationEntity> {
  public result: PaginationEntity[];
  public totalPage: number;
  public page: string;
  public limit: string;

  constructor(paginationResults: PaginationResultInterface<PaginationEntity>) {
    this.result = paginationResults.result;
    this.totalPage = paginationResults.totalPage;
    this.page = paginationResults.page;
    this.limit = paginationResults.limit;
  }
}
