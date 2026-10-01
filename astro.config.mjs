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
  '/work': '/projects', '/work/[slug]': '/projects/[slug]',
  '/resume': '/about', '/research_profile': '/about', '/personal_profile': '/about',
  '/publications': '/about', '/contact': '/#contact',
  '/01-digitaltwin': '/projects/digitaltwin', '/digitaltwin': '/projects/digitaltwin',
  '/02-maxbindai': '/projects/maxbind-ai', '/maxbindai': '/projects/maxbind-ai',
  '/03-glp1-sentinel': '/projects/glp1-sentinel', '/04-knowledgegraph': '/projects/biograph-intelligence',
  '/05-mhealth_abtesting': '/projects/ab-testing-studies', '/06-clinical-trial-eligibility': '/projects/clinical-trial-eligibility',
  '/07-audata': '/projects/audata', '/08-selected-publications': '/about', '/09-research-briefs-methods': '/about',
  '/10-seatrac-hackday': '/projects/seatrac-tb-hackday',
};

export default defineConfig({
  site: 'https://estherkim97.github.io',
  trailingSlash: 'ignore',
  redirects: old,
  markdown: { rehypePlugins: [rehypeTodo] },
});
