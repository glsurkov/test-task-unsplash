/* eslint-disable  @typescript-eslint/no-explicit-any */
type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T;
};
