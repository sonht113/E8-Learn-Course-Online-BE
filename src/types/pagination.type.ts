interface PaginationResultInterface<PaginationEntity> {
  result: PaginationEntity[];
  totalPage: number;
  page?: number;
  limit?: number;
}

export class Pagination<PaginationEntity> {
  public result: PaginationEntity[];
  public totalPage: number;
  public page: number;
  public limit: number;

  constructor(paginationResults: PaginationResultInterface<PaginationEntity>) {
    this.result = paginationResults.result;
    this.totalPage = paginationResults.totalPage;
    this.page = paginationResults.page;
    this.limit = paginationResults.limit;
  }
}
