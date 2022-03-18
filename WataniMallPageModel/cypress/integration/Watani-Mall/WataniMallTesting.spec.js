/// <reference types="cypress" />

import { HomePage } from "../../pageObjecs/homePage/page";
import { AllCategoriesPage } from "../../pageObjecs/allCategoriesPage/page";
import { MonitorsPage } from "../../pageObjecs/monitorsPage/page";


describe("Watani Mall Testing",()=>
{
    let homePage = new HomePage()
    let allCategoriesPage = new AllCategoriesPage();
    let monitorsPage = new MonitorsPage();
    
    before('Configurations', ()=>
    {
        // Preserve cookie in every test
        Cypress.Cookies.defaults({preserve: (cookie) => { return true; }})

        // this.homePage = new HomePage()
        // this.allCategoriesPage = new AllCategoriesPage();
    })
    
    it("Verifying visiting Watani Mall homepage", ()=>
    {
        // Visiting Watani MAll homepage
        cy.visit("/")
        homePage.tests.pageUrl()
        homePage.tests.homeNavItemSelected()

        homePage.actions.clickAllCategoriesNavItem()
    })

    it("Verifying navigating to All Categories page", ()=>
    {
        // Navigating to All Categories page
        allCategoriesPage.tests.pageUrl()
        allCategoriesPage.tests.allCategoriesNavItemSelected()
        allCategoriesPage.tests.mainTitleHasAllCategoriesText()

        allCategoriesPage.actions.clickMonitorsCategory()
    })

    context('Navigating to monitors page'
        +' then selecting asus filter'
        +' and sorting the results by price ascendingly',
    ()=>
    {
        it('Verify navigating to monitors page', ()=>
        {
            // Navigating to monitors page
            monitorsPage.tests.pageUrl()
            monitorsPage.tests.breadcrumbEndsWithMonitorsText()
            monitorsPage.tests.pageTitleHasMonitorsText()
        })

        it('Verify selecting asus filter', ()=>
        {
            // Selecting asus filter
            monitorsPage.actions.clickAsusFilterCheckbox()
            monitorsPage.tests.asusFilterUrl()

            // Sorting Monitors Items By Price Ascendingly
            monitorsPage.actions.sortMonitorsItemsByPriceAscendingly()
            monitorsPage.tests.sortingMonitorsUrl()
            
            cy.wait(3000)
            monitorsPage.tests.monitorsItemsSortedByPriceAscendingly()
        })
    })
})