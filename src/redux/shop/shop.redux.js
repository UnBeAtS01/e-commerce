import { act } from "react-dom/test-utils";

const INITIAL_STATE = {
    SHOP_DATA: [
        {
            id: 1,
            title: 'Hats',
            routeName: 'hats',
            items: [
                {
                    id: 1,
                    name: 'Brown Brim',
                    imageUrl: 'https://images.unsplash.com/flagged/photo-1557581462-0bf3e5907811?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                    price: 25
                },
                {
                    id: 2,
                    name: 'Blue Beanie',
                    imageUrl: 'https://images.unsplash.com/photo-1551734413-5943d61e002a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8aGF0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    price: 18
                },
                {
                    id: 3,
                    name: 'Brown Cowboy',
                    imageUrl: 'https://images.unsplash.com/photo-1589903521522-6dfb45855f9b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTl8fGhhdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    price: 35
                },
                {
                    id: 4,
                    name: 'Grey Brim',
                    imageUrl: 'https://images.unsplash.com/photo-1579542145952-05fd27275991?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjJ8fGhhdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    price: 25
                },
                {
                    id: 5,
                    name: 'Green Beanie',
                    imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
                    price: 18
                },
                {
                    id: 6,
                    name: 'Palm Tree Cap',
                    imageUrl: 'https://images.unsplash.com/photo-1582661702593-149b3f4f2927?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODV8fGhhdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    price: 14
                },
                {
                    id: 7,
                    name: 'Red Beanie',
                    imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
                    price: 18
                },
                {
                    id: 8,
                    name: 'Wolf Cap',
                    imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
                    price: 14
                },
                {
                    id: 9,
                    name: 'Blue Snapback',
                    imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
                    price: 16
                }
            ]
        },
        {
            id: 2,
            title: 'Sneakers',
            routeName: 'sneakers',
            items: [
                {
                    id: 10,
                    name: 'Nike NMD',
                    imageUrl: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    price: 220
                },
                {
                    id: 11,
                    name: 'Adidas Yeezy',
                    imageUrl: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8c25lYWtlcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    price: 280
                },
                {
                    id: 12,
                    name: 'Black Converse',
                    imageUrl: 'https://images.unsplash.com/photo-1581977012607-4091712d36f9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNuZWFrZXJzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    price: 110
                },
                {
                    id: 13,
                    name: 'Nike White AirForce',
                    imageUrl: 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTZ8fHNuZWFrZXJzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    price: 160
                },
                {
                    id: 14,
                    name: 'Nike Red High Tops',
                    imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
                    price: 160
                },
                {
                    id: 15,
                    name: 'Nike Brown High Tops',
                    imageUrl: 'https://images.unsplash.com/photo-1597248881519-db089d3744a5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c25lYWtlcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    price: 160
                },
                {
                    id: 16,
                    name: 'Air Jordan Limited',
                    imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
                    price: 190
                },
                {
                    id: 17,
                    name: 'Timberlands',
                    imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
                    price: 200
                }
            ]
        },
        {
            id: 3,
            title: 'Jackets',
            routeName: 'jackets',
            items: [
                {
                    id: 18,
                    name: 'Black Jean Shearling',
                    imageUrl: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8amFja2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    price: 125
                },
                {
                    id: 19,
                    name: 'Blue Jean Jacket',
                    imageUrl: 'https://images.unsplash.com/photo-1549738712-da3cb334e1d2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGphY2tldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    price: 90
                },
                {
                    id: 20,
                    name: 'Grey Jean Jacket',
                    imageUrl: 'https://images.unsplash.com/photo-1604187365119-b4b0631f88d4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGphY2tldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    price: 90
                },
                {
                    id: 21,
                    name: 'Brown Shearling',
                    imageUrl: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fGphY2tldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    price: 165
                },
                {
                    id: 22,
                    name: 'Tan Trench',
                    imageUrl: 'https://images.unsplash.com/photo-1605022600390-071c6f969b32?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGphY2tldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    price: 185
                }
            ]
        },
        {
            id: 4,
            title: 'Womens',
            routeName: 'womens',
            items: [
                {
                    id: 23,
                    name: 'Blue Tanktop',
                    imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    price: 25
                },
                {
                    id: 24,
                    name: 'Floral Blouse',
                    imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
                    price: 20
                },
                {
                    id: 25,
                    name: 'Floral Dress',
                    imageUrl: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    price: 80
                },
                {
                    id: 26,
                    name: 'Red Dots Dress',
                    imageUrl: 'https://images.unsplash.com/photo-1501870190084-cdf29f15ef87?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDJ8fGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    price: 80
                },
                {
                    id: 27,
                    name: 'Striped Sweater',
                    imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
                    price: 45
                },
                {
                    id: 28,
                    name: 'Yellow Track Suit',
                    imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
                    price: 135
                },
                {
                    id: 29,
                    name: 'White Blouse',
                    imageUrl: 'https://images.unsplash.com/photo-1560282904-7adf21e5e0da?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAxfHxmYXNoaW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    price: 20
                }
            ]
        },
        {
            id: 5,
            title: 'Mens',
            routeName: 'mens',
            items: [
                {
                    id: 30,
                    name: 'Camo Down Vest',
                    imageUrl: 'https://images.unsplash.com/photo-1559582798-678dfc71ccd8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwZmFzaGlvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    price: 325
                },
                {
                    id: 31,
                    name: 'T-shirt',
                    imageUrl: 'https://images.unsplash.com/photo-1560889041-1814025efae4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njh8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    price: 20
                },
                {
                    id: 32,
                    name: 'pinkish White Longsleeve',
                    imageUrl: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bWVucyUyMGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    price: 25
                },
                {
                    id: 33,
                    name: 'Pink T-shirt',
                    imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
                    price: 25
                },
                {
                    id: 34,
                    name: 'Jean Long Sleeve',
                    imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
                    price: 40
                },
                {
                    id: 35,
                    name: 'Burgundy',
                    imageUrl: 'https://images.unsplash.com/photo-1600458563734-470aedd2f8f8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nzd8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    price: 25
                }
            ]
        }
    ]
};
const Map = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    women: 4,
    mens: 5
}
const ShopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "RENDER_PAGE":
            return {
                ...state,
                SHOP_DATA: state.SHOP_DATA.filter(ele => ele.title == action.payload)
            }
        default: return state;
    }
}

export default ShopReducer;
