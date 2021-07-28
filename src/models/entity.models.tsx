export enum RESOURCES_TYPE {
    DOCUMENT = 'Document',
    LAB = 'Lab',
    QUIZ = 'Quiz',
    VIDEO = 'Video',
}

export enum QUESTION_TYPE {
    MULTIPLE = 'Multiple',
    SIMPLE = 'Simple',
}

export enum QUESTION_STATE {
    NORESPONSE = '',
    CORRECT = 'Correct',
    INCORRECT = 'Incorrect'
}

export interface ICard {
    title: string;
    subTitle: string;
}
export interface ICourse {
    id: number;
    name: string;
    children: IModule[]
}

export interface IModule {
    id: number;
    name: string;
    children: IResource[]
}

export interface IResource {
    children?: IQuestion[];
    id: number;
    name: string;
    type: RESOURCES_TYPE;
    url: string;
    module:string;
}

export interface IQuestion {
    id: number;
    question: string;
    type: QUESTION_TYPE;
    children: IAnswer[];
    state: QUESTION_STATE;
}

export interface IAnswer {
    id: number;
    answer: string;
    state: string;
    selected: boolean;
}
