// Here we define translations for the component.

import { TTransPreset } from '@/utils/translations';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const translations = (preset: TTransPreset) => ({
  services: preset.services,
  aboutUs: preset.aboutUs,
  deliver: preset.deliver,
  contactUs: preset.contactUs,
});

export default translations;
