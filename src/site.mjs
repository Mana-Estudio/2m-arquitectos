// Mientras la web sea una demo en manaestudio.ar, DEMO = true:
// el dominio del sitio apunta a la demo (imagen de vista previa, canonical, sitemap)
// y se bloquea la indexación en buscadores.
// Al pasar al dominio del cliente, cambiar DEMO a false.
export const DEMO = true;
export const SITE_DEMO = 'https://2m-arquitectos.manaestudio.ar';
export const SITE_PROD = 'https://www.2m-arquitectos.com';
export const SITE = DEMO ? SITE_DEMO : SITE_PROD;
