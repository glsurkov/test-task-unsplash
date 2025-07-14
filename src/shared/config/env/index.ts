export const ENV = Object.freeze({
    WEBSOCKET_URL: parseString(import.meta.env.VITE_WEBSOCKET_URL, '<vite-api-not-in-env>'),
});

function parseString(str: string | undefined, def: null): string | null;
function parseString(str: string | undefined, def: string): string;
function parseString(str: string | undefined, def: string | null): string | null {
    return str || def;
}
