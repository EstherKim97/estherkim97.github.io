import fs from 'node:fs';
import yaml from 'js-yaml';

export type Settings = any;
let cache: Settings | null = null;
export function settings(): Settings {
  if (!cache) cache = yaml.load(fs.readFileSync(new URL('../../content/settings.yaml', import.meta.url), 'utf8'));
  return cache;
}
export const groupNames = (): string[] => settings().groups.map((g: any) => g.name);
export const trackNames = (): string[] => settings().tracks.map((t: any) => t.name);

/** Split text so [TO CONFIRM ...] parts can be highlighted. */
export function parts(text: unknown): { t: string; todo: boolean }[] {
  const s = text == null ? '' : String(text);
  return s.split(/(\[TO CONFIRM[^\]]*\])/g).filter(Boolean).map(t => ({ t, todo: t.startsWith('[TO CONFIRM') }));
}
export const isTodo = (v: unknown) => typeof v === 'string' && v.includes('[TO CONFIRM');
