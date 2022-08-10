import { UnionToIntersection } from '../typescript';
import { WalletAccount } from '../wallet';
import { DecryptFeature } from './decrypt';
import { EncryptFeature } from './encrypt';
import { SignAndSendTransactionFeature } from './signAndSendTransaction';
import { SignMessageFeature } from './signMessage';
import { SignTransactionFeature } from './signTransaction';
import { SignTransactionOnlyFeature } from './signTransactionOnly';

export * from './decrypt';
export * from './encrypt';
export * from './signAndSendTransaction';
export * from './signMessage';
export * from './signTransaction';
export * from './signTransactionOnly';

/** TODO: docs */
export type Feature =
    | SignTransactionFeature
    | SignTransactionOnlyFeature
    | SignAndSendTransactionFeature
    | SignMessageFeature
    | EncryptFeature
    | DecryptFeature;

/** TODO: docs */
export type Features = UnionToIntersection<Feature>;

/** TODO: docs */
export type FeatureNames = keyof Features;

/** TODO: docs */
export type WalletAccountFeatures<Account extends WalletAccount> = UnionToIntersection<Account['features']>;

/** TODO: docs */
export type WalletAccountFeatureNames<Account extends WalletAccount> = keyof WalletAccountFeatures<Account>;

/** TODO: docs */
export type WalletAccountNonstandardFeatures<Account extends WalletAccount> = UnionToIntersection<
    Account['nonstandardFeatures']
>;

/** TODO: docs */
export type WalletAccountNonstandardFeatureNames<Account extends WalletAccount> =
    keyof WalletAccountNonstandardFeatures<Account>;