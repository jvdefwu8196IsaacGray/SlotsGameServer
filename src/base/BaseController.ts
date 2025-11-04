import EventEmitter = require("events");

export class BaseController extends EventEmitter {
    static async init() {

    }

    static runTimes(callback: () => void, delay: number) {
        callback();
        setTimeout(callback, delay);
    }

}