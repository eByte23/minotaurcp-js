import "./src/actions/types";

import { Actions } from "./src/actions";
import { IMinotaur } from "./module";

const MinotaurImpl: IMinotaur = {
    Actions,
    Plugins: {
        init: function (plugin: any): void {
            throw new Error("Function not implemented.");
        }
    }
};


export const Minotaur = MinotaurImpl
