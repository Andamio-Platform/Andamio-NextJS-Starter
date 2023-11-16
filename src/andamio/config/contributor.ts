import { PlutusScript } from '@meshsdk/core';
import contributorReferencePlutus from '../cardano/plutus/contrib-policy-1-validator1.json';
import contributorMinterPlutus from '../cardano/plutus/contributor-minting-validator.json';

export const contributorReference = {
  address: 'addr_test1wpnms2pxmljpgs9na2ycrcy50ppgk960m66hk7lkzhywj5sl9a7c7',
  cbor: contributorReferencePlutus.cborHex,
  referenceUTxOAddress:
    'addr_test1vpakkc8v888q46rjttea2jp9v4h4glu5lsml7pnmxvmpxzsdyrspf',
  referenceTxHash:
    '399cde338b4e7bbc3c2900370863663c3bc27ef3c34cc755ca77b80395043b9a',
  referenceTxIx: 0,
  referenceTxLovelace: '17076220',
};

const contributorMintingValidatorScript: PlutusScript = {
  version: 'V2',
  code: contributorMinterPlutus.cborHex,
};

export const contributorMinter = {
  plutusScript: contributorMintingValidatorScript,
  referenceUTxOAddress:
    'addr_test1vq7gvuwpnf0a8mv0ec05w78kkl2j9zydcgcvghj62fq405s99zt9h',
  referenceTxHash:
    'f99891621f20dcf1ac87cf04735a4d28c19df405954d2bae73d8ed0113ce2e6e',
  referenceTxIx: 0,
  referenceTxLovelace: '7158910',
};
