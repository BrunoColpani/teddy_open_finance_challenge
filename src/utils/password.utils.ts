import { compare, hash } from 'bcrypt';

const SALT_ROUNDS = 10;
/**
 * Gera o hash de uma senha usando bcrypt.
 *
 * @param {string} password - A senha a ser hashada.
 * @returns {Promise<string>} O hash da senha.
 * @async
 * @example
 * const hashedPassword = await generateHash('minhaSenha123');
 */
export const generateHash = async (password: string): Promise<string> => {
  const hashedPassword = await hash(password, SALT_ROUNDS);
  return hashedPassword;
};

/**
 * Compara uma senha com seu hash correspondente usando bcrypt.
 *
 * @param {string} password - A senha a ser comparada.
 * @param {string} hashedPassword - O hash da senha armazenada.
 * @returns {Promise<boolean>} `true` se as senhas coincidirem, `false` caso contrário.
 * @async
 * @example
 * const isMatch = await comparePassword('minhaSenha123', 'hashDaSenhaArmazenada');
 */
export const comparePassword = async (
  password: string,
  hashedPassword: string,
): Promise<boolean> => {
  const isMatch = await compare(password, hashedPassword);
  return isMatch;
};
