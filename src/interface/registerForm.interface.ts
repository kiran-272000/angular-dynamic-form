export interface IRegForm {
    formTitle: string;
    formControls: IFormControl[];
    saveBtnTitle: string;
    resetBtnTitle: string;
}

export interface IFormControl {
    name: string
    label?: string
    value?: string | null
    options?: IOptions[]
    radioOptions?: string[]
    placeholder?: string
    class?: string
    type: string
    validators?: IValidator[]
}

export interface IValidator {
    validatorName?: string
    message?: string
    required?: boolean
    pattern?: string
    minLength?: number
    maxLength?: number
    email?: string
}

interface IOptions{
    id?: number;
    value?: string; 
}