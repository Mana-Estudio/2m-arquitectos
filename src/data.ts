import type { ImageMetadata } from 'astro';

const archivos = import.meta.glob<{ default: ImageMetadata }>('/src/assets/proyectos/*/*.{jpg,jpeg,png}', { eager: true });

export function fotos(carpeta: string): ImageMetadata[] {
  return Object.keys(archivos)
    .filter((k) => k.includes(`/proyectos/${carpeta}/`))
    .sort()
    .map((k) => archivos[k].default);
}

export const TEL = '609 071 175';
export const TEL_HREF = 'tel:+34609071175';
export const WA = 'https://wa.me/34609071175';
export const EMAIL = 'info@2m-arquitectos.com';

export type Proyecto = {
  slug: string;
  nombre: string;
  lugar: string;
  zona: 'Madrid' | 'Galicia' | 'Málaga';
  tipo: 'Viviendas' | 'Edificios' | 'Terciario' | 'Reformas';
  tipologia: string;
  descripcion: string[];
};

export const proyectos: Proyecto[] = [
  {
    slug: 'las-lomas-hills-6', nombre: 'Las Lomas Hills 6', lugar: 'Boadilla del Monte, Madrid', zona: 'Madrid', tipo: 'Viviendas',
    tipologia: 'Promoción de viviendas unifamiliares aisladas',
    descripcion: [
      'Un complejo inmobiliario de seis viviendas unifamiliares de lujo, aisladas y con piscina, en la urbanización de Las Lomas, en Boadilla del Monte.',
    ],
  },
  {
    slug: 'majadahonda', nombre: '9 viviendas unifamiliares aisladas', lugar: 'Majadahonda, Madrid', zona: 'Madrid', tipo: 'Viviendas',
    tipologia: 'Promoción de viviendas unifamiliares aisladas',
    descripcion: ['Nueve viviendas unifamiliares aisladas en Majadahonda.'],
  },
  {
    slug: 'torrelodones', nombre: 'Vivienda unifamiliar aislada con piscina', lugar: 'Torrelodones, Madrid', zona: 'Madrid', tipo: 'Viviendas',
    tipologia: 'Vivienda unifamiliar aislada',
    descripcion: ['Vivienda unifamiliar aislada con piscina en Torrelodones.'],
  },
  {
    slug: 'las-rozas', nombre: '2 viviendas aisladas con piscina', lugar: 'Las Rozas, Madrid', zona: 'Madrid', tipo: 'Viviendas',
    tipologia: 'Viviendas unifamiliares aisladas',
    descripcion: ['Dos viviendas unifamiliares aisladas con piscina en Las Rozas de Madrid.'],
  },
  {
    slug: 'sanxenxo', nombre: '6 viviendas pareadas', lugar: 'Sanxenxo, Pontevedra', zona: 'Galicia', tipo: 'Viviendas',
    tipologia: 'Viviendas unifamiliares pareadas',
    descripcion: ['Seis viviendas unifamiliares pareadas en Sanxenxo, Pontevedra.'],
  },
  {
    slug: 'velez-malaga', nombre: '31 viviendas adosadas y pareadas', lugar: 'Vélez-Málaga, Málaga', zona: 'Málaga', tipo: 'Viviendas',
    tipologia: 'Promoción de viviendas adosadas y pareadas',
    descripcion: ['Treinta y una viviendas unifamiliares adosadas y pareadas en Vélez-Málaga.'],
  },
  {
    slug: 'valle-de-tobalina', nombre: 'Vivienda en Valle de Tobalina', lugar: 'Las Lomas, Boadilla del Monte', zona: 'Madrid', tipo: 'Viviendas',
    tipologia: 'Vivienda unifamiliar aislada',
    descripcion: ['Vivienda unifamiliar aislada de lujo con piscina en la urbanización de Las Lomas, en Boadilla del Monte.'],
  },
  {
    slug: 'valle-de-cares', nombre: 'Vivienda en Valle de Cares', lugar: 'Las Lomas, Boadilla del Monte', zona: 'Madrid', tipo: 'Viviendas',
    tipologia: 'Vivienda unifamiliar aislada',
    descripcion: ['Vivienda unifamiliar aislada con piscina en la urbanización de Las Lomas, en Boadilla del Monte.'],
  },
  {
    slug: 'boadilla-7-viviendas', nombre: '7 viviendas aisladas con piscina', lugar: 'Boadilla del Monte, Madrid', zona: 'Madrid', tipo: 'Viviendas',
    tipologia: 'Promoción de viviendas unifamiliares aisladas',
    descripcion: ['Siete viviendas unifamiliares aisladas con piscina en Boadilla del Monte.'],
  },
  {
    slug: 'valdemoro', nombre: '14 viviendas unifamiliares', lugar: 'Valdemoro, Madrid', zona: 'Madrid', tipo: 'Viviendas',
    tipologia: 'Promoción de viviendas unifamiliares',
    descripcion: ['Catorce viviendas unifamiliares en Valdemoro.'],
  },
  {
    slug: 'navallera', nombre: '16 viviendas unifamiliares', lugar: 'Torrelodones, Madrid', zona: 'Madrid', tipo: 'Viviendas',
    tipologia: 'Promoción de viviendas unifamiliares',
    descripcion: ['Dieciséis viviendas unifamiliares en la calle Navallera, en Torrelodones.'],
  },
  {
    slug: 'arroyo-del-coronel', nombre: '30 viviendas unifamiliares', lugar: 'Torrelodones, Madrid', zona: 'Madrid', tipo: 'Viviendas',
    tipologia: 'Promoción de viviendas unifamiliares',
    descripcion: ['Treinta viviendas unifamiliares en la calle Arroyo del Coronel, en Torrelodones.'],
  },
  {
    slug: 'reforma-torrelodones', nombre: 'Reforma de vivienda con piscina', lugar: 'Torrelodones, Madrid', zona: 'Madrid', tipo: 'Reformas',
    tipologia: 'Reforma de vivienda unifamiliar',
    descripcion: ['Reforma de una vivienda unifamiliar con piscina en Torrelodones.'],
  },
];

