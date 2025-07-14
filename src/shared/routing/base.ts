// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PathParams<TPath extends string, TParamsMap extends Record<TPath, any>> = TParamsMap;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GetPaths<TPaths extends Record<string, any>> = {
    [K in keyof TPaths]: TPaths[K] extends null ? () => string : (params: TPaths[K]) => string;
};
