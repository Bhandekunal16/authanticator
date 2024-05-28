# Encryption Tool README

## Features

### Encryption

- **Functionality**: Encrypts data using a public key and a specific data pattern.
- **Purpose**: Ensures that the data can only be decrypted by the corresponding private key.

### Decryption

- **Functionality**: Decrypts data using a public key and a specific data pattern.
- **Purpose**: Allows the retrieval of the original data that was encrypted with the corresponding public key.

## Usage

### Encryption

Use the `encryption` function to encrypt your data with a public key.

### Typescript

```typescript
  import {Encryption } from 'authanticator/main';
  Encryption.encrypt(publicKey: string, data: any): Object;
```

### Javascript

```javascript
const Encryption = require("authanticator/Encryption");
new Encryption().encrypt(publicKey, data);
```

### Decryption

Use the `decryption` function to decrypt your data with a public key.

### Typescript

```typescript
import {Encryption } from 'authanticator/main';
Encryption.decrypt(publicKey: string, data: any): Object;
```

### Javascript

```javascript
const Encryption = require("authanticator/Encryption");
new Encryption().decrypt(publicKey, data);
```

## Notes

- Ensure that the public key used for encryption matches the private key used for decryption.
- The specific data pattern used in encryption and decryption should be consistently applied to maintain data integrity.

# Binary conversion

### Convert to the binary

- **Functionality**: take input and convert that into binary format.
- **Purpose**: take input and convert that into binary format.

## Usage

### Typescript

```typescript
import {binary } from 'authanticator/main';
binary.convertToBinary(input: string): string;
```
