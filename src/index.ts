// This file is part of Webina, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2019 Jacob D. Durrant.


import * as UI from "./UI/UI";
import * as VueSetup from "./Vue/Setup";
import { VERSION } from "./Version";

console.log("Webina Web App " + VERSION);

VueSetup.setup();
UI.setup();
