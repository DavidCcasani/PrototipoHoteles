export interface CartaDishItem {
  name: string;
  price: string;
  description?: string;
  tag?: string;
  image?: string;
  variants?: { label: string; price: string }[];
}

export interface CartaSubgroup {
  title?: string;
  items: CartaDishItem[];
}

export interface CartaCategorySection {
  id: string;
  number: string;
  name: string;
  tagline: string;
  priceFrom: string;
  description: string;
  previewImage: string;
  images: string[];
  featured: { name: string; price: string }[];
  groups: CartaSubgroup[];
}

export const CARTA_SECTIONS: CartaCategorySection[] = [
  {
    id: "desayunos",
    number: "01",
    name: "Desayunos",
    tagline: "3 OPCIONES CUIDADOSAMENTE SELECCIONADAS",
    priceFrom: "Desde S/ 15.00",
    description:
      "Comienza el día con preparaciones frescas al momento: opciones clásicas americanas, alternativas ligeras vegetarianas y nuestra recomendación local andahuaylina.",
    previewImage: "/images/carta/desayunos/andahuaylino.webp",
    images: [
      "/images/carta/desayunos/andahuaylino.webp",
      "/images/carta/desayunos/americano.webp",
    ],
    featured: [
      { name: "Americano", price: "S/ 15.00" },
      { name: "Vegetariano", price: "S/ 15.00" },
      { name: "Andahuaylino", price: "S/ 25.00" },
    ],
    groups: [
      {
        items: [
          {
            name: "Americano",
            price: "S/ 15.00",
            image: "/images/carta/desayunos/americano.webp",
            description:
              "Café, jugo, huevos revueltos o fritos, queso, pan o tostadas, mermelada o mantequilla.",
          },
          {
            name: "Vegetariano",
            price: "S/ 15.00",
            description:
              "Café, fruta picada, avena, granola, huevos (revueltos o sancochados) y yogurt.",
          },
          {
            name: "Andahuaylino",
            price: "S/ 25.00",
            tag: "Recomendación Local",
            image: "/images/carta/desayunos/andahuaylino.webp",
            description:
              "Chicharrón, zarza criolla, papas sancochadas, camotes sancochados y pan común.",
          },
        ],
      },
    ],
  },
  {
    id: "entradas",
    number: "02",
    name: "Entradas",
    tagline: "15 OPCIONES CUIDADOSAMENTE SELECCIONADAS",
    priceFrom: "Desde S/ 5.00",
    description:
      "Entradas tradicionales del valle, ensaladas frescas de la huerta y acompañamientos artesanales para compartir o abrir el apetito.",
    previewImage: "/images/carta/entradas/rocoto-relleno.webp",
    images: [
      "/images/carta/entradas/rocoto-relleno.webp",
      "/images/carta/entradas/causa-rellena.webp",
      "/images/carta/entradas/papa-a-la-huancaina.webp",
      "/images/carta/entradas/ccapchi-de-queso.webp",
      "/images/carta/entradas/palta-rellena.webp",
      "/images/carta/entradas/choclo-con-queso.webp",
      "/images/carta/entradas/yuquitas-doradas.webp",
    ],
    featured: [
      { name: "Ccapchi de Queso", price: "S/ 17.00" },
      { name: "Papa a la Huancaína", price: "S/ 17.00" },
      { name: "Rocoto Relleno", price: "S/ 17.00" },
      { name: "Choclo con Queso", price: "S/ 12.00" },
    ],
    groups: [
      {
        title: "Entradas Clásicas",
        items: [
          { name: "Ccapchi de Queso", price: "S/ 17.00", image: "/images/carta/entradas/ccapchi-de-queso.webp" },
          { name: "Palta Rellena", price: "S/ 17.00", image: "/images/carta/entradas/palta-rellena.webp" },
          { name: "Causa Rellena", price: "S/ 17.00", image: "/images/carta/entradas/causa-rellena.webp" },
          { name: "Dieta de Pollo", price: "S/ 17.00" },
          { name: "Papa a la Huancaína", price: "S/ 17.00", image: "/images/carta/entradas/papa-a-la-huancaina.webp" },
          { name: "Rocoto Relleno", price: "S/ 17.00", image: "/images/carta/entradas/rocoto-relleno.webp" },
          { name: "Choclo con Queso", price: "S/ 12.00", image: "/images/carta/entradas/choclo-con-queso.webp" },
          { name: "Yuquitas Doradas", price: "S/ 17.00", image: "/images/carta/entradas/yuquitas-doradas.webp" },
        ],
      },
      {
        title: "Ensaladas y Guarniciones",
        items: [
          { name: "Ensalada Pre-Cocida", price: "S/ 17.00" },
          { name: "Ensalada Fresca", price: "S/ 17.00" },
          { name: "Ensalada de Palta", price: "S/ 17.00" },
          { name: "Ensalada Especial", price: "S/ 17.00" },
          { name: "Porción de Palta", price: "S/ 5.00" },
          { name: "Porción de Arroz", price: "S/ 10.00" },
          { name: "Porción de Papas Doradas", price: "S/ 10.00" },
        ],
      },
    ],
  },
  {
    id: "almuerzo",
    number: "03",
    name: "Almuerzo",
    tagline: "PLATOS A LA CARTA · 28 OPCIONES",
    priceFrom: "Desde S/ 20.00",
    description:
      "Nuestra mesa principal reúne especialidades tradicionales andinas, tallarines de casa, sopas emblemáticas, trucha fresca de altura y cortes seleccionados a la parrilla.",
    previewImage: "/images/carta/almuerzo/cuy-chactado.webp",
    images: [
      "/images/carta/almuerzo/cuy-chactado.webp",
      "/images/carta/almuerzo/chicharron-tradicional.webp",
      "/images/carta/almuerzo/cuy-crocante.webp",
      "/images/carta/almuerzo/chicharron-especial-andino.webp",
      "/images/carta/almuerzo/sopa-chairo.webp",
      "/images/carta/almuerzo/trucha-especial.webp",
      "/images/carta/almuerzo/trucha-a-la-parrilla.webp",
      "/images/carta/almuerzo/chicharron-de-trucha.webp",
      "/images/carta/almuerzo/lomo-fino-parrilla.webp",
      "/images/carta/almuerzo/pechuga-pollo-parrilla.webp",
      "/images/carta/almuerzo/pollada-especial.webp",
    ],
    featured: [
      { name: "Cuy Chactado", price: "S/ 65.00" },
      { name: "Chicharrón Tradicional", price: "S/ 45.00" },
      { name: "Trucha Especial", price: "S/ 38.00" },
      { name: "Parrilla Mixta", price: "S/ 80.00" },
    ],
    groups: [
      {
        title: "Tradicionales",
        items: [
          {
            name: "Cuy Chactado",
            price: "S/ 65.00",
            image: "/images/carta/almuerzo/cuy-chactado.webp",
            description:
              "Tradicional cuy entero frito al estilo andino, crujiente por fuera y tierno por dentro. Servido con papas doradas nativas y sarsa criolla de la casa.",
          },
          {
            name: "Chicharrón Tradicional",
            price: "S/ 45.00",
            image: "/images/carta/almuerzo/chicharron-tradicional.webp",
            description:
              "Selectos cortes de cerdo cocinados en su propio jugo y dorados a la perfección. Acompañados de mote tierno, papas nativas y sarsa de cebolla al estilo del valle.",
          },
          { name: "Cuy Especial Andino", price: "S/ 72.00" },
          { name: "Cuy Crocante", price: "S/ 75.00", image: "/images/carta/almuerzo/cuy-crocante.webp" },
          { name: "Chicharrón Especial Andino", price: "S/ 55.00", image: "/images/carta/almuerzo/chicharron-especial-andino.webp" },
          { name: "Tallarín de Casa con Chicharrón", price: "S/ 45.00" },
          { name: "Tallarín de Casa con 1/4 de Cuy", price: "S/ 53.00" },
          { name: "Tallarín de Casa con 1/2 Cuy", price: "S/ 68.00" },
          { name: "Tallarín de Casa con Pollo y Chicharrón", price: "S/ 55.00" },
          { name: "Tallarín de Casa con Pollo y 1/4 de Cuy", price: "S/ 53.00" },
          { name: "Tallarín de Casa con Pollo y 1/2 Cuy", price: "S/ 68.00" },
          { name: "Tallarín de Casa con Pollo, Chicharrón y 1/2 Cuy", price: "S/ 70.00" },
          { name: "Tallarín de Casa con Pollo, Chicharrón y 1/4 de Cuy", price: "S/ 65.00" },
          { name: "Tallarín de Casa con Pollo", price: "S/ 40.00" },
          { name: "Tallarín con Pollo", price: "S/ 35.00" },
          { name: "Caja China", price: "S/ 55.00" },
        ],
      },
      {
        title: "Sopas",
        items: [
          {
            name: "Sopa de Chairo",
            price: "S/ 20.00",
            image: "/images/carta/almuerzo/sopa-chairo.webp",
            description:
              "Reconfortante y emblemática sopa andina a base de carne de res, chuño negro, mote y un toque de finas hierbas aromáticas de la región.",
          },
        ],
      },
      {
        title: "Pescados",
        items: [
          {
            name: "Trucha Especial",
            price: "S/ 38.00",
            image: "/images/carta/almuerzo/trucha-especial.webp",
            description:
              "Filete de trucha fresca preparada con la receta secreta del chef, acompañada de guarniciones y sutiles toques cítricos.",
          },
          {
            name: "Trucha a la Parrilla",
            price: "S/ 38.00",
            image: "/images/carta/almuerzo/trucha-a-la-parrilla.webp",
            description:
              "Trucha fresca asada a la parrilla con aceite de oliva y finas hierbas, servida con fresca ensalada de la huerta.",
          },
          {
            name: "Chicharrón de Trucha",
            price: "S/ 38.00",
            image: "/images/carta/almuerzo/chicharron-de-trucha.webp",
            description:
              "Crujientes bocados de trucha fresca finamente empanizados, acompañados de yucas doradas y salsa tártara artesanal.",
          },
          {
            name: "Trucha al Vapor Light",
            price: "S/ 38.00",
            image: "/images/carta/almuerzo/trucha-al-vapor-light.webp",
          },
        ],
      },
      {
        title: "Carnes",
        items: [
          { name: "Parrilla Mixta", price: "S/ 80.00" },
          { name: "Lomo Fino a la Parrilla", price: "S/ 70.00", image: "/images/carta/almuerzo/lomo-fino-parrilla.webp" },
          { name: "Pechuga de Pollo a la Parrilla", price: "S/ 45.00", image: "/images/carta/almuerzo/pechuga-pollo-parrilla.webp" },
          { name: "Pechuga a la Parrilla Light", price: "S/ 38.00" },
          { name: "Pollada Especial", price: "S/ 40.00", image: "/images/carta/almuerzo/pollada-especial.webp" },
          { name: "Pollada Tradicional", price: "S/ 35.00" },
        ],
      },
    ],
  },
  {
    id: "cena",
    number: "04",
    name: "Cena",
    tagline: "7 OPCIONES CUIDADOSAMENTE SELECCIONADAS",
    priceFrom: "Desde S/ 17.00",
    description:
      "Propuestas cálidas y reconfortantes para la noche: brasas, salteados al wok, anticuchos de fin de semana y caldos tradicionales.",
    previewImage: "/images/carta/cena/1-4-pollo-a-la-brasa.webp",
    images: [
      "/images/carta/cena/1-4-pollo-a-la-brasa.webp",
      "/images/carta/cena/alitas-acevichadas.webp",
      "/images/carta/cena/anticucho-de-pollo.webp",
      "/images/carta/cena/arroz-chaufa.webp",
      "/images/carta/cena/pollo-brasa-arroz-chaufa.webp",
      "/images/carta/cena/sopa-wantan.webp",
    ],
    featured: [
      { name: "1/4 De Pollo a la Brasa", price: "S/ 30.00" },
      { name: "Alitas Acevichadas", price: "S/ 35.00" },
      { name: "Anticucho de Pollo", price: "S/ 28.00" },
      { name: "Caldo de Gallina", price: "S/ 25.00" },
    ],
    groups: [
      {
        title: "Platos de Noche",
        items: [
          {
            name: "1/4 De Pollo a la Brasa",
            price: "S/ 30.00",
            image: "/images/carta/cena/1-4-pollo-a-la-brasa.webp",
            description:
              "Jugoso pollo macerado en nuestra receta secreta y horneado a las brasas. Acompañado de papas fritas crujientes y ensalada clásica.",
          },
          {
            name: "Alitas Acevichadas",
            price: "S/ 35.00",
            image: "/images/carta/cena/alitas-acevichadas.webp",
            description:
              "Crocantes alitas de pollo bañadas en cremosa salsa acevichada, decoradas con cebolla china y ají limo.",
          },
          {
            name: "Anticucho de Pollo",
            price: "S/ 28.00",
            tag: "Solo fines de semana",
            image: "/images/carta/cena/anticucho-de-pollo.webp",
            description:
              "Tiernos trozos de pollo marinados en aderezo tradicional de ají panca y especias, sellados a la parrilla con papas doradas y choclo tierno.",
          },
          {
            name: "Arroz Chaufa",
            price: "S/ 18.00",
            image: "/images/carta/cena/arroz-chaufa.webp",
            description:
              "Clásica fusión peruano-cantonesa: arroz salteado al wok a fuego alto con trozos de pollo, huevo, cebolla china y aceite de ajonjolí.",
          },
          {
            name: "Pollo a la Brasa con Arroz Chaufa",
            price: "S/ 30.00",
            image: "/images/carta/cena/pollo-brasa-arroz-chaufa.webp",
          },
        ],
      },
      {
        title: "Sopas",
        items: [
          {
            name: "Caldo de Gallina",
            price: "S/ 25.00",
            description:
              "Sustancioso y reparador caldo de gallina de corral, servido con fideos, huevo sancochado, papa amarilla y cebolla china picada.",
          },
          {
            name: "Sopa Wantán",
            price: "S/ 17.00",
            image: "/images/carta/cena/sopa-wantan.webp",
            description:
              "Caldo claro y reconfortante a base de pollo, servido con suaves wantanes rellenos, finos cortes de carne y vegetales.",
          },
        ],
      },
    ],
  },
  {
    id: "extras-tablas",
    number: "05",
    name: "Extras y Tablas",
    tagline: "6 OPCIONES CUIDADOSAMENTE SELECCIONADAS",
    priceFrom: "Desde S/ 6.00",
    description:
      "Jugos naturales recién exprimidos en vaso o jarra, zumos cítricos y tablas artesanales de quesos y frutas de estación.",
    previewImage: "/images/carta/portada.webp",
    images: [
      "/images/carta/portada.webp",
      "/images/carta/entradas/choclo-con-queso.webp",
    ],
    featured: [
      { name: "Jugo Especial (Mix)", price: "S/ 8.00 / 15.00" },
      { name: "Tabla de Queso", price: "S/ 25.00 / 45.00" },
      { name: "Tabla de Frutas", price: "S/ 18.00" },
      { name: "Zumo de Piña", price: "S/ 18.00" },
    ],
    groups: [
      {
        items: [
          {
            name: "Jugo Especial (Mix de frutas)",
            price: "S/ 8.00",
            variants: [
              { label: "Vaso", price: "S/ 8.00" },
              { label: "Jarra", price: "S/ 15.00" },
            ],
          },
          {
            name: "Jugo Clásico (1 fruta a elección)",
            price: "S/ 6.00",
            variants: [
              { label: "Vaso", price: "S/ 6.00" },
              { label: "Jarra", price: "S/ 12.00" },
            ],
          },
          {
            name: "Tabla de Queso",
            price: "S/ 25.00",
            variants: [
              { label: "Mediano", price: "S/ 25.00" },
              { label: "Grande", price: "S/ 45.00" },
            ],
          },
          { name: "Tabla de Frutas", price: "S/ 18.00" },
          { name: "Naranjada", price: "S/ 18.00" },
          { name: "Zumo de Piña", price: "S/ 18.00" },
        ],
      },
    ],
  },
  {
    id: "licores-cervezas",
    number: "06",
    name: "Licores y Cervezas",
    tagline: "28 OPCIONES CUIDADOSAMENTE SELECCIONADAS",
    priceFrom: "Desde S/ 9.00",
    description:
      "Selección de whiskys, rones añejos, piscos peruanos, vinos tintos, blancos y espumantes, además de cervezas nacionales e importadas.",
    previewImage: "/images/galeria/07.webp",
    images: [
      "/images/galeria/07.webp",
      "/images/servicios/02.webp",
    ],
    featured: [
      { name: "Whisky Black Label", price: "S/ 200.00" },
      { name: "Pisco Portón Mosto Verde", price: "S/ 160.00" },
      { name: "Casillero del Diablo", price: "S/ 80.00" },
      { name: "Cervezas Artesanales y Clásicas", price: "S/ 10.00" },
    ],
    groups: [
      {
        title: "Whiskys y Rones",
        items: [
          { name: "Whisky Double Black Label", price: "S/ 250.00" },
          { name: "Whisky Black Label", price: "S/ 200.00" },
          { name: "Whisky Red Label 750ml", price: "S/ 80.00" },
          { name: "Jack Daniel's", price: "S/ 150.00" },
          { name: "Ron Flor de Caña 12 Años Azul", price: "S/ 180.00" },
          { name: "Ron Flor de Caña 5 Años", price: "S/ 80.00" },
        ],
      },
      {
        title: "Piscos",
        items: [
          { name: "Pisco Portón Mosto Verde Quebranta", price: "S/ 160.00" },
          { name: "Pisco Cuatro Gallos Acholado", price: "S/ 50.00" },
        ],
      },
      {
        title: "Vinos y Espumantes",
        items: [
          { name: "Vino Casillero del Diablo Sauvignon", price: "S/ 80.00" },
          { name: "Vino Riccadonna", price: "S/ 85.00" },
          { name: "Vino Blanco El Gato", price: "S/ 25.00" },
          { name: "Vino Borgoña Tinto", price: "S/ 25.00" },
          { name: "Vino Gran Rosé Semi Seco 750ml", price: "S/ 25.00" },
          { name: "Vino Tabernero Especial 750ml", price: "S/ 25.00" },
          { name: "Vino Espumante Rosé Tabernero", price: "S/ 25.00" },
          { name: "Vino Queirolo Rosé", price: "S/ 25.00" },
        ],
      },
      {
        title: "Cervezas",
        items: [
          { name: "Cerveza Corona Extra", price: "S/ 10.00" },
          { name: "Cerveza Heineken", price: "S/ 10.00" },
          { name: "Cerveza Cusqueña Negra (Botella / Lata)", price: "S/ 10.00" },
          { name: "Cerveza Cusqueña Trigo (Botella / Lata)", price: "S/ 10.00" },
          { name: "Cerveza Pilsen (Botella / Lata)", price: "S/ 10.00" },
          { name: "Pilsen Fresh", price: "S/ 10.00" },
          { name: "Limonada con Alcohol Mike's", price: "S/ 10.00" },
          { name: "Hit / Wild", price: "S/ 9.00" },
        ],
      },
    ],
  },
  {
    id: "minibar-kiosko",
    number: "07",
    name: "Minibar y Kiosko",
    tagline: "50 OPCIONES CUIDADOSAMENTE SELECCIONADAS",
    priceFrom: "Desde S/ 1.00",
    description:
      "Bebidas frías, aguas minerales, energizantes, chocolatería, snacks, artículos de cuidado personal y otros servicios disponibles en habitación.",
    previewImage: "/images/galeria/08.webp",
    images: [
      "/images/galeria/08.webp",
      "/images/servicios/03.webp",
    ],
    featured: [
      { name: "Bebidas y Aguas Minerales", price: "S/ 2.00 – 15.00" },
      { name: "Energizantes", price: "S/ 3.00 – 14.00" },
      { name: "Chocolatería y Snacks", price: "S/ 1.00 – 25.00" },
      { name: "Cuidado Personal", price: "S/ 1.00 – 10.00" },
    ],
    groups: [
      {
        title: "Bebidas y Refrescos",
        items: [
          { name: "Gaseosa Inca Kola 2L", price: "S/ 15.00" },
          { name: "Gaseosa Sprite 2.25L", price: "S/ 15.00" },
          { name: "Gaseosa Inca Kola Lata / Coca-Cola / Fanta / Crush / CyC", price: "S/ 6.00" },
          { name: "Gaseosa Inca Kola 600ml Botella", price: "S/ 4.00" },
          { name: "Gaseosa Oro Cola / Big Cola / Kolita", price: "S/ 3.50" },
          { name: "Drink Té Verde / Kero Aloe (Piña o Uva)", price: "S/ 4.00" },
          { name: "Agua Mineral Socosani", price: "S/ 3.00" },
          { name: "Agua San Mateo 600ml", price: "S/ 2.00" },
        ],
      },
      {
        title: "Energizantes",
        items: [
          { name: "Red Bull", price: "S/ 14.00" },
          { name: "360 Sabor Maracuyá / 360 Thermo RZ50", price: "S/ 3.00" },
          { name: "Sporade / Power", price: "S/ 3.00" },
        ],
      },
      {
        title: "Chocolatería, Galletas y Snacks",
        items: [
          { name: "Chocolate Vizzio Lata", price: "S/ 25.00" },
          { name: "Chocolate Sublime Dúo / Chin Chin / Halls", price: "S/ 3.00" },
          { name: "Trident / Full / Alka", price: "S/ 2.00" },
          { name: "Mentitas", price: "S/ 1.00" },
          { name: "Galletas (Oreo, Casino, Choco Chips, Doña Pepa, Club Social, Frac, Tentación, Soda Line, etc.)", price: "S/ 2.00" },
        ],
      },
      {
        title: "Farmacia, Cuidado Personal y Otros",
        items: [
          { name: "Preservativos", price: "S/ 10.00" },
          { name: "Pasta Dental Colgate / Schick Extreme3", price: "S/ 6.00" },
          { name: "Kitadol", price: "S/ 4.00" },
          { name: "Toalla Higiénica Nosotras", price: "S/ 1.00" },
          { name: "Cigarro Lucky Strike (Cajetilla / Unidad)", price: "S/ 30.00 / 2.50" },
          { name: "Vaso", price: "S/ 5.00" },
        ],
      },
    ],
  },
];
