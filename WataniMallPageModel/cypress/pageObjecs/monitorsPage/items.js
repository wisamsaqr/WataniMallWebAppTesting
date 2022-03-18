export class MonitorsPageItems
{
    constructor(){}

    pageTitle()
    {
        return cy.get('main#main h1.page-title');
    }

    breadcrumb()
    {
        return cy.get('main#main > nav.woocommerce-breadcrumb');
    }

    asusFilterCheckbox()
    {
        return cy.get('main#main div[data-name="manufacturer"] > div[data-value="asus"]')
    }

    sortingDropDownList()
    {
        return cy.get('div.shop-page-container > div.sort-filter-row select[name="orderby"]')
    }

    firstMonitorPrice()
    {
        return cy.get('div.shop-products-holder div.product-col:first-child div.product-price')
    }

    allMonitorsPrices()
    {
        return cy.get('div.shop-products-holder div.product-price');
    }
}