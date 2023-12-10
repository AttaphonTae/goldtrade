interface FormQuestion {
    id:string;
    question:string;
    choices:string[];
    note:string;
    type:string;
}
interface FormAnswer {
    id:string;
    answer:string;
    choices: number[];
}