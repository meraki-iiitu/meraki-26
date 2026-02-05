/**
 * @fileoverview Merchandise/Store related constants and data.
 * Contains product lists, store links, and asset paths for the Meraki shop.
 */

// Import sponsor assets
import dopamineHoodie from '../assets/sponsors/dopamine-bg-removed.png';
import dopamineSkull from '../assets/sponsors/dopamine-skull.png';
import dopamineProduct1 from '../assets/sponsors/dopamine-products/it-is-over-hoodie.webp';
import dopamineProduct2 from '../assets/sponsors/dopamine-products/meraki-grid.webp';
import dopamineProduct3 from '../assets/sponsors/dopamine-products/gameison-hoodiestogo.webp';
import dopamineProduct4 from '../assets/sponsors/dopamine-products/beezy-bee-210-gsm-copy.webp';
import dopamineProduct5 from '../assets/sponsors/dopamine-products/beezy-bee.webp';
import dopamineProduct6 from '../assets/sponsors/dopamine-products/gameison-240gsm.webp';

// Import Doon merchandise assets
import doonHoodie from '../assets/sponsors/doon-hoodie.png';
import doonLogo from '../assets/sponsors/doon-logo.png';
import doonProduct1 from '../assets/sponsors/doon-products/Meraki Official Black Hoodie.webp';
import doonProduct2 from '../assets/sponsors/doon-products/Meraki Official White Hoodie.webp';
import doonProduct3 from '../assets/sponsors/doon-products/Meraki Official Black T-Shirt.webp';
import doonProduct4 from '../assets/sponsors/doon-products/Meraki Official White T-Shirt.webp';
import doonProduct5 from '../assets/sponsors/doon-products/404 Not Found Oversized T-Shirt.webp';

// Store Assets
export const STORE_ASSETS = {
    doon: {
        hoodie: doonHoodie,
        logo: doonLogo,
    },
    dopamine: {
        hoodie: dopamineHoodie,
        icon: dopamineSkull,
    },
};

// Store Links
export const STORE_LINKS = {
    doon: "https://doonmerch.odoo.com/shop/category/meraki-iiit-una-17",
    dopamine: "https://thedopaminestore.in/collections/iiit-una",
};

// Doon Store Products
export const DOON_PRODUCTS = [
    {
        id: 1,
        name: "Meraki Official Black Hoodie",
        type: "PREMIUM HOODIE",
        image: doonProduct1,
        featured: true,
        buyLink: "https://doonmerch.odoo.com/shop/meraki-iiit-una-17/meraki-official-black-hoodie-132",
    },
    {
        id: 2,
        name: "Meraki Official White Hoodie",
        type: "PREMIUM HOODIE",
        image: doonProduct2,
        buyLink: "https://doonmerch.odoo.com/shop/meraki-iiit-una-17/meraki-official-white-hoodie-133",
    },
    {
        id: 3,
        name: "Meraki Official Black T-Shirt",
        type: "PREMIUM TEE",
        image: doonProduct3,
        buyLink: "https://doonmerch.odoo.com/shop/meraki-iiit-una-17/meraki-official-black-t-shirt-111",
    },
    {
        id: 4,
        name: "Meraki Official White T-Shirt",
        type: "PREMIUM TEE",
        image: doonProduct4,
        buyLink: "https://doonmerch.odoo.com/shop/meraki-iiit-una-17/meraki-official-white-t-shirt-130",
    },
    {
        id: 5,
        name: "404 Not Found Oversized T-Shirt",
        type: "OVERSIZED TEE",
        image: doonProduct5,
        buyLink: "https://doonmerch.odoo.com/shop/meraki-iiit-una-17/404-not-found-oversized-t-shirt-134",
    },
];

// Dopamine Store Products
export const DOPAMINE_PRODUCTS = [
    {
        id: 1,
        name: "MERAKI - IS IT OVER - Hoodie",
        type: "HOODIES TO GO",
        image: dopamineProduct1,
        featured: true,
        buyLink: "https://thedopaminestore.in/products/iiit-una-meraki-grid-hoodies-to-go-copy",
    },
    {
        id: 2,
        name: "MERAKI - GRID - Hoodie",
        type: "HOODIES TO GO",
        image: dopamineProduct2,
        buyLink: "https://thedopaminestore.in/products/iiit-una-meraki-game-is-on-hoodies-to-go-copy",
    },
    {
        id: 3,
        name: "MERAKI - GAME IS ON - Hoodie",
        type: "HOODIES TO GO",
        image: dopamineProduct3,
        buyLink: "https://thedopaminestore.in/products/iiit-una-meraki-game-is-on-240-gsm-copy",
    },
    {
        id: 4,
        name: "MERAKI - BEEZY BEE",
        type: "240 GSM TEE",
        image: dopamineProduct4,
        buyLink: "https://thedopaminestore.in/products/iiit-una-meraki-beezy-bee-240-gsm-copy",
    },
    {
        id: 5,
        name: "MERAKI - BEEZY BEE",
        type: "240 GSM TEE",
        image: dopamineProduct5,
        buyLink: "https://thedopaminestore.in/products/iiit-una-meraki-game-is-on-240-gsm",
    },
    {
        id: 6,
        name: "MERAKI - GAME IS ON",
        type: "240 GSM TEE",
        image: dopamineProduct6,
        buyLink: "https://thedopaminestore.in/products/iiit-una-meraki-240-gsm",
    },
];
