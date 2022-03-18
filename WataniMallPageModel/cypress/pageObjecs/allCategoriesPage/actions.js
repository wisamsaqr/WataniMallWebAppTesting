import {AllCategoriesPageItems} from "./items"

export class AllCategoriesPageActions
{
    constructor()
    {
        this.items = new AllCategoriesPageItems();
    }

    clickAllCategoriesNavItem()
    {
        this.items.allCategoriesNavItem().click();
    }

    clickMonitorsCategory()
    {
        this.items.monitorsCategory().click();
    }
}