// Minerals Data - Part 1: Comprehensive mineral information from PDF pages 22-30
export const mineralsData = [
  {
    id: 1,
    name: "Iron",
    category: "Ferrous",
    ores: ["Hematite", "Magnetite", "Goethite", "Limonite", "Siderite"],
    uses: "Mainly used for production of Steel. Acts as feedstock for many capital industries.",
    globalProducers: ["Australia (Pilbara Region)", "Brazil (Minas Gerias)", "China (Manchuria, Yangtze)", "India", "Russia (Kola Peninsula, Kursk Magnetic anomaly)"],
    globalReserves: "Australia (25%), Brazil, Russia, Ukraine, China",
    indianProducers: ["Odisha (Mayurbhanj, Jhar, Sundergarh)", "Jharkhand (East & West Singhbhum)", "Chhattisgarh (Durg, Dantewada, Bailadila)", "Karnataka (Ballari, Hospet, Baba Budan Hills, Kudremukh)", "Maharashtra (Chandrapur, Bhandara)", "Telangana (Warangal, Karimnagar)"],
    indianReserves: "95% in Odisha, Jharkhand, Chhattisgarh, Karnataka, Goa, Telangana, Andhra Pradesh, Tamil Nadu",
    additionalInfo: "Acts as a feedstock for many capital industries. 95% reserves concentrated in 8 states.",
    importance: "HIGH",
    type: "Metallic"
  },
  {
    id: 2,
    name: "Manganese",
    category: "Ferrous",
    ores: ["Pyrolusite (MnO2)", "Braunite (Mn2O3)", "Hausmannite (Mn3O4)"],
    uses: "Essential component in manufacturing of steel, batteries, and various alloys",
    globalProducers: ["South Africa (Kalahari Basin)", "Gabon (Moanda Mines)", "USA (Eastern USA)", "Ghana (Western Ghana)", "India (Eastern India)"],
    globalReserves: "South Africa (Kalahari), Australia, China, Brazil, Ukraine",
    indianProducers: ["Odisha (near iron belt: Kendujhar, Sundergarh, Koraput, Kalahandi)", "Madhya Pradesh (Balaghat-Chhindwara-Nimar-Mandla, Jhabua)", "Karnataka (Dharwar, Ballari, Belagavi, North Canara)", "Maharashtra (Nagpur, Bhandara, Ratnagiri)"],
    indianReserves: "Odisha, Karnataka, Madhya Pradesh, Maharashtra",
    additionalInfo: "The Manganese Node of India encompasses MP, Maharashtra and Chhattisgarh. Critical industrial metal.",
    importance: "HIGH",
    type: "Metallic"
  },
  {
    id: 3,
    name: "Aluminium",
    category: "Non-Ferrous",
    ores: ["Bauxite", "Corundum", "Cryolite"],
    uses: "Crucial mineral supporting modern infrastructure, transportation, and various industrial applications",
    globalProducers: ["China (Shanxi, Guangxi) - 75% production", "India (Odisha, Jharkhand, Gujarat)", "Russia (northern Caucasus, southern Siberia)", "Canada (imports bauxite)", "UAE (Guinea Alumina Corp)"],
    globalReserves: "Guinea, Australia, Brazil",
    indianProducers: ["Odisha (Kalahandi, Sambalpur, Bolangir, Koraput)", "Jharkhand (Lohardaga Patlands)", "Gujarat (Bhavnagar, Jamnagar)", "Chhattisgarh (Amarkantak plateau)", "Madhya Pradesh (Katni-Jabalpur, Balaghat)"],
    indianReserves: "Odisha, Andhra Pradesh, Gujarat, Jharkhand, Maharashtra, Chhattisgarh. Recently GSI discovered massive deposits in Meghalaya.",
    additionalInfo: "China produces ~75% globally. Aluminium production requires huge amount of electricity. Most smelting industries located near Power Plants. Patlands are flat-topped tablelands covered with basaltic lava from Deccan Trap formation.",
    importance: "HIGH",
    type: "Metallic"
  },
  {
    id: 4,
    name: "Copper",
    category: "Non-Ferrous",
    ores: ["Chalcopyrite (CuFeS2)", "Chalcocite (Cu2S)", "Covellite (CuS)", "Bornite (Cu5FeS4)", "Tetrahedrite", "Enargite"],
    uses: "Extensive applications in industries ranging from construction to electronics. Crucial resource in global economy.",
    globalProducers: ["Chile (Andes: Chuquicamata, Escondida - largest mines)", "Peru (Andes: Cerro Verde)", "DR Congo (Copperbelt, Katanga Plateau)", "China (Inner Mongolia, Yunnan, Xinjiang)", "USA (Arizona, Utah, New Mexico)"],
    globalReserves: "Chile, Peru, Australia, Russia, DR Congo",
    indianProducers: ["Rajasthan (Jhunjhunun, Khetri, Alwar - 52.25% deposits)", "Madhya Pradesh (Balaghat - 23.28%)", "Jharkhand (Singhbhum - 15.14%)", "Minor: Andhra Pradesh (Guntur), Karnataka (Chitradurg, Hasan), Tamil Nadu (South Arcot)"],
    indianReserves: "Hindustan Copper Limited has mines in Rajasthan, MP, Jharkhand",
    additionalInfo: "Chile dominates with world's largest copper mines (Chuquicamata and Escondida). India's copper belt concentrated in Rajasthan.",
    importance: "HIGH",
    type: "Metallic"
  },
  {
    id: 5,
    name: "Mica",
    category: "Industrial",
    ores: ["Muscovite", "Biotite"],
    uses: "Prized for flexibility and heat resistance. Used in electronics, construction, cosmetics and pharmaceuticals",
    globalProducers: ["India (Jharkhand, Bihar, Andhra Pradesh, Rajasthan)", "China (Hunan, Jiangxi, Guangdong)", "Russia (Urals, Siberia)", "Brazil (Minas Gerias, Bahia)", "USA (North Carolina, South Dakota)"],
    globalReserves: "India, China, Republic of Korea, Turkey",
    indianProducers: ["Jharkhand (Muscovite Mica: Hazaribagh plateau, Koderma)", "Andhra Pradesh (Nellore)", "Rajasthan (Belt from Jaipur to Bhilwara and around Udaipur)", "Karnataka (Mysuru, Hassan)", "Tamil Nadu (Coimbatore, Thiruchirapalli, Madurai, Kanyakumari)"],
    indianReserves: "Jharkhand, Andhra Pradesh, Telangana, Rajasthan, with minor in Tamil Nadu, West Bengal, Madhya Pradesh",
    additionalInfo: "In Feb 2025, classified as a Major Mineral along with Feldspar, barytes and Quartz.",
    importance: "MEDIUM",
    type: "Non-Metallic"
  },
  {
    id: 6,
    name: "Uranium",
    category: "Energy/Strategic",
    ores: ["Uraninite (Pitchblende)", "Coffinite", "Autunite", "Torbernite"],
    uses: "Crucial element used primarily as fuel in nuclear reactors for electricity generation",
    globalProducers: ["Kazakhstan (40%)", "Canada", "Namibia", "Australia", "Uzbekistan"],
    globalReserves: "Australia (20%), Russia, Kazakhstan, Namibia, Canada",
    indianProducers: ["Jharkhand (UCIL mines: Jaduguda, along Singhbum Copper belt)"],
    indianReserves: "Potential: Rajasthan (Udaipur, Alwar, Jhunjhunu), Chhattisgarh (Durg), Maharashtra (Bhandara), Himachal Pradesh (Kullu, Hamirpur, Una). Possible in Andhra, Telangana, Meghalaya, Karnataka",
    additionalInfo: "U235 is fissile not U238. Natural uranium contains ~0.72% U-235. ENRICHMENT increases concentration. India in talks with Namibia for partnership. UCIL = Uranium Corporation of India Limited.",
    importance: "HIGH",
    type: "Radioactive"
  },
  {
    id: 7,
    name: "Thorium",
    category: "Energy/Strategic",
    ores: ["Monazite (contains Thorium Dioxide)", "Thorianite (ThO2)", "Thorite (ThSiO4)"],
    uses: "Much cleaner than Uranium. More energy-efficient. Crucial for Clean Energy Production. U233 produced via Thorium is more fissile than U235.",
    globalProducers: ["Not Publicly declared"],
    globalReserves: "India has 25% of global deposits",
    indianProducers: ["Kerala (Palakkad, Kollam districts - world's richest monazite deposits)", "Andhra Pradesh (near Vishakhapatnam)", "Odisha (Mahanadi river delta)"],
    indianReserves: "World's richest monazite deposits in Kerala, Andhra Pradesh, Odisha",
    additionalInfo: "While uranium reactors utilize <1% of fuel, thorium reactors can utilize up to 99% of fuel. China recently created world's first thorium-powered plant.",
    importance: "HIGH",
    type: "Radioactive"
  },
  {
    id: 8,
    name: "Tin",
    category: "Non-Ferrous",
    ores: ["Cassiterite (tin dioxide)"],
    uses: "Silvery-white metal revered for high malleability and corrosion resistance. Used to make alloys like Bronze.",
    globalProducers: ["China (Yunnan, Inner Mongolia)", "Indonesia (Bangka, Belitung islands)", "Peru (Andes)", "Myanmar (Tenasserin hills)", "Bolivia (Andean Region)", "DR Congo (North Kivu)"],
    globalReserves: "China (20%), Myanmar, Australia, Russia, Brazil",
    indianProducers: ["Chhattisgarh (Dandkarnya - CMDC purchases from local tribals)"],
    indianReserves: "Chhattisgarh (Dandkarnya). Possible deposits in Odisha (Korput)",
    additionalInfo: "CMDC = Chhattisgarh Mineral Development Corporation. Allows local tribals to collect tin concentrates from lease area.",
    importance: "MEDIUM",
    type: "Metallic"
  },
  {
    id: 9,
    name: "Gold",
    category: "Precious",
    ores: ["Found as nuggets or grains within rocks and alluvial deposits"],
    uses: "Jewellery, Financial Systems, Electronics",
    globalProducers: ["China", "Australia", "Russia", "Canada", "United States (50% together)"],
    globalReserves: "Major Belts: Africa (Witwatersrand Basin: South Africa), South America (Andean Mountains), North America (Cordillera), Asia (Siberian Craton), Australia (Kalgoorlie)",
    indianProducers: ["Karnataka (Kolar, Hutti)", "Jharkhand (Lava gold mines)", "Uttar Pradesh (Sonbhadra mine)", "Andhra Pradesh (Jonnagiri - first privately owned open-pit gold mine)"],
    indianReserves: "Bihar (preliminary stage, might be largest in India), Jharkhand, Chhattisgarh, Rajasthan, Andhra Pradesh. Recent discovery in Odisha (Sundargarh, Nabarangpur, Keonjhar, Deogarh)",
    additionalInfo: "India to restart mining at Kolar Gold Mines, 24 years after closure.",
    importance: "HIGH",
    type: "Metallic"
  },
  {
    id: 10,
    name: "Silver",
    category: "Precious",
    ores: ["Native silver or silver compounds within geological settings"],
    uses: "Industrial applications include solar panels, electronics, medical devices. Drives significant demand.",
    globalProducers: ["Mexico", "China", "Peru", "Chile", "Poland"],
    globalReserves: "Peru, Australia, Russia, China, Poland",
    indianProducers: ["Some deposits in Rajasthan", "Potential in Karnataka, Jharkhand, Andhra Pradesh"],
    indianReserves: "Not much. Some in Rajasthan, potential in Karnataka, Jharkhand, AP",
    additionalInfo: "Recycling from old electronics becoming increasingly important. Recovered as by-product from lead & zinc concentrates, copper slime, and as co-product of gold refining.",
    importance: "MEDIUM",
    type: "Metallic"
  }
];
// Minerals Data - Part 2: Strategic and Rare Minerals
export const mineralsDataPart2 = [
  {
    id: 11,
    name: "Rare Earth Elements",
    category: "Strategic",
    ores: ["Bastnäsite", "Monazite", "Xenotime", "Loparite", "Lateritic ion-adsorption clays"],
    uses: "Electronics, Magnets (Neodymium in EVs, wind turbines), Catalysis, Lighting (phosphors), Medical Imaging (Gadolinium in MRI)",
    globalProducers: ["China (90% production: Inner Mongolia)", "Australia (Mount Weld)", "Vietnam", "Russia", "USA", "Brazil", "India"],
    globalReserves: "Recent huge deposits in Sweden, Kazakhstan, USA (Wyoming). China, Australia, Vietnam",
    indianProducers: ["13.07 million tonnes monazite in coastal beach placers: Kerala, Tamil Nadu, Odisha, Andhra Pradesh, Maharashtra, Gujarat", "Inland placers: Uttar Pradesh, Jharkhand, West Bengal, Tamil Nadu"],
    indianReserves: "5th largest global deposits. Only Neodymium and Praseodymium extracted at 99.9% purity. No Heavy REE in extractable quantities.",
    additionalInfo: "15 Lanthanides + Scandium & Yttrium. China's monopoly led to Minerals Security Partnership. China banned exports to India, but India established partnership with Australia. 2023 amendment allowed private sector involvement.",
    importance: "HIGH",
    type: "Strategic"
  },
  {
    id: 12,
    name: "Zinc",
    category: "Non-Ferrous",
    ores: ["Sphalerite (zinc sulphide, ZnS)", "Smithsonite (zinc carbonate, ZnCO3)"],
    uses: "Primarily used in galvanization (protects iron/steel from corrosion). Key component in alloys like brass, batteries, fertilizers, paints, pharmaceuticals.",
    globalProducers: ["China (32%)", "Peru", "Australia", "India", "USA"],
    globalReserves: "Australia, China, Russia, Peru, Kazakhstan",
    indianProducers: ["Rajasthan (Hindustan Zinc Ltd: Rampura Agucha, Sindesar Khurd, Rajpura Dariba, Zawar, Kayad)", "Andhra Pradesh", "Madhya Pradesh", "Bihar", "Maharashtra"],
    indianReserves: "Gujarat, Meghalaya, Odisha, Sikkim, Tamil Nadu, Uttarakhand, West Bengal",
    additionalInfo: "Rampura Agucha is one of world's largest zinc mines. Stable Zinc-Sulphur batteries might be alternative to Lithium batteries.",
    importance: "HIGH",
    type: "Metallic"
  },
  {
    id: 13,
    name: "Lead",
    category: "Non-Ferrous",
    ores: ["Galena (PbS)", "Cerussite (PbCO3)", "Anglesite (PbSO4)"],
    uses: "Used in batteries, radiation shielding, ammunition, cable sheathing, construction materials",
    globalProducers: ["China", "Australia", "USA", "Peru", "Russia", "India"],
    globalReserves: "Australia, China, Russia, Mexico, Peru",
    indianProducers: ["Rajasthan (largest lead-producing state)"],
    indianReserves: "Rajasthan (primary), Andhra Pradesh, Madhya Pradesh, Bihar, Maharashtra, Gujarat, Meghalaya, Odisha, Sikkim, Tamil Nadu, Uttarakhand, West Bengal",
    additionalInfo: "Rajasthan dominates lead production in India.",
    importance: "MEDIUM",
    type: "Metallic"
  },
  {
    id: 14,
    name: "Cobalt",
    category: "Strategic",
    ores: ["Cobaltite (CoAsS)", "Erythrite (Co3(AsO4)2)", "Often found with nickel, silver, lead, copper, iron"],
    uses: "Powering electronics and enabling clean energy transition. Crucial for batteries.",
    globalProducers: ["Democratic Republic of Congo (70%)", "Indonesia", "Russia", "Canada", "Philippines"],
    globalReserves: "DR Congo, Australia, Indonesia, Cuba, Philippines",
    indianProducers: ["NO DOMESTIC PRODUCTION CURRENTLY"],
    indianReserves: "Potential reserves: Jharkhand (Singhbhum), Odisha (Kendujhar, Jajpur), Rajasthan (Jhunjhunu), Nagaland (Tuensang), Madhya Pradesh (Jhabua, Hoshangabad)",
    additionalInfo: "100% import dependence. Focus on recycling (re-extraction from electronics).",
    importance: "HIGH",
    type: "Strategic"
  },
  {
    id: 15,
    name: "Nickel",
    category: "Strategic",
    ores: ["Nickeliferous limonite", "Pentlandite"],
    uses: "Key ingredient in stainless steel and rechargeable batteries",
    globalProducers: ["Indonesia", "Philippines", "Russia", "Canada", "China"],
    globalReserves: "Indonesia, Australia, Brazil, Russia, Philippines",
    indianProducers: ["No active mines. Produced as byproduct of copper smelting."],
    indianReserves: "India holds ~0.2% global reserves. Odisha (Sukinda Valley, Jajpur; Mayurbhanj, Keonjhar), Jharkhand (Singhbhum East), Nagaland (Kiphire). Found with uranium at Jaduguda.",
    additionalInfo: "Focus on recycling. Process being developed for recovery from uranium deposits at Jaduguda.",
    importance: "HIGH",
    type: "Strategic"
  },
  {
    id: 16,
    name: "Lithium",
    category: "Energy/Strategic",
    ores: ["Spodumene", "Lepidolite", "Petalite"],
    uses: "Li-ion Batteries for EVs and electronics",
    globalProducers: ["Chile, Australia, China produce 70%"],
    globalReserves: "Lithium Triangle (ABC: Argentina, Bolivia, Chile) - 75% known reserves",
    indianProducers: ["No active mines. First mine coming up in Korba, Chhattisgarh"],
    indianReserves: "Jammu & Kashmir, Rajasthan, Karnataka (Mandya, Yadgiri). Recent discoveries: Meghalaya (Lithium Valley, Cherrapunji), Jharkhand (Koderma)",
    additionalInfo: "Lithium mining causing pollution. India's first mine will be in Chhattisgarh.",
    importance: "HIGH",
    type: "Strategic"
  },
  {
    id: 17,
    name: "Tantalum",
    category: "Strategic",
    ores: ["Columbite-tantalite (Coltan)"],
    uses: "Electronics & semiconductors, computers to ACs (mainly for capacitors)",
    globalProducers: ["DR Congo", "Nigeria", "Rwanda", "Brazil", "China"],
    globalReserves: "Australia, China, Brazil. Rest data not available.",
    indianProducers: ["No Production"],
    indianReserves: "Potential found in Sutlej River sands in Punjab",
    additionalInfo: "100% import dependence. Strategic mineral for electronics industry.",
    importance: "MEDIUM",
    type: "Strategic"
  },
  {
    id: 18,
    name: "Antimony",
    category: "Strategic",
    ores: ["Stibnite (Sb2S3)"],
    uses: "Flame-retardant materials, paints, enamels, glass, pottery",
    globalProducers: ["China", "Russia", "Tajikistan", "Australia", "Bolivia"],
    globalReserves: "China, Russia, Bolivia, Kyrgyzstan, Myanmar",
    indianProducers: ["Complete import dependency"],
    indianReserves: "Minor deposits in Himachal Pradesh (Lahul & Spiti), Madhya Pradesh (Damoh)",
    additionalInfo: "China limited exports in July 2024.",
    importance: "MEDIUM",
    type: "Strategic"
  },
  {
    id: 19,
    name: "Gallium",
    category: "Strategic",
    ores: ["Occurs as trace in bauxite and sphalerite. Recovered as byproduct during processing."],
    uses: "Soft, silvery-white strategic metal predominantly used in electronics",
    globalProducers: ["China (>90%)", "Russia", "Japan", "South Korea", "Ukraine"],
    globalReserves: "Data not available in public domain",
    indianProducers: ["Used to be produced by Hindalco and NALCO, but not anymore"],
    indianReserves: "NALCO planning 10 tpy gallium extraction plant at Damanjodi alumina refinery",
    additionalInfo: "China limited exports in July 2023. Not mined as primary ore.",
    importance: "HIGH",
    type: "Strategic"
  },
  {
    id: 20,
    name: "Germanium",
    category: "Strategic",
    ores: ["Germanite, Argyrodite (rare). Mainly recovered as byproduct of zinc, copper, lead mining"],
    uses: "Electronics, solar applications, fiber-optic systems, infrared optics, polymerization catalysts, chemotherapy, metallurgy, phosphors",
    globalProducers: ["China (biggest)", "USA", "Belgium", "Canada", "Russia", "South Africa", "Germany"],
    globalReserves: "Data not available in public domain",
    indianProducers: ["Not available"],
    indianReserves: "100% import dependence (from China, Germany, South Africa)",
    additionalInfo: "Recovered from coal fly ash. Producers don't publicly share production data.",
    importance: "HIGH",
    type: "Strategic"
  }
];
// Minerals Data - Part 3: Industrial & Additional Strategic Minerals
export const mineralsDataPart3 = [
  {
    id: 21,
    name: "Silicon",
    category: "Industrial",
    ores: ["Silica (silicon dioxide, SiO2)", "Silicate minerals (feldspar, mica, clay)", "Quartz, Quartzite, Sand"],
    uses: "Electronics (semiconductor in chips, solar cells), Construction (silica in glass, cement, ceramics), Metallurgy (ferrosilicon), Silicones (lubricants, sealants), Cosmetics, Medical implants",
    globalProducers: ["China (>75%)", "Brazil", "Norway"],
    globalReserves: "2nd most abundant element in Earth's crust",
    indianProducers: ["Haryana (significant quartzite resources)", "Rajasthan", "Andhra Pradesh", "Tamil Nadu", "Maharashtra", "Jharkhand", "Uttar Pradesh"],
    indianReserves: "Silicon derived from Quartz. Haryana holds significant portion of quartzite resources.",
    additionalInfo: "Ferrosilicate producers: China (>50%), Russia, Norway, Brazil. 2nd most abundant element in Earth's crust.",
    importance: "HIGH",
    type: "Non-Metallic"
  },
  {
    id: 22,
    name: "Tungsten",
    category: "Strategic",
    ores: ["Wolframite", "Scheelite"],
    uses: "Dense, hard metal with highest melting point of all metals. Production of hard materials (tungsten carbide for cutting tools, wear-resistant applications). Aerospace, electronics industries, filaments in light bulbs, electrodes",
    globalProducers: ["China (>80%)", "Russia", "Vietnam"],
    globalReserves: "China (by far largest), Australia, Russia",
    indianProducers: ["Rajasthan (Degana, Nagaur)", "Karnataka"],
    indianReserves: "Karnataka, Rajasthan, Andhra Pradesh, Maharashtra. Smaller in Haryana, Tamil Nadu, Uttarakhand, West Bengal",
    additionalInfo: "Recently tungsten mining was scrapped in Madurai due to protests. China dominates with >80% production.",
    importance: "HIGH",
    type: "Strategic"
  },
  {
    id: 23,
    name: "Tellurium",
    category: "Strategic",
    ores: ["Rarely in native form. Extracted as byproduct"],
    uses: "Primarily in thermoelectric devices, solar panels (CdTe solar cells), additive in steel and copper alloys, optical discs, semiconductors, vulcanization of rubber",
    globalProducers: ["China (majority)", "Sweden", "Japan", "Russia", "Canada", "Bulgaria"],
    globalReserves: "China (21%), USA (11%), Canada (3%), Sweden (2%)",
    indianProducers: ["Ghatshila copper smelter, Jharkhand (no data since 2005-06)", "Minor from Dahej, Gujarat (no data since 2010-11)"],
    indianReserves: "Jharkhand, Gujarat",
    additionalInfo: "Recovered as by-product from anode mud/slime during electrolytic refining of copper.",
    importance: "MEDIUM",
    type: "Strategic"
  },
  {
    id: 24,
    name: "Selenium",
    category: "Strategic",
    ores: ["Rarely as pure ore. Minor component in sulphide ores (copper, lead, silver)"],
    uses: "Photocells, solar panels, glass manufacturing (decolorize/tint glass), Electronic rectifiers, Agriculture and animal nutrition as micronutrient",
    globalProducers: ["China", "Germany", "Japan", "Belgium"],
    globalReserves: "China (26%), Russia (20%), Peru (13%), USA (10%), Canada (6%)",
    indianProducers: ["Recovered as byproduct"],
    indianReserves: "Found with copper, lead, silver ores",
    additionalInfo: "Byproduct of copper, lead, silver ore processing.",
    importance: "MEDIUM",
    type: "Strategic"
  },
  {
    id: 25,
    name: "Indium",
    category: "Strategic",
    ores: ["Primarily in zinc and lead ores (sphalerite and galena)"],
    uses: "Mainly in Indium Tin Oxide (ITO) for touchscreens, LCDs, solar panels (transparency and conductivity). Semiconductors, solders, alloys with low melting points and good thermal properties",
    globalProducers: ["China", "South Korea", "Japan", "Canada"],
    globalReserves: "Canada (28% of world's reserves), Australia, Russia, Peru, China. Detailed figures often not publicly available",
    indianProducers: ["NIL production"],
    indianReserves: "Complete import dependency",
    additionalInfo: "Byproduct of Zinc and Lead Mining. Essential for modern touchscreens and displays.",
    importance: "MEDIUM",
    type: "Strategic"
  }
];

