// Here we define translations for the component.

import { TTransPreset } from '@/utils/translations';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const translations = (preset: TTransPreset) => ({
  about_us: {
    en_US: `about Us`,
    de_DE: `beispiel`,
    pl_PL: `o nas`,
  },
  title_1: {
    en_US: `Get to know`,
    de_DE: `Get to know`,
    pl_PL: `Get to know`,
  },
  title_2: {
    en_US: `us a bit better`,
    de_DE: `us a bit better`,
    pl_PL: `us a bit better`,
  },
  paragraph: {
    en_US: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in ante libero. Mauris non lobortis purus. Nulla pulvinar tempor metus sed aliquet. 

    Mauris gravida rhoncus enim, vitae mollis risus tincidunt eu. Donec tincidunt laoreet dui, aliquam finibus sem commodo at.`,
    de_DE: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in ante libero. Mauris non lobortis purus. Nulla pulvinar tempor metus sed aliquet. 

    Mauris gravida rhoncus enim, vitae mollis risus tincidunt eu. Donec tincidunt laoreet dui, aliquam finibus sem commodo at.`,
    pl_PL: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in ante libero. Mauris non lobortis purus. Nulla pulvinar tempor metus sed aliquet. 

    Mauris gravida rhoncus enim, vitae mollis risus tincidunt eu. Donec tincidunt laoreet dui, aliquam finibus sem commodo at.`,
  },
  paragraph2: {
    en_US: `Mauris gravida rhoncus enim, vitae mollis risus tincidunt eu. Donec tincidunt laoreet dui, aliquam finibus sem commodo at.`,
    de_DE: `Mauris gravida rhoncus enim, vitae mollis risus tincidunt eu. Donec tincidunt laoreet dui, aliquam finibus sem commodo at.`,
    pl_PL: `Mauris gravida rhoncus enim, vitae mollis risus tincidunt eu. Donec tincidunt laoreet dui, aliquam finibus sem commodo at.`,
  },
  name: {
    en_US: `Mike Eling`,
    de_DE: `Mike Eling`,
    pl_PL: `Mike Eling`,
  },
  ceo: {
    en_US: `Chief Executive Officer`,
    de_DE: `Chief Executive Officer`,
    pl_PL: `Chief Executive Officer`,
  },

  services: preset.services,
  aboutUs: preset.aboutUs,
  deliver: preset.deliver,
  contactUs: preset.contactUs,
});

export default translations;
