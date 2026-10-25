import { StateInfo, TouristPlace, Festival, FoodDish, NationalSymbol, QuizQuestion } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_incredible_india_1792923296821.jpg';
export const HAMPI_IMAGE = '/src/assets/images/tourist_hampi_chariot_1792923300079.jpg';
export const JAIPUR_IMAGE = '/src/assets/images/tourist_jaipur_hawa_mahal_1792923300019.jpg';
export const MYSORE_IMAGE = '/src/assets/images/tourist_mysore_palace_1792923300094.jpg';
export const DIWALI_IMAGE = '/src/assets/images/festival_diwali_diyas_1792923300181.jpg';
export const DOSA_IMAGE = '/src/assets/images/food_masala_dosa_1792923300153.jpg';
export const GOLDEN_TEMPLE_IMAGE = '/src/assets/images/tourist_golden_temple_1792924855480.jpg';
export const VARANASI_IMAGE = '/src/assets/images/tourist_varanasi_ghats_1792924854034.jpg';
export const HOLI_IMAGE = '/src/assets/images/festival_holi_celebration_1792924855627.jpg';
export const ROSOGOLLA_IMAGE = '/src/assets/images/food_bengali_rosogolla_1792925486451.jpg';
export const PONGAL_IMAGE = '/src/assets/images/festival_pongal_celebration_1792925486644.jpg';
export const CHOLE_BHATURE_IMAGE = '/src/assets/images/food_chole_bhature_1792925887536.jpg';
export const ROGAN_JOSH_IMAGE = '/src/assets/images/food_kashmiri_rogan_josh_1792926277712.jpg';

