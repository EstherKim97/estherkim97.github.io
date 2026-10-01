import { defineConfig } from 'astro/config';

// Wrap [TO CONFIRM ...] text inside project pages in an orange box.
function rehypeTodo() {
  const re = /(\[TO CONFIRM[^\]]*\])/g;
  const walk = (node) => {
    if (!node.children) return;
    const out = [];
    for (const child of node.children) {
      if (child.type === 'text' && re.test(child.value)) {
        re.lastIndex = 0;
        for (const piece of child.value.split(re).filter(Boolean)) {
          out.push(piece.startsWith('[TO CONFIRM')
            ? { type: 'element', tagName: 'mark', properties: { className: ['todo'] }, children: [{ type: 'text', value: piece }] }
            : { type: 'text', value: piece });
        }
      } else { walk(child); out.push(child); }
    }
    node.children = out;
  };
  return (tree) => walk(tree);
}

// Old addresses from the previous site keep working.
const old = {
  '/projects': '/work', '/resume': '/about', '/research_profile': '/about', '/personal_profile': '/about',
  '/publications': '/about', '/contact': '/#contact',
  '/01-digitaltwin': '/work', '/digitaltwin': '/work',
  '/02-maxbindai': '/work/maxbind-ai', '/maxbindai': '/work/maxbind-ai',
  '/03-glp1-sentinel': '/work/glp1-sentinel', '/04-knowledgegraph': '/work/biograph-intelligence',
  '/05-mhealth_abtesting': '/work/ab-testing-studies', '/06-clinical-trial-eligibility': '/work',
  '/07-audata': '/work', '/08-selected-publications': '/about', '/09-research-briefs-methods': '/about',
  '/10-seatrac-hackday': '/work',
};

export default defineConfig({
  site: 'https://estherkim97.github.io',
  trailingSlash: 'ignore',
  redirects: old,
  markdown: { rehypePlugins: [rehypeTodo] },
});
