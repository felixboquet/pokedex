export class Pokemon {

  public id: string;
  public name: string;
  public imageSrc: string;
  public type: string[];

  constructor(id: string, name: string, imageSrc: string, type: string[]) {
    this.id = id;
    this.name = name;
    this.imageSrc = imageSrc;
    this.type = type;
  }
}
