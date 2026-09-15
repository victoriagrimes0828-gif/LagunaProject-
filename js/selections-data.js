// Project selections, grouped by room. Each item can include
// name, description, brand, sku, price, and an image (relative path or data: URI).
//
// 113 Laguna | Dewling — rooms are listed with no selections yet;
// add items to each array below as choices are made.
var SELECTIONS_DATA = {
  "ground-floor": [
    {
      "name": "Cabinet Concept",
      "description": "White cabinets with cane inlay",
      "brand": "",
      "sku": "",
      "price": "",
      "image": "images/selections/ground-floor/cabinet-concept.jpg"
    }
  ],
  "powder-room": [
    {
      "name": "Wallpaper",
      "description": "Pastoral 5 Driftwood",
      "brand": "",
      "sku": "W789&",
      "price": "",
      "image": "images/selections/powder-room/wallpaper.jpg"
    }
  ],
  "living-room": [
    {
      "name": "Ceiling Wallpaper",
      "description": "",
      "brand": "Wallquest Seabrook",
      "sku": "NR182X",
      "price": "",
      "image": "images/selections/living-room/ceiling-wallpaper.jpg"
    }
  ],
  "kitchen-dining": [
    {
      "name": "Counter Stools",
      "description": "Avalon (price is each)",
      "brand": "Palecek",
      "sku": "",
      "price": 4400,
      "image": "images/selections/kitchen-dining/counter-stools.webp"
    },
    {
      "name": "Bar Faucet",
      "description": "Artifacts collection",
      "brand": "Kohler",
      "sku": "K-99267-2MB",
      "price": "",
      "image": "images/selections/kitchen-dining/bar-faucet.jpg"
    },
    {
      "name": "Kitchen Faucet",
      "description": "Artifacts collection — Brushed Bronze",
      "brand": "Kohler",
      "sku": "",
      "price": "",
      "image": "images/selections/kitchen-dining/kitchen-faucet.jpg"
    },
    {
      "name": "Soap Dispenser",
      "description": "Artifacts collection",
      "brand": "Kohler",
      "sku": "",
      "price": "",
      "image": "images/selections/kitchen-dining/soap-dispenser.jpg"
    },
    {
      "name": "Cabinet Hardware",
      "description": "Westwood — Satin Brass",
      "brand": "Emtek",
      "sku": "",
      "price": "",
      "image": "images/selections/kitchen-dining/cabinet-hardware.jpg"
    }
  ],
  "mud-room": [
    {
      "name": "Cabinet Color",
      "description": "Accessible Beige",
      "brand": "Sherwin-Williams",
      "sku": "SW 7036",
      "price": "",
      "image": "images/selections/mud-room/cabinet-color.png"
    },
    {
      "name": "Floor Tile",
      "description": "Marakesh",
      "brand": "Lungarno",
      "sku": "",
      "price": "",
      "image": "images/selections/mud-room/floor-tile.png"
    },
    {
      "name": "Bench Cushion",
      "description": "Davis — Lichen",
      "brand": "Twenty-Nine Park",
      "sku": "",
      "price": "",
      "image": "images/selections/mud-room/bench-cushion.jpg"
    }
  ],
  "guest-room": [
    {
      "name": "Paint Color",
      "description": "Seapearl",
      "brand": "Benjamin Moore",
      "sku": "OC-19",
      "price": "",
      "image": "images/selections/guest-room/paint-color.jpg"
    },
    {
      "name": "Shiplap Ceiling Paint",
      "description": "Smokey Taupe",
      "brand": "",
      "sku": "983",
      "price": "",
      "image": "images/selections/guest-room/shiplap-ceiling-paint.png"
    }
  ],
  "bedroom-3": [
    {
      "name": "Nightstand",
      "description": "Isla — French Grey",
      "brand": "Made Goods",
      "sku": "",
      "price": "",
      "image": "images/selections/bedroom-3/nightstand.jpg"
    },
    {
      "name": "Dresser",
      "description": "Isla — French Grey",
      "brand": "Made Goods",
      "sku": "",
      "price": "",
      "image": "images/selections/bedroom-3/dresser.jpg"
    }
  ],
  "bedroom-2": [
    {
      "name": "Paint Color",
      "description": "Harbor Fog",
      "brand": "Benjamin Moore",
      "sku": "2062-70",
      "price": "",
      "image": "images/selections/bedroom-2/paint-color.webp"
    },
    {
      "name": "Queen Bed",
      "description": "Grand Bermuda Queen Bed",
      "brand": "Gabby",
      "sku": "",
      "price": 3950,
      "image": "images/selections/bedroom-2/queen-bed.webp"
    }
  ],
  "bathroom-2": [
    {
      "name": "Wallpaper",
      "description": "Jammu — Wisteria Blue",
      "brand": "",
      "sku": "NS50602",
      "price": "",
      "image": "images/selections/bathroom-2/wallpaper.png"
    }
  ],
  "bunk-bedroom": [
    {
      "name": "Ceiling Detail",
      "description": "Wood — Honey Wheat (same wood as floor)",
      "brand": "",
      "sku": "",
      "price": "",
      "image": "images/selections/bunk-bedroom/ceiling-detail.jpg"
    },
    {
      "name": "Dresser",
      "description": "Sullivan Chest",
      "brand": "Four Hands",
      "sku": "",
      "price": 2350,
      "image": "images/selections/bunk-bedroom/dresser.jpg"
    },
    {
      "name": "Bunk Bed Color",
      "description": "Alfresco",
      "brand": "Benjamin Moore",
      "sku": "1672",
      "price": "",
      "image": "images/selections/bunk-bedroom/bunk-bed-color.png"
    },
    {
      "name": "Wall Paint Color",
      "description": "Seapearl",
      "brand": "Benjamin Moore",
      "sku": "OC-19",
      "price": "",
      "image": "images/selections/bunk-bedroom/wall-paint-color.jpg"
    }
  ],
  "master-bedroom": [
    {
      "name": "Wallpaper",
      "description": "Persian Carpet",
      "brand": "Thibaut",
      "sku": "T10827",
      "price": "",
      "image": "images/selections/master-bedroom/wallpaper.jpg"
    },
    {
      "name": "Wall Detail",
      "description": "Oak boxes (finish TBD)",
      "brand": "",
      "sku": "",
      "price": "",
      "image": ""
    }
  ],
  "master-bathroom": [
    {
      "name": "Medicine Cabinets",
      "description": "Leda 53 1/4\" x 32\" — Lighted, Frameless, 3 Door (price is each)",
      "brand": "Signature Hardware",
      "sku": "",
      "price": 2025,
      "image": "images/selections/master-bathroom/medicine-cabinets.jpg"
    },
    {
      "name": "Chandelier",
      "description": "Pedrillo",
      "brand": "Hudson Valley",
      "sku": "",
      "price": "",
      "image": "images/selections/master-bathroom/chandelier.jpg"
    }
  ],
  "office": [
    {
      "name": "Wallpaper",
      "description": "Natural Blend",
      "brand": "Phillip Jeffries",
      "sku": "43702",
      "price": "",
      "image": "images/selections/office/wallpaper.jpg"
    },
    {
      "name": "Desk",
      "description": "Sonnet",
      "brand": "",
      "sku": "",
      "price": 2925,
      "image": "images/selections/office/desk.jpg"
    }
  ],
  "misc": [
    {
      "name": "Front Door Paint Color",
      "description": "Vast Sky",
      "brand": "Sherwin-Williams",
      "sku": "SW 6506",
      "price": "",
      "image": "images/selections/misc/front-door-paint-color.png"
    }
  ]
};
