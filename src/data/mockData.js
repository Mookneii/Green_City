export const machines = [
  { id:'GC-001', name:'ITC Smart Recycling Station', area:'Russian Federation Blvd', short:'ITC Campus', lat:11.568, lng:104.891, status:'Online', capacity:38, today:24.8, distance:'0.8 km' },
  { id:'GC-002', name:'Toul Kork Green Station', area:'St 315, Toul Kork', short:'Toul Kork', lat:11.574, lng:104.899, status:'Online', capacity:61, today:18.2, distance:'1.6 km' },
  { id:'GC-003', name:'Olympic Market Recycling Station', area:'Olympic Market', short:'Olympic Market', lat:11.556, lng:104.916, status:'Online', capacity:74, today:31.4, distance:'2.4 km' },
  { id:'GC-004', name:'Riverside Eco Station', area:'Sisowath Quay', short:'Riverside', lat:11.570, lng:104.930, status:'Offline', capacity:22, today:12.6, distance:'3.1 km' },
  { id:'GC-005', name:'BKK Green Station', area:'Boeung Keng Kang', short:'BKK', lat:11.545, lng:104.926, status:'Online', capacity:46, today:19.7, distance:'3.8 km' }
]
export const users = [
  {name:'Sophea Chann', points:1840, kg:18.4, school:'ITC'}, {name:'Dara Vann',points:1620,kg:16.2,school:'RUPP'}, {name:'Nita Sok',points:1450,kg:14.5,school:'NUM'}, {name:'Vicheka Lim',points:1210,kg:12.1,school:'ITC'}, {name:'Bora Heng',points:980,kg:9.8,school:'RUPP'}, {name:'Malis Chea',points:860,kg:8.6,school:'PPIU'}, {name:'Chenda Ros',points:750,kg:7.5,school:'ITC'}, {name:'Pisey Keo',points:690,kg:6.9,school:'NUM'}, {name:'Rithy Mao',points:530,kg:5.3,school:'RUPP'}, {name:'Kanha Sok',points:420,kg:4.2,school:'ITC'}
]
export const challenges = [
  {id:'bottle-hero',name:'Bottle Hero',description:'Recycle 3 plastic bottles today.',period:'Daily',target:3,metric:'bottles',reward:25,icon:'recycle'},
  {id:'green-explorer',name:'Green Explorer',description:'Visit a recycling machine today.',period:'Daily',target:1,metric:'visits',reward:20,icon:'map'},
  {id:'pet-lover',name:'Pet Lover',description:'Feed your companion once today.',period:'Daily',target:1,metric:'feeds',reward:15,icon:'heart'},
  {id:'daily-recycler',name:'Daily Recycler',description:'Complete one verified deposit.',period:'Daily',target:1,metric:'sessions',reward:30,icon:'check'},
  {id:'eco-warrior',name:'Eco Warrior',description:'Recycle 20 bottles this week.',period:'Weekly',target:20,metric:'bottles',reward:100,icon:'leaf'},
  {id:'station-hopper',name:'Green Explorer',description:'Visit 3 different stations this week.',period:'Weekly',target:3,metric:'uniqueVisits',reward:80,icon:'map'},
  {id:'pet-guardian',name:'Pet Guardian',description:'Feed your pet 5 times this week.',period:'Weekly',target:5,metric:'feeds',reward:60,icon:'heart'},
  {id:'weekly-champion',name:'Weekly Champion',description:'Complete 5 daily challenges.',period:'Weekly',target:5,metric:'dailyWins',reward:120,icon:'award'},
  {id:'campus-clean',name:'Campus Clean-up',description:'Help the ITC community reach 100 kg.',period:'Community',target:100,metric:'communityKg',reward:150,icon:'globe'}
]
export const rewards = [
  {id:'coffee',name:'Free iced coffee',category:'Coupons',description:'One refreshing drink at Brown Coffee.',cost:350,stock:24,icon:'coffee',color:'sand'},
  {id:'transit',name:'PassApp ride credit',category:'Coupons',description:'A $2 credit for your next ride.',cost:500,stock:18,icon:'ticket',color:'blue'},
  {id:'leaf-pin',name:'Little leaf pin',category:'Accessories',description:'A tiny badge for a big impact.',cost:280,stock:42,icon:'leaf',color:'mint'},
  {id:'scarf',name:'Canopy scarf',category:'Accessories',description:'A soft, forest-inspired pet scarf.',cost:420,stock:16,icon:'sparkles',color:'rose'},
  {id:'coral-shell',name:'Coral-shell skin',category:'Pet skins',description:'A warm sunset look for your turtle.',cost:700,stock:12,icon:'shell',color:'coral'},
  {id:'night-garden',name:'Night garden skin',category:'Pet skins',description:'A rare glow after dark.',cost:900,stock:8,icon:'moon',color:'violet'},
  {id:'seedling',name:'First seedling',category:'Collectibles',description:'A keepsake for your first 10 kg.',cost:600,stock:30,icon:'sprout',color:'mint'},
  {id:'golden-acorn',name:'Golden acorn',category:'Collectibles',description:'A limited community champion collectible.',cost:1200,stock:5,icon:'award',color:'sand'}
]
export const pets = [
  {name:'Moss',kind:'Mekong turtle',rarity:'Common',level:4,unlocked:true,description:'A curious little guardian who loves a clean river.'},
  {name:'Pip',kind:'Clouded leopard',rarity:'Rare',level:1,unlocked:false,description:'Quiet paws, bright eyes, and a love for the forest canopy.'},
  {name:'Bopha',kind:'Asian elephant',rarity:'Epic',level:1,unlocked:false,description:'A gentle giant who remembers every kind deed.'},
  {name:'Lotus',kind:'Mekong dolphin',rarity:'Legendary',level:1,unlocked:false,description:'A rare river spirit, found only through community impact.'}
]
