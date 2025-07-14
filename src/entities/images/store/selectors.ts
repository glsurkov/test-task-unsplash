import { StateSchema } from '@/shared/redux';

export const getImages = (state: StateSchema) => state.images.images;
export const isImagesLoading = (state: StateSchema) => state.images.isLoading;
export const getCurrentPage = (state: StateSchema) => state.images.lastPage;
export const getLastSearch = (state: StateSchema) => state.images.lastSearch;