export const destacados = ['las-lomas-hills-6', 'valle-de-tobalina', 'majadahonda', 'torrelodones', 'sanxenxo', 'velez-malaga']
  .map((s) => proyectos.find((p) => p.slug === s)!);

export const servicios = [
  { t: 'Desarrollo integral', d: 'Nos ocupamos del proyecto completo, desde la primera idea hasta la entrega de llaves.' },
  { t: 'Proyecto básico y de ejecución', d: 'Redactamos la documentación para pedir la licencia y construir con precisión.' },
  { t: 'Diseño personalizado', d: 'Cada casa parte de su parcela, de la luz y de cómo quieres vivir en ella.' },
  { t: 'Dirección de obra y licencias', d: 'Dirección de obra de arquitecto y aparejador. Tramitamos también licencias de actividad.' },
];

export const pasos = [
  { t: 'Primera reunión', d: 'Vemos la parcela y escuchamos qué necesitas. Después te enviamos un presupuesto claro.' },
  { t: 'Diseño', d: 'Desarrollamos el anteproyecto contigo hasta que la casa sea la que buscas.' },
  { t: 'Proyecto y licencia', d: 'Redactamos el proyecto básico y de ejecución y gestionamos la licencia.' },
  { t: 'Obra', d: 'Arquitecto y aparejador dirigen la obra hasta la entrega.' },
];

export const equipo = [
  ['Vicente Murga', 'Arquitecto · Socio'], ['Jaime Millán', 'Arquitecto · Socio'], ['Sara Parrón', 'Arquitecta'],
  ['David Sánchez', 'Arquitecto técnico'], ['Rebeca Santalla', 'Delineante proyectista'], ['Gabriela Sánchez', 'Arquitecta'],
  ['Alejandro Plaza', 'Arquitecto'],
];

export const notas = [
  { t: 'La quinta pared: cómo los techos transforman la arquitectura y la vida cotidiana', fecha: '18 de noviembre de 2026', url: 'https://www.2m-arquitectos.com/la-quinta-pared-como-los-techos-transforman-la-arquitectura-y-la-vida-cotidiana/' },
  { t: 'La influencia de la arquitectura rural en el diseño contemporáneo y sostenible', fecha: '12 de noviembre de 2026', url: 'https://www.2m-arquitectos.com/la-influencia-de-la-arquitectura-rural-en-el-diseno-contemporaneo-y-sostenible/' },
  { t: 'Tendencias en cocinas 2027: cómo diseñar espacios invisibles, cálidos e integrados', fecha: '5 de noviembre de 2026', url: 'https://www.2m-arquitectos.com/tendencias-en-cocinas-2027-como-disenar-espacios-invisibles-calidos-e-integrados/' },
];

/** Enlace de WhatsApp con el mensaje ya escrito */
export const waTexto = (txt: string) => `${WA}?text=${encodeURIComponent(txt)}`;

export const navegacion = [
  ['proyectos', 'Proyectos', '/proyectos/'], ['servicios', 'Servicios', '/servicios/'], ['estudio', 'Estudio', '/estudio/'],
  ['blog', 'Blog', '/blog/'], ['contacto', 'Contacto', '/contacto/'],
] as const;

// MUESTRA: cifras orientativas, validar con el cliente antes de publicar
export const cifras = [
  { n: 20, suf: '+', t: 'años proyectando en Madrid' },
  { n: 500, suf: '+', t: 'viviendas proyectadas' },
  { n: 3, suf: '', t: 'comunidades con obra: Madrid, Galicia y Málaga' },
  { n: 8, suf: '', t: 'profesionales en un solo equipo' },
];

