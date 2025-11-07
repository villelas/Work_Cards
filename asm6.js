const content = `[
   {
      "symbol":"AAPL",
      "companyName":"Apple Inc.",
      "exchange":"Nasdaq Global Select",
      "industry":"Computer Hardware",
      "website":"http://www.apple.com",
      "description":"Apple Inc is designs, manufactures and markets mobile communication and media devices and personal computers, and sells a variety of related software, services, accessories, networking solutions and third-party digital content and applications.",
      "CEO":"Timothy D. Cook",
      "sector":"Technology",
      "tags":[
         "Technology",
         "Consumer Electronics",
         "Computer Hardware"
      ],
      "stats":{
         "week52High":233.47,
         "week52Low":142,
         "day200MovingAvg":190.2981,
         "day50MovingAvg":182.26201,
         "costOfRevenue":52279000000,
         "operatingRevenue":84310000000,
         "totalAssets":373719000000,
         "totalLiabilities":255827000000,
         "sharesOutstanding":4715280000
      }
   },
   {
      "symbol":"ADBE",
      "companyName":"Adobe Inc.",
      "exchange":"Nasdaq Global Select",
      "industry":"Application Software",
      "website":"http://www.adobe.com",
      "description":"Adobe Systems Inc offers a line of software and services for content creation and the measurement of digital advertising and marketing. Its software applications includes Photoshop and Lightroom, Adobe Analytics, Media Optimizer and Campaign Manager.",
      "CEO":"Shantanu Narayen",
      "sector":"Technology",
      "tags":[
         "Technology",
         "Software - Application",
         "Application Software"
      ],
      "stats":{
         "week52High":277.61,
         "week52Low":204.95,
         "day200MovingAvg":251.68375,
         "day50MovingAvg":262.191,
         "costOfRevenue":397286000,
         "operatingRevenue":2600946000,
         "totalAssets":19505536000,
         "totalLiabilities":9634051000,
         "sharesOutstanding":487950943
      }
   },
   {
      "symbol":"ADI",
      "companyName":"Analog Devices Inc.",
      "exchange":"Nasdaq Global Select",
      "industry":"Semiconductors",
      "website":"http://www.analog.com",
      "description":"Analog Devices Inc is engaged in the semiconductor industry. Its business involves designing, manufacturing and marketing of high-performance analog, mixed-signal and digital signal processing integrated circuits used in all types of electronic equipment.",
      "CEO":"Vincent T. Roche",
      "sector":"Technology",
      "tags":[
         "Technology",
         "Semiconductors"
      ],
      "stats":{
         "week52High":114.588,
         "week52Low":76.62,
         "day200MovingAvg":94.56507,
         "day50MovingAvg":106.86958,
         "costOfRevenue":501445000,
         "operatingRevenue":1541101000,
         "totalAssets":21828278000,
         "totalLiabilities":10242841000,
         "sharesOutstanding":368314314
      }
   },
   {
      "symbol":"ADSK",
      "companyName":"Autodesk Inc.",
      "exchange":"Nasdaq Global Select",
      "industry":"Application Software",
      "website":"http://www.autodesk.com",
      "description":"Autodesk Inc is engaged in the software industry. It develops software for a number of markets such as construction and media.",
      "CEO":"Andrew Anagnost",
      "sector":"Technology",
      "tags":[
         "Technology",
         "Software - Application",
         "Application Software"
      ],
      "stats":{
         "week52High":173.44,
         "week52Low":117.72,
         "day200MovingAvg":143.18555,
         "day50MovingAvg":158.9472,
         "costOfRevenue":77000000,
         "operatingRevenue":687400000,
         "totalAssets":4729200000,
         "totalLiabilities":4940100000,
         "sharesOutstanding":219535216
      }
   },
   {
      "symbol":"AMD",
      "companyName":"Advanced Micro Devices Inc.",
      "exchange":"Nasdaq Global Select",
      "industry":"Semiconductors",
      "website":"http://www.amd.com",
      "description":"Advanced Micro Devices Inc designs and produces microprocessors and low-power processor solutions for the computer, communications, and consumer electronics industries.",
      "CEO":"Lisa T. Su",
      "sector":"Technology",
      "tags":[
         "Technology",
         "Semiconductors"
      ],
      "stats":{
         "week52High":34.14,
         "week52Low":9.56,
         "day200MovingAvg":22.502,
         "day50MovingAvg":24.8014,
         "costOfRevenue":882000000,
         "operatingRevenue":1419000000,
         "totalAssets":4556000000,
         "totalLiabilities":3290000000,
         "sharesOutstanding":1081563723
      }
   },
   {
      "symbol":"AMZN",
      "companyName":"Amazon.com Inc.",
      "exchange":"Nasdaq Global Select",
      "industry":"Retail - Apparel & Specialty",
      "website":"http://www.amazon.com",
      "description":"Amazon.com Inc is an online retailer. The Company sells its products through the website which provides services, such as advertising services and co-branded credit card agreements. It also offers electronic devices like Kindle e-readers and Fire tablets.",
      "CEO":"Jeffrey P. Bezos",
      "sector":"Consumer Cyclical",
      "tags":[
         "Consumer Cyclical",
         "Specialty Retail",
         "Retail - Apparel & Specialty"
      ],
      "stats":{
         "week52High":2050.5,
         "week52Low":1307,
         "day200MovingAvg":1744.0325,
         "day50MovingAvg":1712.559,
         "costOfRevenue":54814000000,
         "operatingRevenue":72383000000,
         "totalAssets":162648000000,
         "totalLiabilities":119099000000,
         "sharesOutstanding":491202890
      }
   },
   {
      "symbol":"ATVI",
      "companyName":"Activision Blizzard Inc",
      "exchange":"Nasdaq Global Select",
      "industry":"Application Software",
      "website":"http://www.activisionblizzard.com",
      "description":"Activision Blizzard is a developer and publisher of interactive entertainment content and services. It develops and distributes content and services on video game consoles, personal computers, and mobile devices.",
      "CEO":"Robert A. Kotick",
      "sector":"Technology",
      "tags":[
         "Technology",
         "Electronic Gaming & Multimedia",
         "Application Software"
      ],
      "stats":{
         "week52High":84.6794,
         "week52Low":39.85,
         "day200MovingAvg":59.71262,
         "day50MovingAvg":44.38759,
         "costOfRevenue":832000000,
         "operatingRevenue":2381000000,
         "totalAssets":17835000000,
         "totalLiabilities":6478000000,
         "sharesOutstanding":763833873
      }
   },
   {
      "symbol":"BBY",
      "companyName":"Best Buy Co. Inc.",
      "exchange":"New York Stock Exchange",
      "industry":"Retail - Apparel & Specialty",
      "website":"https://www.bestbuy.com",
      "description":"Best Buy Co Inc is a U.S transnational consumer electronics company. Its products include tablets and computers, televisions, mobile phones, large and small appliances, entertainment products, digital imaging and related accessories.",
      "CEO":"Hubert Joly",
      "sector":"Consumer Cyclical",
      "tags":[
         "Consumer Cyclical",
         "Specialty Retail",
         "Retail - Apparel & Specialty"
      ],
      "stats":{
         "week52High":84.37,
         "week52Low":47.72,
         "day200MovingAvg":68.11666,
         "day50MovingAvg":66.83847,
         "costOfRevenue":11518000000,
         "operatingRevenue":14801000000,
         "totalAssets":12901000000,
         "totalLiabilities":9595000000,
         "sharesOutstanding":267804388
      }
   },
   {
      "symbol":"CA",
      "companyName":"CA Inc.",
      "exchange":"Nasdaq Global Select",
      "industry":"Application Software",
      "website":"http://www.ca.com",
      "description":"CA Inc is engaged in creating software that fuels transformation for companies in the application economy. It helps customers develop, manage and secure applications and leverages technology to innovate and engage with the economy and customers in new ways.",
      "CEO":"Michael P. Gregoire",
      "sector":"Technology",
      "tags":[
         "Technology",
         "Software - Application",
         "Application Software"
      ],
      "stats":{
         "week52High":44.79,
         "week52Low":28.375,
         "day200MovingAvg":38.50437,
         "day50MovingAvg":43.35596,
         "costOfRevenue":122000000,
         "operatingRevenue":1020000000,
         "totalAssets":14068000000,
         "totalLiabilities":6908000000,
         "sharesOutstanding":422834821
      }
   },
   {
      "symbol":"CDNS",
      "companyName":"Cadence Design Systems Inc.",
      "exchange":"Nasdaq Global Select",
      "industry":"Application Software",
      "website":"http://www.cadence.com",
      "description":"Cadence Design Systems Inc is engaged in electronic design automation software and hardware, and engineering services. Its software and hardware assist in the design and development of computer chips, circuit boards, displays, and systems.",
      "CEO":"Lip-Bu Tan",
      "sector":"Technology",
      "tags":[
         "Technology",
         "Software - Application",
         "Application Software"
      ],
      "stats":{
         "week52High":50.08,
         "week52Low":32.65,
         "day200MovingAvg":42.01362,
         "day50MovingAvg":43.14597,
         "costOfRevenue":88847000,
         "operatingRevenue":544876000,
         "totalAssets":3673772000,
         "totalLiabilities":2170621000,
         "sharesOutstanding":279143969
      }
   },
   {
      "symbol":"CMCSA",
      "companyName":"Comcast Corporation",
      "exchange":"Nasdaq Global Select",
      "industry":"Broadcasting - TV",
      "website":"http://www.comcastcorporation.com",
      "description":"Comcast Corp is a global media and technology company that connects people to moments that matter. Its business provide video, Internet, voice and wireless services to residential customers and businesses. It owns NBCUniversal and Sky.",
      "CEO":"Brian L. Roberts",
      "sector":"Communication Services",
      "tags":[
         "Communication Services",
         "Entertainment",
         "Broadcasting - TV"
      ],
      "stats":{
         "week52High":44.978,
         "week52Low":30.43,
         "day200MovingAvg":37.48087,
         "day50MovingAvg":36.47296,
         "costOfRevenue":10569000000,
         "operatingRevenue":22743000000,
         "totalAssets":261779000000,
         "totalLiabilities":164998000000,
         "sharesOutstanding":4551652906
      }
   },
   {
      "symbol":"CSCO",
      "companyName":"Cisco Systems Inc.",
      "exchange":"Nasdaq Global Select",
      "industry":"Communication Equipment",
      "website":"http://www.cisco.com",
      "description":"Cisco Systems Inc is engaged in networking industry. It designs and distributes switches and routers, which allow computers to communicate with one another, and other products related to communications and information technology.",
      "CEO":"Charles H. Robbins",
      "sector":"Technology",
      "tags":[
         "Technology",
         "Communication Equipment"
      ],
      "stats":{
         "week52High":48.35,
         "week52Low":38.43,
         "day200MovingAvg":44.48525,
         "day50MovingAvg":47.45298,
         "costOfRevenue":5886000000,
         "operatingRevenue":13072000000,
         "totalAssets":131783000000,
         "totalLiabilities":83077000000,
         "sharesOutstanding":4279000000
      }
   },
   {
      "symbol":"DIS",
      "companyName":"Walt Disney Company (The)",
      "exchange":"New York Stock Exchange",
      "industry":"Broadcasting - TV",
      "website":"https://www.thewaltdisneycompany.com",
      "description":"The Walt Disney Company is a diversified entertainment company. It operates its business through four segments: Studio Entertainment, Media Networks, Parks and Resorts, and Consumer Products & Interactive Media. It is the parent of ABC and ESPN.",
      "CEO":"Robert A. Iger",
      "sector":"Communication Services",
      "tags":[
         "Communication Services",
         "Entertainment",
         "Broadcasting - TV"
      ],
      "stats":{
         "week52High":120.2,
         "week52Low":97.68,
         "day200MovingAvg":109.98675,
         "day50MovingAvg":117.6426,
         "costOfRevenue":9686000000,
         "operatingRevenue":15228000000,
         "totalAssets":98598000000,
         "totalLiabilities":49312000000,
         "sharesOutstanding":1457435172
      }
   },
   {
      "symbol":"FOX",
      "companyName":"Fox Corporation",
      "exchange":"Nasdaq Global Select",
      "industry":"Broadcasting - TV",
      "website":"http://www.21cf.com",
      "description":"Fox Corp is focused on television broadcasting and other related media properties. It consists of national and local television channels and production companies.",
      "CEO":"Lachlan K. Murdoch",
      "sector":"Communication Services",
      "tags":[
         "Communication Services",
         "Entertainment",
         "Broadcasting - TV"
      ],
      "stats":{
         "week52High":57.45,
         "week52Low":29.69,
         "day200MovingAvg":46.82463,
         "day50MovingAvg":54.4392,
         "costOfRevenue":6300000000,
         "operatingRevenue":12909000000,
         "totalAssets":21627000000,
         "totalLiabilities":11309000000,
         "sharesOutstanding":624119072
      }
   },
   {
      "symbol":"INTC",
      "companyName":"Intel Corporation",
      "exchange":"Nasdaq Global Select",
      "industry":"Semiconductors",
      "website":"http://www.intel.com",
      "description":"Intel Corp is engaged in the semiconductor industry. It designs and manufactures advanced integrated digital technology products, primarily integrated circuits, for industries such as computing and communications.",
      "CEO":"Robert H. Swan",
      "sector":"Technology",
      "tags":[
         "Technology",
         "Semiconductors"
      ],
      "stats":{
         "week52High":57.6,
         "week52Low":42.86,
         "day200MovingAvg":50.4975,
         "day50MovingAvg":54.50959,
         "costOfRevenue":9164000000,
         "operatingRevenue":19165000000,
         "totalAssets":133891000000,
         "totalLiabilities":64273000000,
         "sharesOutstanding":4399000000
      }
   },
   {
      "symbol":"MSFT",
      "companyName":"Microsoft Corporation",
      "exchange":"Nasdaq Global Select",
      "industry":"Application Software",
      "website":"http://www.microsoft.com",
      "description":"Microsoft Corp is a software company engaged in developing and supporting a range of software products, services, and devices. Its products include operating systems, cross-device productivity applications, server applications, and business solution applications.",
      "CEO":"Satya Nadella",
      "sector":"Technology",
      "tags":[
         "Technology",
         "Software - Infrastructure",
         "Application Software"
      ],
      "stats":{
         "week52High":116.18,
         "week52Low":71.28,
         "day200MovingAvg":101.03775,
         "day50MovingAvg":113.93499,
         "costOfRevenue":9009000000,
         "operatingRevenue":32471000000,
         "totalAssets":286556000000,
         "totalLiabilities":184226000000,
         "sharesOutstanding":7643693413
      }
   },
   {
      "symbol":"NFLX",
      "companyName":"Netflix Inc.",
      "exchange":"Nasdaq Global Select",
      "industry":"Broadcasting - TV",
      "website":"http://www.netflix.com",
      "description":"Netflix Inc is an Internet television network with over 117.58 million streaming members in over 190 countries. Members can watch as much as they want, anytime, anywhere, on nearly any Internet-connected screen and also has DVD subscription services.",
      "CEO":"Reed Hastings",
      "sector":"Communication Services",
      "tags":[
         "Communication Services",
         "Entertainment",
         "Broadcasting - TV"
      ],
      "stats":{
         "week52High":386.8,
         "week52Low":231.23,
         "day200MovingAvg":324.38375,
         "day50MovingAvg":373.91199,
         "costOfRevenue":2905909000,
         "operatingRevenue":4374562000,
         "totalAssets":25974400000,
         "totalLiabilities":20735635000,
         "sharesOutstanding":440318557
      }
   },
   {
      "symbol":"NVDA",
      "companyName":"NVIDIA Corporation",
      "exchange":"Nasdaq Global Select",
      "industry":"Semiconductors",
      "website":"http://www.nvidia.com",
      "description":"NVIDIA Corp is engaged in the semiconductor industry. It specializes in graphics processing units (GPU) which are important to PC gaming market. GPUs are also used in servers and workstations for applications such as artificial intelligence and deep learning.",
      "CEO":"Jen-Hsun Huang",
      "sector":"Technology",
      "tags":[
         "Technology",
         "Semiconductors"
      ],
      "stats":{
         "week52High":292.76,
         "week52Low":124.46,
         "day200MovingAvg":214.48738,
         "day50MovingAvg":275.6716,
         "costOfRevenue":1209000000,
         "operatingRevenue":3123000000,
         "totalAssets":13292000000,
         "totalLiabilities":5208000000,
         "sharesOutstanding":614000000
      }
   },
   {
      "symbol":"ORCL",
      "companyName":"Oracle Corporation",
      "exchange":"New York Stock Exchange",
      "industry":"Application Software",
      "website":"http://www.oracle.com",
      "description":"Oracle Corp is engaged in the software industry. It develops, manufactures, markets and distributes database and middleware software and provides consulting and support services. Its other products include application servers, and development tools and systems.",
      "CEO":"Safra A. Catz",
      "sector":"Technology",
      "tags":[
         "Technology",
         "Software - Infrastructure",
         "Application Software"
      ],
      "stats":{
         "week52High":53.99,
         "week52Low":42.4,
         "day200MovingAvg":49.0475,
         "day50MovingAvg":51.96399,
         "costOfRevenue":2069000000,
         "operatingRevenue":9614000000,
         "totalAssets":107622000000,
         "totalLiabilities":82894000000,
         "sharesOutstanding":4078000000
      }
   },
   {
      "symbol":"PYPL",
      "companyName":"PayPal Holdings Inc",
      "exchange":"Nasdaq Global Select",
      "industry":"Credit Services",
      "website":"http://www.paypal.com",
      "description":"PayPal Holdings Inc is a technology platform company that enables digital and mobile payments on behalf of consumers and merchants. The company's payments platform includes PayPal, PayPal Credit, Venmo, Xoom and Braintree products.",
      "CEO":"Daniel H. Schulman",
      "sector":"Financial Services",
      "tags":[
         "Financial Services",
         "Credit Services"
      ],
      "stats":{
         "week52High":109,
         "week52Low":70.22,
         "day200MovingAvg":89.56055,
         "day50MovingAvg":99.3652,
         "costOfRevenue":2325000000,
         "operatingRevenue":4226000000,
         "totalAssets":43332000000,
         "totalLiabilities":27946000000,
         "sharesOutstanding":1172192687
      }
   },
   {
      "symbol":"RHT",
      "companyName":"Red Hat Inc.",
      "exchange":"New York Stock Exchange",
      "industry":"Application Software",
      "website":"http://www.redhat.com",
      "description":"Red Hat Inc is a software company operating business across the world. It is primarily engaged in providing services to its version of the open-source Linux software operating systems, middleware, storage, virtualization, and management tools.",
      "CEO":"James M. Whitehurst",
      "sector":"Technology",
      "tags":[
         "Technology",
         "Software - Application",
         "Application Software"
      ],
      "stats":{
         "week52High":183.58,
         "week52Low":115.31,
         "day200MovingAvg":160.70375,
         "day50MovingAvg":181.6732,
         "costOfRevenue":132505000,
         "operatingRevenue":878997000,
         "totalAssets":5588289000,
         "totalLiabilities":3974357000,
         "sharesOutstanding":176760468
      }
   },
   {
      "symbol":"STX",
      "companyName":"Seagate Technology PLC",
      "exchange":"Nasdaq Global Select",
      "industry":"Computer Hardware",
      "website":"http://www.seagate.com",
      "description":"Seagate Technology PLC is a producer of hard disk drives (HDD) globally. It designs, develops, and manufactures a broad range of HDDs used in desktop PC, notebook PC, game consoles, digital video recorders, and enterprise storage markets.",
      "CEO":"William David Mosley",
      "sector":"Technology",
      "tags":[
         "Technology",
         "Data Storage",
         "Computer Hardware"
      ],
      "stats":{
         "week52High":62.7,
         "week52Low":35.38,
         "day200MovingAvg":45.81949,
         "day50MovingAvg":46.72665,
         "totalAssets":5588289000,
         "totalLiabilities":3974357000,
         "costOfRevenue":1921000000,
         "operatingRevenue":2715000000,
         "sharesOutstanding":279247949
      }
   },
   {
      "symbol":"T",
      "companyName":"AT&T Inc.",
      "exchange":"New York Stock Exchange",
      "industry":"Communication Services",
      "website":"http://www.att.com",
      "description":"AT&T Inc is engaged in provision of communications and digital entertainment services in the United States and the world. It provides fixed-line services, including voice, data, and television services to consumers and small businesses.",
      "CEO":"Randall L. Stephenson",
      "sector":"Communication Services",
      "tags":[
         "Communication Services",
         "Telecom Services"
      ],
      "stats":{
         "week52High":35.82,
         "week52Low":26.8,
         "day200MovingAvg":30.3195,
         "day50MovingAvg":30.36936,
         "costOfRevenue":23309000000,
         "operatingRevenue":47993000000,
         "totalAssets":531864000000,
         "totalLiabilities":337980000000,
         "sharesOutstanding":7290236907
      }
   },
   {
      "symbol":"TRIP",
      "companyName":"TripAdvisor Inc.",
      "exchange":"Nasdaq Global Select",
      "industry":"Travel & Leisure",
      "website":"http://www.tripadvisor.com",
      "description":"TripAdvisor Inc provides travel related services. Its website offers reviews on restaurants, hotels and tourist destinations. It secures revenue from providing advertisement space on its website as well as through commissions on bookings.",
      "CEO":"Stephen Kaufer",
      "sector":"Consumer Cyclical",
      "tags":[
         "Consumer Cyclical",
         "Leisure",
         "Travel & Leisure"
      ],
      "stats":{
         "week52High":69,
         "week52Low":36.75,
         "day200MovingAvg":54.87745,
         "day50MovingAvg":53.804,
         "costOfRevenue":19000000,
         "operatingRevenue":346000000,
         "totalAssets":2167000000,
         "totalLiabilities":696000000,
         "sharesOutstanding":138136212
      }
   },
   {
      "symbol":"VZ",
      "companyName":"Verizon Communications Inc.",
      "exchange":"New York Stock Exchange",
      "industry":"Communication Services",
      "website":"http://www.verizon.com",
      "description":"Verizon Communications Inc is a provider of communications, information and entertainment products and services to consumers, businesses and governmental agencies. It offers voice, data and video services and solutions to wireless and wireline networks.",
      "CEO":"Hans Erik Vestberg",
      "sector":"Communication Services",
      "tags":[
         "Communication Services",
         "Telecom Services"
      ],
      "stats":{
         "week52High":61.58,
         "week52Low":46.085,
         "day200MovingAvg":54.28138,
         "day50MovingAvg":56.53448,
         "costOfRevenue":15291000000,
         "operatingRevenue":34281000000,
         "totalAssets":264829000000,
         "totalLiabilities":210119000000,
         "sharesOutstanding":4130000000
      }
   },
   {
      "symbol":"WDC",
      "companyName":"Western Digital Corporation",
      "exchange":"Nasdaq Global Select",
      "industry":"Computer Hardware",
      "website":"https://www.wdc.com",
      "description":"Western Digital Corp is the global leader in the hard disk drive market. It develops, manufactures, and provides data storage solutions that enable consumers to create, manage, experience and preserve digital content. Its products include HDDs and SSDs.",
      "CEO":"",
      "sector":"Technology",
      "tags":[
         "Technology",
         "Data Storage",
         "Computer Hardware"
      ],
      "stats":{
         "week52High":92.06,
         "week52Low":33.83,
         "day200MovingAvg":52.53963,
         "day50MovingAvg":48.44665,
         "costOfRevenue":3189000000,
         "operatingRevenue":4233000000,
         "totalAssets":27939000000,
         "totalLiabilities":17027000000,
         "sharesOutstanding":290850938
      }
   }
]`;

