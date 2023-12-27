export type RequestEndpointType = 'politic' | 'sport';

export type NewsMainPartType = {
    id: number;
    __component: string;
    name: string;
    description: string;
    date: Date;
}

export type ThemeType = {
    id: number;
    attributes: {
        type: string;
    };
}

export type ResponseThemesType = {
    data: ThemeType[];
    meta: {
        pagination: ResponsePagination;
    }
}

export type NewsType = {
    type: RequestEndpointType;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    main: NewsMainPartType[];
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