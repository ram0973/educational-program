import {Model} from "./Model.ts";
import {ShackState} from "./ShackState.ts";
import {View} from "./View.ts";

class ActionsController {
    private view: View;
    constructor(private readonly view: View) {
        this.view = view;
    }

    public showInitialWelcome(): void {
        this.view.write("Вы просыпаетесь в центре густого леса, окруженного туманом. " +
            "Единственный звук, который вы слышите, — это ветер, шелестящий в листве деревьев. " +
            "Перед вами две тропинки. Одна ведет направо, другая — налево.\n" +
            "1. Пойти налево.\n2. Пойти направо");
    }

    public goFromStartToTheLeft(model: Model): void {
        model.transitionTo(new ShackState());
        this.view.write(model.state.welcome);
    }
}

export { ActionsController };