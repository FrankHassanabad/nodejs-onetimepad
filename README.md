# nodejs-onetimepad

Example one time pad with ascii letters from a-z, all lower case. No spaces or capital letters to
keep the example very small and simple.

# install
```js
$ npm install
```

# Usages

Encrypt something small
```
npm start "hello" "xmckl" encrypt;
> encrypted is: eqnvz
```

Decrypt it back out
```
npm start "eqnvz" "xmckl" decrypt
> decrypted is: hello
```

Example of a deniable encryption double message

```
npm start "hello" "xmckl" encrypt
> encrypted is: eqnvz

npm start "jello" "xmckl" encrypt
> encrypted is: gqnvz
```

Now depending on if you give out the key of `eqnvz` you will get the decryption of `hello` vs if you
give out the key of `gqnvz` you will get the decryption of `jello`
