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
];

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
