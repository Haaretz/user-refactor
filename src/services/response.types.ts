type HtzResponseType = 'login'|'contact' |'register';
interface Iresoponse {
    type: HtzResponseType;
    data: {}

}
type LoginData = string[];

interface LoginResponse extends Iresoponse {
    type: 'login',
    data: LoginData;
}
