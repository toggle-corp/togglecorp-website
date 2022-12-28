import { mapToList } from '@togglecorp/fujs';

const skillsMapping = {
    react: { name: 'React' },
    'react-native': { name: 'React Native' },
    typescript: { name: 'Typescript' },
    mapboxgl: { name: 'Mapbox GL' },
    graphql: { name: 'GraphQL' },
    python: { name: 'Python' },
    django: { name: 'Django' },
    nodeJs: { name: 'NodeJS' },
    d3: { name: 'D3 JS' },
    postgres: { name: 'Postgres' },
    firebase: { name: 'Firebase' },
    leaflet: { name: 'Leaflet JS' },
    docker: { name: 'Docker' },
    websocket: { name: 'Websocket' },
    'react-on-wordpress': { name: 'React On Wordpress' },
    'docker-swarm': { name: 'Docker Swarm' },
    flowkit: { name: 'Flowkit' },
    airflow: { name: 'Airflow' },
    illustrator: { name: 'Illustrator' },
    inDesign: { name: 'InDesign' },
    pwa: { name: 'PWA' },
    mapbox: { name: 'Mapbox' },
    recharts: { name: 'Recharts' },
    'post-gis': { name: 'PostGIS' },
    blockchain: { name: 'Blockchain' },
    qgis: { name: 'QGIS' },
    'secondary-data-review': { name: 'Secondary Data Review' },
    'description-analysis': { name: 'Description Analysis' },
    'qualitative-analysis': { name: 'Qualitative Analysis' },
    'comprehension-skills': { name: 'Comprehension skills' },
    transcribing: { name: 'Transcribing' },
    'data-labeling': { name: 'Data Labeling' },
    'review-country': { name: 'Review of country reports' },
    'data-analysis': { name: 'Data Analysis' },
    'report-writing': { name: 'Report Writing' },
    'data-review': { name: 'Data Review' },
    'critical-thinking': { name: 'Critical Thinking' },
    'm&e-skills': { name: 'M&E skills' },
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
