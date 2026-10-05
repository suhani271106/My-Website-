import { Product } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_glamour_model_1790950467284.jpg';

export const BEAUTY_PRODUCTS: Product[] = [
  {
    id: 'b-1',
    name: 'Velvet Matte Lipstick',
    category: 'Lipstick',
    type: 'makeup',
    price: 1499,
    originalPrice: 1899,
    image: '/src/assets/images/beauty_velvet_lipstick_1790950482875.jpg',
    description: 'A luxurious velvet-matte formula infused with hydrating rosehip oil and vitamin E. Delivers up to 12 hours of rich, featherweight color without drying.',
    rating: 4.9,
    reviewsCount: 342,
    inStock: true,
    options: {
      name: 'Shade',
      values: ['Ruby Velvet', 'Nude Blush', 'Berry Elegance', 'Petal Pink']
    },
    features: ['12-Hour Longwear', 'Non-drying formulation', 'Infused with Vitamin E', 'Cruelty-Free']
  },
  {
    id: 'b-2',
    name: 'Volume Lash Mascara',
    category: 'Mascara',
    type: 'makeup',
    price: 1199,
    originalPrice: 1499,
    image: '/src/assets/images/beauty_volume_mascara_1790950495119.jpg',
    description: 'Instant dramatic volume and sky-high lift. Our custom hourglass wand coats every single lash in deep obsidian pigments without clumping or flaking.',
    rating: 4.8,
    reviewsCount: 289,
    inStock: true,
    options: {
      name: 'Formula',
      values: ['Intense Carbon Black', 'Waterproof Noir', 'Soft Espresso']
    },
    features: ['Hourglass curve wand', 'Smudge-proof & flake-free', 'Ophthalmologist tested', 'Buildable volume']
  },
  {
    id: 'b-3',
    name: 'Glitter Eyeshadow Palette',
    category: 'Eyeshadow',
    type: 'makeup',
    price: 2299,
    originalPrice: 2799,
    image: '/src/assets/images/beauty_eyeshadow_palette_1790950506909.jpg',
    description: '12 high-pigment shades spanning buttery mattes, multidimensional metallics, and pressed glitter foils. Perfect for day-to-night glamour looks.',
    rating: 5.0,
    reviewsCount: 512,
    inStock: true,
    options: {
      name: 'Palette',
      values: ['Sunset Mirage', 'Champagne Glow', 'Rose Noir']
    },
    features: ['12 High-pigment pans', 'Zero fallout pressed formula', 'Dual-ended brush included', 'Mirror built-in']
  },
  {
    id: 'b-4',
    name: 'Liquid Foundation',
    category: 'Foundation',
    type: 'makeup',
    price: 1899,
    originalPrice: 2299,
    image: '/src/assets/images/beauty_liquid_foundation_1790950519355.jpg',
    description: 'Weightless medium-to-full buildable coverage with a luminous, second-skin finish. Formulated with hyaluronic acid for 24-hour hydration.',
    rating: 4.7,
    reviewsCount: 198,
    inStock: true,
    options: {
      name: 'Shade',
      values: ['Fair Ivory 10N', 'Light Warm 20W', 'Medium Neutral 35N', 'Tan Amber 50W', 'Deep Golden 70N']
    },
    features: ['Hyaluronic hydration', 'Natural radiant finish', 'Transfer-resistant', 'SPF 20 Broad Spectrum']
  },
  {
    id: 'b-5',
    name: 'Silk Satin Lip Gloss',
    category: 'Lipstick',
    type: 'makeup',
    price: 1299,
    originalPrice: 1599,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
    description: 'Non-sticky mirror gloss delivering sheer glassy shine and plump lips with conditioning peptides and shea butter.',
    rating: 4.8,
    reviewsCount: 167,
    inStock: true,
    options: {
      name: 'Shade',
      values: ['Glazed Rosé', 'Golden Honey', 'Clear Quartz']
    },
    features: ['High-shine glass finish', 'Peptide lip volumizer', 'Jojoba & Shea butter']
  },
  {
    id: 'b-6',
    name: 'Velvet Petal Soft Powder Blush',
    category: 'Blush',
    type: 'makeup',
    price: 1499,
    originalPrice: 1799,
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80',
    description: 'Silky micro-milled powder blush delivering a soft-focus, radiant bloom of natural flush that blends effortlessly into the skin.',
    rating: 4.9,
    reviewsCount: 215,
    inStock: true,
    options: {
      name: 'Shade',
      values: ['Peachy Blossom', 'Rose Radiance', 'Coral Sunset', 'Dusty Mauve']
    },
    features: ['Soft-blur radiant pigment', 'Buildable natural flush', 'Infused with botanical squalane']
  },
  {
    id: 'b-7',
    name: 'Precision Waterproof Gel Eyeliner',
    category: 'Eyeliner',
    type: 'makeup',
    price: 999,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
    description: 'Intense jet-black waterproof gel eyeliner pencil engineered with a micro-fine precision tip. Glides seamlessly along the waterline without tugging or smudging for 24-hour ultra-defined wings.',
    rating: 4.9,
    reviewsCount: 318,
    inStock: true,
    options: {
      name: 'Shade',
      values: ['Pitch Black Kohl', 'Chocolate Noir', 'Smoked Espresso']
    },
    features: ['24-Hour Waterproof & Humidity Proof', 'Ultra-precise glide tip', 'Ophthalmologist tested', 'Built-in sharpener & smudge sponge']
  },
  {
    id: 'b-8',
    name: 'Rose Gold Shimmer Eyeshadow Dust',
    category: 'Eyeshadow',
    type: 'makeup',
    price: 1349,
    originalPrice: 1699,
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-reflective chromatic loose mineral pigments for high-impact eyelids, cheekbones, and collarbones with luminous depth.',
    rating: 4.9,
    reviewsCount: 180,
    inStock: true,
    options: {
      name: 'Reflect',
      values: ['Rose Gold Spark', 'Starlight Silver', 'Champagne Pearl']
    },
    features: ['Multi-use face & body shimmer', 'Micro-fine luminous pearls', 'Vegan & cruelty-free']
  },
  {
    id: 'b-9',
    name: 'Luminous Mineral Setting Powder',
    category: 'Foundation',
    type: 'makeup',
    price: 1699,
    originalPrice: 2099,
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-finely milled micro-powder that blurs pores, softens fine lines, and sets makeup with a luminous satin veil without flashback.',
    rating: 4.9,
    reviewsCount: 220,
    inStock: true,
    options: {
      name: 'Tone',
      values: ['Translucent', 'Translucent Honey', 'Deep Glow']
    },
    features: ['Photo-friendly micro-milled', 'Zero flashback in flash photography', 'Oil-control blurring mesh']
  },
  {
    id: 'b-10',
    name: 'Sculpting Fiber Lash Mascara',
    category: 'Mascara',
    type: 'makeup',
    price: 1249,
    originalPrice: 1599,
    image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?auto=format&fit=crop&w=800&q=80',
    description: 'Enriched with nourishing peptides and lengthening fibers to sculpt defined, fan-like extension lashes from root to tip.',
    rating: 4.8,
    reviewsCount: 172,
    inStock: true,
    options: {
      name: 'Tone',
      values: ['Jet Black Noir', 'Midnight Blue']
    },
    features: ['Lash extension effect', 'Peptide conditioning serum', 'Clump-free tapered wand']
  },
  {
    id: 'b-11',
    name: 'Starlight Glow Highlighter Palette',
    category: 'Eyeshadow',
    type: 'makeup',
    price: 1999,
    originalPrice: 2499,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    description: 'Quad-tone baked illuminating strobing powder palette that reflects ambient light for an ethereal glass-skin radiance on cheekbones and brow arches.',
    rating: 5.0,
    reviewsCount: 264,
    inStock: true,
    options: {
      name: 'Palette',
      values: ['Celestial Champagne', 'Gilded Rose', 'Golden Bronze']
    },
    features: ['Baked micro-pearl pigment', 'Multi-dimensional strobing glow', 'Silky weightless texture']
  },
  {
    id: 'b-12',
    name: 'Velvet Lip Contour Pencil',
    category: 'Lipstick',
    type: 'makeup',
    price: 899,
    originalPrice: 1199,
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-creamy matte lip liner pencil designed to shape, contour, and plump the lips with featherweight, bleed-proof definition.',
    rating: 4.8,
    reviewsCount: 195,
    inStock: true,
    options: {
      name: 'Shade',
      values: ['Spiced Caramel', 'Warm Nude', 'Deep Crimson', 'Dusty Rose']
    },
    features: ['Feather-proof lip definition', 'Infused with Jojoba Seed Oil', 'Glides without skipping']
  }
];

