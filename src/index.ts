import * as UI from "./UI/UI";
import * as VueSetup from "./Vue/Setup";
import { VERSION } from "./Version";

console.log("Webina Web App " + VERSION);

VueSetup.setup();
UI.setup();
