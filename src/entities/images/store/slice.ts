import { createSlice } from '@reduxjs/toolkit';

import { images } from '@/shared/api';
import { Image, ImagesControllerGetImagesApiResponse } from '@/shared/api/rest/images.ts';

export interface ImagesSchema {
    images: Image[] | null;
    totalPages: number | null;
    isLoading: boolean;
    lastPage: number;
    lastSearch: string | null;
}

const initialState: ImagesSchema = {
    images: null,
    totalPages: null,
    lastPage: 1,
    isLoading: false,
    lastSearch: null,
};

const setImages = (
    state: ImagesSchema,
    action: {
        payload: ImagesControllerGetImagesApiResponse;
    },
) => {
    state.images = action.payload.results;
};

const addImages = (
    state: ImagesSchema,
    action: {
        payload: ImagesControllerGetImagesApiResponse;
    },
) => {
    state.images?.push(...action.payload.results);
};

const incPage = (state: ImagesSchema) => {
    state.lastPage = (state.lastPage || 1) + 1;
};

const slice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        setImages,
        addImages,
        incPage,
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(images.api.endpoints.imagesControllerGetImages.matchFulfilled, (state, action) => {
                const { query, page } = action.meta.arg.originalArgs;
                if (query !== state.lastSearch && page === state.lastPage) {
                    state.images = action.payload.results;
                    state.lastSearch = query;
                    state.lastPage = page;
                } else {
                    state.images?.push(...action.payload.results);
                }
                state.isLoading = false;
            })
            .addMatcher(images.api.endpoints.imagesControllerGetImages.matchPending, (state) => {
                state.isLoading = true;
            })
            .addMatcher(images.api.endpoints.imagesControllerGetImages.matchRejected, (state) => {
                state.isLoading = false;
            });
    },
});

const { reducer, actions } = slice;
export { reducer as imagesReducer, actions as imagesActions };
