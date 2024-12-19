import {State} from "./State.ts";

class StartState extends State {
    welcome: string;
    constructor() {
        super();
        this.welcome = "Start State";
    }
}

export { StartState };