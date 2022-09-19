/**
 * @author WMXPY
 * @namespace MarkedMixinMathMonaco
 * @description Declaration
 */

export const MarkedMathMixinDeclaration: Record<string, string> = {

    abs: "(value: number) => number",

    log: "(value: number) => number",
    log10: "(value: number) => number",
    log2: "(value: number) => number",
    log1p: "(value: number) => number",

    ceil: "(value: number) => number",
    floor: "(value: number) => number",
    round: "(value: number) => number",

    sin: "(value: number) => number",
    cos: "(value: number) => number",
    tan: "(value: number) => number",

    pow: "(value: number, power: number) => number",
    sqrt: "(value: number) => number",

    max: "(...values: number[]) => number",
    min: "(...values: number[]) => number",

    random: "(min: number, max: number) => number",
};
