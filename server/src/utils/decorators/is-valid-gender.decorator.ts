import { Injectable } from "@nestjs/common";
import { Genders } from "@utils/enums";
import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";

@ValidatorConstraint({ name: 'IsValidGenderConstraint', async: false })
@Injectable()
export class IsValidGenderConstraint implements ValidatorConstraintInterface {
    constructor() {}

    validate(gender?: any, validationArguments?: ValidationArguments): boolean {
        if (gender === undefined || gender === null) return true;
        if (!Genders.isValidGender(gender)) return false;
        else return true;
    }

    defaultMessage(args: ValidationArguments): string {
        return `${args.value} is not a valid gender. Choose only from those values: ${Genders.gendersValues()}`;
    }
}

export function IsValidGender(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'IsValidGender',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: IsValidGenderConstraint,
        })
    }
}