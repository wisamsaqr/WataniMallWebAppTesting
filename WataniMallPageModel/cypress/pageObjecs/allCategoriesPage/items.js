export class AllCategoriesPageItems
{
    constructor(){}

    allCategoriesNavItem()
    {
        return cy.get('nav#nav ul[id^="menu"] > li[id^="menu-item"]').contains('li', 'جميع الفئات')
    }

    pageTitle()
    {
        return cy.get('main#main h1.section-title')
    }

    monitorsCategory()
    {
        return cy.get('main#main div.category-row > div:nth-child(3) > a.category-item');
    }
}