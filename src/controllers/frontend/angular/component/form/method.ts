import {
    MainInterface
} from "../../../../../interfaces/main";

export class CodeToAngularFormComponentMethod {
    customMethod = (object: MainInterface): string => {
        if (object.form) {
            const componentCode = `
                                ${object.form.id}Submit() {
                                    this._${object.form.id}Service
                                    .save(this.${object.form.id}Form.value)
                                    .then((res) => {
                                        this.isLoading = false;
                                    })
                                    .catch((err) => {
                                        this.isLoading = false;
                                        const message = this.errorHandler.apiErrorMessage(err.error.error.message);
                                        this._snackbar.open(message, undefined, {
                                            duration: 4 * 1000,
                                        });
                                    };
                                }
                                `;

            return componentCode;
        }

        return '';
    }
}