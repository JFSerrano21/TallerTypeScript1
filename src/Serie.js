"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
class Serie {
    constructor(id, name, channel, seasons, summary, url, image) {
        this._id = id;
        this._name = name;
        this._channel = channel;
        this._seasons = seasons;
        this._summary = summary;
        this._url = url;
        this._image = image;
    }
    // Me gusta mas tener los getters y setters para debugear
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get channel() {
        return this._channel;
    }
    set channel(channel) {
        this._channel = channel;
    }
    get seasons() {
        return this._seasons;
    }
    set season(seasons) {
        this._seasons = seasons;
    }
    set summary(summary) {
        this._summary = summary;
    }
    get summary() {
        return this._summary;
    }
    set url(url) {
        this._url = url;
    }
    get url() {
        return this._url;
    }
    set image(image) {
        this._image = image;
    }
    get image() {
        return this._image;
    }
}
exports.Serie = Serie;
