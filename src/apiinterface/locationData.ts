    export interface Info {
        count: number;
        pages: number;
        next: string;
        prev?: any;
    }

    export interface Result {
        id: number;
        name: string;
        type: string;
        dimension: string;
        residents: string[];
        url: string;
        created: Date;
    }

    export interface RootObject {
        info: Info;
        results: Result[];
    }

