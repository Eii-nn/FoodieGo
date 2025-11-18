// Restaurant Data
const restaurants = [
        {
            id: '1',
            name: 'Chillout Food Hub',
            description: 'Filipino comfort food and party packages',
            established: '2015',
            logo: 'assets/chillouthub/logo.png',
        location: {
            lat: 8.6112,
            lng: 124.8952,
            address: 'National Highway, Claveria, Misamis Oriental'
        },
        facebook: 'https://www.facebook.com/ChillOutFH/',
        menu: [
            { id: '1', name: 'Sizzling Pork Sisig', price: 90.00, category: 'Value Meals' },
            { id: '2', name: 'BBQ/Lechon 1 Cup', price: 99.00, category: 'Value Meals' },
            { id: '3', name: 'Luncheon Meat', price: 99.00, category: 'Value Meals' },
            { id: '4', name: 'Chicken/Pork Sisalog', price: 99.00, category: 'Value Meals' },
            { id: '5', name: 'Pork Chop', price: 99.00, category: 'Value Meals' },
            { id: '6', name: 'Fried Chicken', price: 145.00, category: 'Value Meals' },
            { id: '7', name: 'Grilled Chicken', price: 145.00, category: 'Value Meals' },
            { id: '8', name: 'BBQ/Buffalo Chicken', price: 145.00, category: 'Value Meals' },
            { id: '9', name: 'Sizzling Pork Humba', price: 145.00, category: 'Value Meals' },
            { id: '10', name: 'Pork Teriyaki', price: 145.00, category: 'Value Meals' },
            { id: '11', name: 'Chicken Teriyaki', price: 145.00, category: 'Value Meals' },
            { id: '12', name: '8pcs Fried Chicken', price: 190.00, category: 'Chicken' },
            { id: '13', name: 'Buffalo Wings', price: 199.00, category: 'Chicken' },
            { id: '14', name: 'BBQ Wings', price: 199.00, category: 'Chicken' },
            { id: '15', name: 'Garlic Parmesan Wings', price: 199.00, category: 'Chicken' },
            { id: '16', name: 'Chicken Teriyaki', price: 230.00, category: 'Chicken' },
            { id: '17', name: '8pcs Fried Chicken', price: 245.00, category: 'Chicken' },
            { id: '18', name: 'Tuna Sisig', price: 170.00, category: 'Seafood' },
            { id: '19', name: 'Fish Fillet', price: 170.00, category: 'Seafood' },
            { id: '20', name: 'Calamares', price: 170.00, category: 'Seafood' },
            { id: '21', name: 'Garlic Shrimps', price: 190.00, category: 'Seafood' },
            { id: '22', name: 'Pork/Chicken Lumpia', price: 100.00, category: 'Starters' },
            { id: '23', name: 'Pancit Guisado', price: 140.00, category: 'Starters' },
            { id: '24', name: 'Siomai/Siopao', price: 140.00, category: 'Starters' },
            { id: '25', name: 'Ramen', price: 130.00, category: 'Soup' },
            { id: '26', name: 'Lomi', price: 99.00, category: 'Soup' },
            { id: '27', name: 'Tinolang Tuna', price: 170.00, category: 'Soup' },
            { id: '28', name: 'Bulalo', price: 200.00, category: 'Soup' },
            { id: '29', name: '5pcs Burger Steak with Egg', price: 200.00, category: 'Beef Platter' },
            { id: '30', name: 'Beef Oyster', price: 199.00, category: 'Beef Platter' },
            { id: '31', name: 'Beef Malabo/Halang', price: 199.00, category: 'Beef Platter' },
            { id: '32', name: 'Sisig with Egg', price: 190.00, category: 'Pork Platter' },
            { id: '33', name: 'Chicken/Pork Sisalog', price: 160.00, category: 'Pork Platter' },
            { id: '34', name: 'Pork Fillet', price: 190.00, category: 'Pork Platter' },
            { id: '35', name: 'Pork Humba', price: 190.00, category: 'Pork Platter' },
            { id: '36', name: 'Pork Teriyaki', price: 205.00, category: 'Pork Platter' },
            { id: '37', name: 'Pork Kawali', price: 270.00, category: 'Pork Platter' },
            { id: '38', name: 'Mineral Water', price: 20.00, category: 'Drinks' },
            { id: '39', name: '80z Soft Drinks', price: 20.00, category: 'Drinks' },
            { id: '40', name: 'Pitcher', price: 90.00, category: 'Drinks' },
            { id: '41', name: 'Cucumber', price: 90.00, category: 'Drinks' },
            { id: '42', name: 'Four Seasons', price: 90.00, category: 'Drinks' },
            { id: '43', name: 'Bilao 3 Feet Boodle Fight', price: 1479.00, category: 'Packages' },
            { id: '44', name: '6 Feet Boodle Fight', price: 2999.00, category: 'Packages' },
            { id: '45', name: 'Small Bilao 1', price: 689.00, category: 'Packages' },
            { id: '46', name: 'Small Bilao 2', price: 689.00, category: 'Packages' },
            { id: '47', name: 'Small Bilao 3', price: 789.00, category: 'Packages' }
        ]
    },
        {
            id: '2',
            name: 'The Sibs Coffee',
            description: 'Specialty coffee and comfort meals',
            established: '2023',
            logo: 'assets/thesibscoffe/image.png',
        location: {
            lat: 8.6105,
            lng: 124.8958,
            address: 'Poblacion, Claveria, Misamis Oriental'
        },
        facebook: 'https://www.facebook.com/TheSibsCoffee/',
        menu: [
            { id: '1', name: 'Americano', price: 85.00, category: 'Coffee', variation: 'Hot' },
            { id: '2', name: 'Americano', price: 90.00, category: 'Coffee', variation: 'Iced' },
            { id: '3', name: 'Cappuccino', price: 90.00, category: 'Coffee', variation: 'Hot' },
            { id: '4', name: 'Cappuccino', price: 95.00, category: 'Coffee', variation: 'Iced' },
            { id: '5', name: 'Cafe Latte', price: 95.00, category: 'Coffee', variation: 'Hot' },
            { id: '6', name: 'Cafe Latte', price: 100.00, category: 'Coffee', variation: 'Iced' },
            { id: '7', name: 'Spanish Latte', price: 105.00, category: 'Coffee' },
            { id: '8', name: 'Butterscotch Latte', price: 100.00, category: 'Coffee', variation: 'Hot' },
            { id: '9', name: 'Butterscotch Latte', price: 95.00, category: 'Coffee', variation: 'Iced' },
            { id: '10', name: 'Salted Caramel Latte', price: 100.00, category: 'Coffee', variation: 'Hot' },
            { id: '11', name: 'Salted Caramel Latte', price: 95.00, category: 'Coffee', variation: 'Iced' },
            { id: '12', name: 'Vanilla Latte', price: 100.00, category: 'Coffee', variation: 'Hot' },
            { id: '13', name: 'Vanilla Latte', price: 95.00, category: 'Coffee', variation: 'Iced' },
            { id: '14', name: 'Mocha', price: 100.00, category: 'Coffee', variation: 'Hot' },
            { id: '15', name: 'Mocha', price: 95.00, category: 'Coffee', variation: 'Iced' },
            { id: '16', name: 'Orange Americano', price: 105.00, category: 'Coffee' },
            { id: '17', name: 'The Sibs Latte', price: 110.00, category: 'Coffee' },
            { id: '18', name: 'Dirty Matcha', price: 130.00, category: 'Coffee' },
            { id: '19', name: 'Chocolate Latte', price: 100.00, category: 'Non-Coffee', variation: 'Hot' },
            { id: '20', name: 'Chocolate Latte', price: 95.00, category: 'Non-Coffee', variation: 'Iced' },
            { id: '21', name: 'Matcha Latte', price: 120.00, category: 'Non-Coffee', variation: 'Hot' },
            { id: '22', name: 'Matcha Latte', price: 115.00, category: 'Non-Coffee', variation: 'Iced' },
            { id: '23', name: 'Strawberry Latte', price: 115.00, category: 'Non-Coffee' },
            { id: '24', name: 'Awibag Sana', price: 100.00, category: 'Refreshers' },
            { id: '25', name: 'Peach Sundae', price: 100.00, category: 'Refreshers' },
            { id: '26', name: 'Kimchi Fried Rice', price: 125.00, category: 'Meals' },
            { id: '27', name: 'Pork Chop Rice', price: 180.00, category: 'Meals' },
            { id: '28', name: 'Pork Chop Kimchi Rice', price: 250.00, category: 'Meals' },
            { id: '29', name: 'Korean Ramen', price: 140.00, category: 'For Sharing' },
            { id: '30', name: 'Loaded Fries', price: 100.00, category: 'For Sharing' },
            { id: '31', name: 'Super Loaded Fries', price: 180.00, category: 'For Sharing' },
            { id: '32', name: 'Nachos', price: 180.00, category: 'For Sharing' },
            { id: '33', name: 'Chicken Pops & Fries', price: 160.00, category: 'For Sharing' },
            { id: '34', name: 'Sibs Chicken Tenders & Fries', price: 160.00, category: 'For Sharing' },
            { id: '35', name: 'Mushroom Aglio Olio', price: 140.00, category: 'Pasta' },
            { id: '36', name: 'Creamy Alfredo', price: 190.00, category: 'Pasta' },
            { id: '37', name: 'Grilled Cheese', price: 120.00, category: 'Burger & Sandwiches' },
            { id: '38', name: 'Croissant Sandwich', price: 130.00, category: 'Burger & Sandwiches' },
            { id: '39', name: 'Monte Cristo', price: 160.00, category: 'Burger & Sandwiches' },
            { id: '40', name: 'The Sibs Chicken Burger', price: 180.00, category: 'Burger & Sandwiches' },
            { id: '41', name: 'Nutella Almond', price: 150.00, category: 'Croffles' },
            { id: '42', name: 'Mocha Caramel', price: 160.00, category: 'Croffles' }
        ]
    },
        {
            id: '3',
            name: 'Inato Hot Plates',
            description: 'Sizzling Filipino dishes and combo meals',
            established: '2023',
            logo: 'assets/Inato/image.png',
        location: {
            lat: 8.6098,
            lng: 124.8955,
            address: 'San Isidro St, Claveria, Misamis Oriental'
        },
        facebook: 'https://www.facebook.com/people/INATO-Hot-Plates-Sisigan-Claveria/100090230696072/',
        menu: [
            { id: '1', name: 'Sizzling Pork Sisig w/ Pork Belly', price: 158.00, category: 'Sizzling Combo' },
            { id: '2', name: 'Sizzling Pork Sisig w/ Fried Chicken', price: 158.00, category: 'Sizzling Combo' },
            { id: '3', name: 'Sizzling Pork Sisig w/ Beef Pares', price: 148.00, category: 'Sizzling Combo' },
            { id: '4', name: 'Sizzling Pork Sisig w/ Buffalo Wing', price: 124.00, category: 'Sizzling Combo' },
            { id: '5', name: 'Sizzling Pork Belly w/ Beef Pares', price: 158.00, category: 'Sizzling Combo' },
            { id: '6', name: 'Sizzling Pork Belly w/ Buffalo Wing', price: 134.00, category: 'Sizzling Combo' },
            { id: '7', name: 'Sizzling Pork Belly w/ Fried Chicken', price: 168.00, category: 'Sizzling Combo' },
            { id: '8', name: 'Sizzling Crispy Sisig w/ Pork Belly', price: 163.00, category: 'Sizzling Combo' },
            { id: '9', name: 'Sizzling Crispy Sisig w/ Buffalo Wing', price: 129.00, category: 'Sizzling Combo' },
            { id: '10', name: 'Sizzling Crispy Sisig w/ Beef Pares', price: 153.00, category: 'Sizzling Combo' },
            { id: '11', name: 'Sizzling Pork Sisig', price: 79.00, category: 'Value Meal' },
            { id: '12', name: 'Sizzling Crispy Pork Sisig', price: 84.00, category: 'Value Meal' },
            { id: '13', name: 'Sizzling Beef Pares', price: 79.00, category: 'Value Meal' },
            { id: '14', name: 'Sizzling Fried Chicken', price: 89.00, category: 'Value Meal' },
            { id: '15', name: 'Sizzling Pork Belly', price: 89.00, category: 'Value Meal' },
            { id: '16', name: 'Sizzling Buffalo Wing', price: 67.00, category: 'Value Meal' },
            { id: '17', name: 'Sizzling Pork Sisig', price: 99.00, category: 'Unli Rice' },
            { id: '18', name: 'Sizzling Crispy Pork Sisig', price: 114.00, category: 'Unli Rice' },
            { id: '19', name: 'Sizzling Beef Pares', price: 109.00, category: 'Unli Rice' },
            { id: '20', name: 'Sizzling Fried Chicken', price: 119.00, category: 'Unli Rice' },
            { id: '21', name: 'Sizzling Pork Belly', price: 119.00, category: 'Unli Rice' },
            { id: '22', name: 'Sizzling Buffalo Wing', price: 125.00, category: 'Unli Rice' },
            { id: '23', name: 'Platter Pork Sisig', price: 180.00, category: 'Platter' },
            { id: '24', name: 'Platter Pork Belly', price: 240.00, category: 'Platter' }
        ]
    },
        {
            id: '4',
            name: 'Su-Ok Kitchenette',
            description: 'Filipino comfort food and budget meals',
            established: '2020',
            logo: 'assets/suok/image.png',
        location: {
            lat: 8.6118,
            lng: 124.8975,
            address: 'Anahao St, Claveria, Misamis Oriental'
        },
        facebook: 'https://www.facebook.com/FoodtriptaClaveria/',
        menu: [
            { id: '1', name: 'Fried Liempo', price: null, category: 'Meal Deals' },
            { id: '2', name: 'Pork Chop', price: null, category: 'Meal Deals' },
            { id: '3', name: 'Buttered Chicken', price: null, category: 'Meal Deals' },
            { id: '4', name: 'Spicy Chicken', price: null, category: 'Meal Deals' },
            { id: '5', name: 'Fried Chicken', price: null, category: 'Meal Deals' },
            { id: '6', name: 'Tuna Fillet', price: null, category: 'Meal Deals' },
            { id: '7', name: 'Tuna Sisig', price: null, category: 'Meal Deals' },
            { id: '8', name: 'Lumpia', price: null, category: 'Meal Deals' },
            { id: '9', name: 'Siomai', price: null, category: 'Meal Deals' },
            { id: '10', name: 'Veggie Fried Rice', price: null, category: 'Budget Meal' },
            { id: '11', name: 'Buttered Chicken', price: null, category: 'Budget Meal' },
            { id: '12', name: 'Spicy Chicken', price: null, category: 'Budget Meal' },
            { id: '13', name: 'Chicken Fillet', price: null, category: 'Budget Meal' },
            { id: '14', name: 'Ham/Egg', price: null, category: 'Budget Meal' },
            { id: '15', name: 'Hotdog/Egg', price: null, category: 'Budget Meal' },
            { id: '16', name: 'Siomai/Egg', price: null, category: 'Budget Meal' },
            { id: '17', name: 'Lumpia/Egg', price: null, category: 'Budget Meal' },
            { id: '18', name: 'Fries', price: 89.00, category: 'Snacks' },
            { id: '19', name: 'Siomai', price: 89.00, category: 'Snacks' },
            { id: '20', name: 'Combo Snacks', price: 89.00, category: 'Snacks' },
            { id: '21', name: 'Burger', price: 89.00, category: 'Snacks' },
            { id: '22', name: 'Burger w/ Fries', price: 149.00, category: 'Snacks' },
            { id: '23', name: 'Waffle w/ Fries', price: 149.00, category: 'Snacks' },
            { id: '24', name: 'Waffle with Ice Cream', price: 149.00, category: 'Snacks' },
            { id: '25', name: 'Chicken Tenders w/ Fries', price: 149.00, category: 'Snacks' },
            { id: '26', name: 'Chicken Tenders w/ Waffles', price: 149.00, category: 'Snacks' },
            { id: '27', name: 'Banana Split', price: 149.00, category: 'Snacks' },
            { id: '28', name: 'All Cheese', price: 109.00, category: 'Snacks' },
            { id: '29', name: 'Ham & Cheese', price: 109.00, category: 'Snacks' },
            { id: '30', name: 'Corn & Cheese', price: 109.00, category: 'Snacks' }
        ]
    },
    {
        id: '5',
        name: 'Clarkie Claveria',
        description: 'Filipino rice meals, combo dishes, noodles, and snacks',
        established: '2018',
        logo: 'assets/clark/image.png',
        location: {
            lat: 8.6112,
            lng: 124.8952,
            address: 'San Isidro St, Poblacion, Claveria, Misamis Oriental'
        },
        facebook: 'https://www.facebook.com/people/Clarkie-Claveria/100093284832147/',
        menu: [
            // Ice Cream Shakes
{ id: '41', name: 'Avocado Ice Cream Shake', price: 120.00, category: 'Ice Cream Shakes' },
{ id: '42', name: 'Buko Pandan Ice Cream Shake', price: 120.00, category: 'Ice Cream Shakes' },
{ id: '43', name: 'Buko Ice Cream Shake', price: 120.00, category: 'Ice Cream Shakes' },
{ id: '44', name: 'Strawberry Ice Cream Shake', price: 120.00, category: 'Ice Cream Shakes' },
{ id: '45', name: 'Cantaloupe Ice Cream Shake', price: 120.00, category: 'Ice Cream Shakes' },
{ id: '46', name: 'Mango Ice Cream Shake', price: 120.00, category: 'Ice Cream Shakes' },
{ id: '47', name: 'Chocolate Ice Cream Shake', price: 120.00, category: 'Ice Cream Shakes' },
{ id: '48', name: 'Cookies & Cream Ice Cream Shake', price: 120.00, category: 'Ice Cream Shakes' },
{ id: '49', name: 'Coffee Crumble Ice Cream Shake', price: 120.00, category: 'Ice Cream Shakes' },
{ id: '50', name: 'Ube Ice Cream Shake', price: 120.00, category: 'Ice Cream Shakes' },
{ id: '54', name: 'Vanilla Ice Cream Shake', price: 120.00, category: "Ice Cream Shakes" },
{ id: '55', name: 'Ube Macapuno Ice Cream Shake', price: 120.00, category: "Ice Cream Shakes" },
{ id: '51', name: 'Ube Macapuno', price: 130.00, category: "Ice Cream Shakes" },
{ id: '52', name: 'Vanilla de Leche', price: 130.00, category: "Ice Cream Shakes" },
{ id: '53', name: 'Mais Con Yelo', price: 130.00, category: "Ice Cream Shakes" },

// Rice Meals
{ id: '1', name: 'Pork Tocino', price: 89.00, category: 'Rice Meals' },
{ id: '2', name: 'Pork Sisig', price: 89.00, category: 'Rice Meals' },
{ id: '3', name: 'Lumpia', price: 89.00, category: 'Rice Meals' },
{ id: '4', name: 'Chicken Tenders', price: 89.00, category: 'Rice Meals' },
{ id: '5', name: 'Chicken Teriyaki', price: 89.00, category: 'Rice Meals' },
{ id: '6', name: 'Chicken Sweet & Spicy', price: 89.00, category: 'Rice Meals' },

// Combo Rice Meals
{ id: '7', name: 'Pork Sisig w/ Lumpia', price: 149.00, category: 'Rice Meals' },
{ id: '8', name: 'Chicken Tenders w/ Lumpia', price: 149.00, category: 'Rice Meals' },
{ id: '9', name: 'Pork Sisig w/ Chicken Tenders', price: 149.00, category: 'Rice Meals' },

// Sharing Serving
{ id: '10', name: 'Lumpia', price: 99.00, category: 'Sharing Serving' },
{ id: '11', name: 'Chicken Tenders', price: 169.00, category: 'Sharing Serving' },
{ id: '12', name: 'Chicken Teriyaki', price: 169.00, category: 'Sharing Serving' },
{ id: '13', name: 'Chicken Sweet & Spicy', price: 169.00, category: 'Sharing Serving' },
{ id: '14', name: 'Pork Sisig', price: 169.00, category: 'Sharing Serving' },
{ id: '15', name: 'Sisig + Lumpia', price: 169.00, category: 'Sharing Serving' },
{ id: '16', name: 'Sisig + Chicken Tenders', price: 169.00, category: 'Sharing Serving' },
{ id: '17', name: 'Chicken Tenders + Lumpia', price: 169.00, category: 'Sharing Serving' },

// Noodles
{ id: '18', name: 'Fried Noodles w/ Toppings', price: 89.00, category: 'Noodles' },

// Snacks
{ id: '19', name: 'Fries', price: 89.00, category: 'Snack' },
{ id: '20', name: 'Siomai', price: 89.00, category: 'Snack' },
{ id: '21', name: 'Combo Snacks', price: 89.00, category: 'Snack' },
{ id: '22', name: 'Burger', price: 89.00, category: 'Snack' },
{ id: '23', name: 'Burger w/ Fries', price: 149.00, category: 'Snack' },
{ id: '24', name: 'Waffle w/ Fries', price: 149.00, category: 'Snack' },
{ id: '25', name: 'Waffle with Ice Cream', price: 149.00, category: 'Snack' },
{ id: '26', name: 'Chicken Tenders w/ Fries', price: 149.00, category: 'Snack' },
{ id: '27', name: 'Chicken Tenders w/ Waffles', price: 149.00, category: 'Snack' },
{ id: '28', name: 'Banana Split', price: 149.00, category: 'Snack' },

// Shaved Ice - Mango Series
{ id: '29', name: 'Mango Craze', price: 130.00, category: 'Shaved Ice' },
{ id: '30', name: 'Mango Graham', price: 130.00, category: 'Shaved Ice' },

// Shaved Ice - Avocado Series
{ id: '31', name: 'Avocado Craze', price: 130.00, category: 'Shaved Ice' },
{ id: '32', name: 'Avocado Graham', price: 130.00, category: 'Shaved Ice' },

// Shaved Ice - Other Flavors
{ id: '33', name: 'Ube Halo Halo', price: 130.00, category: 'Shaved Ice' },
{ id: '34', name: 'Knicker Bocker', price: 130.00, category: 'Shaved Ice' },
{ id: '35', name: 'Buko Pandan', price: 130.00, category: 'Shaved Ice' },
{ id: '36', name: 'Cantaloupe Craze', price: 130.00, category: 'Shaved Ice' },
{ id: '37', name: 'Coffee Crumble', price: 130.00, category: 'Shaved Ice' },
{ id: '38', name: 'Choco-Loco', price: 130.00, category: 'Shaved Ice' },
{ id: '39', name: 'Buko Puno', price: 130.00, category: 'Shaved Ice' },
{ id: '40', name: 'Cookies & Cream', price: 130.00, category: 'Shaved Ice' },

        ]
    }
];

