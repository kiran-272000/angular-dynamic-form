import { IRegForm } from "../../interface/registerForm.interface";

export const registerFormConfig:IRegForm = {
    formTitle: 'Registration Form',
    saveBtnTitle: 'Register',
    resetBtnTitle: 'Reset',
    formControls: [
        {
            "name": "firstName",
            "label": "FirstName",
            "value" : "",
            "placeholder": "First Name",
            "class" : "col-md-6 col-3",
            "type" : "text",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "*Firstname is required"
                }
            ] 
        },{
            "name": "lastName",
            "label": "LastName",
            "value" : "",
            "placeholder": "Last Name",
            "class" : "col-md-6 col-3",
            "type" : "password",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "*Lastname is required"
                }
            ] 
        },{
            "name": "email",
            "label": "Email",
            "value" : "",
            "placeholder": "Email",
            "class" : "col-md-4 col-3",
            "type" : "email",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "*Lastname is required"
                },
                {
                    "validatorName": "email",
                    "email": "email",
                    "message": "*Enter a valid Email"
                }
            ] 
        },
        {
            "name": "mobile",
            "label": "Mobile Number",
            "value" : "",
            "placeholder": "Mobile Number",
            "class" : "col-md-4 col-3",
            "type" : "text",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "*Number is required"
                },
                {
                    "validatorName": "maxlength",
                    "maxLength": 10,
                    "message": "*Enter Valid Phone Number"
                }
            ] 
        },
        {
            "name": "gender",
            "label": "Gender",
            "value" : "",
            "placeholder": "Gender",
            "class" : "col-md-4 col-3",
            "type" : "radio",
            "radioOptions": [
                "Male",
                "Female"
            ],
            "validators": [
                {
                    "validatorName": "required",
                    "message": "*Gender is required"
                }
            ] 
        },{
            "name": "sessions",
            "label": "Session",
            "value" : "",
            "placeholder": "Session",
            "class" : "col-md-4 col-3",
            "type" : "checkbox",
            "radioOptions": [
                "Morning",
                "Evening",
                "Night"
            ],
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "*Session is required"
                }
            ] 
        },
        {
            "name": "package",
            "label": "Package",
            "value" : null,
            "placeholder": "Package",
            "class" : "col-md-4 col-3",
            "type" : "select",
            "options":[
                {
                    "id": 1,
                    "value": 'Basic'
                },
                {
                    "id": 2,
                    "value": 'Premium'
                }
            ],
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "*Number is required"
                },
                {
                    "validatorName": "maxlength",
                    "maxLength": 10,
                    "message": "*Enter Valid Phone Number"
                }
            ] 
        }
    ]
}