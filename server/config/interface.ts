export interface IUsers {
    name : string
    account : string
    password : string
}

export interface IToken extends IUsers {
    new_user : IUsers
    iat: number
    exp: number
}