export const INDIAN_STATES: StateInfo[] = [
  // Northern Region
  {
    name: 'Himachal Pradesh',
    capital: 'Shimla (Summer), Dharamshala (Winter)',
    region: 'North',
    languages: ['Hindi', 'Pahari'],
    famousFor: 'Himalayan landscapes, apple orchards, spiritual retreats & adventure sports',
    populationRank: 21,
    areaKm2: 55673,
    highlight: 'Known as "Dev Bhoomi" (Land of Gods) nestled in the western Himalayas'
  },
  {
    name: 'Punjab',
    capital: 'Chandigarh',
    region: 'North',
    languages: ['Punjabi'],
    famousFor: 'Golden Temple, Bhangra dance, fertile green wheat fields, rich cuisine',
    populationRank: 16,
    areaKm2: 50362,
    highlight: 'The granary of India and cradle of Sikh heritage and vibrant hospitality'
  },
  {
    name: 'Haryana',
    capital: 'Chandigarh',
    region: 'North',
    languages: ['Hindi', 'Haryanvi'],
    famousFor: 'Kurukshetra battlefield, automotive & IT hub Gurgaon, sports champions',
    populationRank: 18,
    areaKm2: 44212,
    highlight: 'Site of the historic Mahabharata war and India’s leading Olympic sports hub'
  },
  {
    name: 'Uttarakhand',
    capital: 'Dehradun (Winter), Gairsain (Summer)',
    region: 'North',
    languages: ['Hindi', 'Garhwali', 'Kumaoni'],
    famousFor: 'Char Dham pilgrimage, Valley of Flowers, yoga capital Rishikesh',
    populationRank: 20,
    areaKm2: 53483,
    highlight: 'The origin of the sacred rivers Ganga and Yamuna amidst towering peaks'
  },
  {
    name: 'Uttar Pradesh',
    capital: 'Lucknow',
    region: 'North',
    languages: ['Hindi', 'Urdu'],
    famousFor: 'Taj Mahal, Varanasi spiritual ghats, Ayodhya, Awadhi Nawabi culture',
    populationRank: 1,
    areaKm2: 240928,
    highlight: 'India’s most populous state and cultural heartbeat along the Ganges plain'
  },
  {
    name: 'Rajasthan',
    capital: 'Jaipur',
    region: 'West',
    languages: ['Hindi', 'Rajasthani', 'Marwari'],
    famousFor: 'Thar Desert, majestic hill forts, royal palaces, vibrant folk music and handicrafts',
    populationRank: 7,
    areaKm2: 342239,
    highlight: 'India’s largest state by land area, renowned for Rajput chivalry and opulent palaces'
  },
  {
    name: 'Gujarat',
    capital: 'Gandhinagar',
    region: 'West',
    languages: ['Gujarati'],
    famousFor: 'Statue of Unity, Asiatic lions in Gir, white Rann of Kutch, enterprise',
    populationRank: 9,
    areaKm2: 196024,
    highlight: 'Birthplace of Mahatma Gandhi and home to the world’s tallest statue'
  },
  {
    name: 'Maharashtra',
    capital: 'Mumbai',
    region: 'West',
    languages: ['Marathi'],
    famousFor: 'Financial powerhouse Mumbai, Ajanta & Ellora caves, Western Ghats, Chhatrapati Shivaji heritage',
    populationRank: 2,
    areaKm2: 307713,
    highlight: 'India’s commercial engine with rich Maratha history and Bollywood'
  },
  {
    name: 'Goa',
    capital: 'Panaji',
    region: 'West',
    languages: ['Konkani', 'Marathi', 'English'],
    famousFor: 'Sun-kissed beaches, Portuguese colonial architecture, Dudhsagar falls, seafood',
    populationRank: 28,
    areaKm2: 3702,
    highlight: 'India’s smallest state by area, famous worldwide for idyllic coastal beauty'
  },
  {
    name: 'Madhya Pradesh',
    capital: 'Bhopal',
    region: 'Central',
    languages: ['Hindi'],
    famousFor: 'Khajuraho temples, Sanchi Stupa, Kanha & Bandhavgarh tiger reserves',
    populationRank: 5,
    areaKm2: 308252,
    highlight: 'The geographical "Heart of India" with the highest tiger population'
  },
  {
    name: 'Chhattisgarh',
    capital: 'Raipur',
    region: 'Central',
    languages: ['Chhattisgarhi', 'Hindi'],
    famousFor: 'Chitrakote "Niagara of India" waterfalls, tribal art, dense sal forests, minerals',
    populationRank: 17,
    areaKm2: 135192,
    highlight: 'Known as the "Rice Bowl of Central India" with ancient tribal civilizations'
  },
  {
    name: 'Bihar',
    capital: 'Patna',
    region: 'East',
    languages: ['Hindi', 'Bhojpuri', 'Maithili', 'Magahi'],
    famousFor: 'Nalanda ancient university, Bodh Gaya (Buddha enlightenment), Madhubani art',
    populationRank: 3,
    areaKm2: 94163,
    highlight: 'Birthplace of Buddhism and Jainism and home to the world’s first residential university'
  },
  {
    name: 'Jharkhand',
    capital: 'Ranchi',
    region: 'East',
    languages: ['Hindi', 'Santhali', 'Bengali'],
    famousFor: 'Mineral wealth, Parasnath hills, Betla National Park, waterfalls',
    populationRank: 14,
    areaKm2: 79716,
    highlight: 'The "Land of Forests" rich in coal, iron ore, and indigenous tribal heritage'
  },
  {
    name: 'West Bengal',
    capital: 'Kolkata',
    region: 'East',
    languages: ['Bengali', 'English'],
    famousFor: 'Sundarbans mangrove tigers, Darjeeling tea, Durga Puja, Nobel laureates',
    populationRank: 4,
    areaKm2: 88752,
    highlight: 'Cultural and intellectual capital of India, cradle of modern Indian renaissance'
  },
  {
    name: 'Odisha',
    capital: 'Bhubaneswar',
    region: 'East',
    languages: ['Odia'],
    famousFor: 'Konark Sun Temple, Jagannath Rath Yatra in Puri, Chilika lake, Odissi classical dance',
    populationRank: 11,
    areaKm2: 155707,
    highlight: 'Ancient Kalinga realm renowned for temple architecture and silver filigree'
  },
  {
    name: 'Karnataka',
    capital: 'Bengaluru',
    region: 'South',
    languages: ['Kannada'],
    famousFor: 'Hampi ruins, Mysore Palace, Silicon Valley of India (Bengaluru), coffee estates of Coorg',
    populationRank: 8,
    areaKm2: 191791,
    highlight: 'A dynamic fusion of centuries-old Vijayanagara heritage and world-leading technology'
  },
  {
    name: 'Tamil Nadu',
    capital: 'Chennai',
    region: 'South',
    languages: ['Tamil'],
    famousFor: 'Dravidian soaring gopuram temples, Bharatanatyam, Carnatic music, Nilgiri hills',
    populationRank: 6,
    areaKm2: 130058,
    highlight: 'Custodian of Tamil, one of the world’s oldest continuously spoken classical languages'
  },
  {
    name: 'Kerala',
    capital: 'Thiruvananthapuram',
    region: 'South',
    languages: ['Malayalam'],
    famousFor: 'Emerald backwaters, Ayurveda, Kathakali, spice plantations, highest literacy rate',
    populationRank: 13,
    areaKm2: 38863,
    highlight: 'Revered as "God’s Own Country" with 100% primary literacy and lush tropical coast'
  },
  {
    name: 'Andhra Pradesh',
    capital: 'Amaravati',
    region: 'South',
    languages: ['Telugu'],
    famousFor: 'Tirupati Balaji temple, Kuchipudi classical dance, spicy cuisine, long coastline',
    populationRank: 10,
    areaKm2: 162970,
    highlight: 'Home to Tirumala, the world’s most visited sacred pilgrimage shrine'
  },
  {
    name: 'Telangana',
    capital: 'Hyderabad',
    region: 'South',
    languages: ['Telugu', 'Urdu'],
    famousFor: 'Charminar, Ramappa Temple (UNESCO), Hyderabadi Dum Biryani, biotech hub',
    populationRank: 12,
    areaKm2: 112077,
    highlight: 'Dynamic Deccan plateau crossroads of Kakatiya architecture and modern IT Cyberabad'
  },
  {
    name: 'Assam',
    capital: 'Dispur',
    region: 'North-East',
    languages: ['Assamese', 'Bodo', 'Bengali'],
    famousFor: 'One-horned Indian rhinoceros in Kaziranga, Assam orthodox tea, Bihu dance, Brahmaputra river',
    populationRank: 15,
    areaKm2: 78438,
    highlight: 'Gateway to Northeast India and sanctuary for over two-thirds of the world’s one-horned rhinos'
  },
  {
    name: 'Sikkim',
    capital: 'Gangtok',
    region: 'North-East',
    languages: ['Nepali', 'Sikkimese', 'Lepcha', 'English'],
    famousFor: 'Mount Kangchenjunga (world 3rd highest), Tibetan Buddhist monasteries, 100% organic farming',
    populationRank: 27,
    areaKm2: 7096,
    highlight: 'India’s first 100% certified organic state framed by the majestic Kangchenjunga'
  },
  {
    name: 'Arunachal Pradesh',
    capital: 'Itanagar',
    region: 'North-East',
    languages: ['English', 'Nishi', 'Adi', 'Hindi'],
    famousFor: 'Tawang Monastery, Ziro Valley, untouched Himalayan forests, orchid variety',
    populationRank: 26,
    areaKm2: 83743,
    highlight: 'The "Land of the Dawn-Lit Mountains", the first soil in India to greet the rising sun'
  },
  {
    name: 'Meghalaya',
    capital: 'Shillong',
    region: 'North-East',
    languages: ['Khasi', 'Garo', 'English'],
    famousFor: 'Living root bridges of Cherrapunji, cleanest village Mawlynnong, high rainfall, Shillong rock music',
    populationRank: 22,
    areaKm2: 22429,
    highlight: 'The "Abode of Clouds", home to Mawsynram, the wettest inhabited place on Earth'
  },
  {
    name: 'Nagaland',
    capital: 'Kohima',
    region: 'North-East',
    languages: ['English', 'Nagamese'],
    famousFor: 'Hornbill Festival, 16 major indigenous warrior tribes, Dzukou Valley, woven shawls',
    populationRank: 24,
    areaKm2: 16579,
    highlight: 'Celebrated as the "Land of Festivals" with extraordinary tribal harmony and handicraft'
  },
  {
    name: 'Manipur',
    capital: 'Imphal',
    region: 'North-East',
    languages: ['Manipuri (Meitei)'],
    famousFor: 'Loktak floating lake (Phumdis), Sangai brow-antlered deer, birthplace of modern polo, classical dance',
    populationRank: 23,
    areaKm2: 22327,
    highlight: 'Jeweled land with Keibul Lamjao, the world’s only floating national park'
  },
  {
    name: 'Mizoram',
    capital: 'Aizawl',
    region: 'North-East',
    languages: ['Mizo', 'English'],
    famousFor: 'Cheraw bamboo dance, rolling green Blue Mountains, high literacy, Chapchar Kut festival',
    populationRank: 25,
    areaKm2: 21081,
    highlight: 'Serene land of high literacy and egalitarian community spirit'
  },
  {
    name: 'Tripura',
    capital: 'Agartala',
    region: 'North-East',
    languages: ['Bengali', 'Kokborok', 'English'],
    famousFor: 'Ujjayanta Palace, Neermahal water palace, bamboo handicraft, rubber plantations',
    populationRank: 19,
    areaKm2: 10491,
    highlight: 'Ancient princely state adorned with lake palaces and verdant hill tracts'
  },
  // Key Union Territories
  {
    name: 'Delhi (NCT)',
    capital: 'New Delhi',
    region: 'Union Territory',
    languages: ['Hindi', 'Punjabi', 'Urdu', 'English'],
    famousFor: 'National Capital, Red Fort, India Gate, Qutub Minar, Parliament House',
    populationRank: 0,
    areaKm2: 1484,
    highlight: 'Historic capital city bridging centuries of empires and modern Indian democracy'
  },
  {
    name: 'Jammu & Kashmir',
    capital: 'Srinagar (Summer), Jammu (Winter)',
    region: 'Union Territory',
    languages: ['Kashmiri', 'Dogri', 'Urdu', 'Hindi'],
    famousFor: 'Dal Lake shikaras, snow-capped Gulmarg, saffron fields of Pampore, Pashmina shawls',
    populationRank: 0,
    areaKm2: 42241,
    highlight: 'Often called "Paradise on Earth" for its breathtaking alpine valleys and crafts'
  },
  {
    name: 'Ladakh',
    capital: 'Leh',
    region: 'Union Territory',
    languages: ['Ladakhi', 'Tibetan', 'Hindi', 'English'],
    famousFor: 'Pangong Tso lake, Nubra Valley, high mountain passes (Khardung La), Buddhist monasteries',
    populationRank: 0,
    areaKm2: 59146,
    highlight: 'High-altitude cold desert realm of pristine starry skies and ancient Gompas'
  },
  {
    name: 'Andaman & Nicobar Islands',
    capital: 'Port Blair',
    region: 'Union Territory',
    languages: ['Bengali', 'Hindi', 'Tamil', 'English'],
    famousFor: 'Historic Cellular Jail, Radhanagar Beach in Havelock, coral reefs, turquoise waters',
    populationRank: 0,
    areaKm2: 8249,
    highlight: 'Tropical archipelago of 572 islands with dramatic freedom struggle history'
  }
];

