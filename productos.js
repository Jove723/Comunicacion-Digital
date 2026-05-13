const PRODUCTS = [
    {
        id: 1,
        name: 'Manzanas',
        price: 10000,
        image: 'Images/manzanas.webp',
        category: 'Frutas y verduras',
        description: 'Manzanas frescas y crujientes, perfectas para disfrutar solas o en tus recetas favoritas. Ricas en fibra y vitamina C.',
        reviews: [
            { author: 'María G.', rating: 5, text: 'Muy frescas y deliciosas', date: '2024-03-15' },
            { author: 'Carlos L.', rating: 4, text: 'Buenas calidad, buen precio', date: '2024-03-10' },
            { author: 'Ana P.', rating: 5, text: 'Siempre compro aquí, recomendadas', date: '2024-02-28' }
        ]
    },
    {
        id: 2,
        name: 'Plátanos',
        price: 10000,
        image: 'Images/Banana.webp',
        category: 'Frutas y verduras',
        description: 'Plátanos maduros y dulces, ideales para tus desayunos y postres. Fuente natural de potasio y energía.',
        reviews: [
            { author: 'Pedro R.', rating: 4, text: 'Maduros en su punto', date: '2024-03-14' },
            { author: 'Luisa M.', rating: 5, text: 'Perfectos para mis batidos', date: '2024-03-08' }
        ]
    },
    {
        id: 3,
        name: 'Naranjas',
        price: 10000,
        image: 'Images/naranjas.webp',
        category: 'Frutas y verduras',
        description: 'Naranjas jugosas y dulces, cargadas de vitamina C. Perfectas para jugos naturales y para disfrutar en cualquier momento.',
        reviews: [
            { author: 'Sofía H.', rating: 5, text: 'Las mejores naranjas de la zona', date: '2024-03-12' }
        ]
    },
    {
        id: 4,
        name: 'Verduras',
        price: 10000,
        image: 'Images/verduras.webp',
        category: 'Frutas y verduras',
        description: 'Selección de verduras frescas de temporada, cultivadas localmente para garantizar su frescura y sabor.',
        reviews: [
            { author: 'Diego F.', rating: 4, text: 'Frescas y variadas', date: '2024-03-11' },
            { author: 'Elena V.', rating: 5, text: 'Excelente calidad', date: '2024-03-05' }
        ]
    },
    {
        id: 5,
        name: 'Pollo fresco',
        price: 10000,
        image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=600&h=600&fit=crop',
        category: 'Carnes frescas',
        description: 'Pollo fresco de corral, criado sin hormonas. Carne tierna y jugosa, ideal para tus comidas familiares.',
        reviews: [
            { author: 'Roberto M.', rating: 5, text: 'Pollo de excelente calidad', date: '2024-03-13' },
            { author: 'Carmen D.', rating: 4, text: 'Buen precio y frescura', date: '2024-03-09' }
        ]
    },
    {
        id: 6,
        name: 'Carne de res',
        price: 10000,
        image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?w=600&h=600&fit=crop',
        category: 'Carnes frescas',
        description: 'Carne de res seleccionada, con el marmoleo perfecto para garantizar sabor y terneza. Ideal para asados y guisos.',
        reviews: [
            { author: 'Jorge A.', rating: 5, text: 'La mejor carne de la ciudad', date: '2024-03-10' }
        ]
    },
    {
        id: 7,
        name: 'Carne de cerdo',
        price: 10000,
        image: 'Images/cerdo.webp',
        category: 'Carnes frescas',
        description: 'Carne de cerdo fresca y magra, perfecta para tus recetas tradicionales. Libre de aditivos y conservantes.',
        reviews: [
            { author: 'Laura S.', rating: 4, text: 'Buena calidad, fresca', date: '2024-03-07' },
            { author: 'Andrés P.', rating: 5, text: 'Excelente para mis recetas', date: '2024-02-25' }
        ]
    },
    {
        id: 8,
        name: 'Embutidos',
        price: 10000,
        image: 'Images/embutidos.webp',
        category: 'Carnes frescas',
        description: 'Variedad de embutidos artesanales, preparados con recetas tradicionales y los mejores cortes de carne.',
        reviews: [
            { author: 'Marta L.', rating: 4, text: 'Buen sabor y variedad', date: '2024-03-06' }
        ]
    },
    {
        id: 101,
        name: 'Pechuga de pollo',
        price: 12500,
        image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=600&h=600&fit=crop',
        category: 'Carnes frescas',
        description: 'Pechuga de pollo fresca, sin piel y deshuesada. Fuente magra de proteína, perfecta para una alimentación saludable.',
        reviews: [
            { author: 'Lucía R.', rating: 5, text: 'Muy fresca y tierna', date: '2024-03-16' },
            { author: 'Tomás G.', rating: 4, text: 'Buena relación calidad-precio', date: '2024-03-12' },
            { author: 'Valentina P.', rating: 5, text: 'La mejor pechuga del mercado', date: '2024-03-08' }
        ]
    },
    {
        id: 102,
        name: 'Lomo de cerdo',
        price: 15000,
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&h=600&fit=crop',
        category: 'Carnes frescas',
        description: 'Lomo de cerdo fresco y magro, ideal para asar o preparar al horno. Carne suave y jugosa.',
        reviews: [
            { author: 'Felipe M.', rating: 5, text: 'Excelente corte, muy fresco', date: '2024-03-14' },
            { author: 'Diana C.', rating: 4, text: 'Muy bueno para horno', date: '2024-03-09' }
        ]
    },
    {
        id: 103,
        name: 'Carne de res',
        price: 18000,
        image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?w=600&h=600&fit=crop',
        category: 'Carnes frescas',
        description: 'Corte especial de carne de res, madurada para máximo sabor. Perfecta para parrilla y preparaciones gourmet.',
        reviews: [
            { author: 'Santiago R.', rating: 5, text: 'Carne de primera calidad', date: '2024-03-13' }
        ]
    },
    {
        id: 104,
        name: 'Chorizo',
        price: 8000,
        image: 'Images/embutidos.webp',
        category: 'Carnes frescas',
        description: 'Chorizo artesanal, preparado con carne de cerdo seleccionada y especias tradicionales. Ideal para asados.',
        reviews: [
            { author: 'Camilo G.', rating: 4, text: 'Muy sabroso, buen sabor', date: '2024-03-11' },
            { author: 'Isabel T.', rating: 5, text: 'Perfecto para la parrilla', date: '2024-03-05' }
        ]
    },
    {
        id: 105,
        name: 'Punta de anca',
        price: 22000,
        image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&h=600&fit=crop',
        category: 'Carnes frescas',
        description: 'Punta de anca premium, corte suave y jugoso ideal para asar. Marmoleo perfecto para máximo sabor.',
        reviews: [
            { author: 'Andrés H.', rating: 5, text: 'Espectacular corte', date: '2024-03-10' }
        ]
    },
    {
        id: 106,
        name: 'Muslo de pollo',
        price: 9500,
        image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=600&h=600&fit=crop',
        category: 'Carnes frescas',
        description: 'Muslos de pollo frescos y jugosos, perfectos para hornear, freír o preparar en salsa.',
        reviews: [
            { author: 'Natalia V.', rating: 4, text: 'Buen tamaño y frescura', date: '2024-03-09' },
            { author: 'Oscar L.', rating: 5, text: 'Deliciosos al horno', date: '2024-03-04' }
        ]
    },
    {
        id: 107,
        name: 'Chuleta de cerdo',
        price: 14000,
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&h=600&fit=crop',
        category: 'Carnes frescas',
        description: 'Chuletas de cerdo gruesas y jugosas, perfectas para la parrilla o sartén. Marinadas listas para cocinar.',
        reviews: [
            { author: 'Marcela R.', rating: 5, text: 'Las mejores chuletas', date: '2024-03-08' }
        ]
    },
    {
        id: 108,
        name: 'Molido de res',
        price: 16000,
        image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?w=600&h=600&fit=crop',
        category: 'Carnes frescas',
        description: 'Carne de res molida fresca, con el punto perfecto de grasa para tus hamburguesas, pastas y albóndigas.',
        reviews: [
            { author: 'Ricardo M.', rating: 4, text: 'Buena calidad, fresca', date: '2024-03-07' },
            { author: 'Patricia A.', rating: 5, text: 'Perfecta para hamburguesas', date: '2024-03-02' }
        ]
    },
    {
        id: 109,
        name: 'Salchicha',
        price: 6500,
        image: 'Images/embutidos.webp',
        category: 'Carnes frescas',
        description: 'Salchichas frescas de cerdo, preparadas artesanalmente. Ideales para desayunos, asados y comidas rápidas.',
        reviews: [
            { author: 'Julián P.', rating: 4, text: 'Buen sabor, buen precio', date: '2024-03-06' }
        ]
    },
    {
        id: 110,
        name: 'Ribeye',
        price: 28000,
        image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&h=600&fit=crop',
        category: 'Carnes frescas',
        description: 'Ribeye premium con marmoleo excepcional. Corte de alta calidad para los paladares más exigentes.',
        reviews: [
            { author: 'Eduardo S.', rating: 5, text: 'El mejor ribeye que he probado', date: '2024-03-05' },
            { author: 'Gabriela N.', rating: 5, text: 'Espectacular calidad', date: '2024-02-28' }
        ]
    },
    {
        id: 111,
        name: 'Ala de pollo',
        price: 7000,
        image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=600&h=600&fit=crop',
        category: 'Carnes frescas',
        description: 'Alitas de pollo frescas, perfectas para tus reuniones y eventos. Crujientes por fuera, jugosas por dentro.',
        reviews: [
            { author: 'Fernando C.', rating: 4, text: 'Buenas para compartir', date: '2024-03-04' }
        ]
    },
    {
        id: 112,
        name: 'Tocino',
        price: 11000,
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&h=600&fit=crop',
        category: 'Carnes frescas',
        description: 'Tocino ahumado artesanalmente, con el punto perfecto de grasa. Crujiente y lleno de sabor.',
        reviews: [
            { author: 'Adriana M.', rating: 5, text: 'El mejor tocino, muy crujiente', date: '2024-03-03' },
            { author: 'Héctor R.', rating: 4, text: 'Excelente para desayunos', date: '2024-02-27' }
        ]
    },
    {
        id: 113,
        name: 'Costilla de res',
        price: 19000,
        image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?w=600&h=600&fit=crop',
        category: 'Carnes frescas',
        description: 'Costillas de res premium, perfectas para cocción lenta. Carne que se desprende del hueso.',
        reviews: [
            { author: 'Daniel G.', rating: 5, text: 'Espectacular al horno', date: '2024-03-02' }
        ]
    },
    {
        id: 114,
        name: 'Mortadela',
        price: 5500,
        image: 'Images/embutidos.webp',
        category: 'Carnes frescas',
        description: 'Mortadela artesanal, preparada con receta tradicional. Perfecta para sanduches y picadas.',
        reviews: [
            { author: 'Rosa M.', rating: 4, text: 'Buena calidad y sabor', date: '2024-03-01' }
        ]
    },
    {
        id: 115,
        name: 'Pollo entero',
        price: 16000,
        image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=600&h=600&fit=crop',
        category: 'Carnes frescas',
        description: 'Pollo entero fresco, ideal para tus comidas familiares. Listo para asar, hornear o preparar en tus recetas favoritas.',
        reviews: [
            { author: 'Liliana P.', rating: 5, text: 'Pollo fresco y grande', date: '2024-02-29' },
            { author: 'Mauricio T.', rating: 4, text: 'Buena relación calidad-precio', date: '2024-02-20' }
        ]
    },
    {
        id: 116,
        name: 'Costilla de cerdo',
        price: 13000,
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&h=600&fit=crop',
        category: 'Carnes frescas',
        description: 'Costillas de cerdo frescas, perfectas para BBQ. Carne jugosa que se desprende del hueso.',
        reviews: [
            { author: 'Alejandro V.', rating: 5, text: 'Perfectas para asar', date: '2024-02-26' }
        ]
    },
    {
        id: 117,
        name: 'Punta de anca',
        price: 22000,
        image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&h=600&fit=crop',
        category: 'Carnes frescas',
        description: 'Punta de anca seleccionada, corte suave y magro. Ideal para quienes buscan una carne tierna con poco grasa.',
        reviews: [
            { author: 'Cristina A.', rating: 5, text: 'Siempre compro aquí', date: '2024-02-24' }
        ]
    },
    {
        id: 118,
        name: 'Jamón',
        price: 12000,
        image: 'Images/embutidos.webp',
        category: 'Carnes frescas',
        description: 'Jamón de cerdo cocido, horneado lentamente para desarrollar su sabor característico. Ideal para sanduches.',
        reviews: [
            { author: 'Verónica S.', rating: 4, text: 'Muy buen jamón', date: '2024-02-23' },
            { author: 'Gustavo M.', rating: 5, text: 'Excelente calidad', date: '2024-02-18' }
        ]
    },
    {
        id: 119,
        name: 'Bistec',
        price: 14500,
        image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?w=600&h=600&fit=crop',
        category: 'Carnes frescas',
        description: 'Bistec de res cortado al momento. Carne tierna ideal para cocinar a la plancha o parrilla.',
        reviews: [
            { author: 'Hugo L.', rating: 4, text: 'Buena carne, buen precio', date: '2024-02-22' }
        ]
    },
    {
        id: 120,
        name: 'Pollito',
        price: 11000,
        image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=600&h=600&fit=crop',
        category: 'Carnes frescas',
        description: 'Pollito fresco, tamaño ideal para comidas pequeñas. Carne tierna y jugosa, perfecto para tus recetas.',
        reviews: [
            { author: 'Dolores H.', rating: 5, text: 'Tierno y fresco', date: '2024-02-21' }
        ]
    }
];

function getProductById(id) {
    return PRODUCTS.find(p => p.id === parseInt(id));
}

function getRelatedProducts(product, limit = 6) {
    return PRODUCTS
        .filter(p => p.id !== product.id && p.category === product.category)
        .slice(0, limit);
}

function getStarRating(rating) {
    const full = Math.floor(rating);
    const empty = 5 - full;
    return '★'.repeat(full) + '☆'.repeat(empty);
}