export const FASHION_PRODUCTS: Product[] = [
  {
    id: 'f-1',
    name: 'Flowy Maxi Dress',
    category: 'Dresses',
    type: 'fashion',
    price: 3999,
    originalPrice: 4999,
    image: '/src/assets/images/fashion_maxi_dress_1790950527837.jpg',
    description: 'Cut from fluid champagne silk-satin, this cowl-neck slip maxi dress features an alluring open back, delicate adjustable straps, and a romantic sweeping silhouette.',
    rating: 4.9,
    reviewsCount: 421,
    inStock: true,
    options: {
      name: 'Size',
      values: ['XS (US 0-2)', 'S (US 4-6)', 'M (US 8-10)', 'L (US 12-14)', 'XL (US 16)']
    },
    features: ['100% Premium Silk Satin', 'Draped cowl neckline', 'Adjustable cross-back straps', 'Side slit detail']
  },
  {
    id: 'f-2',
    name: 'Crop Top Set',
    category: 'Tops',
    type: 'fashion',
    price: 2499,
    originalPrice: 3299,
    image: '/src/assets/images/fashion_crop_top_set_1790950543140.jpg',
    description: 'A contemporary two-piece ensemble featuring a ribbed crew-neck knit cropped top and matching high-waisted ribbed midi skirt in an artisanal oat hue.',
    rating: 4.8,
    reviewsCount: 310,
    inStock: true,
    options: {
      name: 'Size',
      values: ['XS', 'S', 'M', 'L']
    },
    features: ['Breathable cotton-viscose rib', 'Elasticated comfortable waistline', 'Flattering contour silhouette', 'Can be styled together or separate']
  },
  {
    id: 'f-3',
    name: 'High Waist Jeans',
    category: 'Bottoms',
    type: 'fashion',
    price: 3199,
    originalPrice: 4199,
    image: '/src/assets/images/fashion_high_waist_jeans_1790950557042.jpg',
    description: 'Crafted from authentic comfort-stretch denim in a clean vintage light wash. Designed with an ultra-flattering 11-inch rise and straight full-length leg.',
    rating: 4.9,
    reviewsCount: 650,
    inStock: true,
    options: {
      name: 'Waist Size',
      values: ['26', '28', '30', '32', '34']
    },
    features: ['Comfort stretch cotton blend', '11-inch sky-high rise', 'Reinforced antique brass hardware', 'Ankle grazing straight leg']
  },
  {
    id: 'f-4',
    name: 'Denim Jacket',
    category: 'Outerwear',
    type: 'fashion',
    price: 4499,
    originalPrice: 5799,
    image: '/src/assets/images/fashion_denim_jacket_1790950567841.jpg',
    description: 'The quintessential oversized denim jacket. Featuring classic contrast stitching, dual chest flap pockets, and authentic vintage lived-in fading.',
    rating: 4.7,
    reviewsCount: 388,
    inStock: true,
    options: {
      name: 'Size',
      values: ['S (Relaxed)', 'M (Oversized)', 'L (Boyfriend Fit)']
    },
    features: ['100% Heavyweight Cotton Denim', 'Durable shank button closure', 'Welt hand-warmer pockets', 'Pre-washed soft feel']
  },
  {
    id: 'f-5',
    name: 'Emerald Satin Evening Wrap Dress',
    category: 'Dresses',
    type: 'fashion',
    price: 4999,
    originalPrice: 6499,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80',
    description: 'A striking emerald green wrap dress with cascading ruffle trim and self-tie sash at the waist for an unforgettable red-carpet glamour look.',
    rating: 4.9,
    reviewsCount: 154,
    inStock: true,
    options: {
      name: 'Size',
      values: ['XS', 'S', 'M', 'L', 'XL']
    },
    features: ['Jewel-tone emerald satin', 'Self-tie wrap closure', 'V-neckline', 'Floor-length drape']
  },
  {
    id: 'f-6',
    name: 'Silk Organza Relaxed Blouse',
    category: 'Tops',
    type: 'fashion',
    price: 2899,
    originalPrice: 3699,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
    description: 'Relaxed tailored blouse woven from airy silk and French linen. Features mother-of-pearl buttons and exaggerated cuff detailing.',
    rating: 4.8,
    reviewsCount: 204,
    inStock: true,
    options: {
      name: 'Size',
      values: ['XS', 'S', 'M', 'L']
    },
    features: ['Mulberry Silk Blend', 'Natural mother-of-pearl buttons', 'Relaxed tailored collar']
  },
  {
    id: 'f-7',
    name: 'Tailored Wide-Leg Trousers',
    category: 'Bottoms',
    type: 'fashion',
    price: 3499,
    originalPrice: 4499,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80',
    description: 'High-waisted tailored trousers crafted with crisp front pleats and a structured straight leg silhouette for effortless everyday sophistication.',
    rating: 4.9,
    reviewsCount: 178,
    inStock: true,
    options: {
      name: 'Size',
      values: ['26', '28', '30', '32', '34']
    },
    features: ['Crisp front pleats', 'Fluid drape fabric', 'Concealed hook & zip closure']
  },
  {
    id: 'f-8',
    name: 'Double-Breasted Wool Trench',
    category: 'Outerwear',
    type: 'fashion',
    price: 7499,
    originalPrice: 9999,
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=800&q=80',
    description: 'Classic tailored trench silhouette crafted in camel wool blend. Features storm flaps, tortoiseshell buttons, and a belted waistline.',
    rating: 5.0,
    reviewsCount: 290,
    inStock: true,
    options: {
      name: 'Size',
      values: ['S', 'M', 'L']
    },
    features: ['Wool-blend warmth', 'Detachable waist belt', 'Satin interior lining']
  },
  {
    id: 'f-9',
    name: 'Luxe Cashmere Oversized Hoodie',
    category: 'Hoodies',
    type: 'fashion',
    price: 3999,
    originalPrice: 5299,
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    description: 'Plush, ultra-soft cashmere-cotton blend oversized hoodie with dropped shoulders, ribbed cuffs, and cozy kangaroo pocket.',
    rating: 4.9,
    reviewsCount: 245,
    inStock: true,
    options: {
      name: 'Size',
      values: ['S', 'M', 'L', 'XL']
    },
    features: ['Ultra-soft cashmere-cotton fleece', 'Relaxed oversized drape', 'Thermal lined hood']
  },
  {
    id: 'f-10',
    name: 'Pleated Satin High-Rise Midi Skirt',
    category: 'Skirts',
    type: 'fashion',
    price: 2999,
    originalPrice: 3899,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80',
    description: 'Fluid accordion-pleated midi skirt in radiant champagne-rose satin. Features a comfortable elasticized waistband with elegant movement.',
    rating: 4.8,
    reviewsCount: 198,
    inStock: true,
    options: {
      name: 'Size',
      values: ['XS', 'S', 'M', 'L']
    },
    features: ['High-sheen accordion pleating', 'Elasticated comfortable waist', 'Flattering A-line flow']
  },
  {
    id: 'f-11',
    name: 'Tailored Structured Wool Blazer',
    category: 'Outerwear',
    type: 'fashion',
    price: 5999,
    originalPrice: 7499,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80',
    description: 'Power dressing elevated. Italian-inspired single-breasted blazer featuring sculpted padded shoulders, notched lapels, and horn button accents.',
    rating: 4.9,
    reviewsCount: 185,
    inStock: true,
    options: {
      name: 'Size',
      values: ['XS', 'S', 'M', 'L']
    },
    features: ['Structured shoulder pads', 'Premium wool-blend tailoring', 'Satin inner lining']
  },
  {
    id: 'f-12',
    name: 'Vintage Floral Midi Tea Dress',
    category: 'Dresses',
    type: 'fashion',
    price: 3799,
    originalPrice: 4699,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80',
    description: 'Charming vintage-inspired floral print midi dress cut with puff sleeves, a flattering sweetheart neckline, and a gently fluted skirt.',
    rating: 4.8,
    reviewsCount: 220,
    inStock: true,
    options: {
      name: 'Size',
      values: ['XS', 'S', 'M', 'L']
    },
    features: ['Airy crepe floral chiffon', 'Sweetheart neckline with puff sleeves', 'Concealed back zip']
  },
  {
    id: 'f-13',
    name: 'Cozy Chunky Knit Cardigan',
    category: 'Tops',
    type: 'fashion',
    price: 2799,
    originalPrice: 3499,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80',
    description: 'Hand-knit feel textured oversized cardigan woven in soft cream bouclé yarn with tortoiseshell buttons and drop-shoulder styling.',
    rating: 4.9,
    reviewsCount: 160,
    inStock: true,
    options: {
      name: 'Size',
      values: ['S/M', 'L/XL']
    },
    features: ['Ultra-soft bouclé knit yarn', 'Tortoiseshell statement buttons', 'Cozy relaxed fit']
  },
  {
    id: 'f-14',
    name: 'Sleek Ruched Bodycon Party Dress',
    category: 'Dresses',
    type: 'fashion',
    price: 4299,
    originalPrice: 5499,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80',
    description: 'Sultry midnight cocktail dress featuring asymmetric side ruching, a sculpted silhouette, and comfortable stretch jersey fabric.',
    rating: 4.9,
    reviewsCount: 275,
    inStock: true,
    options: {
      name: 'Size',
      values: ['XS', 'S', 'M', 'L']
    },
    features: ['Contouring stretch jersey', 'Flattering side ruching detail', 'Mini-to-midi hemline']
  }
];

export const BRAND_PARTNERS = [
  { name: 'Lumière', subtitle: 'Parisian Haute Parfumerie & Glow' },
  { name: 'AURORA', subtitle: 'Nordic Clean Radiance' },
  { name: 'NOIR', subtitle: 'High-Fashion Statement Wear' },
  { name: 'Velvet', subtitle: 'Silk & Cashmere Essentials' },
  { name: 'BELLE', subtitle: 'Bespoke Evening Glamour' },
];
