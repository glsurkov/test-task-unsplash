export type ToQueryParamFn<T> = T extends string
    ? { toQueryParam?: (value: T) => string }
    : { toQueryParam: (value: T) => string };

export type FromQueryParamFn<U> = U extends string
    ? { fromQueryParam?: (value: string) => U }
    : { fromQueryParam: (value: string) => U };

export type QueryProps<ToQueryParam, FromQueryParam> = {
    key: string;
    defaultValue: FromQueryParam;
} & ToQueryParamFn<ToQueryParam> &
    FromQueryParamFn<FromQueryParam>;

export interface QueryReturned<ToQueryParam, FromQueryParam> {
    value: FromQueryParam;
    set: (value: ToQueryParam) => void;
    remove: () => void;
    get: () => FromQueryParam;
}