export const TOURIST_PLACES: TouristPlace[] = [
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    state: 'Agra, Uttar Pradesh',
    category: 'Monuments',
    description: 'An immense mausoleum of pure white ivory-marble, built between 1631 and 1648 by Mughal emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal. Standing on the southern bank of the Yamuna River, it is universally admired as the jewel of Muslim art in India and one of the Seven Wonders of the Modern World.',
    historicalEra: 'Mughal Empire (1631–1648 CE)',
    bestTimeToVisit: 'October to March (Sunrise & Full Moon nights)',
    unesco: true,
    image: HERO_IMAGE,
    imageAlt: 'Real photograph of Taj Mahal reflecting in Yamuna garden pool at sunrise',
    keyFeature: 'Flawless symmetrical white Makrana marble adorned with semi-precious pietra dura gemstone inlays'
  },
  {
    id: 'hampi-ruins',
    name: 'Group of Monuments at Hampi',
    state: 'Ballari, Karnataka',
    category: 'Spiritual',
    description: 'The awe-inspiring capital of the Vijayanagara Empire from the 14th century, spread across 4,100 hectares of rugged boulder-strewn terrain by the Tungabhadra River. The site boasts grandiose Dravidian temples, royal pavilions, ancient market bazaars, and the iconic monolithic Stone Chariot at the Vijaya Vittala temple complex.',
    historicalEra: 'Vijayanagara Empire (1336–1565 CE)',
    bestTimeToVisit: 'November to February',
    unesco: true,
    image: HAMPI_IMAGE,
    imageAlt: 'Authentic photograph of the ancient Stone Chariot at Vijaya Vittala Temple, Hampi',
    keyFeature: 'Monolithic granite stone chariot and 56 musical pillars that chime musical notes when tapped'
  },
  {
    id: 'mysore-palace',
    name: 'Mysore Palace (Amba Vilas)',
    state: 'Mysuru, Karnataka',
    category: 'Palaces & Forts',
    description: 'The official royal residence of the Wadiyar dynasty who ruled the Kingdom of Mysore for over five centuries. Designed by British architect Henry Irwin in the Indo-Saracenic style with Rajput, Mughal, and Gothic elements, it features three-storey stone structures, pink marble domes, and an extraordinary Durbar hall.',
    historicalEra: 'Completed in 1912 CE',
    bestTimeToVisit: 'September to March (Spectacular during Dasara festival)',
    unesco: false,
    image: MYSORE_IMAGE,
    imageAlt: 'Royal Mysore Palace illuminated with nearly 100,000 golden incandescent bulbs at dusk',
    keyFeature: 'Illuminated by 97,000 bulbs every Sunday and festival evening creating an enchanting golden spectacle'
  },
  {
    id: 'hawa-mahal',
    name: 'Hawa Mahal (Palace of Winds)',
    state: 'Jaipur, Rajasthan',
    category: 'Palaces & Forts',
    description: 'Built in 1799 by Maharaja Sawai Pratap Singh and designed by Lal Chand Ustad in the form of Lord Krishna’s crown. The 5-storey exterior resembles a honeycomb with its 953 small casements called jharokhas, constructed so royal court ladies could witness street festivities without being observed from outside.',
    historicalEra: 'Kingdom of Jaipur (1799 CE)',
    bestTimeToVisit: 'October to March',
    unesco: true,
    image: JAIPUR_IMAGE,
    imageAlt: 'Intricate red and pink sandstone honeycomb facade of Hawa Mahal in Jaipur',
    keyFeature: 'Natural air conditioning cooling effect created by the Venturi principle through 953 jharokha windows'
  },
  {
    id: 'red-fort',
    name: 'Red Fort (Lal Qila)',
    state: 'Old Delhi, Delhi',
    category: 'Monuments',
    description: 'Constructed by Emperor Shah Jahan in 1638 when he shifted the Mughal capital from Agra to Delhi. Built of massive red sandstone walls that stretch for two kilometers, it served as the political nerve center of the Mughal Empire. Every year on August 15th, the Prime Minister of India unfurls the National Flag from its ramparts.',
    historicalEra: 'Mughal Empire (1638–1648 CE)',
    bestTimeToVisit: 'October to March',
    unesco: true,
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Majestic red sandstone ramparts of Delhi Red Fort Lal Qila',
    keyFeature: 'Lahori Gate, Diwan-i-Aam (Hall of Public Audience), and Diwan-i-Khas featuring the inscription: If there is paradise on earth, it is this'
  },
  {
    id: 'kerala-backwaters',
    name: 'Kerala Backwaters & Houseboats',
    state: 'Alleppey (Alappuzha), Kerala',
    category: 'Nature & Backwaters',
    description: 'A labyrinthine network of interconnected brackish lagoons, lakes, canals, and rivers lying parallel to the Arabian Sea coast. Traditional wooden houseboats called Kettuvallams, crafted from wild jackfruit wood and tied with coir ropes without a single iron nail, glide gracefully past palm groves, paddy fields, and serene rural villages.',
    historicalEra: 'Centuries-old indigenous canal trade navigation',
    bestTimeToVisit: 'September to March (Snake Boat Races in August)',
    unesco: false,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Traditional wooden houseboat sailing peacefully along tropical palm-fringed Kerala backwaters',
    keyFeature: 'Unique aquatic ecosystem where freshwater rivers meet the saline tidal surges of the Arabian Sea'
  },
  {
    id: 'varanasi-ghats',
    name: 'Varanasi Ghats & Ganges Aarti',
    state: 'Varanasi (Kashi), Uttar Pradesh',
    category: 'Spiritual',
    description: 'Marking one of the world’s oldest continuously inhabited cities, the 84 stone ghats step down directly to the sacred Ganga river. At dusk, Dashashwamedh Ghat hosts the mesmerizing Maha Aarti ceremony, where priests in silk vestments wave multi-tiered brass oil lamps in sync with conch shells and sacred chants.',
    historicalEra: 'Over 3,000 years of documented spiritual continuity',
    bestTimeToVisit: 'October to March (Dev Deepawali is extraordinary)',
    unesco: false,
    image: VARANASI_IMAGE,
    imageAlt: 'Authentic photograph of sacred Varanasi Ghats and evening Ganga Aarti ceremony with flaming brass lamps along the Ganges',
    keyFeature: 'Sacred riverfront stairways where spiritual life, music, philosophy, and rituals have flourished for millennia'
  },
  {
    id: 'golden-temple',
    name: 'Sri Harmandir Sahib (Golden Temple)',
    state: 'Amritsar, Punjab',
    category: 'Spiritual',
    description: 'The pre-eminent spiritual gurdwara of Sikhism. Built around an artificial sacred pool (Amrit Sarovar) founded by Guru Ram Das in 1577, the upper floors are covered with hundreds of kilograms of gold leaf. Its doors open on all four sides, symbolizing unconditional welcome to all people regardless of religion, caste, or background.',
    historicalEra: 'Founded 1577 CE, gold plating 1830 CE',
    bestTimeToVisit: 'October to March',
    unesco: false,
    image: GOLDEN_TEMPLE_IMAGE,
    imageAlt: 'Authentic twilight photograph of Sri Harmandir Sahib Golden Temple in Amritsar glowing and reflecting in the sacred Amrit Sarovar',
    keyFeature: 'World’s largest community kitchen (Langar) serving over 100,000 free hot vegetarian meals daily to all visitors'
  }
];

