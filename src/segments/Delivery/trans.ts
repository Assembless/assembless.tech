// Here we define translations for the component.
import { TTransPreset } from '@/utils/translations';

const translations = (preset: TTransPreset) => ({
  subTitle: {
    en_US: `We give our best\nto create better software`,
    de_DE: `We give our best\nto create better software`,
    pl_PL: `We give our best\nto create better software`,
  },

  next: {
    en_US: `Next`,
    de_DE: `Weiter`,
    pl_PL: `Dalej`,
  },
  back: {
    en_US: `Back`,
    de_DE: `Zurück`,
    pl_PL: `Wstecz`,
  },
  bigButton: {
    en_US: `MAKE YOUR IDEA REAL`,
    de_DE: `MACHEN SIE IHRE IDEE ECHT`,
    pl_PL: `URZECZYWISTNIJ SWÓJ POMYSŁ`,
  },

  deliver: preset.deliver,
});

export default translations;
