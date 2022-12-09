export function validateEmail(email: string): Boolean {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function validateName(name: string): Boolean {
  const re = /^[a-zA-Z ]{2,30}$/;
  return re.test(String(name).toLowerCase());
}

export function validateText(text: string): Boolean {
  const re = /^[a-zA-Z0-9 ]{2,30}$/;
  return re.test(String(text).toLowerCase());
}

export function validateTARUC(text: string): string {
  const re = /[^a-zA-Z0-9 ]/g;
  return text.replace(re, '');
}