export const FESTIVALS_DATA: Festival[] = [
  {
    id: 'diwali',
    name: 'Diwali',
    alternateName: 'Deepavali (Festival of Lights)',
    celebratedBy: 'Celebrated across all of India by Hindus, Jains, Sikhs, and Buddhists',
    monthOrSeason: 'Kartik month (October–November)',
    category: 'Lights & Joy',
    description: 'India’s biggest and most radiant festival, symbolizing the spiritual victory of light over darkness, good over evil, and knowledge over ignorance. Families clean their homes, decorate doorsteps with floral rangoli patterns, illuminate hundreds of clay diyas, wear new clothes, and exchange boxes of traditional sweets like kaju katli and laddoos.',
    significance: 'Commemorates Lord Rama’s return to Ayodhya after 14 years of exile and victory over Ravana, and worship of Goddess Lakshmi for prosperity and peace.',
    traditionalFood: 'Kaju Katli, Besan Laddoo, Chakli, Gujiya, Gulab Jamun',
    traditions: [
      'Lighting terracotta earthen diyas filled with mustard oil',
      'Creating intricate powdered and petal Rangoli art at entrances',
      'Lakshmi & Ganesha Puja at sunset',
      'Gift and sweet exchanges with friends and extended family'
    ],
    image: DIWALI_IMAGE,
    imageAlt: 'Family arranging glowing golden terracotta diyas on an intricate marigold flower rangoli during Diwali'
  },
  {
    id: 'holi',
    name: 'Holi',
    alternateName: 'Festival of Colors & Love',
    celebratedBy: 'Celebrated joyously nationwide, especially in Northern and Central India',
    monthOrSeason: 'Phalguna Purnima (March)',
    category: 'Spring',
    description: 'An exuberant springtime celebration marking the arrival of spring and the blossoming of life after winter. People gather on streets and courtyards to drench each other in vibrant dry herbal colors (gulal) and fragrant water, dancing to energetic dhol drum beats and sharing festive foods.',
    significance: 'Celebrates the victory of devotee Prahlad and divine protection against Holika, as well as the eternal divine love of Radha and Krishna in Braj.',
    traditionalFood: 'Mawa Gujiya, Thandai (chilled spiced milk with saffron and almonds), Malpua, Dahi Bhalla',
    traditions: [
      'Holika Dahan bonfire the night before to cleanse negative energy',
      'Smearing colored powders (Gulal) in pink, yellow, turquoise, and green',
      'Singing traditional folk songs and dancing to Punjabi & Braj folk dhol',
      'Visiting elders to touch their feet and seek spring blessings'
    ],
    image: HOLI_IMAGE,
    imageAlt: 'Joyous cultural celebration of Holi festival in India with vibrant clouds of pink and yellow herbal gulal colors',
    keyFeature: 'Complete erasure of social barriers where young, old, rich, and humble celebrate together'
  },
  {
    id: 'dasara',
    name: 'Dasara & Navratri',
    alternateName: 'Vijayadashami / Durga Puja',
    celebratedBy: 'Celebrated nationwide with grand regional variations (Mysuru, Bengal, Gujarat)',
    monthOrSeason: 'Ashvin month (September–October)',
    category: 'Spiritual',
    description: 'A ten-day celebration culminating in Vijayadashami (Victory Day). In Gujarat, millions participate in nine nights of rhythmic Garba and Dandiya Raas dance; in West Bengal, monumental thematic Durga Puja pandals celebrate the Mother Goddess; in Mysuru, a royal elephant procession carries the golden idol of Goddess Chamundeshwari.',
    significance: 'Marks Goddess Durga’s triumph over the demon Mahishasura, and Lord Rama’s victory over the ten-headed demon king Ravana.',
    traditionalFood: 'Payasam, Puran Poli, Sandesh, Sabudana Khichdi, Sundal',
    traditions: [
      'Night-long Garba folk dancing with decorated wooden sticks in Gujarat',
      'Immersion of hand-sculpted clay idols of Goddess Durga in Kolkata',
      'Mysore Palace illuminated with 100,000 royal incandescent lamps',
      'Burning towering effigies of Ravana, Kumbhakarna, and Meghanada'
    ],
    image: MYSORE_IMAGE,
    imageAlt: 'Mysore Palace glowing in golden splendour during the world-renowned 10-day Dasara festivities'
  },
  {
    id: 'eid',
    name: 'Eid-ul-Fitr & Eid-ul-Adha',
    alternateName: 'Meethi Eid / Feast of Breaking the Fast',
    celebratedBy: 'Celebrated by over 200 million Muslims across every state of India',
    monthOrSeason: 'Shawwal (Date varies by lunar Islamic calendar)',
    category: 'Spiritual',
    description: 'Eid-ul-Fitr marks the joyful culmination of the holy fasting month of Ramadan. At dawn, millions gather at historic mosques like Delhi’s Jama Masjid and Lucknow’s Asfi Mosque for congregational Eid prayers. Families dress in new attire, give charitable donations (Zakat), embrace warmly with the greeting "Eid Mubarak", and share sweet vermicelli pudding.',
    significance: 'Thanksgiving to the Almighty for the spiritual endurance, self-purification, and charitable deeds practiced throughout Ramadan.',
    traditionalFood: 'Sheer Khurma (sweet vermicelli with dates and milk), Mutton Biryani, Shahi Tukda, Kebabs',
    traditions: [
      'Early morning congregational prayer in white kurtas and prayer caps',
      'Distribution of Fitrana charity to ensure the underprivileged celebrate equally',
      'Children receiving Eidi (monetary gifts and tokens of love from elders)',
      'Sharing rich feasts of Sheer Khurma with Hindu, Christian, and Sikh neighbours'
    ],
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Grand architecture and congregation during Eid prayers at historic Indian mosque',
    keyFeature: 'Heartfelt neighborly visits fostering communal warmth and brotherhood'
  },
  {
    id: 'christmas',
    name: 'Christmas',
    alternateName: 'Bada Din (The Big Day)',
    celebratedBy: 'Celebrated nationwide with great pomp, especially in Goa, Kerala, Meghalaya, and Mumbai',
    monthOrSeason: '25th December',
    category: 'Cultural',
    description: 'Commemorating the birth of Jesus Christ, Christmas in India blends timeless Christian traditions with vibrant Indian regional customs. In Goa and Kerala, 400-year-old Portuguese and Syrian Christian cathedrals hold midnight mass with choirs singing hymns in Konkani, Malayalam, and English. Streets are strung with colorful paper star lanterns, and nativity cribs are crafted in courtyards.',
    significance: 'Celebration of peace, goodwill to all humankind, charity, and the birth of Christ.',
    traditionalFood: 'Goan Bebinca (layered coconut cake), Kerala Plum Cake with spiced rum, Rose cookies, Kalkals',
    traditions: [
      'Midnight candlelight church masses with solemn choral harmony',
      'Hanging lit paper star lanterns outside homes across towns and villages',
      'Carols sung through neighborhoods accompanied by guitar and dhol',
      'Exchanging homemade fruit cakes and traditional sweets with all neighbors'
    ],
    image: 'https://images.unsplash.com/photo-1543258103-a62bdc069871?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Decorated glowing stars and festive illumination outside Goan colonial church at Christmas',
    keyFeature: 'Warm inter-community celebration with iconic paper star lanterns glowing in every window'
  },
  {
    id: 'pongal',
    name: 'Pongal & Makar Sankranti',
    alternateName: 'Maghi / Uttarayan / Bihu',
    celebratedBy: 'Celebrated as the pan-Indian harvest festival across South, North, and West India',
    monthOrSeason: 'Mid-January (Solar transition into Capricorn)',
    category: 'Harvest',
    description: 'A four-day harvest thanksgiving festival celebrated by farmers across India. In Tamil Nadu, fresh harvest rice is boiled with milk and raw brown jaggery in decorated earthen pots under the sun; as the pot bubbles over, families chant joyfully "Pongalo Pongal!". In Gujarat, skies fill with millions of colorful kites during Uttarayan; in Assam, Magh Bihu is celebrated around community bamboo bonfires.',
    significance: 'Gratitude to the Sun God (Surya), rain, and cattle (bullocks and cows) for agricultural prosperity and the first harvest of the year.',
    traditionalFood: 'Sweet Sakkarai Pongal, Savory Ven Pongal, Til-Gud laddoos, Pitha, Undhiyu',
    traditions: [
      'Boiling the first harvested rice until it overflows from decorated clay pots',
      'Honoring farm cows and bulls on Mattu Pongal with turmeric and painted horns',
      'Flying vibrant paper kites in Ahmedabad, Jaipur, and Surat',
      'Drawing Kolam geometric rice-flour patterns at dawn before village homes'
    ],
    image: PONGAL_IMAGE,
    imageAlt: 'Authentic celebration of South Indian Pongal harvest festival with traditional decorated pot boiling over on open fire with sugarcane, turmeric, and kolam',
    keyFeature: 'Celebration of agriculture and cosmic gratitude to the Sun, Earth, and cattle'
  }
];

