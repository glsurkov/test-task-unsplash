/**
 * Округляет число до заданного количества знаков после запятой.
 * Если переданное значение не является числом, возвращает его без изменений.
 *
 * @param value - Значение типа V. Если это число, оно будет округлено.
 * @param decimals - Количество знаков после запятой для округления.
 * @returns Округленное число или исходное значение, если оно не является числом.
 */
export function roundTo<V>(value: V, decimals: number): V | number {
    if (typeof value === 'number') {
        const factor = Math.pow(10, decimals);
        return Math.round(value * factor) / factor;
    }
    return value;
}
