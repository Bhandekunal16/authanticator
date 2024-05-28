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
const Encryption = require("authanticator/src/Encryption");
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

### Javascript

```javascript
const binary = require("authanticator/src/binary");
new binary().convertToBinary(input);
```

### Convert binary string into the string

- **Functionality**: take binary input and convert it into the string.
- **Purpose**: take binary input and convert it into the string.

## Usage

### Typescript

```typescript
import {binary } from 'authanticator/main';
binary.convertToString(input: string): string;
```

### Javascript

```javascript
const binary = require("authanticator/src/binary");
new binary().convertToString(input);
```

# Hexadecimal conversion

### hexadecimal conversion

- **Functionality**: take input and convert that into hexadecimal format.
- **Purpose**: take input and convert that into hexadecimal format.

## Usage

### Typescript

```typescript
import { hexadecimal } from "authanticator/main";
hexadecimal.hexadecimalConvert(input: string): string;
```

### Javascript

```javascript
const Hexadecimal = require("authanticator/Hexadecimal");
new Hexadecimal().hexadecimalConvert(input);
```

# Hexadecimal to string conversion

### hexadecimal to string conversion

- **Functionality**: take hexadecimal input and convert that into normal format.
- **Purpose**: take hexadecimal input and convert that into normal format.

## Usage

### Typescript

```typescript
import { hexadecimal } from "authanticator/main";
hexadecimal.hexToString(input: string): string;
```

### Javascript

```javascript
const Hexadecimal = require("authanticator/Hexadecimal");
new Hexadecimal().hexToString(input);
```

# OctalDecimal Conversion

### OctalDecimal conversion

- **Functionality**: take input and convert that into OctalDecimal format.
- **Purpose**: take input and convert that into OctalDecimal format.

## Usage

### Typescript

```typescript
import { Octal_decimal } from "authanticator/main";
Octal_decimal.octal(input: string): string;
```

### Javascript

```javascript
const OctalDecimal = require("authanticator/OctalDecimal");
new OctalDecimal().octal(input);
```

### OctalDecimal to string conversion

- **Functionality**: take input OctalDecimal format and convert that into string.
- **Purpose**: take input OctalDecimal format and convert that into string.

## Usage

### Typescript

```typescript
import { Octal_decimal } from "authanticator/main";
Octal_decimal.octal(input: string): string;
```

### Javascript

```javascript
const OctalDecimal = require("authanticator/OctalDecimal");
new OctalDecimal().octal(input);
```
