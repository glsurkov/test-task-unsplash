import clsx from 'clsx';
import { ChangeEvent, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { getLastSearch } from '@/entities/images/store/selectors.ts';
import { ImagesCards } from '@/entities/images/ui/images-cards';
import { ImagesSearchInput } from '@/entities/images/ui/images-search-input';

import { useLazyImagesControllerGetImagesQuery } from '@/shared/api/rest/images.ts';

import styles from './styles.module.scss';

const Landing = () => {
    const [searchValue, setSearchValue] = useState('');
    const lastSearch = useSelector(getLastSearch);

    const [searchImages, { data, error }] = useLazyImagesControllerGetImagesQuery();

    const onSearch = useCallback(async () => {
        if (lastSearch !== searchValue) {
            await searchImages({
                query: searchValue,
                client_id: 'Ip0XA55zY7b7-d19osq1L5btGg-YCeDZVpnnJjXqHxs',
                page: 1,
                per_page: 20,
            });
        }
    }, [lastSearch, searchValue]);

    const onChangeSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value.toLowerCase());
    }, []);

    const clearSearch = useCallback(() => {
        setSearchValue('');
    }, []);

    return (
        <div className={clsx(styles.root, { [styles.rootWithImages]: data && data.results })}>
            <ImagesSearchInput
                value={searchValue}
                onChange={onChangeSearch}
                onClear={clearSearch}
                onSearch={onSearch}
            />
            {data && data.results && <ImagesCards searchValue={searchValue} images={data?.results} error={error} />}
        </div>
    );
};

export default Landing;
