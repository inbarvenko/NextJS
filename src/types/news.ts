export type NewsType = {
    name: string;
    description: string;
    date: Date;
}

export type NewsDataType = {
    id: number;
    attributes: NewsType;
}

export type ResponseNewsType = {
    data: NewsDataType[];
    meta: {
        pagination: ResponsePagination;
    }
}

type ResponsePagination = {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}