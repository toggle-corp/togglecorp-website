import { StaticImageData } from 'next/image';

export function selfSelector<T>(data: T) { return data; }
export const keySelector = (data: { key: string }) => data.key;
export const titleSelector = (data: { title: string }) => data.title;
export const descriptionSelector = (data: { description: string }) => data.description;
export const imageSelector = (data: { image: string | StaticImageData }) => data.image;
