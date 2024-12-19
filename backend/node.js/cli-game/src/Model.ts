import {State} from "./State.ts";

/**
 * Контекст определяет интерфейс, представляющий интерес для клиентов. Он также
 * хранит ссылку на экземпляр подкласса Состояния, который отображает текущее
 * состояние Контекста.
 */
class Model {
    state: State;

    constructor(state: State) {
        this.state = state;
    }

    /**
     * Контекст позволяет изменять объект Состояния во время выполнения.
     */
    public transitionTo(state: State): void {
        console.log(`Model: Transition to ${(<any>state).constructor.name}.`);
    }
}

export { Model }