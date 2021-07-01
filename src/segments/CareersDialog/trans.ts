// Here we define translations for the component.

import { TTransPreset } from '@/utils/translations';

const translations = (preset: TTransPreset) => ({
  careers: preset.carrers,

  title: {
    en_US: `Careers at Assembless`,
    de_DE: `Meeting vereinbaren`,
    pl_PL: `Ustal spotkanie`,
  },

  subtitle: {
    en_US: ` Working at Assembless is an amazing opportunity to develop in various directions in the IT world.\nIf you would like to join a group of ambitious and creative people and grow with them, please contact us !`,
    de_DE: `Meeting vereinbaren`,
    pl_PL: `Ustal spotkanie`,
  },
});

export default translations;