// Combine all mineral data
export const allMinerals = [
  ...mineralsData,
  ...mineralsDataPart2,
  ...mineralsDataPart3
];

// Quiz Questions - Comprehensive coverage
export const quizQuestions = [
  {
    question: "Which state accounts for 95% of India's iron ore reserves?",
    options: ["Karnataka", "Jharkhand alone", "Odisha alone", "Odisha, Jharkhand, Chhattisgarh, Karnataka combined"],
    correct: 3,
    explanation: "95% of India's iron ore reserves are in 8 states: Odisha, Jharkhand, Chhattisgarh, Karnataka, Goa, Telangana, Andhra Pradesh, and Tamil Nadu."
  },
  {
    question: "Which mine is known as one of the world's largest zinc mines?",
    options: ["Kolar Gold Mine", "Rampura Agucha", "Jaduguda Uranium Mine", "Bailadila Iron Mine"],
    correct: 1,
    explanation: "Rampura Agucha in Rajasthan is known as one of the world's largest zinc mines, operated by Hindustan Zinc Limited."
  },
  {
    question: "India holds what percentage of global thorium deposits?",
    options: ["10%", "15%", "25%", "40%"],
    correct: 2,
    explanation: "India has 25% of global thorium deposits, with world's richest monazite deposits in Kerala (Palakkad, Kollam districts)."
  },
  {
    question: "Which country produces 90% of Rare Earth Elements globally?",
    options: ["USA", "Australia", "China", "India"],
    correct: 2,
    explanation: "China produces 90% of global Rare Earth Elements, leading to concerns that resulted in the Minerals Security Partnership."
  },
  {
    question: "Where is India's first lithium mine coming up?",
    options: ["Jammu & Kashmir", "Korba, Chhattisgarh", "Meghalaya", "Karnataka"],
    correct: 1,
    explanation: "India's first lithium mine will be in Korba, Chhattisgarh. Recent discoveries also made in Meghalaya (Lithium Valley, Cherrapunji)."
  },
  {
    question: "What is the Lithium Triangle?",
    options: ["China, Australia, Chile", "Argentina, Bolivia, Chile", "USA, Canada, Mexico", "Peru, Brazil, Colombia"],
    correct: 1,
    explanation: "The Lithium Triangle (ABC: Argentina, Bolivia, Chile) holds 75% of known global lithium reserves."
  },
  {
    question: "Which mineral was classified as a Major Mineral in February 2025?",
    options: ["Gold", "Mica", "Cobalt", "Lithium"],
    correct: 1,
    explanation: "In Feb 2025, Mica was classified as a Major Mineral along with Feldspar, barytes and Quartz."
  },
  {
    question: "Jaduguda mines in Jharkhand are famous for which mineral?",
    options: ["Copper", "Uranium", "Gold", "Bauxite"],
    correct: 1,
    explanation: "Jaduguda in Jharkhand (along Singhbhum Copper belt) has UCIL (Uranium Corporation of India Limited) mines for uranium."
  },
  {
    question: "What percentage of India's aluminium production does China account for globally?",
    options: ["25%", "50%", "75%", "90%"],
    correct: 2,
    explanation: "China produces approximately 75% of global aluminium. India is also a major producer with deposits mainly in Odisha."
  },
  {
    question: "Which region is called the 'Manganese Node of India'?",
    options: ["Odisha-Jharkhand belt", "MP-Maharashtra-Chhattisgarh", "Karnataka-Goa-AP", "Rajasthan-Gujarat"],
    correct: 1,
    explanation: "The Manganese Node of India encompasses Madhya Pradesh, Maharashtra and Chhattisgarh."
  },
  {
    question: "Kolar Gold Mines, closed 24 years ago, are located in which state?",
    options: ["Jharkhand", "Odisha", "Karnataka", "Bihar"],
    correct: 2,
    explanation: "Kolar Gold Mines in Karnataka are set to restart mining after 24 years of closure."
  },
  {
    question: "Which isotope of Uranium is fissile?",
    options: ["U-234", "U-235", "U-238", "U-240"],
    correct: 1,
    explanation: "U-235 is fissile, not U-238. Natural uranium contains approximately 0.72% U-235. ENRICHMENT is done to increase concentration."
  },
  {
    question: "What percentage of fuel can thorium reactors utilize compared to uranium reactors?",
    options: ["Uranium <1%, Thorium up to 50%", "Uranium <1%, Thorium up to 99%", "Both equal at 50%", "Uranium 50%, Thorium <1%"],
    correct: 1,
    explanation: "While uranium reactors typically utilize less than 1% of fuel, thorium reactors can utilize up to 99% of fuel in well-designed reprocessing systems."
  },
  {
    question: "Which country recently created the world's first thorium-powered plant?",
    options: ["India", "USA", "China", "France"],
    correct: 2,
    explanation: "China has recently created the world's first thorium-powered plant, demonstrating thorium's potential for clean energy."
  },
  {
    question: "Bailadila mines are famous for which mineral?",
    options: ["Copper", "Gold", "Iron", "Manganese"],
    correct: 2,
    explanation: "Bailadila mines in Chhattisgarh (Durg, Dantewada) are famous for iron ore."
  },
  {
    question: "Which state has the Khetri copper belt?",
    options: ["Jharkhand", "Madhya Pradesh", "Rajasthan", "Karnataka"],
    correct: 2,
    explanation: "Khetri copper belt is in Rajasthan (Jhunjhunun, Khetri, Alwar districts), which accounts for 52.25% of India's copper deposits."
  },
  {
    question: "GSI recently discovered massive deposits of which mineral in Meghalaya?",
    options: ["Iron", "Bauxite", "Lithium", "Gold"],
    correct: 1,
    explanation: "Geological Survey of India (GSI) recently discovered massive Bauxite deposits in Meghalaya. Meghalaya also has lithium discoveries (Lithium Valley)."
  },
  {
    question: "What are Patlands in context of aluminium mining?",
    options: ["Coastal plains", "Flat-topped tablelands with basaltic lava", "River valleys", "Mountain peaks"],
    correct: 1,
    explanation: "Patlands are flat-topped tablelands (local plateaus) covered with basaltic lava from Deccan Trap formation. Lohardaga Patlands in Jharkhand have bauxite."
  },
  {
    question: "Which country has the largest copper mines (Chuquicamata and Escondida)?",
    options: ["Peru", "Chile", "USA", "DR Congo"],
    correct: 1,
    explanation: "Chile has the world's largest copper mines - Chuquicamata and Escondida in the Andes Region."
  },
  {
    question: "DR Congo produces what percentage of global cobalt?",
    options: ["30%", "50%", "70%", "90%"],
    correct: 2,
    explanation: "Democratic Republic of Congo produces 70% of global cobalt, making it critical for battery and electronics industry."
  },
  {
    question: "China limited exports of which two strategic minerals in 2023-2024?",
    options: ["Lithium and Cobalt", "Gallium and Antimony", "Copper and Zinc", "Gold and Silver"],
    correct: 1,
    explanation: "China limited Gallium exports in July 2023 and Antimony exports in July 2024, highlighting strategic mineral dependencies."
  },
  {
    question: "What is UCIL?",
    options: ["United Copper Industries Ltd", "Uranium Corporation of India Limited", "Union Coal India Ltd", "Utility Chemicals India Ltd"],
    correct: 1,
    explanation: "UCIL stands for Uranium Corporation of India Limited, operating uranium mines at Jaduguda, Jharkhand."
  },
  {
    question: "Which state has the world's richest monazite deposits?",
    options: ["Odisha", "Tamil Nadu", "Kerala", "Andhra Pradesh"],
    correct: 2,
    explanation: "Kerala (Palakkad and Kollam districts) has the world's richest monazite deposits, which contain thorium."
  },
  {
    question: "Kudremukh mines are located in which state?",
    options: ["Karnataka", "Kerala", "Tamil Nadu", "Goa"],
    correct: 0,
    explanation: "Kudremukh iron ore mines are located in Karnataka, along with other major mines like Ballari, Hospet, and Baba Budan Hills."
  },
  {
    question: "Which country is NOT part of the Lithium Triangle?",
    options: ["Argentina", "Peru", "Chile", "Bolivia"],
    correct: 1,
    explanation: "The Lithium Triangle consists of Argentina, Bolivia, and Chile (ABC), which hold 75% of known global lithium reserves."
  },
  {
    question: "India ranks what position globally in Rare Earth Element deposits?",
    options: ["1st", "3rd", "5th", "10th"],
    correct: 2,
    explanation: "India has the 5th largest Rare Earth Element deposits globally, though China dominates production with 90%."
  },
  {
    question: "Which mineral is recovered as a byproduct from anode mud during copper refining?",
    options: ["Gold", "Silver", "Tellurium", "All of the above"],
    correct: 3,
    explanation: "Gold, Silver, and Tellurium are all recovered as by-products from anode mud/slime during electrolytic refining of copper."
  },
  {
    question: "What percentage of Canada's aluminum production relies on imported bauxite?",
    options: ["25%", "50%", "Almost all", "None"],
    correct: 2,
    explanation: "Canada doesn't have significant bauxite reserves and relies almost entirely on imports, despite being a major producer of primary aluminum."
  },
  {
    question: "Which state is planning to extract gallium at Damanjodi alumina refinery?",
    options: ["Chhattisgarh", "Jharkhand", "Odisha", "Gujarat"],
    correct: 2,
    explanation: "NALCO (National Aluminium Co. Ltd.) is planning a 10 tpy gallium extraction plant at its Damanjodi alumina refinery in Odisha."
  },
  {
    question: "Singhbhum district is famous for which minerals?",
    options: ["Copper and Uranium", "Iron and Bauxite", "Gold and Silver", "Zinc and Lead"],
    correct: 0,
    explanation: "Singhbhum district in Jharkhand is famous for its Copper belt and Uranium mines (Jaduguda). It also has nickel potential."
  },
  {
    question: "Which state discovered potential gold reserves that might be the largest in India?",
    options: ["Odisha", "Bihar", "Jharkhand", "Chhattisgarh"],
    correct: 1,
    explanation: "Bihar has preliminary-stage gold reserves that might prove to be the largest reserves in India."
  },
  {
    question: "What is the 2nd most abundant element in Earth's crust?",
    options: ["Iron", "Aluminium", "Silicon", "Oxygen"],
    correct: 2,
    explanation: "Silicon is the 2nd most abundant element in Earth's crust (after oxygen), derived from quartz and quartzite."
  },
  {
    question: "Which tungsten mine in Tamil Nadu was recently scrapped due to protests?",
    options: ["Salem", "Coimbatore", "Madurai", "Thanjavur"],
    correct: 2,
    explanation: "Tungsten mining was recently scrapped in Madurai due to protests, despite tungsten being a strategic mineral."
  },
  {
    question: "What does ITO (used in touchscreens) contain?",
    options: ["Iron Tin Oxide", "Iodine Tellurium Oxide", "Indium Tin Oxide", "Ionic Tantalum Oxide"],
    correct: 2,
    explanation: "ITO (Indium Tin Oxide) is used for making touchscreens, LCDs, and solar panels due to its transparency and conductivity."
  },
  {
    question: "Which mineral has the highest melting point of all metals?",
    options: ["Iron", "Tungsten", "Titanium", "Chromium"],
    correct: 1,
    explanation: "Tungsten has the highest melting point of all metals, making it ideal for high-temperature applications and filaments."
  },
  {
    question: "Minerals Security Partnership was formed due to concerns about which country's dominance?",
    options: ["USA", "Russia", "China", "Australia"],
    correct: 2,
    explanation: "Minerals Security Partnership was formed due to concerns about China's near-monopolistic position in strategic minerals like REE."
  },
  {
    question: "Which organization purchases tin concentrates from local tribals in Chhattisgarh?",
    options: ["SAIL", "CMDC", "NALCO", "UCIL"],
    correct: 1,
    explanation: "CMDC (Chhattisgarh Mineral Development Corporation) purchases tin concentrates from local tribals in the Dandkarnya region."
  },
  {
    question: "Jonnagiri mines in Andhra Pradesh are India's first privately owned mines for which mineral?",
    options: ["Iron", "Copper", "Gold", "Bauxite"],
    correct: 2,
    explanation: "Jonnagiri gold mines in Andhra Pradesh are India's first privately owned open-pit gold mine."
  },
  {
    question: "Which REE elements can India extract at 99.9% purity?",
    options: ["All 15 Lanthanides", "Neodymium and Praseodymium only", "Scandium and Yttrium only", "None currently"],
    correct: 1,
    explanation: "In Indian deposits, only Neodymium and Praseodymium are available and being extracted at 99.9% purity level."
  },
  {
    question: "What amendment in 2023 affected Rare Earth Element mining in India?",
    options: ["Banned all mining", "Allowed private sector involvement", "Nationalized all mines", "Banned exports"],
    correct: 1,
    explanation: "2023 amendment to Mines & Minerals Act allowed private sector involvement in Rare Earth Element mining."
  }
];

// Export combined data as default
export default {
  minerals: allMinerals,
  quizQuestions: quizQuestions
};
