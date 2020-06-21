// 
interface CreateUserData {
    name?: string;
    email: string;
    password: string;
    languages: string[];
    techs: Array<string | TechObject>; //we can use more than one type

}

interface TechObject {
    title: string;
    experience: number;
}

export default function createUser( { name= '', email , password }: CreateUserData ) {
    const user = {
        name,
        email,
        password
    }

    return user;

}

