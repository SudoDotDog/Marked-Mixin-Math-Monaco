/**
 * @author WMXPY
 * @namespace MarkedMixinMathMonaco
 * @description Factory
 */

import { MarkedMonacoExportsMixinFactory } from "@sudoo/marked-monaco-mixin";
import { MarkedMathMixinDeclaration } from "./declaration";

export const markedMathMonacoMixinFactory =
    MarkedMonacoExportsMixinFactory.fromExports(
        "marked-mixin-math",
        MarkedMathMixinDeclaration,
    );
