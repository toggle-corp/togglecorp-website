import { mapToList } from '@togglecorp/fujs';

const tagsMapping = {
    'secondary-data-review': 'Secondary Data Review',
    'data-analysis': 'Data Analysis',
    'report-writing': 'Report Writing',
    'monitoring-and-evaluation': 'Monitoring And Evaluation',
};

export type TagId = keyof typeof tagsMapping;

export const tags = mapToList(
    tagsMapping,
    (item, key) => ({
        key: key as TagId,
        title: item,
    }),
);

export function getTag(key: TagId) {
    return tagsMapping[key];
}