// MUESTRA: testimonios de ejemplo, sustituir por reseñas reales
export const testimonios = [
  { txt: 'Nos ayudaron a entender la parcela antes de dibujar nada. La casa tiene la luz que imaginábamos y la obra terminó en plazo.', n: 'Marta y Luis', p: 'Vivienda unifamiliar · Las Lomas' },
  { txt: 'Tener arquitecto y aparejador en el mismo estudio nos ahorró discusiones y sorpresas. Un único interlocutor de principio a fin.', n: 'Promotora residencial', p: 'Promoción de 16 viviendas · Torrelodones' },
  { txt: 'La licencia llegó antes de lo que esperábamos. Nos explicaron cada paso y cada coste sin letra pequeña.', n: 'Javier R.', p: 'Reforma integral · Torrelodones' },
];

// MUESTRA: preguntas frecuentes, revisar redacción con el estudio
export const faqs = [
  { q: '¿Cuánto cuesta el proyecto de una vivienda unifamiliar?', a: 'Depende de la superficie, la complejidad y los servicios que necesites. Como referencia, los honorarios de proyecto y dirección de obra suelen moverse entre el 6 % y el 10 % del coste de construcción. Tras la primera reunión te enviamos un presupuesto cerrado.' },
  { q: '¿Cuánto se tarda en conseguir la licencia de obra?', a: 'En los municipios del oeste de Madrid suele tardar entre 3 y 6 meses desde que se presenta el proyecto básico. Nosotros preparamos la documentación y hacemos el seguimiento con el ayuntamiento.' },
  { q: '¿Trabajáis fuera de Madrid?', a: 'Sí. Tenemos obra en Galicia y Málaga, y estudiamos cualquier proyecto en el resto de España.' },
  { q: '¿Me ayudáis si todavía no tengo parcela?', a: 'Sí. Podemos revisar contigo la normativa urbanística de las parcelas que estés valorando para saber qué se puede construir antes de comprar.' },
  { q: '¿Quién dirige la obra?', a: 'Un arquitecto y un arquitecto técnico (aparejador) del propio estudio. Así el proyecto y la obra los lleva el mismo equipo.' },
  { q: '¿La primera reunión tiene coste?', a: 'No. En la primera reunión vemos tu idea y la parcela y después te enviamos un presupuesto sin compromiso.' },
];

export const serviciosDet = [
  { id: 'obra-nueva', t: 'Vivienda unifamiliar', foto: 'valle-de-tobalina', d: 'Diseñamos tu casa desde la parcela: orientación, luz, vistas y cómo quieres vivir. Del anteproyecto a la entrega de llaves.', incluye: ['Estudio de parcela y normativa', 'Anteproyecto e imágenes 3D', 'Proyecto básico y de ejecución', 'Dirección de obra'] },
  { id: 'promociones', t: 'Promociones y edificios', foto: 'arroyo-del-coronel', d: 'Proyectos residenciales para promotoras y cooperativas, de 4 a más de 300 viviendas, optimizando edificabilidad y coste.', incluye: ['Estudio de viabilidad', 'Optimización de tipologías', 'Proyecto y licencia', 'Coordinación con la constructora'] },
  { id: 'reformas', t: 'Reformas y rehabilitación', foto: 'reforma-torrelodones', d: 'Rediseñamos casas y pisos existentes: redistribución, ampliación, eficiencia energética y nuevos acabados.', incluye: ['Levantamiento del estado actual', 'Propuesta de distribución', 'Licencia o declaración responsable', 'Dirección de obra'] },
  { id: 'licencias', t: 'Licencias de actividad', foto: 'velez-malaga', d: 'Tramitamos licencias de apertura y funcionamiento para locales, oficinas, restauración y hoteles.', incluye: ['Proyecto de actividad', 'Adecuación a normativa', 'Tramitación municipal', 'Certificado final'] },
];

/** Tipos para el presupuesto guiado. eur = coste orientativo de construcción €/m² (MUESTRA) */
export const tiposPresu = [
  { id: 'vivienda', t: 'Vivienda unifamiliar', foto: 'torrelodones', eur: [1400, 2200], m2: 250 },
  { id: 'promocion', t: 'Promoción de viviendas', foto: 'navallera', eur: [1100, 1600], m2: 1500 },
  { id: 'reforma', t: 'Reforma de casa o piso', foto: 'reforma-torrelodones', eur: [600, 1200], m2: 120 },
  { id: 'terciario', t: 'Local, oficina o licencia', foto: 'velez-malaga', eur: [500, 1100], m2: 200 },
];

export const colaboradores = ['Spacio4', 'ZOE Gescop', 'Reformas4'];
