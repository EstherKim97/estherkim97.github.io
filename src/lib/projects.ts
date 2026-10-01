import { getCollection } from 'astro:content';
import { settings } from './settings';

export async function allProjects() {
  const list = (await getCollection('projects')).filter(p => !p.data.hidden);
  const gOrder = settings().groups.map((g: any) => g.name);
  return list.sort((a, b) =>
    gOrder.indexOf(a.data.group) - gOrder.indexOf(b.data.group) ||
    a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}
export async function featuredProjects() {
  return (await allProjects()).filter(p => p.data.featured).sort((a, b) => (a.data.featured! - b.data.featured!));
}
