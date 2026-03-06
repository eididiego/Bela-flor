import { Store, Product } from './types';

export const WHATSAPP_GENERAL = "5512991770106"; // Using Faria Lima as main contact

export const STORES: Store[] = [
  {
    id: 'faria-lima',
    name: 'Unidade Faria Lima',
    address: 'Av. Brg. de Faria Lima, 791 - Jardim Maria Augusta, Taubaté - SP, 12070-100',
    googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=Av.+Brg.+de+Faria+Lima,+791+-+Jardim+Maria+Augusta,+Taubaté+-+SP',
    hours: 'Seg a Sáb: 08:00 às 20:00 | Dom: Fechado',
    phone: '(12) 99177-0106',
    whatsapp: '5512991770106',
    image: 'https://floriculturabelaflor.com/wp-content/uploads/2026/01/loja-faria-lima.jpg.png' 
  },
  {
    id: 'independencia',
    name: 'Unidade Independência',
    address: 'Av. Independência, 460 - Independência, Taubaté - SP, 12031-001',
    googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=Av.+Independência,+460+-+Independência,+Taubaté+-+SP',
    hours: 'Seg a Sex: 08:00 às 18:00 | Sáb: 08:00 às 16:00',
    phone: '(12) 99100-4544',
    whatsapp: '5512991004544',
    image: 'https://floriculturabelaflor.com/wp-content/uploads/2026/01/loja-independencia.jpg.png'
  }
];

