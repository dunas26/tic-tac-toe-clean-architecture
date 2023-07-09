import * as Vue from "vue";
import { AppController } from "../controllers";

type Constructor = new(...args: any[]) => any;

export const buildDependencies = (app: Vue.App) => {
    app.provide(AppController.name, new AppController());
}

export const vueDependency = <T extends Constructor>(
    object: T
): InstanceType<T> | undefined => {
    return Vue.inject<T>(object.name) as InstanceType<T>;
}