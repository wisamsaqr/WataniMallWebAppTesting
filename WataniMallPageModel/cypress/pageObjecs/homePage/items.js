export class HomePageItems
{
    constructor(){}

    homeNavItem()
    {
        return cy.get('nav#nav ul[id^="menu"] > li[id^="menu-item"]').contains('li', 'الرئيسية');
    }

    allCategoriesNavItem()
    {
        return cy.get('nav#nav ul[id^=menu]>li[id^=menu-item] > a').contains('جميع الفئات');
    }
}