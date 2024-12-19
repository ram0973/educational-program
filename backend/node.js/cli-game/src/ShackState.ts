import {State} from "./State.ts";

class ShackState extends State {
    welcome: string;
    constructor() {
        super();
        this.welcome = "Вы сворачиваете налево, и тропинка выводит вас к небольшой хижине. Из окна виден тусклый свет, а дверь приоткрыта.";
    }
}

export { ShackState };