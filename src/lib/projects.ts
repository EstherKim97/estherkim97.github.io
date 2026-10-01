import { getCollection } from 'astro:content';
import { settings } from './settings';

/** Every visible entry, including jobs (experience: true), which get pages but are listed on About. */
export async function allEntries() {
  const list = (await getCollection('projects')).filter(p => !p.data.hidden);
  const gOrder = settings().groups.map((g: any) => g.name);
  return list.sort((a, b) =>
    gOrder.indexOf(a.data.group) - gOrder.indexOf(b.data.group) ||
    a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}
export async function allProjects() {
  return (await allEntries()).filter(p => !p.data.experience);
}
export async function featuredProjects() {
  return (await allProjects()).filter(p => p.data.featured).sort((a, b) => (a.data.featured! - b.data.featured!));
}
