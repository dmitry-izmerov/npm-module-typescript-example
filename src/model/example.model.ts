export class ExampleModel {
    constructor(private name: string) {}

    hi(): void {
        console.log(`hi ${this.name}`);
    }
}
