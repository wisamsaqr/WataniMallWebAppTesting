import {MonitorsPageItems} from "./items"

export class MonitorsPageActions
{
    constructor()
    {
        this.items = new MonitorsPageItems();
    }

    clickAsusFilterCheckbox()
    {
        this.items.asusFilterCheckbox().click();
    }

    // selectPriceOptionInSortingDropDownList()
    sortMonitorsItemsByPriceAscendingly()
    {
        this.items.sortingDropDownList().select('price', { force: true })
    }
}