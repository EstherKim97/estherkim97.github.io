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
export const coverStyle = (id: string) => {
  // Fallback cover colours until a real Higgsfield cover is added
  const palette = [['#1C47C8','#8FB0FF'],['#0A1222','#2E5BE0'],['#5B7BD6','#DCE4F8'],['#16307F','#7D9BEA'],['#2E5BE0','#EDF0F4']];
  let h = 0; for (const c of id) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return palette[h % palette.length];
};
