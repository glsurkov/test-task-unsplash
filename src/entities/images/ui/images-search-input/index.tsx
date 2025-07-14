import { ChangeEvent, MouseEventHandler } from 'react';

import { IconClose, IconSearch } from '@/shared/assets';
import { Button } from '@/shared/ui/buttons';
import { InputText } from '@/shared/ui/inputs';

import styles from './styles.module.scss';

interface ImagesSearchInputProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onClear: MouseEventHandler<HTMLOrSVGElement>;
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
                rightSection={<IconClose onMouseDown={props.onClear} className={styles.closeIcon} />}
                classNameRoot={styles.searchInput}
            />
            <Button onClick={props.onSearch} className={styles.button}>
                Искать
            </Button>
        </div>
    );
};
