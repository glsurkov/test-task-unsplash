import { ChangeEvent } from 'react';

import { IconClose, IconSearch } from '@/shared/assets';
import { Button } from '@/shared/ui/buttons';
import { InputText } from '@/shared/ui/inputs';

import styles from './styles.module.scss';

interface ImagesSearchInputProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onClear: () => void;
    onSearch: () => void;
}

export const ImagesSearchInput = (props: ImagesSearchInputProps) => {
    return (
        <div className={styles.root}>
            <InputText
                value={props.value}
                placeholder="Телефоны, яблоки, груши..."
                onChange={props.onChange}
                leftSection={<IconSearch />}
                rightSection={<IconClose onClick={props.onClear} className={styles.closeIcon} />}
                className={styles.searchInput}
            />
            <Button onClick={props.onSearch} className={styles.button}>
                Искать
            </Button>
        </div>
    );
};
