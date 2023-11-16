import { EscrowConfig } from '@andamiojs/core';
import escrow1Decider1 from '../cardano/plutus/escrow1-decider1.json';
import escrow1Decider2 from '../cardano/plutus/escrow1-decider2.json';

export const escrows: EscrowConfig[] = [
  {
    name: 'escrow1-decider1',
    address: 'addr_test1wp0lzc6xjcedf7semzl7vtvgzmqrqwxnr9h0ld2phk7jhlqhmf4uh',
    cbor: escrow1Decider1.cborHex,
    contractTokenName:
      '5ff163469632d4fa19d8bfe62d8816c03038d3196effb541bdbd2bfc',
    deciderPolicyID: '594341d43558159f7dc8d66dc40a334969d199681ecbc21008e3ec88',
    referenceUTxOAddress:
      'addr_test1vqm5jscnmqsu0zwzhuaukkc625pd0wl59rgxncuj4l6nh7qr2me7c',
    referenceTxHash:
      '2704c1ff351945bcf3bea7baa9dd08dade1df112a7ec22df28321277a83ce42a',
    referenceTxIx: 0,
    referenceTxLovelace: '15334980',
  },
  {
    name: 'escrow1-decider2',
    address: 'addr_test1wzfjgjk0m7g6t664p9nr62wvgsf5tzkw43ajwktxurtrynselpxsq',
    cbor: escrow1Decider2.cborHex,
    contractTokenName:
      '93244acfdf91a5eb5509663d29cc4413458aceac7b275966e0d6324e',
    deciderPolicyID: 'bc61d5308e44491e52ceead5974aedca46b74c7f44b6493fb2722d53',
    referenceUTxOAddress:
      'addr_test1vzxex9634xg52n6cthahxdq7evr9hvjvx8cr33akkgtgtrqqhdg04',
    referenceTxHash:
      'e0cdce741f546d5c27150ef0823099971a728694bd2e8538c91830141fb7a180',
    referenceTxIx: 0,
    referenceTxLovelace: '15334980',
  },
];