export const FOOD_DISHES: FoodDish[] = [
  {
    id: 'masala-dosa',
    name: 'Masala Dosa',
    region: 'South India',
    dietType: 'Vegetarian',
    description: 'A quintessential South Indian delicacy consisting of a large, paper-thin, fermented rice-and-black-lentil crepe griddled to golden crisp perfection on a cast-iron tawa. It is stuffed with a delicately spiced potato masala tempered with mustard seeds, curry leaves, green chilies, and onions, and accompanied by piping hot lentil sambar and freshly ground coconut and tomato chutneys.',
    mainIngredients: ['Fermented Rice & Urad Dal Batter', 'Spiced Potatoes', 'Mustard Seeds', 'Curry Leaves', 'Coconut Chutney', 'Toor Dal Sambar'],
    flavorProfile: 'Crispy, tangy fermented crust with comforting savory, spiced potato filling and refreshing coconut dip',
    bestServedWith: 'Fresh Coconut Chutney, Tomato Kara Chutney & Piping hot Drumstick Sambar',
    image: DOSA_IMAGE,
    imageAlt: 'Golden crisp Mysore Masala Dosa served with hot sambar and coconut chutney on banana leaf'
  },
  {
    id: 'idli-sambar',
    name: 'Steamed Idli & Sambar',
    region: 'South India',
    dietType: 'Vegan',
    description: 'Pillowy soft, cloud-like steamed savory cakes made from naturally fermented batter of dehulled urad dal and parboiled rice. Recognized by nutritionists worldwide as one of the healthiest and most balanced breakfasts due to its zero-oil steaming and rich probiotic fermentation. Typically paired with aromatic toor dal sambar loaded with fresh seasonal vegetables.',
    mainIngredients: ['Parboiled Rice', 'Urad Dal', 'Fenugreek Seeds', 'Vegetable Sambar', 'Fresh Herbs'],
    flavorProfile: 'Mild, spongy, slightly tangy with aromatic, tamarind-infused spiced lentil broth',
    bestServedWith: 'Molagapodi (Gunpowder spice) mixed with ghee or sesame oil and spicy tomato chutney',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Steaming soft white idlis served on fresh green banana leaf with bowls of sambar and coconut chutney'
  },
  {
    id: 'hyderabadi-biryani',
    name: 'Hyderabadi Dum Biryani',
    region: 'South India',
    dietType: 'Traditional',
    description: 'A masterpiece of royal Deccani cuisine developed in the kitchens of the Nizams of Hyderabad. Long-grain fragrant basmati rice is layered with marinated meat or seasonal vegetables spiced with saffron, caramelized onions (birista), fresh mint, coriander, and whole royal spices like star anise, mace, and cardamom, then sealed with dough and slow-cooked over smoldering coals (Dum Pukht).',
    mainIngredients: ['Aged Basmati Rice', 'Kashmiri Saffron', 'Caramelized Onions', 'Ghee', 'Cardamom & Star Anise', 'Yogurt Marinade'],
    flavorProfile: 'Deeply aromatic, royal, subtly fiery with sweet saffron undertones and melted tender textures',
    bestServedWith: 'Mirchi ka Salan (spicy chili-peanut gravy) and chilled Cucumber Onion Raita',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Fragrant Hyderabadi Dum Biryani garnished with golden fried onions, fresh mint leaves, and boiled eggs'
  },
  {
    id: 'dhokla',
    name: 'Khaman Dhokla',
    region: 'West India',
    dietType: 'Vegan',
    description: 'A celebrated culinary pride of Gujarat made from freshly steamed fermented gram flour (besan). Soft, light, and airy with a distinctive sponge-cake texture, it is tempered with crackled mustard seeds, fresh green chilies, asafoetida, and sesame seeds in hot oil, then soaked in mild sugar-lemon water to yield an addictive sweet-tangy juiciness.',
    mainIngredients: ['Gram Flour (Besan)', 'Lemon Juice', 'Mustard Seeds', 'Green Chilies', 'Fresh Coriander', 'Grated Coconut'],
    flavorProfile: 'Delightfully spongy, juicy, sweet, sour, and mildly spiced with nutty mustard and sesame seeds',
    bestServedWith: 'Tangy Mint-Coriander Chutney and Sweet Tamarind-Date Chutney',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Vibrant yellow cubed Gujarati Khaman Dhokla topped with green chilies, mustard seeds, and fresh coriander'
  },
  {
    id: 'chole-bhature',
    name: 'Amritsari Chole Bhature',
    region: 'North India',
    dietType: 'Vegetarian',
    description: 'A beloved North Indian classic originating from the bustling food lanes of Punjab. Dark, robust, and tangy chickpea curry (Chole) is slow-simmered with dried pomegranate seeds (anardana), whole black tea infusion, and roasted spices. It is paired with giant, golden-puffed, crispy deep-fried leavened sourdough bread (Bhature).',
    mainIngredients: ['Kabuli Chickpeas (Chana)', 'Anardana (Pomegranate seeds)', 'Refined Flour Dough', 'Ginger & Green Chilies', 'Garam Masala'],
    flavorProfile: 'Bold, robust, tangy, deeply spiced curry accompanied by cloud-like, crispy fried bread',
    bestServedWith: 'Pickled Pink Onions (Sirka Pyaaz), Raw Green Chilies & Fresh Mango Pickle',
    image: CHOLE_BHATURE_IMAGE,
    imageAlt: 'Authentic documentary photograph of Amritsari Chole Bhature with golden-brown puffed bhatura, rich spiced chickpea curry, pickled onions and green chili on a brass thali'
  },
  {
    id: 'butter-chicken-paneer',
    name: 'Paneer Butter Masala & Butter Chicken',
    region: 'North India',
    dietType: 'Vegetarian',
    description: 'Invented in the 1950s at Moti Mahal restaurant in Delhi, this dish has conquered dining tables across the globe. Succulent cottage cheese cubes (Paneer) or tandoor-roasted chicken are simmered in an indulgent, velvety sauce of vine-ripened tomatoes, sweet butter, aromatic cashew cream, and dried fenugreek leaves (Kasuri Methi).',
    mainIngredients: ['Fresh Paneer / Chicken', 'Ripe Tomatoes', 'Pure Butter & Dairy Cream', 'Cashew Paste', 'Dried Kasuri Methi'],
    flavorProfile: 'Velvety smooth, creamy, mildly sweet, fragrant with dried fenugreek and butter richness',
    bestServedWith: 'Garlic Butter Naan, Tandoori Roti or Fragrant Jeera Rice',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Rich creamy orange-red Paneer Butter Masala garnished with fresh cream and kasuri methi in brass handi'
  },
  {
    id: 'rogan-josh',
    name: 'Kashmiri Rogan Josh',
    region: 'North India',
    dietType: 'Traditional',
    description: 'An aromatic signature dish of Kashmiri cuisine, introduced during the Mughal era. Made with rich Kashmiri dried red chilies (which impart an intense crimson color without biting pungency), fennel powder, dried ginger (saunth), and whole cardamom simmered gently in pure mustard oil and yogurt gravy.',
    mainIngredients: ['Kashmiri Red Chilies', 'Fennel Powder (Saunf)', 'Dry Ginger (Saunth)', 'Mustard Oil', 'Whole Cloves & Cardamom'],
    flavorProfile: 'Silky, aromatic, warm and comforting with notes of wild fennel and ginger',
    bestServedWith: 'Steamed Kashmiri White Rice or Fresh Tandoori Lavasa Bread',
    image: ROGAN_JOSH_IMAGE,
    imageAlt: 'Authentic documentary photograph of deep crimson Kashmiri Rogan Josh curry slow-cooked in traditional engraved copper degchi with whole spices'
  },
  {
    id: 'rasgulla',
    name: 'Bengali Rosogolla & Mishti Doi',
    region: 'East India',
    dietType: 'Vegetarian',
    description: 'The crowning glory of Bengal’s master confectioners (Moiras). Spongy, melt-in-the-mouth spherical dumplings prepared from freshly kneaded milk chhena (paneer curd), simmered in light clear sugar syrup until juicy and bouncy. Paired with Mishti Doi, a caramelized sweet fermented yogurt baked slowly in earthen terracotta pots.',
    mainIngredients: ['Fresh Chhena (Cow Milk Curd)', 'Semolina pinch', 'Pure Cane Sugar', 'Cardamom', 'Rose Water'],
    flavorProfile: 'Delicate, juicy, milky sweet with subtle floral notes of rose and cardamom',
    bestServedWith: 'Served slightly chilled as the classic celebratory finale to any Indian meal',
    image: ROSOGOLLA_IMAGE,
    imageAlt: 'Authentic documentary photograph of Bengali Rosogolla spongy white dumplings in cardamom sugar syrup and terracotta Mishti Doi'
  }
];

