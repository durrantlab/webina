import * as NumericInput from "../UI/Forms/NumericInput";
import * as CheckBox from "../UI/Forms/CheckBox";
import * as FileInput from "../UI/Forms/FileInput";
import * as VinaParams from "../UI/Tabs/VinaParams";
import * as VinaRunning from "../UI/Tabs/VinaRunning";
import * as VinaOutput from "../UI/Tabs/VinaOutput";
import * as VinaExistingOutput from "../UI/Tabs/VinaExistingOutput"
import * as StartOver from "../UI/Tabs/StartOver";
import * as FormGroup from "../UI/Forms/FormGroup";
import * as ThreeDMol from "../UI/ThreeDMol";
import * as TripleNumeric from "../UI/Forms/TripleNumeric";
import * as ResultsTable from "../UI/ResultsTable";
import * as OpenModal from "../UI/OpenModal";
import * as SubSection from "../UI/SubSection";
import * as VinaCommandline from "../UI/VinaCommandline";
import * as FormButton from "../UI/Forms/FormButton";

declare var Vue;
declare var Vuex;
declare var BootstrapVue;
declare var jQuery;

export function setup(): void {
    Vue.use(BootstrapVue)
    Vue.use(Vuex)

    SubSection.setup();
    FormButton.setup();
    VinaCommandline.setup();
    OpenModal.setup();
    FormGroup.setup();
    ThreeDMol.setup();
    NumericInput.setup();
    TripleNumeric.setup();
    CheckBox.setup();
    FileInput.setup();
    ResultsTable.setup();
    VinaParams.setup();
    VinaRunning.setup();
    VinaOutput.setup();
    StartOver.setup();
    VinaExistingOutput.setup();
}
