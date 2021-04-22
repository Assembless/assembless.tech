// Here we define translations for the component.
import { TTransPreset } from '@/utils/translations';

const translations = (preset: TTransPreset) => ({
    subTitle: {
        en_US: `See what we\ncan do for your business`,
        de_DE: `See what we\ncan do for your business`,
        pl_PL: `See what we\ncan do for your business`,
    },
    services: preset.services,
});

export default translations;
