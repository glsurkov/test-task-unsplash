import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { ImagesSchema, imagesReducer } from '@/entities/images/store/slice.ts';

import { api } from '@/shared/api';

export interface StateSchema {
    images: ImagesSchema;
    [api.base.api.reducerPath]: ReturnType<typeof api.base.api.reducer>;
}

const rootReducers: ReducersMapObject<StateSchema> = {
    images: imagesReducer,
    [api.base.api.reducerPath]: api.base.api.reducer,
};

export const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.base.api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof store.getState>;
