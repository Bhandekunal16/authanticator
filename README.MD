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

Use the `encrypt` function to encrypt your data with a public key.

#### Typescript

```typescript
import { Encryption } from 'authanticator/main';
Encryption.encrypt(publicKey: string, data: any): Object;
```

#### Javascript

```javascript
const Encryption = require("authanticator/Encryption");
new Encryption().encrypt(publicKey, data);
```

### Decryption

Use the `decrypt` function to decrypt your data with a public key.

#### Typescript

```typescript
import { Encryption } from 'authanticator/main';
Encryption.decrypt(publicKey: string, data: any): Object;
```

#### Javascript

```javascript
const Encryption = require("authanticator/src/Encryption");
new Encryption().decrypt(publicKey, data);
```

## Notes

- Ensure that the public key used for encryption matches the private key used for decryption.
- The specific data pattern used in encryption and decryption should be consistently applied to maintain data integrity.

## Binary Conversion

### Convert to Binary

- **Functionality**: Converts input into binary format.
- **Purpose**: Transforms data into a binary representation.

#### Typescript

```typescript
import { binary } from 'authanticator/main';
binary.convertToBinary(input: string): string;
```

#### Javascript

```javascript
const binary = require("authanticator/src/binary");
new binary().convertToBinary(input);
```

### Convert Binary to String

- **Functionality**: Converts binary input into a string.
- **Purpose**: Transforms binary data back into its original string format.

#### Typescript

```typescript
import { binary } from 'authanticator/main';
binary.convertToString(input: string): string;
```

#### Javascript

```javascript
const binary = require("authanticator/src/binary");
new binary().convertToString(input);
```

## Hexadecimal Conversion

### Convert to Hexadecimal

- **Functionality**: Converts input into hexadecimal format.
- **Purpose**: Transforms data into a hexadecimal representation.

#### Typescript

```typescript
import { hexadecimal } from "authanticator/main";
hexadecimal.hexadecimalConvert(input: string): string;
```

#### Javascript

```javascript
const Hexadecimal = require("authanticator/src/Hexadecimal");
new Hexadecimal().hexadecimalConvert(input);
```

### Convert Hexadecimal to String

- **Functionality**: Converts hexadecimal input into a string.
- **Purpose**: Transforms hexadecimal data back into its original string format.

#### Typescript

```typescript
import { hexadecimal } from "authanticator/main";
hexadecimal.hexToString(input: string): string;
```

#### Javascript

```javascript
const Hexadecimal = require("authanticator/src/Hexadecimal");
new Hexadecimal().hexToString(input);
```

## Octal Conversion

### Convert to Octal

- **Functionality**: Converts input into octal format.
- **Purpose**: Transforms data into an octal representation.

#### Typescript

```typescript
import { Octal_decimal } from "authanticator/main";
Octal_decimal.octal(input: string): string;
```

#### Javascript

```javascript
const OctalDecimal = require("authanticator/src/OctalDecimal");
new OctalDecimal().octal(input);
```

### Convert Octal to String

- **Functionality**: Converts octal input into a string.
- **Purpose**: Transforms octal data back into its original string format.

#### Typescript

```typescript
import { Octal_decimal } from "authanticator/main";
Octal_decimal.octalToString(input: string): string;
```

#### Javascript

```javascript
const OctalDecimal = require("authanticator/src/OctalDecimal");
new OctalDecimal().octalToString(input);
```

## Scientific Notation Conversion

### Convert to Scientific Notation

- **Functionality**: Converts input into scientific notation format.
- **Purpose**: Transforms data into scientific notation for compact representation.

#### Typescript

```typescript
import { ScientificNotation } from "authanticator/main";
ScientificNotation.convertToScientificNotation(input: string): string;
```

#### Javascript

```javascript
const scientificNotation = require("authanticator/src/scientificNotation");
new scientificNotation().convertToScientificNotation(input);
```
# Dependent on
### axios
### Robotic JS