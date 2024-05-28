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

```python
def encrypt(data: str, public_key: str) -> str:
    """
    Encrypts the given data using the provided public key.

    Parameters:
        data (str): The data to be encrypted.
        public_key (str): The public key used for encryption.

    Returns:
        str: The encrypted data.
    """
    # Your encryption logic here
    pass
```

### Decryption

Use the `decryption` function to decrypt your data with a public key.

```python
def decrypt(encrypted_data: str, public_key: str) -> str:
    """
    Decrypts the given encrypted data using the provided public key.

    Parameters:
        encrypted_data (str): The data to be decrypted.
        public_key (str): The public key used for decryption.

    Returns:
        str: The decrypted original data.
    """
    # Your decryption logic here
    pass
```

## Example

### Encryption Example

```python
public_key = "your_public_key_here"
data = "your_data_here"
encrypted_data = encrypt(data, public_key)
print(f"Encrypted Data: {encrypted_data}")
```

### Decryption Example

```python
public_key = "your_public_key_here"
encrypted_data = "your_encrypted_data_here"
decrypted_data = decrypt(encrypted_data, public_key)
print(f"Decrypted Data: {decrypted_data}")
```

## Notes

- Ensure that the public key used for encryption matches the private key used for decryption.
- The specific data pattern used in encryption and decryption should be consistently applied to maintain data integrity.
