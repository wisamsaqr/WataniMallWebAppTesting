import {AllCategoriesPageItems} from "./items"

export class AllCategoriesPageTests
{
    constructor()
    {
        this.items = new AllCategoriesPageItems();
    }

    // All categories page load
    // Page url
    pageUrl()
    {
        cy.url().should('include', '/all-categories')
    }
    
    // All categories nav item
    allCategoriesNavItemSelected()
    {
        this.items.allCategoriesNavItem().should('have.class', 'current-menu-item')
    }

    // All categories nav item
    mainTitleHasAllCategoriesText()
    {
        this.items.pageTitle().should('have.text', 'جميع الفئات')
    }
    // All categories load end
}