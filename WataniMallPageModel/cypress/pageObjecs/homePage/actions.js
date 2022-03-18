import {HomePageItems} from "./items"

export class HomePageActions
{
    constructor()
    {
        this.items = new HomePageItems();
    }

    clickAllCategoriesNavItem()
    {
        this.items.allCategoriesNavItem().click();
    }
}