export const NATIONAL_SYMBOLS: NationalSymbol[] = [
  {
    name: 'National Flag',
    title: 'Tiranga (The Tricolor)',
    symbol: '🇮🇳 Horizontal tricolor of deep saffron, white, and dark green with 24-spoke Ashoka Chakra in navy blue',
    significance: 'Saffron denotes courage & sacrifice; White indicates peace & truth; Green signifies faith & prosperity; The Ashoka Chakra represents the eternal wheel of law & continuous progress.',
    adoptedYear: '22 July 1947'
  },
  {
    name: 'National Emblem',
    title: 'Lion Capital of Ashoka',
    symbol: 'Adaptation of the Sarnath Lion Capital erected by Emperor Ashoka (c. 250 BCE)',
    significance: 'Four Asiatic lions standing back to back symbolizing power, courage, pride, and confidence. Carries the sacred motto "Satyameva Jayate" (Truth Alone Triumphs) in Devanagari script.',
    adoptedYear: '26 January 1950'
  },
  {
    name: 'National Anthem',
    title: 'Jana Gana Mana',
    symbol: 'Composed by Nobel Laureate Rabindranath Tagore in highly Sanskritized Bengali',
    significance: 'Expresses the pan-Indian geographic, cultural, and spiritual unity of India across Punjab, Sindh, Gujarat, Maratha, Dravida, Utkala, and Banga.',
    adoptedYear: '24 January 1950'
  },
  {
    name: 'National Animal',
    title: 'Royal Bengal Tiger (Panthera tigris)',
    symbol: 'Apex predator and symbol of wildlife conservation',
    significance: 'Chosen for its grace, strength, agility, and enormous power, epitomizing the untamed beauty and ecological vitality of Indian forests.',
    adoptedYear: 'April 1973'
  },
  {
    name: 'National Bird',
    title: 'Indian Peacock (Pavo cristatus)',
    symbol: 'Majestic bird known for its iridescent blue-green plumage',
    significance: 'Celebrated in Indian mythology, literature, and art as a symbol of beauty, grace, joy, and monsoon rejuvenation.',
    adoptedYear: '1 February 1963'
  },
  {
    name: 'National Flower',
    title: 'Lotus (Nelumbo nucifera)',
    symbol: 'Sacred aquatic flower blooming immaculate out of muddy waters',
    significance: 'A profound symbol of purity, spiritual detachment, divine intellect, and auspicious rebirth throughout Indian philosophical thought.',
    adoptedYear: '1950'
  },
  {
    name: 'National Heritage Animal',
    title: 'Indian Elephant (Elephas maximus indicus)',
    symbol: 'Gentle giant of Indian ancient mythology and ecology',
    significance: 'Declared National Heritage Animal to strengthen protection of elephant migration corridors and cultural kinship with Ganesha.',
    adoptedYear: '22 October 2010'
  },
  {
    name: 'National Tree',
    title: 'Indian Banyan (Ficus benghalensis)',
    symbol: 'Immense canopy tree with aerial prop roots that form new trunks',
    significance: 'Considered immortal (Kalpavriksha) because of its never-ending growth, providing shade to weary travelers and shelter to countless species.',
    adoptedYear: '1950'
  }
];

