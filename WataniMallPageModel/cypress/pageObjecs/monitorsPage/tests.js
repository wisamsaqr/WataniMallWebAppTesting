import {MonitorsPageItems} from "./items"

export class MonitorsPageTests
{
    constructor()
    {
        this.items = new MonitorsPageItems();
    }

    // Page load
    pageUrl()
    {
        cy.url().should('include', '/monitors')
    }

    // Breadcrumb ends with text "MONITORS"
    breadcrumbEndsWithMonitorsText()
    {
        this.items.breadcrumb().should('include.text', ' » MONITORS');
    }
    
    // Page title has "Monitors" text
    pageTitleHasMonitorsText()
    {
        this.items.pageTitle().should('have.text', 'MONITORS')
    }


    // Asus filter checkbox checked
    asusFilterUrl()
    {
        cy.url().should('include', '/monitors?_manufacturer=asus')
    }


    // Sorting monitors items by price ascendingly
    sortingMonitorsUrl()
    {
        cy.url().should('include', '/monitors?orderby=price&_manufacturer=asus')
    }

    monitorsItemsSortedByPriceAscendingly()
    {
        this.items.firstMonitorPrice()
        .then(elem=>
        {
            if (elem.children().length > 1)
            {
                cy.wrap(parseFloat(elem.find('ins > span > bdi').text().slice(1).replace(",", ""))).as('previousPrice')
            }
            else
            {
                cy.wrap(parseFloat(elem.find('span > bdi').text().slice(1).replace(",", ""))).as('previousPrice')
            }
        })

        this.items.allMonitorsPrices()
        .each(elem =>
        {
            let price
            if (elem.children().length > 1)
            {
                price = parseFloat(elem.find('ins > span > bdi').text().slice(1).replace(",", ""))
            }
            else
            {
                price = parseFloat(elem.find('span > bdi').text().slice(1).replace(",", ""))
            }

            cy.get('@previousPrice').should('be.lte', price)

            cy.wrap(price).as('previousPrice')
        }) 
    }
}