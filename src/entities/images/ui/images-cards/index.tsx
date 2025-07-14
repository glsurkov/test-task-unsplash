import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import clsx from 'clsx';
import { useCallback, useEffect, useRef, useState } from 'react';

import { getImages, isImagesLoading } from '@/entities/images/store/selectors.ts';

import { Image, useLazyImagesControllerGetImagesQuery } from '@/shared/api/rest/images.ts';
import { useAppSelector } from '@/shared/lib/redux';
import { Modal } from '@/shared/ui/overlays';

import styles from './styles.module.scss';
import {Loader} from "@/shared/ui/feedback";

interface ImagesCardsProps {
    searchValue: string;
    images?: Image[];
    error?: FetchBaseQueryError | SerializedError | undefined;
}

const EMPTY_IMAGES_PLACEHOLDER = 'К сожалению, поиск не дал результатов';

export const ImagesCards = (props: ImagesCardsProps) => {
    const [searchImages] = useLazyImagesControllerGetImagesQuery();
    const { searchValue, error } = props;
    const observerRef = useRef<HTMLDivElement | null>(null);
    const currentPage = useRef(1);

    const images = useAppSelector(getImages);
    const isLoading = useAppSelector(isImagesLoading);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isLoading) {
                    currentPage.current++;
                    searchImages({
                        client_id: 'Ip0XA55zY7b7-d19osq1L5btGg-YCeDZVpnnJjXqHxs',
                        query: searchValue,
                        page: currentPage.current,
                        per_page: 20,
                    });
                }
            },
            { threshold: 1.0 },
        );

        const node = observerRef.current;
        if (node) observer.observe(node);
        return () => {
            if (node) observer.unobserve(node);
        };
    }, [searchValue]);

    return (
        <>
            <div className={styles.root}>
                {images && images.length && !error
                    ? images.map((image) => <ImageCard key={image.id} image={image} />)
                    : EMPTY_IMAGES_PLACEHOLDER}
                <div ref={observerRef} style={{ height: 1 }} />
            </div>
        </>
    );
};

interface ImageCardProps {
    image: Image;
}

const ImageCard = (props: ImageCardProps) => {
    const { image } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [isFullLoading, setIsFullLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    const onLoad = useCallback(() => {
        setIsLoading(false);
    }, []);

    const onFullLoad = useCallback(() => {
        setIsFullLoading(false);
    }, []);

    const onClickWithLoading = useCallback(() => {
        if (!isLoading) {
            setIsVisible(true);
        }
    }, [isLoading]);

    const onClose = useCallback(() => {
        setIsVisible(false);
    }, []);

    return (
        <>
            <div className={clsx(styles.card)} onClick={onClickWithLoading}>
                <img
                    className={clsx(styles.image, {
                        [styles.hiddenImage]: isLoading,
                    })}
                    src={image.urls.regular}
                    alt={image.alt_description}
                    onLoad={onLoad}
                />
            </div>
            <Modal.Root
                classNameContainer={styles.modalContainer}
                classNameContent={styles.modalContent}
                isVisible={isVisible}
                onClose={onClose}
                element={
              <div className={styles.imageContainer}>
                    <img
                        className={clsx(styles.image, {
                            [styles.hiddenImage]: isFullLoading,
                        })}
                        src={image?.urls.full}
                        alt={image?.alt_description}
                        onLoad={onFullLoad}
                    />
                {isFullLoading && <Loader/>}
              </div>
                }
            />
        </>
    );
};
