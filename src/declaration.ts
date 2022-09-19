/**
 * @author WMXPY
 * @namespace MarkedMixinMathMonaco
 * @description Declaration
 */

// eslint-disable-next-line camelcase
import { New_Line_Character } from "@sudoo/marked";

export const MarkedMathMixinDeclaration: string = [

    `declare function abs(value: number): number;`,

    `declare function log(value: number): number;`,
    `declare function log10(value: number): number;`,
    `declare function log2(value: number): number;`,
    `declare function log1p(value: number): number;`,

    `declare function ceil(value: number): number;`,
    `declare function floor(value: number): number;`,
    `declare function round(value: number): number;`,

    `declare function sin(value: number): number;`,
    `declare function cos(value: number): number;`,
    `declare function tan(value: number): number;`,

    `declare function pow(value: number, power: number): number;`,
    `declare function sqrt(value: number): number;`,
].join(New_Line_Character);
