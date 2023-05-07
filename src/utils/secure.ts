import bcrypt from "bcrypt";
import emailValidator from "email-validator";
import { passwordStrength } from "check-password-strength";
import normalizeEmail from "normalize-email";

export function isPasswordSecure(password: string): boolean  {
  return passwordStrength(password).id >= 2;
}

export function validateEmail(email: string): string | false {
  if (!emailValidator.validate(email)) {
    return false;
  }
  return normalizeEmail(email);
}