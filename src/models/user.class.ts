type UserType =  'registered' | 'anonymous' | 'paying';

export interface User {
    login: boolean;
    id: string;
    userName: string;
    firstName: string;
    lastName: string;
    emailStatus: string;
    userType: UserType;
    premiumArticlesCount: string;
}