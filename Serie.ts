export class Serie {

    _id: number;
    _name: string;
    _channel: string;
    _seasons: number;
    _summary: string;
    _url: string;
    _image: string;

    constructor(id:number, name: string, channel: string, seasons: number, summary : string, url: string, image: string) {

        this._id = id
        this._name = name;
        this._channel = channel;
        this._seasons = seasons;
        this._summary = summary;
        this._url = url;
        this._image = image;
    }
    // Me gusta mas tener los getters y setters para debugear
    public get name () {
        return this._name;
      }
    public set name (name: string) {
        this._name = name;
    }

    get id () {
        return this._id;
      }
    set id (id: number) {
        this._id = id;
    }

    get channel () {
        return this._channel;
      }
    set channel (channel: string) {
        this._channel = channel;
    }

    get seasons () {
        return this._seasons;
      }
    set season (seasons: number) {
        this._seasons = seasons;
    }

    set summary (summary: string) {
        this._summary = summary;
    }
    get summary () {
        return this._summary;
    }
    
    set url (url: string) {
        this._url = url;
    }
    
    get url () {
        return this._url;
    }

    set image (image: string) {
        this._image = image;
    }

    get image() {
        return this._image;
    }

}