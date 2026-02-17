// Products Database (120+ items across 6 categories)
const productsDatabase = [
    // SHOES (20 items)
    { id: 1, name: "Nike Air Max 270", category: "shoes", brand: "Nike", price: 45000, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400", rating: 4.5, description: "Comfortable running shoes with excellent cushioning" },
    { id: 2, name: "Adidas Ultraboost", category: "shoes", brand: "Adidas", price: 52000, image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400", rating: 4.8, description: "Premium running shoes for maximum comfort" },
    { id: 3, name: "Puma RS-X", category: "shoes", brand: "Puma", price: 38000, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400", rating: 4.3, description: "Retro-inspired sneakers with modern tech" },
    { id: 4, name: "Reebok Classic Leather", category: "shoes", brand: "Reebok", price: 32000, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400", rating: 4.2, description: "Timeless classic leather sneakers" },
    { id: 5, name: "New Balance 574", category: "shoes", brand: "New Balance", price: 41000, image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400", rating: 4.4, description: "Iconic retro running shoes" },
    { id: 6, name: "Converse Chuck Taylor", category: "shoes", brand: "Converse", price: 25000, image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400", rating: 4.6, description: "Classic canvas high-top sneakers" },
    { id: 7, name: "Vans Old Skool", category: "shoes", brand: "Vans", price: 28000, image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400", rating: 4.5, description: "Iconic skate shoes with side stripe" },
    { id: 8, name: "Nike Jordan 1", category: "shoes", brand: "Nike", price: 65000, image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400", rating: 4.9, description: "Legendary basketball shoes" },
    { id: 9, name: "Adidas Stan Smith", category: "shoes", brand: "Adidas", price: 35000, image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400", rating: 4.7, description: "Clean minimalist tennis shoes" },
    { id: 10, name: "Puma Suede Classic", category: "shoes", brand: "Puma", price: 30000, image: "https://images.unsplash.com/photo-1584735175097-719d848f8449?w=400", rating: 4.4, description: "Iconic suede lifestyle sneakers" },
    { id: 11, name: "Nike Pegasus 38", category: "shoes", brand: "Nike", price: 48000, image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400", rating: 4.6, description: "Versatile running shoes for all distances" },
    { id: 12, name: "Adidas Superstar", category: "shoes", brand: "Adidas", price: 33000, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400", rating: 4.5, description: "Classic shell-toe sneakers" },
    { id: 13, name: "Under Armour HOVR", category: "shoes", brand: "Under Armour", price: 42000, image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=400", rating: 4.3, description: "Smart connected running shoes" },
    { id: 14, name: "ASICS Gel-Kayano", category: "shoes", brand: "ASICS", price: 55000, image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=400", rating: 4.7, description: "Premium stability running shoes" },
    { id: 15, name: "Skechers D'Lites", category: "shoes", brand: "Skechers", price: 27000, image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=400", rating: 4.1, description: "Chunky retro dad shoes" },
    { id: 16, name: "Timberland Boots", category: "shoes", brand: "Timberland", price: 58000, image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=400", rating: 4.8, description: "Rugged waterproof work boots" },
    { id: 17, name: "Dr. Martens 1460", category: "shoes", brand: "Dr. Martens", price: 62000, image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400", rating: 4.6, description: "Iconic 8-eye leather boots" },
    { id: 18, name: "Crocs Classic Clog", category: "shoes", brand: "Crocs", price: 15000, image: "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=400", rating: 4.2, description: "Comfortable casual clogs" },
    { id: 19, name: "Birkenstock Arizona", category: "shoes", brand: "Birkenstock", price: 35000, image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400", rating: 4.5, description: "Orthopedic cork sandals" },
    { id: 20, name: "Fila Disruptor", category: "shoes", brand: "Fila", price: 29000, image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=400", rating: 4.3, description: "Chunky platform sneakers" },

    // CLOTHING (20 items)
    { id: 21, name: "Nike Dri-FIT T-Shirt", category: "clothing", brand: "Nike", price: 8500, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400", rating: 4.4, description: "Moisture-wicking athletic tee" },
    { id: 22, name: "Adidas Trefoil Hoodie", category: "clothing", brand: "Adidas", price: 18000, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400", rating: 4.6, description: "Classic pullover hoodie" },
    { id: 23, name: "Levi's 501 Jeans", category: "clothing", brand: "Levi's", price: 22000, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400", rating: 4.8, description: "Original straight-fit denim jeans" },
    { id: 24, name: "H&M Cotton Shirt", category: "clothing", brand: "H&M", price: 6500, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400", rating: 4.2, description: "Casual button-down shirt" },
    { id: 25, name: "Zara Blazer", category: "clothing", brand: "Zara", price: 25000, image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400", rating: 4.5, description: "Tailored business blazer" },
    { id: 26, name: "Uniqlo Heattech", category: "clothing", brand: "Uniqlo", price: 7000, image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400", rating: 4.7, description: "Thermal base layer" },
    { id: 27, name: "Gap Khaki Chinos", category: "clothing", brand: "Gap", price: 12000, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400", rating: 4.3, description: "Classic slim-fit chinos" },
    { id: 28, name: "Tommy Hilfiger Polo", category: "clothing", brand: "Tommy Hilfiger", price: 14000, image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400", rating: 4.5, description: "Classic fit polo shirt" },
    { id: 29, name: "Calvin Klein Underwear Set", category: "clothing", brand: "Calvin Klein", price: 9500, image: "https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?w=400", rating: 4.6, description: "Premium cotton underwear" },
    { id: 30, name: "Puma Track Jacket", category: "clothing", brand: "Puma", price: 16000, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400", rating: 4.4, description: "Retro sports jacket" },
    { id: 31, name: "Mango Leather Jacket", category: "clothing", brand: "Mango", price: 35000, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400", rating: 4.7, description: "Genuine leather biker jacket" },
    { id: 32, name: "Forever 21 Dress", category: "clothing", brand: "Forever 21", price: 8000, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400", rating: 4.1, description: "Casual summer dress" },
    { id: 33, name: "Ralph Lauren Sweater", category: "clothing", brand: "Ralph Lauren", price: 28000, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400", rating: 4.8, description: "Cable-knit wool sweater" },
    { id: 34, name: "Columbia Jacket", category: "clothing", brand: "Columbia", price: 32000, image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400", rating: 4.6, description: "Waterproof outdoor jacket" },
    { id: 35, name: "Vans Checkered Shirt", category: "clothing", brand: "Vans", price: 11000, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400", rating: 4.3, description: "Classic flannel shirt" },
    { id: 36, name: "Champion Sweatpants", category: "clothing", brand: "Champion", price: 13000, image: "https://images.unsplash.com/photo-1560264280-88b68371db39?w=400", rating: 4.5, description: "Comfortable athletic joggers" },
    { id: 37, name: "Gucci T-Shirt", category: "clothing", brand: "Gucci", price: 85000, image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400", rating: 4.9, description: "Designer logo tee" },
    { id: 38, name: "Burberry Scarf", category: "clothing", brand: "Burberry", price: 45000, image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400", rating: 4.7, description: "Classic check cashmere scarf" },
    { id: 39, name: "North Face Vest", category: "clothing", brand: "North Face", price: 24000, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400", rating: 4.6, description: "Insulated puffer vest" },
    { id: 40, name: "Lacoste Tracksuit", category: "clothing", brand: "Lacoste", price: 38000, image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400", rating: 4.5, description: "Sport luxury tracksuit" },

    // WATCHES (20 items)
    { id: 41, name: "Rolex Submariner", category: "watches", brand: "Rolex", price: 24500000, image: "https://media.rolex.com/image/upload/q_auto:best/f_auto/c_limit,w_1920/v1727258031/rolexcom/collection/family-pages/professional-watches/submariner/top-navigation/professional-watches-submariner-all-models-navigation_m126603-0001_2210jva_001.jpg", rating: 5.0, description: "Luxury diving watch" },
    { id: 42, name: "Casio G-Shock", category: "watches", brand: "Casio", price: 85000, image: "https://media.watchia.com/catalog/product/cache/074b491b7c680a360b2429f2a25e33dc/g/a/ga-110gb-1aer.jpg", rating: 4.7, description: "Rugged digital sports watch" },
    { id: 43, name: "Seiko 5 Automatic", category: "watches", brand: "Seiko", price: 75000, image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=400", rating: 4.6, description: "Affordable automatic watch" },
    { id: 44, name: "Omega Seamaster", category: "watches", brand: "Omega", price: 4200000, image: "https://www.theluxuryhut.com/_next/image/?url=https%3A%2F%2Fassets.theluxuryhut.com%2Fcms%2Fadmin%2Fupload%2F1676267708omega-speed-master-james-bond.jpg&w=1080&q=75", rating: 4.9, description: "Professional diving watch" },
    { id: 45, name: "Tag Heuer Carrera", category: "watches", brand: "Tag Heuer", price: 1800000, image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=400", rating: 4.8, description: "Racing chronograph" },
    { id: 46, name: "Fossil Gen 6", category: "watches", brand: "Fossil", price: 95000, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400", rating: 4.4, description: "Hybrid smartwatch" },
    { id: 47, name: "Apple Watch Series 9", category: "watches", brand: "Apple", price: 180000, image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400", rating: 4.8, description: "Advanced smartwatch" },
    { id: 48, name: "Samsung Galaxy Watch", category: "watches", brand: "Samsung", price: 125000, image: "https://images.unsplash.com/photo-1579721840641-7d0e67f1204e?w=400", rating: 4.6, description: "Feature-rich smartwatch" },
    { id: 49, name: "Garmin Fenix 7", category: "watches", brand: "Garmin", price: 245000, image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400", rating: 4.7, description: "Multisport GPS watch" },
    { id: 50, name: "Fitbit Versa 4", category: "watches", brand: "Fitbit", price: 68000, image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400", rating: 4.3, description: "Fitness smartwatch" },
    { id: 51, name: "Citizen Eco-Drive", category: "watches", brand: "Citizen", price: 85000, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400", rating: 4.5, description: "Solar-powered watch" },
    { id: 52, name: "Timex Weekender", category: "watches", brand: "Timex", price: 25000, image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=400", rating: 4.2, description: "Casual everyday watch" },
    { id: 53, name: "Invicta Pro Diver", category: "watches", brand: "Invicta", price: 95000, image: "https://i5.walmartimages.com/seo/Invicta-Pro-Diver-Gold-tone-Black-Dial-40mm-Men-s-Watch-26975_87c176ec-81b9-4e35-86ec-2d19118d33af.b25c6961217a4a15ecc756027caef264.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF", rating: 4.1, description: "Affordable dive watch" },
    { id: 54, name: "Michael Kors Lexington", category: "watches", brand: "Michael Kors", price: 92000, image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=400", rating: 4.4, description: "Fashion chronograph" },
    { id: 55, name: "Daniel Wellington Classic", category: "watches", brand: "Daniel Wellington", price: 55000, image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=400", rating: 4.3, description: "Minimalist dress watch" },
    { id: 56, name: "Breitling Navitimer", category: "watches", brand: "Breitling", price: 320000, image: "https://img.chrono24.com/images/uhren/kud2ohxgw5k7-auin6q5ennl7wk6py0xg2jdr-ExtraLarge.jpg", rating: 4.9, description: "Aviation chronograph" },
    { id: 57, name: "Panerai Luminor", category: "watches", brand: "Panerai", price: 2800000, image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=400", rating: 4.8, description: "Italian luxury watch" },
    { id: 58, name: "Hublot Big Bang", category: "watches", brand: "Hublot", price: 6200000, image: "https://www.lumbers.co.uk/media/catalog/product/cache/331b7ff6869eded22b789014a7bdd2a7/0/1/0180567_1.jpg", rating: 4.9, description: "Bold luxury sports watch" },
    { id: 59, name: "Swatch Irony", category: "watches", brand: "Swatch", price: 18000, image: "https://images.unsplash.com/photo-1509941943102-10c232535736?w=400", rating: 4.0, description: "Swiss quartz watch" },
    { id: 60, name: "Orient Bambino", category: "watches", brand: "Orient", price: 52000, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400", rating: 4.5, description: "Classic dress watch" },

    // COSMETICS (20 items)
    { id: 61, name: "MAC Ruby Woo Lipstick", category: "cosmetics", brand: "MAC", price: 8500, image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400", rating: 4.7, description: "Iconic red matte lipstick" },
    { id: 62, name: "Fenty Beauty Foundation", category: "cosmetics", brand: "Fenty", price: 15000, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400", rating: 4.8, description: "Inclusive shade range foundation" },
    { id: 63, name: "Urban Decay Naked Palette", category: "cosmetics", brand: "Urban Decay", price: 22000, image: "https://girlyessentials.com.ng/wp-content/uploads/2019/01/maybellinerocket.jpg", rating: 4.9, description: "Neutral eyeshadow palette" },
    { id: 64, name: "Maybelline Mascara", category: "cosmetics", brand: "Maybelline", price: 14500, image: "https://beautygroup-shop.com/45718-product_inner/maybelline-lash-sensational-waterproof-mascara-black.jpg", rating: 4.5, description: "Lengthening mascara" },
    { id: 65, name: "L'Oréal Revitalift Serum", category: "cosmetics", brand: "L'Oréal", price: 12000, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400", rating: 4.6, description: "Anti-aging vitamin C serum" },
    { id: 66, name: "Clinique Moisture Surge", category: "cosmetics", brand: "Clinique", price: 18000, image: "https://m.media-amazon.com/images/I/61hlbmLt9sL._SL1000_.jpg", rating: 4.7, description: "Hydrating gel-cream" },
    { id: 67, name: "Estée Lauder Night Repair", category: "cosmetics", brand: "Estée Lauder", price: 35000, image: "https://static.sweetcare.com/img/prd/488/v-638200521722802989/estee-lauder-013808et_01.webp", rating: 4.9, description: "Advanced night serum" },
    { id: 68, name: "NARS Blush Orgasm", category: "cosmetics", brand: "NARS", price: 11000, image: "https://milabubeautyreview.com/wp-content/uploads/2021/12/NARS-blush.jpg", rating: 4.8, description: "Peachy pink blush" },
    { id: 69, name: "Benefit Brow Pencil", category: "cosmetics", brand: "Benefit", price: 9500, image: "https://images.unsplash.com/photo-1598452963314-b09f397a5c48?w=400", rating: 4.6, description: "Precision brow definer" },
    { id: 70, name: "The Ordinary Niacinamide", category: "cosmetics", brand: "The Ordinary", price: 3500, image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400", rating: 4.7, description: "Pore-refining serum" },
    { id: 71, name: "Neutrogena Hydro Boost", category: "cosmetics", brand: "Neutrogena", price: 6500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx7ZUKPLU_1KsMSwLna0dbxgoi2VfWV3gOXg&s", rating: 4.5, description: "Water gel moisturizer" },
    { id: 72, name: "CeraVe Cleanser", category: "cosmetics", brand: "CeraVe", price: 5000, image: "https://azurmindstorage.blob.core.windows.net/medactiv/0002375_neutrogena-hydro-boost-water-gel-50-ml_625.png", rating: 4.8, description: "Gentle foaming cleanser" },
    { id: 73, name: "Kylie Cosmetics Lip Kit", category: "cosmetics", brand: "Kylie Cosmetics", price: 13000, image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400", rating: 4.4, description: "Liquid lipstick & liner duo" },
    { id: 74, name: "Anastasia Brow Pomade", category: "cosmetics", brand: "Anastasia", price: 10500, image: "https://images.unsplash.com/photo-1598452963314-b09f397a5c48?w=400", rating: 4.7, description: "Waterproof brow pomade" },
    { id: 75, name: "Tarte Shape Tape", category: "cosmetics", brand: "Tarte", price: 12500, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400", rating: 4.8, description: "Full coverage concealer" },
    { id: 76, name: "Charlotte Tilbury Pillow Talk", category: "cosmetics", brand: "Charlotte Tilbury", price: 14000, image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400", rating: 4.9, description: "Nude pink lipstick" },
    { id: 77, name: "Glossier Cloud Paint", category: "cosmetics", brand: "Glossier", price: 28000, image: "https://hips.hearstapps.com/hmg-prod/images/glossier-cloud-paint-bronzer-65ca1b97cbfc9.jpg?crop=0.804xw:1.00xh;0.0990xw,0&resize=640:*", rating: 4.6, description: "Gel-cream blush" },
    { id: 78, name: "Bobbi Brown Skin Foundation", category: "cosmetics", brand: "Bobbi Brown", price: 19000, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400", rating: 4.7, description: "Long-wear foundation" },
    { id: 79, name: "La Mer Moisturizing Cream", category: "cosmetics", brand: "La Mer", price: 425000, image: "https://di2ponv0v5otw.cloudfront.net/posts/2025/06/08/6845f5d2b6af929ae9919e0d/m_6845f5daa9a4487fcdae88ac.jpg", rating: 4.9, description: "Luxury moisturizer" },
    { id: 80, name: "Dove Body Wash", category: "cosmetics", brand: "Dove", price: 22500, image: "https://www.myskincaremall.com/wp-content/uploads/2022/01/dovedeeplynoursihingbodywash-600x652.png", rating: 4.4, description: "Moisturizing body wash" },

    // HOME APPLIANCES (20 items)
    { id: 81, name: "LG Smart Refrigerator", category: "appliances", brand: "LG", price: 450000, image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400", rating: 4.7, description: "French door smart fridge" },
    { id: 82, name: "Samsung Washing Machine", category: "appliances", brand: "Samsung", price: 280000, image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400", rating: 4.6, description: "Front-load washer" },
    { id: 83, name: "Dyson V15 Vacuum", category: "appliances", brand: "Dyson", price: 225000, image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400", rating: 4.8, description: "Cordless stick vacuum" },
    { id: 84, name: "Philips Air Fryer", category: "appliances", brand: "Philips", price: 85000, image: "https://www.supermart.ng/cdn/shop/files/SPATECH133.jpg?v=1689805293", rating: 4.7, description: "Digital air fryer XXL" },
    { id: 85, name: "Ninja Blender", category: "appliances", brand: "Ninja", price: 205000, image: "https://i5.walmartimages.com/seo/Ninja-Mega-Kitchen-System-Blender-Processor-Nutri-Ninja-Cups-BL770_2621759f-2f20-4ef3-a4fc-c1f56ed616e1_1.994db90ebc9d7d2334ca8510624c7056.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF", rating: 4.5, description: "Professional blender" },
    { id: 86, name: "Instant Pot Duo", category: "appliances", brand: "Instant Pot", price: 152000, image: "https://m.media-amazon.com/images/I/71qc4ccAbBL._AC_UF894,1000_QL80_.jpg", rating: 4.8, description: "7-in-1 pressure cooker" },
    { id: 87, name: "Breville Espresso Machine", category: "appliances", brand: "Breville", price: 395000, image: "https://www.wholelattelove.com/cdn/shop/products/thebaristapro1_grande.jpg?v=1628539726", rating: 4.9, description: "Barista express machine" },
    { id: 88, name: "KitchenAid Stand Mixer", category: "appliances", brand: "KitchenAid", price: 165000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZcyukxdCp5NgHlQaSIo1LacklXBEwJYDEQ&s", rating: 4.8, description: "5-quart tilt-head mixer" },
    { id: 89, name: "Panasonic Microwave", category: "appliances", brand: "Panasonic", price: 38000, image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=400", rating: 4.4, description: "Inverter microwave oven" },
    { id: 90, name: "Haier Window AC", category: "appliances", brand: "Haier", price: 235000, image: "https://images.thdstatic.com/productImages/42fcb39f-1331-444b-b955-e0ce07d3bf47/svn/haier-window-air-conditioners-esa412r-64_1000.jpg", rating: 4.3, description: "1.5 ton air conditioner" },
    { id: 91, name: "Bosch Dishwasher", category: "appliances", brand: "Bosch", price: 320000, image: "https://media3.bosch-home.com/Images/600x/23657441_FreestandingDW_CTM2_Edited.jpg", rating: 4.7, description: "Built-in dishwasher" },
    { id: 92, name: "Tefal Rice Cooker", category: "appliances", brand: "Tefal", price: 128000, image: "https://ansons.ph/wp-content/uploads/2024/10/CY601D.png", rating: 4.5, description: "Fuzzy logic rice cooker" },
    { id: 93, name: "Rowenta Iron", category: "appliances", brand: "Rowenta", price: 102000, image: "https://images.offerup.com/klxkn_ETQvwqbAusgM4aQ6sYsfI=/750x750/d4cc/d4cca947b965467aabc39c70a2d73fbb.jpg", rating: 4.4, description: "Steam iron" },
    { id: 94, name: "Black+Decker Toaster", category: "appliances", brand: "Black+Decker", price: 12000, image: "https://djd1xqjx2kdnv.cloudfront.net/photos/31/24/433903_24808_XL.jpg", rating: 4.2, description: "4-slice toaster" },
    { id: 95, name: "Honeywell Air Purifier", category: "appliances", brand: "Honeywell", price: 325000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvIhmwJvy_WjbfLHB9S5S5t4ahKMJPrB1Cw&s", rating: 4.6, description: "HEPA air purifier" },
    { id: 96, name: "Shark Steam Mop", category: "appliances", brand: "Shark", price: 145000, image: "https://images.thdstatic.com/productImages/199c11ba-2ef8-4887-932a-f24fc63fbdc5/svn/shark-steam-cleaners-mops-s8201-64_600.jpg", rating: 4.5, description: "Intelligent steam mop" },
    { id: 97, name: "Cuisinart Food Processor", category: "appliances", brand: "Cuisinart", price: 148000, image: "https://images.offerup.com/MD_Y0Q6CXhPNl08UlX9_i0aPjm4=/1179x1085/31c7/31c70e3f07424a76a77cb85e1c2abdfc.jpg", rating: 4.6, description: "14-cup food processor" },
    { id: 98, name: "De'Longhi Heater", category: "appliances", brand: "De'Longhi", price: 320000, image: "https://images.offerup.com/FeoiIVKWPl6AOI-lDcgpA9TGNQs=/708x708/7c03/7c03ce5f08f640caa465d9834cf2669a.jpg", rating: 4.4, description: "Oil-filled radiator" },
    { id: 99, name: "Vornado Fan", category: "appliances", brand: "Vornado", price: 108000, image: "https://www.sportystoolshop.com//media/catalog/product/cache/aa1e99c7c52b59ff91c9edb49f6532be/m/a/main_2_6.jpg", rating: 4.3, description: "Circulator fan" },
    { id: 100, name: "Whirlpool Dryer", category: "appliances", brand: "Whirlpool", price: 295000, image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400", rating: 4.6, description: "Electric dryer" },

    // GADGETS (20 items)
    { id: 101, name: "iPhone 15 Pro Max", category: "gadgets", brand: "Apple", price: 1685000, image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80", rating: 4.9, description: "Latest flagship iPhone" },
    { id: 102, name: "Samsung Galaxy S24 Ultra", category: "gadgets", brand: "Samsung", price: 625000, image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400", rating: 4.8, description: "Flagship Android phone" },
    { id: 103, name: "MacBook Pro M3", category: "gadgets", brand: "Apple", price: 1450000, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400", rating: 4.9, description: "14-inch laptop" },
    { id: 104, name: "iPad Air", category: "gadgets", brand: "Apple", price: 385000, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400", rating: 4.7, description: "10.9-inch tablet" },
    { id: 105, name: "Sony WH-1000XM5", category: "gadgets", brand: "Sony", price: 145000, image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400", rating: 4.8, description: "Noise-canceling headphones" },
    { id: 106, name: "AirPods Pro", category: "gadgets", brand: "Apple", price: 125000, image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400", rating: 4.7, description: "Wireless earbuds with ANC" },
    { id: 107, name: "PlayStation 5", category: "gadgets", brand: "Sony", price: 295000, image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400", rating: 4.9, description: "Next-gen gaming console" },
    { id: 108, name: "Xbox Series X", category: "gadgets", brand: "Microsoft", price: 285000, image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400", rating: 4.8, description: "Powerful gaming console" },
    { id: 109, name: "Nintendo Switch OLED", category: "gadgets", brand: "Nintendo", price: 175000, image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400", rating: 4.7, description: "Hybrid gaming console" },
    { id: 110, name: "GoPro Hero 12", category: "gadgets", brand: "GoPro", price: 185000, image: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=400", rating: 4.6, description: "Action camera" },
    { id: 111, name: "DJI Mini 3 Pro", category: "gadgets", brand: "DJI", price: 425000, image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400", rating: 4.8, description: "Lightweight drone" },
    { id: 112, name: "Kindle Paperwhite", category: "gadgets", brand: "Amazon", price: 65000, image: "https://www.virginmegastore.bh/medias/1028654-main.jpg?context=bWFzdGVyfHJvb3R8NTI2NTR8aW1hZ2UvanBlZ3xhR0prTDJnNVppOHhNRFk0TXpNd01UUTJNakEwTmk4eE1ESTROalUwWDE5dFlXbHVMbXB3Wnd8YmY0MWFlY2VkNmI4M2I5ZDA2MGI3NmZjNmZhNGQzNjM1NDVkMjUxMDk5ODMxNjQ5ODNhODA1MjljMWJkYzc4MQ", rating: 4.7, description: "E-reader with backlight" },
    { id: 113, name: "Bose SoundLink", category: "gadgets", brand: "Bose", price: 135000, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400", rating: 4.6, description: "Portable Bluetooth speaker" },
    { id: 114, name: "Logitech MX Master 3", category: "gadgets", brand: "Logitech", price: 38000, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400", rating: 4.8, description: "Wireless mouse" },
    { id: 115, name: "Razer BlackWidow", category: "gadgets", brand: "Razer", price: 52000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4cbLIYQMC6jr9rZWaUSmvCXE6wx77URje-w&s", rating: 4.7, description: "Mechanical gaming keyboard" },
    { id: 116, name: "Canon EOS R6", category: "gadgets", brand: "Canon", price: 1250000, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400", rating: 4.9, description: "Mirrorless camera" },
    { id: 117, name: "Oculus Quest 3", category: "gadgets", brand: "Meta", price: 245000, image: "https://i.ebayimg.com/images/g/H-kAAOSwoKxmZ6c7/s-l1200.jpg", rating: 4.7, description: "VR headset" },
    { id: 118, name: "Anker PowerCore", category: "gadgets", brand: "Anker", price: 38000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSacbhIn7Vg54a7xEP9xoB4G8-a391EQWEjSg&s", rating: 4.5, description: "26800mAh power bank" },
    { id: 119, name: "Ring Video Doorbell", category: "gadgets", brand: "Ring", price: 85000, image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400", rating: 4.6, description: "Smart doorbell camera" },
    { id: 120, name: "Tile Pro", category: "gadgets", brand: "Tile", price: 52000, image: "https://www.trustedreviews.com/wp-content/uploads/sites/7/2018/10/Tile-Pro-and-Tile-Mate-2018-820x461.jpg", rating: 4.4, description: "Bluetooth tracker" }
];

// Global Variables
let products = [...productsDatabase];
let filteredProducts = [...products];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentProduct = null;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderProducts(filteredProducts);
    updateCartUI();
    updateAuthUI();
    populateBrandFilter();
    initializeEventListeners();
});

// Render Products

function renderProducts(productsToRender) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    productsToRender.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card'; // NO col-md-3 or other Bootstrap classes!
        productCard.style.animation = `fadeInUp 0.5s ease ${index * 0.05}s backwards`;
        
        // Generate star rating
        const fullStars = Math.floor(product.rating);
        const hasHalfStar = product.rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        
        let starsHTML = '';
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<i class="fas fa-star"></i>';
        }
        if (hasHalfStar) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        }
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<i class="far fa-star"></i>';
        }
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" 
                     alt="${product.name}"
                     loading="lazy"
                     onerror="this.src='https://via.placeholder.com/400x400?text=Product+Image'">
                <span class="product-badge">Sale</span>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-brand">${product.brand}</p>
                <div class="product-rating">
                    ${starsHTML}
                    <span class="text-muted">(${product.rating})</span>
                </div>
                <div class="product-price">₦${product.price.toLocaleString()}</div>
                <div class="product-actions">
                    <button class="btn-quick-view" onclick="openProductModal(${product.id})">
                        <i class="fas fa-eye"></i> View
                    </button>
                    <button class="btn-add-cart" onclick="addToCartQuick(${product.id})">
                        <i class="fas fa-cart-plus"></i> Add
                    </button>
                </div>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
    
    document.getElementById('productCount').textContent = productsToRender.length;
}

// Populate Brand Filter
function populateBrandFilter() {
    const brandFilter = document.getElementById('brandFilter');
    const brands = [...new Set(products.map(p => p.brand))].sort();
    
    brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandFilter.appendChild(option);
    });
}

// Filter Products
function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const brand = document.getElementById('brandFilter').value;
    const sort = document.getElementById('sortFilter').value;
    const minPrice = parseInt(document.getElementById('minPriceRange').value);
    const maxPrice = parseInt(document.getElementById('maxPriceRange').value);
    
    filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                            product.description.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || product.category === category;
        const matchesBrand = brand === 'all' || product.brand === brand;
        const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
        
        return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
    });
    
    // Sort
    if (sort === 'price-low') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sort === 'name') {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    renderProducts(filteredProducts);
}

// Update Price Range Display
function updatePriceDisplay() {
    const minPrice = document.getElementById('minPriceRange').value;
    const maxPrice = document.getElementById('maxPriceRange').value;
    
    document.getElementById('minPriceDisplay').textContent = parseInt(minPrice).toLocaleString();
    document.getElementById('maxPriceDisplay').textContent = parseInt(maxPrice).toLocaleString();
    
    filterProducts();
}

// Open Product Modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    currentProduct = product;
    
    document.getElementById('modalProductImage').src = product.image;
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductBrand').textContent = product.brand;
    document.getElementById('modalProductPrice').textContent = `₦${product.price.toLocaleString()}`;
    document.getElementById('modalProductDescription').textContent = product.description;
    document.getElementById('productQuantity').value = 1;
    
    const productModal = new bootstrap.Modal(document.getElementById('productModal'));
    productModal.show();
}

// Add to Cart (Quick)
function addToCartQuick(productId) {
    const product = products.find(p => p.id === productId);
    addToCart(product, 1);
}

// Add to Cart
function addToCart(product, quantity) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    showToast('Product added to cart!', 'success');
}

// Update Cart UI
function updateCartUI() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountEl = document.getElementById('cartCount');

    cartCountEl.textContent = cartCount;

    // Hide when empty, show when > 0
    if (cartCount === 0) {
        cartCountEl.style.display = 'none';
    } else {
        cartCountEl.style.display = 'inline-block';
    }
}

// Render Cart
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h4 class="mt-3">Your cart is empty</h4>
                <p class="text-muted">Add some products to get started</p>
            </div>
        `;
        cartTotal.textContent = '₦0';
        return;
    }
    
    let total = 0;
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h6 class="cart-item-name">${item.name}</h6>
                <p class="cart-item-price">₦${item.price.toLocaleString()}</p>
                <div class="cart-item-quantity">
                    <button onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <input type="number" value="${item.quantity}" min="1" readonly>
                    <button onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </div>
            <i class="fas fa-trash cart-item-remove" onclick="removeFromCart(${item.id})"></i>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = `₦${total.toLocaleString()}`;
}

// Update Cart Quantity
function updateCartQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
        renderCart();
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    renderCart();
    showToast('Product removed from cart', 'error');
}

// Open Checkout
function openCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }
    
    if (!currentUser) {
        showToast('Please login to checkout', 'error');
        const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
        loginModal.show();
        return;
    }
    
    const cartModal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
    cartModal.hide();
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = 2000;
    const grandTotal = total + deliveryFee;
    
    document.getElementById('checkoutSubtotal').textContent = `₦${total.toLocaleString()}`;
    document.getElementById('checkoutTotal').textContent = `₦${grandTotal.toLocaleString()}`;
    
    // Pre-fill user data
    if (currentUser) {
        document.getElementById('deliveryName').value = currentUser.name;
        document.getElementById('deliveryPhone').value = currentUser.phone || '';
    }
    
    const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
    checkoutModal.show();
}

// Register User
function registerUser(e) {
    e.preventDefault();
    
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    if (password !== confirmPassword) {
        showToast('Passwords do not match!', 'error');
        return;
    }
    
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        showToast('Email already registered!', 'error');
        return;
    }
    
    const user = { name, email, phone, password };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    
    showToast('Registration successful! Please login.', 'success');
    
    const registerModal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
    registerModal.hide();
    
    const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
    loginModal.show();
}

// Login User
function loginUser(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        updateAuthUI();
        
        const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        loginModal.hide();
        
        showToast(`Welcome back, ${user.name}!`, 'success');
    } else {
        showToast('Invalid email or password!', 'error');
    }
}

// Logout User
function logoutUser() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateAuthUI();
    showToast('Logged out successfully!', 'success');
}

// Update Auth UI
function updateAuthUI() {
    const authSection = document.getElementById('authSection');
    const userSection = document.getElementById('userSection');
    
    if (currentUser) {
        authSection.classList.add('d-none');
        userSection.classList.remove('d-none');
        document.getElementById('userName').textContent = currentUser.name.split(' ')[0];
    } else {
        authSection.classList.remove('d-none');
        userSection.classList.add('d-none');
    }
}

// Place Order
function placeOrder(e) {
    e.preventDefault();
    
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    
    // Simulate order placement
    setTimeout(() => {
        const checkoutModal = bootstrap.Modal.getInstance(document.getElementById('checkoutModal'));
        checkoutModal.hide();
        
        // Clear cart
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
        
        // Show success
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();
        
        // Reset form
        document.getElementById('checkoutForm').reset();
    }, 1000);
}

// Show Toast Notification
function showToast(message, type) {
    let toastContainer = document.querySelector('.toast-container');
    
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span class="ms-2">${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Initialize Event Listeners
function initializeEventListeners() {
    // Search and Filter
    document.getElementById('searchInput').addEventListener('input', filterProducts);
    document.getElementById('categoryFilter').addEventListener('change', filterProducts);
    document.getElementById('brandFilter').addEventListener('change', filterProducts);
    document.getElementById('sortFilter').addEventListener('change', filterProducts);
    document.getElementById('minPriceRange').addEventListener('input', updatePriceDisplay);
    document.getElementById('maxPriceRange').addEventListener('input', updatePriceDisplay);
    
    // Product Modal
    document.getElementById('increaseQty').addEventListener('click', () => {
        const qtyInput = document.getElementById('productQuantity');
        qtyInput.value = parseInt(qtyInput.value) + 1;
    });
    
    document.getElementById('decreaseQty').addEventListener('click', () => {
        const qtyInput = document.getElementById('productQuantity');
        if (parseInt(qtyInput.value) > 1) {
            qtyInput.value = parseInt(qtyInput.value) - 1;
        }
    });
    
    document.getElementById('addToCartBtn').addEventListener('click', () => {
        const quantity = parseInt(document.getElementById('productQuantity').value);
        addToCart(currentProduct, quantity);
        
        const productModal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
        productModal.hide();
    });
    
    // Cart
    document.getElementById('cartLink').addEventListener('click', (e) => {
        e.preventDefault();
        renderCart();
        const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
        cartModal.show();
    });
    
    document.getElementById('checkoutBtn').addEventListener('click', openCheckout);
    
    // Auth
    document.getElementById('loginBtn').addEventListener('click', () => {
        const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
        loginModal.show();
    });
    
    document.getElementById('showRegisterBtn').addEventListener('click', (e) => {
        e.preventDefault();
        const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        loginModal.hide();
        
        const registerModal = new bootstrap.Modal(document.getElementById('registerModal'));
        registerModal.show();
    });
    
    document.getElementById('showLoginBtn').addEventListener('click', (e) => {
        e.preventDefault();
        const registerModal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
        registerModal.hide();
        
        const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
        loginModal.show();
    });
    
    document.getElementById('loginForm').addEventListener('submit', loginUser);
    document.getElementById('registerForm').addEventListener('submit', registerUser);
    document.getElementById('logoutBtn').addEventListener('click', logoutUser);
    
    // Checkout
    document.getElementById('checkoutForm').addEventListener('submit', placeOrder);
    
    document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            const onlineSection = document.getElementById('onlinePaymentSection');
            if (e.target.value === 'online') {
                onlineSection.classList.remove('d-none');
            } else {
                onlineSection.classList.add('d-none');
            }
        });
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});






