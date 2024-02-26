import { registerWallet } from './register.js';
import { SplCardsWallet } from './wallet.js';
import type { SplCards } from './window.js';

export function initialize(splCards: SplCards): void {
    registerWallet(new SplCardsWallet(splCards));
}
