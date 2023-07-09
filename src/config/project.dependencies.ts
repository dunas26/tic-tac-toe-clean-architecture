import { globalContainer } from "./inversify.config";
import { AppController } from "../controllers";
import { Container } from "inversify";
import { StartNewGame } from "../usecases";

type Constructor = new (...args: any[]) => any;

function dependOn<T extends Constructor>(object: T, container: Container = globalContainer) {
    const token = object.name;
    return container.bind(token).to(object);
}

export const buildDependencies = () => {
    dependOn(AppController);
    dependOn(StartNewGame);
}

export const dependency = <T extends Constructor>(
    object: T, container: Container = globalContainer
): InstanceType<T> | undefined => {
    const token = object.name;
    return container.get(token);
}