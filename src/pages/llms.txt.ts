import { settings } from '../lib/settings';
import { allProjects } from '../lib/projects';

export async function GET({ site }: { site: URL }) {
  const s = settings();
  const projects = await allProjects();
  const clean = (t: unknown) => String(t ?? '').replace(/\[TO CONFIRM[^\]]*\]/g, '').trim();
  const lines = [
    `# ${s.name}`, '',
    `> ${clean(s.intro)}`, '',
    `${s.availability}.`, '',
    '## Tracks',
    ...s.tracks.map((t: any) => `- ${t.title}: ${t.shows} Résumé: ${new URL(t.resume, site)}`), '',
    ...s.groups.flatMap((g: any) => {
      const items = projects.filter(p => p.data.group === g.name);
      if (!items.length) return [];
      return [`## ${g.name}`, ...items.map(p => {
        const key = p.data.stats[0] ? ` Key result: ${p.data.stats[0].value} (${p.data.stats[0].label}).` : '';
        return `- [${p.data.title}](${new URL('/work/' + p.id, site)}): ${clean(p.data.summary)}${p.data.award ? ' ' + p.data.award + '.' : ''}${key}`;
      }), ''];
    }),
    '## Experience',
    ...s.about.experience.map((e: any) => `- ${e.when}: ${e.what}`), '',
    '## Education',
    ...s.about.education.map((e: any) => `- ${e.when}: ${e.what}`), '',
    `Contact: ${s.contact.linkedin}`,
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
