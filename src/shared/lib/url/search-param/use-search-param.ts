import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { QueryProps, QueryReturned } from './types';

/**
 * Хук для работы с query-параметрами через React Router.
 */
export function useSearchParam<ToQueryParam, FromQueryParam>({
    key,
    toQueryParam,
    fromQueryParam,
    defaultValue,
}: QueryProps<ToQueryParam, FromQueryParam>): QueryReturned<ToQueryParam, FromQueryParam> {
    const [searchParams, setSearchParams] = useSearchParams();
    const [storedValue, setStoredValue] = useState<FromQueryParam>(() => {
        const paramValue = searchParams.get(key);
        const _fromQueryParam = fromQueryParam ?? ((value: string) => value as unknown as FromQueryParam);
        return paramValue !== null ? _fromQueryParam(paramValue) : defaultValue;
    });

    useEffect(() => {
        const paramValue = searchParams.get(key);
        const _fromQueryParam = fromQueryParam ?? ((value: string) => value as unknown as FromQueryParam);
        setStoredValue(paramValue !== null ? _fromQueryParam(paramValue) : defaultValue);
    }, [searchParams, key, fromQueryParam, defaultValue]);

    const _toQueryParam = toQueryParam ?? ((value: ToQueryParam) => value as unknown as string);

    const set = (value: ToQueryParam) => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set(key, _toQueryParam(value));
        setSearchParams(newParams);
    };

    const remove = () => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.delete(key);
        setSearchParams(newParams);
    };

    return { value: storedValue, set, remove };
}
