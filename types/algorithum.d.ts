export = Encryption;

declare class Encryption {
  encrypt(publicKey: string, data: any): Object;
  decrypt(publicKey: string, data: any): Object;
}
