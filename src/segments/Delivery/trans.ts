// Here we define translations for the component.
import { TTransPreset } from '@/utils/translations';

const translations = (preset: TTransPreset) => ({
  subTitle: {
    en_US: `We give our best\nto create better software`,
    de_DE: `We give our best\nto create better software`,
    pl_PL: `We give our best\nto create better software`,
  },

  deliver: preset.deliver,
});

export default translations;
