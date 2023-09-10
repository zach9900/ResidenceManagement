import { Injectable } from "@nestjs/common";
import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";

const numbers = [
    '050',
    '052',
    '054',
    '053',
]

@ValidatorConstraint({ name: 'IsValidPhoneNumberConstraint', async: false })
@Injectable()
export class IsValidPhoneNumberConstraint implements ValidatorConstraintInterface {
    constructor() {}

    validate(value: any, validationArguments?: ValidationArguments): boolean {
        if (typeof value === 'string') {
            if ((value as string).length === 10) {
                if (numbers.find(number => number === (value as string).substring(0, 3))) {
                    return true;
                }
            }
        }

        return false;
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        return `${validationArguments.value} is not a valid phone number!`
    }
}

export function IsValidPhoneNumber(validationOptions?: ValidationOptions) {
    return function (obj: Object, propertyName: string) {
        registerDecorator({
            name: 'IsValidPhoneNumber',
            target: obj.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: IsValidPhoneNumberConstraint,
        })
    }
}