const ORDER_STORAGE_KEY = 'foodieOrders';
let activeOrder = {
    restaurantId: null,
    restaurantName: '',
    items: []
};

// App State
let currentView = 'home';
let currentRestaurant = null;
let favorites = JSON.parse(localStorage.getItem('favoriteRestaurants')) || [];

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    renderHomePage();
    setupEventListeners();
    enableSmoothScrolling();
    setupOrderPanelControls();
});

function setupEventListeners() {
    // Search
    document.getElementById('search-input').addEventListener('input', filterRestaurants);
    
    // Category filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            filterRestaurants();
        });
    });
    
    // Back button
    document.getElementById('back-link').addEventListener('click', (e) => {
        e.preventDefault();
        showHomePage();
    });
}

function enableSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;
            const target = document.querySelector(targetId);
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

// Home page functions
function renderHomePage() {
    currentView = 'home';
    document.getElementById('home-page').classList.remove('hidden');
    document.getElementById('restaurant-page').classList.add('hidden');
    
    const grid = document.getElementById('restaurant-grid');
    grid.innerHTML = '';
    
    restaurants.forEach((restaurant, index) => {
        const card = createRestaurantCard(restaurant);
        grid.appendChild(card);
        // Stagger animation
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    filterRestaurants();
}

function createRestaurantCard(restaurant) {
    const card = document.createElement('div');
    card.className = 'restaurant-card';
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.dataset.restaurantId = restaurant.id;
    card.dataset.name = restaurant.name.toLowerCase();
    card.dataset.description = restaurant.description.toLowerCase();
    
    const categories = [...new Set(restaurant.menu.map(item => item.category))];
    const categoryText = categories.join(', ').toLowerCase();
    card.dataset.categories = categoryText;
    
    const menuText = restaurant.menu.map(item => item.name).join(' ').toLowerCase();
    card.dataset.menu = menuText;
    
            card.innerHTML = `
                <div class="card-header">
                    <div class="restaurant-logo">
                        <img src="${restaurant.logo}" alt="${restaurant.name} logo" class="logo-image">
                    </div>
                    <div class="restaurant-name">${restaurant.name}</div>
                    <div class="restaurant-desc">${restaurant.description}</div>
                    <div class="established">Est. ${restaurant.established}</div>
                    <button class="favorite-btn" aria-label="Toggle favorite" data-id="${restaurant.id}">
                        <span class="fav-icon">${favorites.includes(restaurant.id) ? '★' : '☆'}</span>
                    </button>
                    <button class="quickview-btn" data-id="${restaurant.id}">Quick View</button>
                </div>
        <div class="card-content">
            <div class="menu-categories">
                ${categories.slice(0, 3).map(category => `
                    <div class="category">
                        <div class="category-name">${category}</div>
                        <div class="menu-items">
                            ${restaurant.menu.filter(item => item.category === category).slice(0, 2).map(item => `
                                <div class="menu-item">
                                    <span class="item-name">${item.name}</span>
                                    <span class="item-price">₱${item.price ? item.price.toFixed(2) : 'TBA'}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    card.addEventListener('click', (e) => {
        const target = e.target;
        if (target.closest('.favorite-btn')) return;
        if (target.closest('.quickview-btn')) return;
        showRestaurantDetail(restaurant);
    });

    const favBtn = card.querySelector('.favorite-btn');
    favBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(restaurant.id, favBtn);
    });

    const quickBtn = card.querySelector('.quickview-btn');
    quickBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openQuickView(restaurant);
    });
    return card;
}

function filterRestaurants() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const activeFilter = document.querySelector('.filter-btn.active').dataset.category;
    const cards = document.querySelectorAll('.restaurant-card');
    let visibleCount = 0;
    
    cards.forEach(card => {
        const name = card.dataset.name;
        const description = card.dataset.description;
        const categories = card.dataset.categories;
        const menu = card.dataset.menu;
        const restaurantId = card.dataset.restaurantId;
        
        const searchMatch = !searchTerm || 
            name.includes(searchTerm) || 
            description.includes(searchTerm) || 
            categories.includes(searchTerm) || 
            menu.includes(searchTerm);
        
        const filterMatch = activeFilter === 'all' || 
            (activeFilter === 'favorites' && favorites.includes(restaurantId));
        
        if (searchMatch && filterMatch) {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });
    
    document.getElementById('no-results-message').classList.toggle('hidden', visibleCount > 0);
}

function toggleFavorite(restaurantId, buttonEl) {
    const index = favorites.indexOf(restaurantId);
    if (index >= 0) {
        favorites.splice(index, 1);
    } else {
        favorites.push(restaurantId);
    }
    localStorage.setItem('favoriteRestaurants', JSON.stringify(favorites));
    const icon = buttonEl.querySelector('.fav-icon');
    if (icon) icon.textContent = favorites.includes(restaurantId) ? '★' : '☆';
    // reapply filter in case 'Favorites' tab is active
    filterRestaurants();
}

function openQuickView(restaurant) {
    const overlay = document.getElementById('quickview-overlay');
    const body = document.getElementById('quickview-body');
    body.innerHTML = `
        <div class="restaurant-logo" style="justify-content:flex-start;">
            <img src="${restaurant.logo}" alt="${restaurant.name} logo" class="logo-image">
        </div>
        <h3 style="margin: 0.5rem 0 0.25rem 0;">${restaurant.name}</h3>
        <p class="subtitle" style="color:#555;">${restaurant.description}</p>
        <div class="menu-categories" style="margin-top:0.75rem;">
            ${[...new Set(restaurant.menu.map(i => i.category))].slice(0,2).map(category => `
                <div class="category">
                    <div class="category-name">${category}</div>
                    <div class="menu-items">
                        ${restaurant.menu.filter(i => i.category === category).slice(0,3).map(i => `
                            <div class="menu-item">
                                <span class="item-name">${i.name}</span>
                                <span class="item-price">₱${i.price ? i.price.toFixed(2) : 'TBA'}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
        <div style="margin-top:1rem; display:flex; gap:0.5rem;">
            <button class="quickview-btn" id="open-detail-from-quick">Open full menu</button>
        </div>
    `;
    overlay.classList.add('active');
    document.getElementById('close-quickview').onclick = () => overlay.classList.remove('active');
    document.getElementById('open-detail-from-quick').onclick = () => {
        overlay.classList.remove('active');
        showRestaurantDetail(restaurant);
    };
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('active');
    });
}

function showRestaurantDetail(restaurant) {
    currentView = 'restaurant';
    currentRestaurant = restaurant;
    
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('restaurant-page').classList.remove('hidden');
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
            document.getElementById('restaurant-title').textContent = restaurant.name;
            document.getElementById('restaurant-description').textContent = restaurant.description;
            
            // Add logo to restaurant detail page header
            const storeHeader = document.querySelector('.store-header');
            const existingLogo = storeHeader.querySelector('.restaurant-logo');
            if (existingLogo) {
                existingLogo.remove();
            }
            
            const logoContainer = document.createElement('div');
            logoContainer.className = 'restaurant-logo';
            logoContainer.innerHTML = `<img src="${restaurant.logo}" alt="${restaurant.name} logo" class="logo-image header-logo">`;
            storeHeader.insertBefore(logoContainer, storeHeader.firstChild);
    
    renderRestaurantMenu(restaurant);
    initializeMap(restaurant);
    prepareOrderPanel(restaurant);
}

function renderRestaurantMenu(restaurant) {
    const categories = [...new Set(restaurant.menu.map(item => item.category))];
    const productFilters = document.getElementById('product-filters');
    const productGrid = document.getElementById('product-grid');
    
    // Render category filters
    productFilters.innerHTML = `
        <button class="filter-btn active" data-category="all">All Menu Items</button>
        ${categories.map(category => `
            <button class="filter-btn" data-category="${category}">${category}</button>
        `).join('')}
    `;
    
    // Add event listeners to category filters
    productFilters.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            productFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const category = e.target.dataset.category;
            if (category === 'all') {
                renderAllMenuItems(restaurant);
            } else {
                renderMenuByCategory(restaurant, category);
            }
        });
    });
    
    // Render all menu items by category
    renderAllMenuItems(restaurant);
}

function renderAllMenuItems(restaurant) {
    const categories = [...new Set(restaurant.menu.map(item => item.category))];
    const productGrid = document.getElementById('product-grid');
    
    productGrid.innerHTML = categories.map(category => {
        const items = restaurant.menu.filter(item => item.category === category);
        return `
            <div class="menu-category-section" data-category="${category}">
                <h3 class="menu-category-header">${category}</h3>
                <div class="category-content">
                    <div class="category-image-container">
                        <img src="assets/categories/${getCategoryImageName(category)}.jpg" 
                             alt="${category}" 
                             class="category-image"
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <div class="category-image-placeholder" style="display:none;">
                            📸 Upload ${category} image<br>(1200×600)
                        </div>
                    </div>
                    <div class="category-items-list">
                        ${items.map(item => createMenuItemHTML(item, restaurant)).join('')}
                    </div>
                </div>
            </div>
        `;
    }).join('');
    wireMenuActions(restaurant);
}

function getCategoryImageName(category) {
    // Convert category name to filename-friendly format
    return category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

function renderMenuByCategory(restaurant, category) {
    const productGrid = document.getElementById('product-grid');
    const items = restaurant.menu.filter(item => item.category === category);
    
    productGrid.innerHTML = `
        <div class="menu-category-section" data-category="${category}">
            <h3 class="menu-category-header">${category}</h3>
            <div class="category-content">
                <div class="category-image-container">
                    <img src="assets/categories/${getCategoryImageName(category)}.jpg" 
                         alt="${category}" 
                         class="category-image"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                    <div class="category-image-placeholder" style="display:none;">
                        📸 Upload ${category} image<br>(1200×600)
                    </div>
                </div>
                <div class="category-items-list">
                    ${items.map(item => createMenuItemHTML(item, restaurant)).join('')}
                </div>
            </div>
        </div>
    `;
    wireMenuActions(restaurant);
}

function createMenuItemHTML(item, restaurant) {
    const priceLabel = item.price ? `₱${item.price.toFixed(2)}` : 'Ask the store';
    const itemKey = `${restaurant.id}-${item.id}`;
    const cartItem = activeOrder.items.find(entry => entry.id === itemKey);
    const quantity = cartItem ? cartItem.quantity : 0;
    const inCart = quantity > 0;
    
    let actionMarkup = '';
    if (!item.price) {
        actionMarkup = `<span class="price-unavailable">Price unavailable</span>`;
    } else if (inCart) {
        // Show inline quantity controls when item is in cart
        actionMarkup = `
            <div class="inline-qty-controls">
                <button class="qty-btn qty-decrease" data-restaurant-id="${restaurant.id}" data-item-id="${item.id}" aria-label="Decrease quantity">−</button>
                <span class="qty-display">${quantity}</span>
                <button class="qty-btn qty-increase" data-restaurant-id="${restaurant.id}" data-item-id="${item.id}" aria-label="Increase quantity">+</button>
            </div>
        `;
    } else {
        // Show add button when item is not in cart
        actionMarkup = `<button class="add-to-order-btn" data-restaurant-id="${restaurant.id}" data-item-id="${item.id}">Add</button>`;
    }
    
    return `
        <div class="product-card ${inCart ? 'in-cart' : ''}" data-category="${item.category}" data-item-key="${itemKey}">
            <div class="product-info">
                <div class="product-name">
                    ${item.name}
                    ${item.variation ? `<span class="item-variation">${item.variation}</span>` : ''}
                    ${inCart ? `<span class="cart-badge" aria-label="${quantity} in cart">${quantity}</span>` : ''}
                </div>
            </div>
            <div class="product-trailing">
                <div class="product-price">${priceLabel}</div>
                ${actionMarkup}
            </div>
        </div>
    `;
}



function showHomePage() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderHomePage();
}

// Map functionality
let currentMap = null;

function initializeMap(restaurant) {
    const mapContainer = document.getElementById('restaurant-map');
    const addressContainer = document.getElementById('restaurant-address');
    
    // Clear previous map if exists
    if (currentMap) {
        currentMap.remove();
        currentMap = null;
    }
    
    // Clear and reset map container
    mapContainer.innerHTML = '';
    
    // Check if location data exists
    if (!restaurant.location) {
        mapContainer.innerHTML = '<p style="padding: 1rem; text-align: center; color: #666;">Location information not available</p>';
        addressContainer.innerHTML = '';
        return;
    }
    
    // Initialize the map
    currentMap = L.map('restaurant-map').setView([restaurant.location.lat, restaurant.location.lng], 16);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(currentMap);
    
    // Add marker for restaurant
    const marker = L.marker([restaurant.location.lat, restaurant.location.lng]).addTo(currentMap);
    marker.bindPopup(`<b>${restaurant.name}</b><br>${restaurant.location.address}`).openPopup();
    
    // Display address
    addressContainer.innerHTML = `
        <p><strong>${restaurant.name}</strong></p>
        <p>${restaurant.location.address}</p>
        <div class="location-links">
            <a href="https://www.google.com/maps?q=${restaurant.location.lat},${restaurant.location.lng}" 
               target="_blank" 
               class="directions-link">
               📍 Get Directions
            </a>
            ${restaurant.facebook ? `
                <a href="${restaurant.facebook}" 
                   target="_blank" 
                   class="facebook-link">
                   👍 Facebook Page
                </a>
            ` : ''}
        </div>
    `;
    
    // Fix map display issue with Leaflet in hidden containers
    setTimeout(() => {
        currentMap.invalidateSize();
    }, 100);
}

// Order builder helpers
function setupOrderPanelControls() {
    const cartList = document.getElementById('order-cart-list');
    const placeBtn = document.getElementById('place-order-from-store');
    const clearBtn = document.getElementById('clear-order-btn');
    
    if (cartList) {
        cartList.addEventListener('click', (event) => {
            const actionBtn = event.target.closest('button[data-cart-action]');
            if (!actionBtn) return;
            
            const itemId = actionBtn.dataset.itemId;
            const action = actionBtn.dataset.cartAction;
            if (!itemId || !action) return;
            
            if (action === 'increase') {
                // Use addMenuItemToOrder to maintain consistency with menu item logic
                const menuItemId = actionBtn.dataset.itemMenuId;
                if (currentRestaurant && menuItemId) {
                    addMenuItemToOrder(currentRestaurant, menuItemId);
                } else {
                    changeOrderItemQuantity(itemId, 1);
                }
            } else if (action === 'decrease') {
                changeOrderItemQuantity(itemId, -1);
            } else if (action === 'remove') {
                removeOrderItem(itemId);
            }
        });
    }
    
    if (placeBtn) {
        placeBtn.addEventListener('click', submitOrderFromStore);
    }
    
    if (clearBtn) {
        clearBtn.addEventListener('click', () => clearOrderCart(false));
    }
    
    updateOrderPanelState();
}

function prepareOrderPanel(restaurant) {
    if (!restaurant) return;
    
    if (activeOrder.restaurantId !== restaurant.id) {
        activeOrder = {
            restaurantId: restaurant.id,
            restaurantName: restaurant.name,
            items: []
        };
    }
    
    updateOrderPanelState();
}

function wireMenuActions(restaurant) {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid || !restaurant) return;
    
    // Handle "Add" button clicks
    productGrid.querySelectorAll('.add-to-order-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            addMenuItemToOrder(restaurant, btn.dataset.itemId);
        });
    });
    
    // Handle quantity increase/decrease buttons
    productGrid.querySelectorAll('.qty-increase').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            addMenuItemToOrder(restaurant, btn.dataset.itemId);
        });
    });
    
    productGrid.querySelectorAll('.qty-decrease').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const itemKey = `${restaurant.id}-${btn.dataset.itemId}`;
            changeOrderItemQuantity(itemKey, -1);
        });
    });
}

function addMenuItemToOrder(restaurant, itemId) {
    if (!restaurant || !itemId) return;
    
    if (activeOrder.restaurantId !== restaurant.id) {
        activeOrder = {
            restaurantId: restaurant.id,
            restaurantName: restaurant.name,
            items: []
        };
    }
    
    const item = restaurant.menu.find(menuItem => String(menuItem.id) === String(itemId));
    if (!item || !item.price) {
        alert('Price information is not available for this item yet.');
        return;
    }
    
    const itemKey = `${restaurant.id}-${item.id}`;
    const existing = activeOrder.items.find(entry => entry.id === itemKey);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        activeOrder.items.push({
            id: itemKey,
            itemId: item.id,
            name: item.name,
            price: Number(item.price),
            quantity: 1
        });
    }
    
    // Add visual feedback animation
    const menuItem = document.querySelector(`[data-item-key="${itemKey}"]`);
    if (menuItem) {
        menuItem.classList.add('just-added');
        setTimeout(() => menuItem.classList.remove('just-added'), 300);
    }
    
    updateOrderPanelState();
}

function changeOrderItemQuantity(itemId, delta) {
    const entry = activeOrder.items.find(item => item.id === itemId);
    if (!entry) return;
    
    const newQuantity = entry.quantity + delta;
    
    if (newQuantity <= 0) {
        // Remove item if quantity reaches 0
        removeOrderItem(itemId);
    } else {
        entry.quantity = newQuantity;
        updateOrderPanelState();
    }
}

function removeOrderItem(itemId) {
    activeOrder.items = activeOrder.items.filter(item => item.id !== itemId);
    
    // Add visual feedback
    const menuItem = document.querySelector(`[data-item-key="${itemId}"]`);
    if (menuItem) {
        menuItem.classList.add('just-removed');
        setTimeout(() => {
            menuItem.classList.remove('just-removed');
            updateOrderPanelState();
        }, 200);
    } else {
        updateOrderPanelState();
    }
}

function clearOrderCart(resetRestaurant = false) {
    if (resetRestaurant) {
        activeOrder = {
            restaurantId: null,
            restaurantName: '',
            items: []
        };
    } else {
        activeOrder.items = [];
    }
    
    updateOrderPanelState();
}

function updateOrderPanelState() {
    const panel = document.getElementById('order-panel');
    if (!panel) return;
    
    const restaurantLabel = document.getElementById('order-panel-restaurant');
    const emptyState = document.getElementById('order-empty-state');
    const list = document.getElementById('order-cart-list');
    const totalEl = document.getElementById('order-panel-total');
    const placeBtn = document.getElementById('place-order-from-store');
    const clearBtn = document.getElementById('clear-order-btn');
    
    if (restaurantLabel) {
        restaurantLabel.textContent = activeOrder.restaurantId
            ? `Ordering from ${activeOrder.restaurantName}`
            : 'Select a restaurant to begin';
    }
    
    if (!list || !totalEl) return;
    
    list.innerHTML = '';
    
    if (!activeOrder.items.length) {
        if (emptyState) emptyState.classList.remove('hidden');
        totalEl.textContent = '0.00';
        if (placeBtn) placeBtn.disabled = true;
        if (clearBtn) clearBtn.disabled = true;
        // Update menu items to remove cart state
        updateMenuItemsVisualState();
        return;
    }
    
    if (emptyState) emptyState.classList.add('hidden');
    let total = 0;
    
    activeOrder.items.forEach(item => {
        const lineTotal = item.price * item.quantity;
        total += lineTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'order-cart-item';
        cartItem.innerHTML = `
            <div class="order-cart-details">
                <h4>${item.name}</h4>
                <small>₱${item.price.toFixed(2)} each</small>
                <div class="order-line-total">₱${lineTotal.toFixed(2)}</div>
            </div>
            <div class="order-cart-actions">
                <button class="order-qty-btn" data-cart-action="decrease" data-item-id="${item.id}">−</button>
                <span class="order-cart-qty">${item.quantity}</span>
                <button class="order-qty-btn" data-cart-action="increase" data-item-id="${item.id}" data-item-menu-id="${item.itemId}">+</button>
                <button class="remove-line-btn" data-cart-action="remove" data-item-id="${item.id}">Remove</button>
            </div>
        `;
        list.appendChild(cartItem);
    });
    
    totalEl.textContent = total.toFixed(2);
    if (placeBtn) placeBtn.disabled = false;
    if (clearBtn) clearBtn.disabled = false;
    
    // Update menu items to reflect cart state
    updateMenuItemsVisualState();
}

function updateMenuItemsVisualState() {
    if (!currentRestaurant) return;
    
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;
    
    // Re-render menu items to reflect current cart state
    const categories = [...new Set(currentRestaurant.menu.map(item => item.category))];
    const activeCategory = document.querySelector('#product-filters .filter-btn.active')?.dataset.category;
    
    if (activeCategory === 'all') {
        renderAllMenuItems(currentRestaurant);
    } else if (activeCategory) {
        renderMenuByCategory(currentRestaurant, activeCategory);
    }
}

function getStoredOrders() {
    try {
        return JSON.parse(localStorage.getItem(ORDER_STORAGE_KEY)) || [];
    } catch (error) {
        console.error('Failed to read stored orders', error);
        return [];
    }
}

function saveOrders(data) {
    localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(data));
}

function submitOrderFromStore() {
    if (!activeOrder.restaurantId || !activeOrder.items.length) return;
    
    const orders = getStoredOrders();
    const total = activeOrder.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const newOrder = {
        id: Date.now(),
        restaurant: activeOrder.restaurantName,
        items: activeOrder.items.map(item => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity
        })),
        total,
        date: new Date().toLocaleString(),
        status: 'Pending'
    };
    
    orders.unshift(newOrder);
    saveOrders(orders);
    clearOrderCart(false);
    alert('Your order has been saved! Visit the Orders page to review it.');
}
