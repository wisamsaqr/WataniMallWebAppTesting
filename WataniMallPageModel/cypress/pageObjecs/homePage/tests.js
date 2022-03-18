import {HomePageItems} from "./items"

export class HomePageTests
{
    constructor()
    {
        this.items = new HomePageItems();
    }

    // Page load
    // Page url
    pageUrl()
    {
        cy.url().should('eq', 'https://watanimall.com/');
    }
    
    // Home nav item
    homeNavItemSelected()
    {
        this.items.homeNavItem().should('have.class', 'current-menu-item')
    }
    // Page load end


    // // All categories nav item click
    // allCategoriesNavItemClicked()
    // {
    //     cy.url().should('include', '/all-categories')
    // }
}