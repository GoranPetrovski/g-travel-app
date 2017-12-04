
enum Roles {
    DRIVER,
    PASSANGER
}

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    role: Roles;
}