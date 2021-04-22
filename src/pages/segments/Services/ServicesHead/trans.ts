// Here we define translations for the component.
import { TTransPreset } from '@/utils/translations';

const translations = (preset: TTransPreset) => ({
  subTitleLine1: {
    en_US: `See what we`,
    de_DE: `See what we`,
    pl_PL: `See what we`,
  },

  subTitleLine2: {
    en_US: `can do for your business`,
    de_DE: `can do for your business`,
    pl_PL: `can do for your business`,
  },

  services: preset.services,
});

export default translations;
