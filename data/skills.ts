import { mapToList } from '@togglecorp/fujs';

const skillsMapping = {
    react: { name: 'React' },
    'react-native': { name: 'React Native' },
    typescript: { name: 'Typescript' },
    mapboxgl: { name: 'Mapbox GL' },
    graphql: { name: 'GraphQL' },
    python: { name: 'Python' },
    django: { name: 'Django' },
    node: { name: 'NodeJS' },
    d3: { name: 'D3 JS' },
    postgres: { name: 'Postgres' },
    firebase: { name: 'Firebase' },
    leaflet: { name: 'Leaflet JS' },
    docker: { name: 'Docker' },
};

export type SkillId = keyof typeof skillsMapping;

export const skills = mapToList(
    skillsMapping,
    (item, key) => ({
        key: key as SkillId,
        title: item,
    }),
);

export function getSkill(key: SkillId) {
    return skillsMapping[key];
}
