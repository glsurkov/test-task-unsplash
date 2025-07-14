import { api } from '../base';

const injectedRtkApi = api.injectEndpoints({
    endpoints: (build) => ({
        imagesControllerGetImages: build.query<ImagesControllerGetImagesApiResponse, ImagesControllerGetImagesApiArg>({
            query: (queryArg) => ({
                url: `/api/search/photos`,
                params: {
                    client_id: queryArg.client_id,
                    query: queryArg.query,
                    page: queryArg.page,
                    per_page: queryArg.per_page,
                    order_by: queryArg.order_by,
                },
            }),
        }),
    }),
    overrideExisting: false,
});

export type ImagesControllerGetImagesApiArg = {
    query: string;
    page?: number;
    per_page?: number;
    order_by?: string;
    client_id: string;
};

export type ImagesControllerGetImagesApiResponse = {
    results: Image[];
    total: number;
    total_pages: number;
};

export type Image = {
    id: string;
    alt_description: string;
    urls: {
        full: string;
        raw: string;
        regular: string;
        small: string;
        small_s3: string;
        thumb: string;
    };
};

export { injectedRtkApi as api };

export const { useImagesControllerGetImagesQuery, useLazyImagesControllerGetImagesQuery } = injectedRtkApi;