/* STEP1: Convert JSON data into JavaScript object named data */
const data = JSON.parse(content);

/* CompanyCard constructor function*/
function CompanyCard(company) {
  this.currency = (num) =>
    new Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "USD",
    }).format(num);
  this.billions = (num) =>
    "$" +
    new Intl.NumberFormat("en-us", {
      notation: "compact",
      compactDisplay: "short",
    }).format(num);

  /* STEP2: Add properties extracted from the passed company object */
  this.symbol = company.symbol;
  this.name = company.companyName;
  this.tags = company.tags;
  this.day50 = company.stats.day50MovingAvg;
  this.day200 = company.stats.day200MovingAvg;

  this.revenue = company.stats.operatingRevenue - company.stats.costOfRevenue;
  this.marketCap50 =
    company.stats.day50MovingAvg * company.stats.sharesOutstanding;
  this.marketCap200 =
    company.stats.day200MovingAvg * company.stats.sharesOutstanding;
  this.equity = company.stats.totalAssets - company.stats.totalLiabilities;

  /* STEP4: Add outputCard method that outputs the markup for a single company card */
  this.outputCard = function () {
    const section = document.querySelector("section");

    // Create the article element
    const article = document.createElement("article");
    article.className = "card";

    // Create the h2 header
    const h2 = document.createElement("h2");
    h2.textContent = `${this.symbol} - ${this.name}`;
    article.appendChild(h2);

    // Create the div for financial data
    const div = document.createElement("div");

    // Create paragraphs for each financial metric
    const p1 = document.createElement("p");
    p1.innerHTML = `Share Price (50day avg): <span>${this.currency(
      this.day50
    )}</span>`;
    div.appendChild(p1);

    const p2 = document.createElement("p");
    p2.innerHTML = `Share Price (200day avg): <span>${this.currency(
      this.day200
    )}</span>`;
    div.appendChild(p2);

    const p3 = document.createElement("p");
    p3.innerHTML = `Market Cap (50day avg): <span>${this.billions(
      this.marketCap50
    )}</span>`;
    div.appendChild(p3);

    const p4 = document.createElement("p");
    p4.innerHTML = `Market Cap (200day avg): <span>${this.billions(
      this.marketCap200
    )}</span>`;
    div.appendChild(p4);

    const p5 = document.createElement("p");
    p5.innerHTML = `Net Revenue: <span>${this.billions(this.revenue)}</span>`;
    div.appendChild(p5);

    const p6 = document.createElement("p");
    p6.innerHTML = `Shareholder Equity: <span>${this.billions(
      this.equity
    )}</span>`;
    div.appendChild(p6);

    article.appendChild(div);

    // Create the footer with tags
    const footer = document.createElement("footer");
    for (let tag of this.tags) {
      const small = document.createElement("small");
      small.textContent = tag;
      footer.appendChild(small);
    }
    article.appendChild(footer);

    section.appendChild(article);
  };
}

/* STEP5: Create function that loops through company data and creates cards */
function outputCompanyCards() {
  for (let company of data) {
    const card = new CompanyCard(company);
    card.outputCard();
  }
}

outputCompanyCards();
