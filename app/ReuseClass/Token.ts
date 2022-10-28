import jwt, { JwtPayload } from 'jsonwebtoken'

import { RegisterRequest } from 'App/ReuseInterfaces/AuthInterface'

class Token {
  public async createToken (userData: RegisterRequest): Promise<string> {
    const token = jwt.sign(userData, `process.env.TOKENSECRET`, { expiresIn: "10h" })
    return token
  }
  public async verifyToken (token: string) : Promise<string|JwtPayload> {
    const isPass = jwt.verify(token, `process.env.TOKENSECRET`)
    return isPass
  }
}

export default new Token()
