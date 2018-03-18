const encrypt = (
  string1: string,
  string2: string,
): string => {
  const stringArray1: ReadonlyArray<string> = Array.from(string1);
  const stringArray2: ReadonlyArray<string> = Array.from(string2);

  return stringArray1.map((charVal, index) => {
    const code1 = charVal.charCodeAt(0) - 97;
    const code2 = stringArray2[index].charCodeAt(0) - 97;
    return String.fromCharCode(((code1 + code2) % 26) + 97);
  }).join('');
};

const minusModulus = (code1: number, code2: number) => {
  const modMinus = (code1 - code2) % 26;
  if (modMinus < 0) {
    return modMinus + 26;
  } else {
    return modMinus;
  }
};

const decrypt = (
  string1: string,
  string2: string,
): string => {
  const stringArray1: ReadonlyArray<string> = Array.from(string1);
  const stringArray2: ReadonlyArray<string> = Array.from(string2);

  return stringArray1.map((charVal, index) => {
    const code1 = charVal.charCodeAt(0) - 97;
    const code2 = stringArray2[index].charCodeAt(0) - 97;
    const mod = minusModulus(code1, code2);
    return String.fromCharCode(mod + 97);
  }).join('');
};

const encryptDecrypt = process.argv[2];
const oneTimePad = process.argv[3];
const mode = process.argv[4];
if (encryptDecrypt == null || oneTimePad == null) {
  console.log('Usage is npm start <messageToEncrypt> <one-time-pad> encrypt');
  console.log('- or - ');
  console.log('Usage is npm start <messageToDecrypt> <one-time-pad> decrypt');
  console.log('');
  console.log('Example to encrypt/decrypt dog against one-time-pad of efg');
  console.log('npm start "hello" "xmckl" encrypt');
  console.log('> encrypted is: eqnvz');
  console.log('npm start "eqnvz" "xmckl" decrypt');
  console.log('> decrypted is: hello');
  console.log('');
  console.log('Example to encrypt/decrypt a deniable encrypted double message');
  console.log('npm start "hello" "xmckl" encrypt');
  console.log('> encrypted is: eqnvz');
  console.log('npm start "jello" "xmckl" encrypt');
  console.log('> encrypted is: gqnvz');
  process.exit(0);
}

if (encryptDecrypt.length !== oneTimePad.length) {
  console.log('Strings must be of the same length');
  process.exit(0);
}

if (mode === 'decrypt') {
  console.log('decrypted is:',
    decrypt(encryptDecrypt, oneTimePad),
  );
} else {
  console.log('encrypted is:',
    encrypt(encryptDecrypt, oneTimePad),
  );
}
