import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";

export class FormValidator {

    formulario!: FormGroup;


    get titulo() { return this.formulario.get('titulo') }
    get descricao() { return this.formulario.get('descricao') }
    get conclusao() { return this.formulario.get('conclusao') }
    get selectedStatus() { return this.formulario.get('selectedStatus') }

    constructor(private formBuilder: FormBuilder) {

    }

    public validaFormulario() {
        this.formulario = this.formBuilder.group({
            titulo: ['', [Validators.maxLength(30), Validators.required]],
            descricao: ['', [Validators.minLength(5), Validators.required]],
            conclusao: ['', Validators.required],
            selectedStatus: [null]
        });
    }

    //         this.form = new FormGroup({
    //         conclusao: new FormControl(null, Validators.required),
    //         status: new FormControl(null, Validators.required),
    //         descricao: new FormControl(null, [Validators.required, Validators.maxLength(200)]),
    // })


}