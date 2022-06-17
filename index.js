class Dinner {
    constructor(salad, soup, entree, _dessert){
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this._dessert = _dessert;
    }
} 

class Breakfast {
    constructor(food, drink){
        this.food = food
        this.drink = drink
    }
}

class Lunch {
    constructor(salad, soup, drink){
        this.salad = salad
        this.soup = soup
        this.drink = drink
    }
}

let newdinner = new Dinner('balsamic salad', 'consomme', 'filet mignon', 'cheesecake')

let newlunch = new Lunch('side salad', 'broccoli cheddar soup', 'iced tea')

let bfast = new Breakfast('eggs', 'juice')