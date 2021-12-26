import { SignUpController } from '../../presentation/controllers/signup/signup'
import { EmailValidatorAdapter } from '../../utils/email-validator-adapter'
import { DdAddAccount } from '../../data/usecases/add-account/db-add-account'
import { BcryptAdapter } from '../../infra/criptography/bcrypt-adapter'
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account'

export const makeSignUpController = (): SignUpController => {
  const salt = 12
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository(salt)
  const dDAddAccount = new DdAddAccount(bcryptAdapter, accountMongoRepository)
  return new SignUpController(emailValidatorAdapter, dDAddAccount)
}
