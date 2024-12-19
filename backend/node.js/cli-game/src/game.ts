import {Model} from "./Model.ts";
import {View} from "./View.ts";
import {StartState} from "./StartState.ts";
import {ActionsController} from "./ActionsController.ts";
import {ShackState} from "./ShackState.ts";

const model: Model = new Model(new StartState());
const view: View = new View();
const actionsController: ActionsController = new ActionsController(view);

actionsController.showInitialWelcome();
actionsController.goFromStartToTheLeft(model);
