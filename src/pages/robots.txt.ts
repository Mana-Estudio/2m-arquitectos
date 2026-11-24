import type { APIRoute } from 'astro';
import { DEMO, SITE } from '../site.mjs';

export const GET: APIRoute = () => {
  const cuerpo = DEMO
    // En demo se bloquea con noindex en cada página; Google tiene que poder rastrearla para leerlo.
    ? 'User-agent: *\nAllow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap-index.xml\n`;
  return new Response(cuerpo, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
