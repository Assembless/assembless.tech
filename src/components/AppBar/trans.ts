// Here we define translations for the component.

import { TTransPreset } from '@/utils/translations';

const translations = (preset: TTransPreset) => ({
  title: {
    en_US: `Example`,
    de_DE: `Beispiel`,
    pl_PL: `Przykład`,
  },

  services: preset.services,
  aboutUs: preset.aboutUs,
  deliver: preset.deliver,
  contactUs: preset.contactUs,
});

export default translations;
