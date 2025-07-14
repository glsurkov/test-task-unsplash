export function getSearchParam(param: string): string | null {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(param);
}
