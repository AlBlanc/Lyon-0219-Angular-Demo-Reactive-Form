import { AbstractControl, ValidationErrors } from '@angular/forms';

const alphaNumRegex = new RegExp(`[a-zA-Z0-9]`, '').compile();
const specialRegex = new RegExp(`[!@$%]`, '').compile();

export function wildPasswordValidator(control: AbstractControl): ValidationErrors | null {
    let errors = {};

    let password = control.value as string;

    if (password && password.length < 8) {
        errors['minlength'] = false;
    }

    console.log(`Mot de passe ${password}`);
    if (!(new RegExp(`[a-zA-Z0-9]`, '').exec(password))){
        errors['noAlphaNum'] = null;
    }

    if (!(new RegExp(`[!@$%]`, '').exec(password))){
        errors['noSpecial'] = null;
    }

    return errors ? errors : null;
}