export const HISTORY_TIMELINE = [
  {
    era: 'c. 2600 – 1900 BCE',
    title: 'Indus Valley Civilization',
    description: 'One of the world’s earliest urban civilizations flourishing at Harappa, Mohenjo-daro, and Dholavira. Pioneer in grid-planned brick cities, sophisticated subterranean drainage systems, standardized weights, and maritime dockyards like Lothal.'
  },
  {
    era: 'c. 1500 – 500 BCE',
    title: 'Vedic Age & Philosophical Flourishing',
    description: 'Composition of the four Vedas (Rigveda, Samaveda, Yajurveda, Atharvaveda) and the profound Upanishads. Emergence of the foundational concepts of Dharma, Karma, Yoga, and Sanskrit grammar codified by Panini.'
  },
  {
    era: '322 – 185 BCE',
    title: 'The Mauryan Empire & Ashoka the Great',
    description: 'First unified pan-Indian empire founded by Chandragupta Maurya with statesman Chanakya. Emperor Ashoka adopted Buddhism after the Kalinga war, erecting the Edicts on stone pillars championing non-violence (Ahimsa), welfare, and religious tolerance.'
  },
  {
    era: '320 – 550 CE',
    title: 'The Classical Golden Age of the Guptas',
    description: 'Epoch of extraordinary scientific and artistic breakthroughs: Aryabhata calculated the value of Pi and solar year length, invention of zero and the decimal number system, creation of Kalidasa’s Sanskrit poetry, and the rock-cut paintings of Ajanta.'
  },
  {
    era: 'c. 850 – 1650 CE',
    title: 'Chola, Vijayanagara & Medieval Dynasties',
    description: 'Chola naval empire expanded across Southeast Asia with monumental granite temples in Thanjavur. Vijayanagara in Karnataka and Delhi Sultanate to Mughal architectural wonders like the Taj Mahal, Red Fort, and synthesis of Hindustani music.'
  },
  {
    era: '1857 – 1947 CE',
    title: 'Freedom Struggle & Independence',
    description: 'The First War of Independence in 1857 gave rise to the national freedom movement. Led by Mahatma Gandhi through Satyagraha and civil disobedience, alongside Netaji Subhas Chandra Bose, Bhagat Singh, Sardar Patel, and Jawaharlal Nehru, India achieved freedom on 15 August 1947.'
  },
  {
    era: '1950 – Present',
    title: 'The World’s Largest Democracy & Modern Era',
    description: 'Adoption of the Constitution of India drafted under Dr. B.R. Ambedkar on 26 January 1950. Modern India has grown into a $3.7+ trillion economy, world leader in space exploration (Chandrayaan-3 lunar landing, Aditya-L1 solar mission), and IT innovation.'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Which is the largest state of India by land area?',
    options: ['Uttar Pradesh', 'Maharashtra', 'Rajasthan', 'Madhya Pradesh'],
    correctAnswer: 2,
    explanation: 'Rajasthan is India’s largest state by land area, covering 342,239 sq km, accounting for about 10.4% of India’s total area.'
  },
  {
    id: 2,
    question: 'In which year did the Taj Mahal get inscribed as a UNESCO World Heritage Site?',
    options: ['1972', '1983', '1995', '2001'],
    correctAnswer: 1,
    explanation: 'The Taj Mahal was designated as a UNESCO World Heritage Site in 1983 as "the jewel of Muslim art in India".'
  },
  {
    id: 3,
    question: 'Which ancient monument in Karnataka is known for its monolithic Stone Chariot?',
    options: ['Belur Chennakeshava', 'Vijaya Vittala Temple at Hampi', 'Badami Caves', 'Pattadakal'],
    correctAnswer: 1,
    explanation: 'The famous Stone Chariot is located inside the Vijaya Vittala temple complex at Hampi, a 14th-century capital of the Vijayanagara Empire.'
  },
  {
    id: 4,
    question: 'What is the national motto of India inscribed below the Ashoka Lion Capital?',
    options: ['Vande Mataram', 'Jai Hind', 'Satyameva Jayate', 'Vasudhaiva Kutumbakam'],
    correctAnswer: 2,
    explanation: '"Satyameva Jayate" (Truth Alone Triumphs), taken from the sacred Mundaka Upanishad, is India’s national motto.'
  },
  {
    id: 5,
    question: 'Which Indian festival is celebrated with traditional boat races and Onasadya feast?',
    options: ['Pongal', 'Bihu', 'Onam', 'Lohri'],
    correctAnswer: 2,
    explanation: 'Onam is the harvest and cultural festival of Kerala, celebrated with the Vallam Kali snake boat race and the grand 26-dish vegetarian feast called Onasadya.'
  },
  {
    id: 6,
    question: 'Which region of India is famous for the dish Khaman Dhokla?',
    options: ['Punjab', 'Gujarat', 'Odisha', 'Tamil Nadu'],
    correctAnswer: 1,
    explanation: 'Khaman Dhokla is a quintessential culinary delicacy of Gujarat, prepared from steamed, seasoned fermented gram flour (besan).'
  }
];
