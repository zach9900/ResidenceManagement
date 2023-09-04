export enum Genders {
    Male = 'MALE',
    Female = 'FEMALE',
}

export namespace Genders {
    type RolesValue = (Genders | (() => (Genders | typeof gendersValues | ((given: any) => boolean) | (() => any))[]) | ((given: any) => boolean) | (() => any));
    type RolesValues = RolesValue[];

    function isUpperCase(firstLetter: string) {
        return firstLetter === firstLetter.toUpperCase();
    }

    export function gendersKey(): string[] {
        return Object.keys(Genders).filter((key: string) => isUpperCase(key[0]));
    }

    export function gendersValues(): RolesValues {
        return Object.values(Genders).filter((value: RolesValue) => typeof value === "string");
    }

    export function isValidGender(given: any): boolean {
        return gendersValues().includes(given);
    }
}