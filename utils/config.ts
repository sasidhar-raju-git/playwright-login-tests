import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  baseUrl: process.env.BASE_URL as string,
  validUsername: process.env.VALID_USERNAME as string,
  validPassword: process.env.VALID_PASSWORD as string,
  invalidUsername: process.env.INVALID_USERNAME as string,
  invalidPassword: process.env.INVALID_PASSWORD as string,
};