export const PRODUCTS: Product[] = [
  // KITS
  {
    id: 'kit-te-amo-12',
    name: 'Kit Te Amo - Buquê 12 Rosas + Ferrero Rocher 12 Unidades',
    price: 319.80,
    description: 'Buquê de 12 Rosas acompanhada de Caixa com 12 unidades de Ferrero Rocher',
    category: 'kits',
    imagePlaceholder: 'https://floriculturabelaflor.com/wp-content/uploads/2026/03/1.png',
    checkoutUrl: 'https://floricultura-bela-flor2.pay.yampi.com.br/b/A3GG5SUEM40S'
  },
  {
    id: 'kit-carinho-7',
    name: 'Kit Carinho - Buquê 7 Rosas + Ferrero Rocher 12 Unidades',
    price: 269.80,
    description: 'Buquê de 7 Rosas acompanhada de Caixa com 12 unidades de Ferrero Rocher',
    category: 'kits',
    imagePlaceholder: 'https://floriculturabelaflor.com/wp-content/uploads/2026/03/4.png',
    checkoutUrl: 'https://floricultura-bela-flor2.pay.yampi.com.br/b/BPXYJMPD1HK4'
  },
  {
    id: 'kit-te-amo-3',
    name: 'Kit Te Amo - Buquê 3 Rosas + Ferrero Rocher 08 Unidades',
    price: 149.80,
    description: 'Buquê de 3 Rosas acompanhada de Caixa com 8 unidades de Ferrero Rocher',
    category: 'kits',
    imagePlaceholder: 'https://floriculturabelaflor.com/wp-content/uploads/2026/03/3.png',
    checkoutUrl: 'https://floricultura-bela-flor2.pay.yampi.com.br/b/9WPJCS1DZ14C'
  },
  {
    id: 'kit-presente-2',
    name: 'Kit Presente - Arranjo 2 Rosas + Ferrero Rocher 08 Unidades',
    price: 119.80,
    description: 'Arranjo de 2 Rosas acompanhada de Caixa com 8 unidades de Ferrero Rocher',
    category: 'kits',
    imagePlaceholder: 'https://floriculturabelaflor.com/wp-content/uploads/2026/03/2.png',
    checkoutUrl: 'https://floricultura-bela-flor2.pay.yampi.com.br/b/JJH7JNOEQBWO'
  },

  // ROSAS
  {
    id: 'buque-12-rosas',
    name: 'Buquê 12 Rosas',
    price: 249.90,
    description: 'Impactante, clássico e cheio de significado.',
    category: 'roses',
    imagePlaceholder: 'https://floriculturabelaflor.com/wp-content/uploads/2026/02/12.png',
    checkoutUrl: 'https://floricultura-bela-flor2.pay.yampi.com.br/r/1I7MDEHWEF'
  },
  {
    id: 'buque-7-rosas',
    name: 'Buquê 7 Rosas',
    price: 199.90,
    description: 'Amor na medida certa.',
    category: 'roses',
    imagePlaceholder: 'https://floriculturabelaflor.com/wp-content/uploads/2026/02/11.png',
    checkoutUrl: 'https://floricultura-bela-flor2.pay.yampi.com.br/r/3NPWK98C95'
  },

  {
    id: 'buque-3-rosas',
    name: 'Buquê 3 Rosas',
    price: 99.90,
    description: 'Simples, sincero e encantador.',
    category: 'roses',
    imagePlaceholder: 'https://floriculturabelaflor.com/wp-content/uploads/2026/02/9.png',
    checkoutUrl: 'https://floricultura-bela-flor2.pay.yampi.com.br/r/51JA4X3A62'
  },
  {
    id: 'arranjo-2-rosas',
    name: 'Arranjo 2 Rosas',
    price: 69.90,
    description: 'Pequeno no tamanho, grande no carinho.',
    category: 'roses',
    imagePlaceholder: 'https://floriculturabelaflor.com/wp-content/uploads/2026/02/5.png',
    checkoutUrl: 'https://floricultura-bela-flor2.pay.yampi.com.br/r/3KRWD3PRQ7'
  },
  {
    id: 'arranjo-1-rosa',
    name: 'Arranjo 1 Rosa',
    price: 49.90,
    description: 'Um detalhe que faz diferença.',
    category: 'roses',
    imagePlaceholder: 'https://floriculturabelaflor.com/wp-content/uploads/2026/02/4.png',
    checkoutUrl: 'https://floricultura-bela-flor2.pay.yampi.com.br/r/HDH6028BOX'
  },
  {
    id: 'rosa-tubo',
    name: 'Rosa no Tubo',
    price: 39.90,
    description: 'Surpresa delicada e acessível.',
    category: 'roses',
    imagePlaceholder: 'https://floriculturabelaflor.com/wp-content/uploads/2026/02/3.png',
    checkoutUrl: 'https://floricultura-bela-flor2.pay.yampi.com.br/r/75IDC8HOZH'
  },
  {
    id: 'arranjo-1-rosa-caixa',
    name: 'Arranjo 1 Rosa na Caixa',
    price: 59.90,
    description: 'Elegância singular em uma apresentação sofisticada.',
    category: 'roses',
    imagePlaceholder: 'https://floriculturabelaflor.com/wp-content/uploads/2026/03/5.png',
    checkoutUrl: 'https://floricultura-bela-flor2.pay.yampi.com.br/r/CYFP78RV5H'
  },
  {
    id: 'arranjo-2-rosas-caixa',
    name: 'Arranjo 2 Rosas na Caixa',
    price: 79.90,
    description: 'Dupla dose de encanto em uma caixa especial.',
    category: 'roses',
    imagePlaceholder: 'https://floriculturabelaflor.com/wp-content/uploads/2026/03/6.png',
    checkoutUrl: 'https://floricultura-bela-flor2.pay.yampi.com.br/r/DHWZ46VEYN'
  },
  {
    id: 'arranjo-3-rosas-caixa',
    name: 'Arranjo 3 Rosas na Caixa',
    price: 109.90,
    description: 'Três rosas que expressam amor, admiração e gratidão.',
    category: 'roses',
    imagePlaceholder: 'https://floriculturabelaflor.com/wp-content/uploads/2026/03/7.png',
    checkoutUrl: 'https://floricultura-bela-flor2.pay.yampi.com.br/r/4PVV3M815E'
  },

  // GIRASSÓIS
  {
    id: 'buque-7-girassois',
    name: 'Buquê 7 Girassóis',
    price: 199.90,
    description: 'Energia, alegria e luz.',
    category: 'sunflowers',
    imagePlaceholder: 'https://floriculturabelaflor.com/wp-content/uploads/2026/02/21.png',
    checkoutUrl: 'https://floricultura-bela-flor2.pay.yampi.com.br/r/BU2U5NAFSZ'
  },
  {
    id: 'buque-4-girassois',
    name: 'Buquê 4 Girassóis',
    price: 149.90,
    description: 'Um presente que ilumina o dia.',
    category: 'sunflowers',
    imagePlaceholder: 'https://floriculturabelaflor.com/wp-content/uploads/2026/02/2.png',
    checkoutUrl: 'https://floricultura-bela-flor2.pay.yampi.com.br/r/77JD9F2KE3'
  },
  {
    id: 'buque-1-girassol-1-rosa',
    name: 'Arranjo 1 Girassol + 1 Rosa',
    price: 89.90,
    description: 'Equilíbrio perfeito entre amor e alegria.',
    category: 'sunflowers',
    imagePlaceholder: 'https://floriculturabelaflor.com/wp-content/uploads/2026/02/1.png',
    checkoutUrl: 'https://floricultura-bela-flor2.pay.yampi.com.br/r/567U9UYES1'
  },
  {
    id: 'arranjo-1-girassol',
    name: 'Arranjo 1 Girassol',
    price: 69.90,
    description: 'Simples, alegre e marcante.',
    category: 'sunflowers',
    imagePlaceholder: 'https://floriculturabelaflor.com/wp-content/uploads/2026/02/20.png',
    checkoutUrl: 'https://floricultura-bela-flor2.pay.yampi.com.br/r/5NQJJKHOGC'
  },

  // CHOCOLATES
];