import { QueryProps, QueryReturned } from './types';

/**
 * Функция для работы с query-параметрами вне компонента.
 * Изменяет URL через pushState и затем вручную диспатчит событие popstate,
 * чтобы React Router отреагировал на изменение.
 */
export function createSearchParam<ToQueryParam, FromQueryParam>({
    key,
    toQueryParam,
    fromQueryParam,
    defaultValue,
}: QueryProps<ToQueryParam, FromQueryParam>): QueryReturned<ToQueryParam, FromQueryParam> {
    const _toQueryParam = toQueryParam ?? ((value: ToQueryParam) => value as unknown as string);
    const _fromQueryParam = fromQueryParam ?? ((value: string) => value as unknown as FromQueryParam);

    let storedValue: FromQueryParam;
    try {
        const searchParam = new URLSearchParams(window.location.search);
        const paramValue = searchParam.get(key);
        storedValue = paramValue !== null ? _fromQueryParam(paramValue) : defaultValue;
    } catch {
        storedValue = defaultValue;
    }

    function set(value: ToQueryParam) {
        const url = new URL(window.location.href);
        url.searchParams.set(key, _toQueryParam(value));
        window.history.pushState({}, '', url.toString());
        window.dispatchEvent(new PopStateEvent('popstate'));
    }

    function remove() {
        const url = new URL(window.location.href);
        url.searchParams.delete(key);
        window.history.pushState({}, '', url.toString());
        window.dispatchEvent(new PopStateEvent('popstate'));
    }

    function get(): FromQueryParam {
        const searchParam = new URLSearchParams(window.location.search);
        const paramValue = searchParam.get(key);
        return paramValue !== null ? _fromQueryParam(paramValue) : defaultValue;
    }

    return { value: storedValue, set, remove, get };
}
