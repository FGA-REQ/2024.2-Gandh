export class ClientProfileDTO {
    name: string;
    gmail: string;
    phone: string;
    fidelity: number;

    constructor(
        name: string,
        gmail: string,
        phone: string,
        fidelity: number
    ) {
        this.name = name;
        this.gmail = gmail;
        this.phone = phone;
        this.fidelity = fidelity;
    }
}