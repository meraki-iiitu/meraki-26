/**
 * @fileoverview Merchandise/Store related constants and data.
 * Contains product lists, store links, and asset paths for the Meraki shop.
 */

// Store Assets
export const STORE_ASSETS = {
    doon: {
        hoodie: "/merchendise/doom bg removed.png",
        logo: "/merchendise/Doon Merchandise New Logo With BG.png",
    },
    dopamine: {
        hoodie: "/merchendise/dopamine-bg removed.png",
        icon: "/merchendise/skull.png",
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
        image: "/merchendise/doon/Meraki Official Black Hoodie.webp",
        featured: true,
        buyLink: "https://doonmerch.odoo.com/shop/meraki-iiit-una-17/meraki-official-black-hoodie-132",
    },
    {
        id: 2,
        name: "Meraki Official White Hoodie",
        type: "PREMIUM HOODIE",
        image: "/merchendise/doon/Meraki Official White Hoodie.webp",
        buyLink: "https://doonmerch.odoo.com/shop/meraki-iiit-una-17/meraki-official-white-hoodie-133",
    },
    {
        id: 3,
        name: "Meraki Official Black T-Shirt",
        type: "PREMIUM TEE",
        image: "/merchendise/doon/Meraki Official Black T-Shirt.webp",
        buyLink: "https://doonmerch.odoo.com/shop/meraki-iiit-una-17/meraki-official-black-t-shirt-111",
    },
    {
        id: 4,
        name: "Meraki Official White T-Shirt",
        type: "PREMIUM TEE",
        image: "/merchendise/doon/Meraki Official White T-Shirt.webp",
        buyLink: "https://doonmerch.odoo.com/shop/meraki-iiit-una-17/meraki-official-white-t-shirt-130",
    },
    {
        id: 5,
        name: "404 Not Found Oversized T-Shirt",
        type: "OVERSIZED TEE",
        image: "/merchendise/doon/404 Not Found Oversized T-Shirt.webp",
        buyLink: "https://doonmerch.odoo.com/shop/meraki-iiit-una-17/404-not-found-oversized-t-shirt-134",
    },
];

// Dopamine Store Products
export const DOPAMINE_PRODUCTS = [
    {
        id: 1,
        name: "MERAKI - IS IT OVER - Hoodie",
        type: "HOODIES TO GO",
        image: "/merchendise/dopamine/it-is-over-hoodie.webp",
        featured: true,
        buyLink: "https://thedopaminestore.in/products/iiit-una-meraki-grid-hoodies-to-go-copy",
    },
    {
        id: 2,
        name: "MERAKI - GRID - Hoodie",
        type: "HOODIES TO GO",
        image: "/merchendise/dopamine/meraki-grid.webp",
        buyLink: "https://thedopaminestore.in/products/iiit-una-meraki-game-is-on-hoodies-to-go-copy",
    },
    {
        id: 3,
        name: "MERAKI - GAME IS ON - Hoodie",
        type: "HOODIES TO GO",
        image: "/merchendise/dopamine/gameison-hoodiestogo.webp",
        buyLink: "https://thedopaminestore.in/products/iiit-una-meraki-game-is-on-240-gsm-copy",
    },
    {
        id: 4,
        name: "MERAKI - BEEZY BEE",
        type: "240 GSM TEE",
        image: "/merchendise/dopamine/beezy-bee-210-gsm-copy.webp",
        buyLink: "https://thedopaminestore.in/products/iiit-una-meraki-beezy-bee-240-gsm-copy",
    },
    {
        id: 5,
        name: "MERAKI - BEEZY BEE",
        type: "240 GSM TEE",
        image: "/merchendise/dopamine/beezy-bee.webp",
        buyLink: "https://thedopaminestore.in/products/iiit-una-meraki-game-is-on-240-gsm",
    },
    {
        id: 6,
        name: "MERAKI - GAME IS ON",
        type: "240 GSM TEE",
        image: "/merchendise/dopamine/gameison-240gsm.webp",
        buyLink: "https://thedopaminestore.in/products/iiit-una-meraki-240-gsm",
    },
];
