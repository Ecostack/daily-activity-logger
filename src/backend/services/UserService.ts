import * as bcrypt from 'bcrypt';
export class UserService {
    public static generateHash(password: string) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
    }

    public static validPassword(password: string, userPassword: string) {
        return bcrypt.compareSync(password, userPassword);
    };
}