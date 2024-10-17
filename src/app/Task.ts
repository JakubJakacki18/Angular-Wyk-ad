export class Task {
    public static categories: string[] = ['dom', 'praca', 'wypoczynek'];

    public get $category(): string {
        return this.category;
    }

    public set $category(value: string) {
        const ind: number = Task.categories.indexOf(value);
        if (ind !== -1) { this.category = Task.categories[ind]; } else { this.category = Task.categories[0]; }
    }

    public get $name(): string {
        return this.name;
    }

    public set $name(value: string) {
        this.name = value;
    }

    public get $done(): boolean {
        return this.done;
    }

    public set $done(value: boolean) {
        this.done = value;
    }

    constructor(private name: string, private done: boolean, private category: string) {
    }


}
