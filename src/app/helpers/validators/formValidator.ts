import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";

export class FormValidator {

    formulario!: FormGroup;


    get nome() { return this.formulario.get('nome') }
    get login() { return this.formulario.get('login') }
    get email() { return this.formulario.get('email') }
    get senha() { return this.formulario.get('senha') }
    get dataNascimento() { return this.formulario.get('dataNascimento') }

    constructor(private formBuilder: FormBuilder) {

    }

    public validaFormulario() {
        this.formulario = this.formBuilder.group({
            nome: ['', Validators.maxLength(50)],
            email: ['', Validators.compose([Validators.minLength(10), Validators.email])],
            dataNascimento: [null],
            login: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(20)])],
            senha: ['', Validators.compose([Validators.minLength(4), Validators.maxLength(10)])]
        });
    }

    isBlank(control?: AbstractControl | null): boolean {
        return control?.errors?.['notBlank'];
    }

    isNotEmail(control?: AbstractControl | null): boolean {
        return control?.errors?.['email']
    }

    isInvalidLength(control?: AbstractControl | null): boolean {
        const errors = control?.errors
        return errors?.['minlength'] || errors?.['maxlength']
    }
}