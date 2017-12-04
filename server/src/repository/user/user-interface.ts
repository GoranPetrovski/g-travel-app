enum Roles {
    DRIVER,
    PASSANGER
}

interface User {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    role: Roles;
}

export = User;