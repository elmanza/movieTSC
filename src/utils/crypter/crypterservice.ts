import * as bcrypt from 'bcrypt';
import { config } from '../../config';

class Bcrypt {

    async comparePasswords (firstpass:any = "", secondpass:any = ""){
        try {
            return await bcrypt.compare(firstpass, secondpass)
        } catch (error) {
            console.log(error);
        }
    }

    async encryptPassword (plainPass:any){
        try {
            return await bcrypt.hash(plainPass, config.saltCrypt)
        } catch (error) {
            console.log(error);
        }
    }
}

export default new Bcrypt();