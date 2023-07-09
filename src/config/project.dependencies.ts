import { globalContainer } from "./inversify.config";
import { Container } from "inversify";
import { StartNewGame } from "../application/usecases";
import { AppController } from "../infrastructure/controllers";
import { BoardPersistency } from "../infrastructure/persistency/board.persistency";

type Constructor = new (...args: any[]) => any;

function dependOnClass<T extends Constructor>(object: T, container: Container = globalContainer) {
    const token = object.name;
    return container.bind(token).to(object);
}

function dependOnInterface<T extends Constructor>(objectName: string, target: T, container: Container = globalContainer) {
    const token = objectName;
    return container.bind(token).to(target);
}

export const buildDependencies = () => {
    dependOnClass(AppController);
    dependOnClass(StartNewGame);
    dependOnInterface('BoardRepository', BoardPersistency);
}

export const dependency = <T extends Constructor>(
    object: T, container: Container = globalContainer
): InstanceType<T> | undefined => {
    const token = object.name;
    return container.get(token);
}