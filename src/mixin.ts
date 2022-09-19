/**
 * @author WMXPY
 * @namespace MarkedMixinMathMonaco
 * @description Mixin
 */

import { IMarkedMonacoManager, MarkedMonacoMixin } from "@sudoo/marked-monaco";

export const createProvideMarkedMathMixin = (): MarkedMonacoMixin => {

    return (manager: IMarkedMonacoManager) => {

        const languageServer = manager.getLanguageServerDefaults();

        return;
    };
};

export const createInjectMarkedMathMixin = (): MarkedMonacoMixin => {

    return (manager: IMarkedMonacoManager) => {

        const languageServer = manager.getLanguageServerDefaults();

        return;
    };
};
