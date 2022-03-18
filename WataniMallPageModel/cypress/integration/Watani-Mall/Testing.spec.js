/// <reference types="cypress" />


describe("Watani Mall Testing", ()=>
{
    // before(()=>
    // {
    //     // Preserve cookie in every test
    //     Cypress.Cookies.defaults({preserve: (cookie) => { return true; }})
    // })


    // it("Verifying visiting Watani Mall homepage", ()=>
    // {
        // Visit the web site
        // cy.visit("/")
        // cy.url().should('eq', 'https://watanimall.com/')
        
        // Assert that home nav element is selected
        // cy.get('nav#nav ul[id^="menu"] > li[id^="menu-item"]:first-child')
        // cy.get('nav#nav ul[id^="menu"] > li[id^="menu-item"]').contains('li', 'الرئيسية')
        //     .should('have.class', 'current-menu-item')
    // })
    

    // it("Verifying navigating to all categories navigating to monitors", ()=>
    // {
        // navigating to all categories
        // cy.get('nav#nav ul[id^=menu]>li[id^=menu-item] > a').contains('جميع الفئات').click()
        
        // cy.get('nav#nav ul[id^=menu] > li[id^=menu-item]:nth-child(5) > a').click()
        // cy.url().should('include', '/all-categories')

        // Assert that heading has the text "جميع الفئات"
        // cy.get('main#main h1.section-title').should('have.text', 'جميع الفئات')

        // Assert that "All Categories" nav element is selected
        // cy.get('nav#nav ul[id^="menu"] > li[id^="menu-item"]').contains('li', 'جميع الفئات')
        //     .should('have.class', 'current-menu-item')
        // cy.get('nav#nav ul[id^="menu"]').find('li[id^="menu-item"]').contains('li', 'جميع الفئات')
        //     .should('have.class', 'current-menu-item')
    // })
    
    context('navigating to monitors'
        +' then selecting asus filter'
        +' and sorting the results by price ascendingly',
    ()=>
    {
        // it('Verify navigating to monitors', ()=>
        // {
            // Navigating to monitors
            // cy.get('main#main div.category-row > div:nth-child(3) > a.category-item').click()
            
            // cy.url().should('include', '/monitors')

            // Assert that breadcrumb ends with text "MONITORS"
            // cy.get('main#main > nav.woocommerce-breadcrumb').should('include.text', ' » MONITORS')

            // Assert that heading has the text "MONITORS"
            // cy.get('main#main h1.page-title').should('have.text', 'MONITORS')
        // })

        // it("Verifying selecting asus filter", ()=>
        // {
            // selecting asus filter
            // cy.get('main#main div[data-name="manufacturer"] > div[data-value="asus"]').click()
            // cy.get('div[data-value="asus"]').click()
            // cy.url().should('include', '/monitors?_manufacturer=asus')
        // })

        it("Verifying sorting the results by price ascendingly", ()=>
        {
            // Sorting the results by price ascendingly
            // cy.get('div.shop-page-container > div.sort-filter-row select[name="orderby"]')
            //     .select('ترتيب حسب: الأدنى سعراً للأعلى', { force: true })
            
            // cy.get('select[name="orderby"]')
            // cy.url().should('include', '/monitors?orderby=price&_manufacturer=asus')


            // cy.wait(3000)
            // Asserting that the monitors are sorted
            // cy.get('div.shop-products-holder div.product-col:first-child div.product-price')
            // .then(elem=>
            // {
            //     if (elem.children().length > 1)
            //     {
            //         cy.wrap(parseFloat(elem.find('ins > span > bdi').text().slice(1).replace(",", ""))).as('previousPrice')
            //     }
            //     else
            //     {
            //         cy.wrap(parseFloat(elem.find('span > bdi').text().slice(1).replace(",", ""))).as('previousPrice')
            //     }

            //     // cy.log(cy.get('@previousPrice'))
            // })

            // cy.get('div.shop-products-holder div.product-price')
            // .each(elem =>
            // {
            //     let price
            //     if (elem.children().length > 1)
            //     {
            //         price = parseFloat(elem.find('ins > span > bdi').text().slice(1).replace(",", ""))
            //     }
            //     else
            //     {
            //         price = parseFloat(elem.find('span > bdi').text().slice(1).replace(",", ""))
            //     }

            //     // cy.log(price)
            //     cy.get('@previousPrice').should('be.lte', price)

            //     cy.wrap(price).as('previousPrice')
            // })
        })
    })

    context("Adding two products to the cart then removing the first product", () =>
    {
        // go to categories page
        it("Adding first product to the cart inside monitors page", () =>
        {
            // saving product price before adding it to cart
            cy.get('div.shop-products-holder div.product-col:first-child > div.product-item bdi')
                .invoke('text').as('price')
            // cy.get('div.shop-products-holder div.product-col:first-child > div.product-item bdi')
            //     .invoke('text').then(t=>
            //     {
            //         cy.log(t)
            //     })

            
            // saving product name before adding it to cart
            cy.get('div.shop-products-holder div.product-col:first-child h3.product-name > a')
                .invoke('text').as('name')
            
            
            // saving cart products count before adding 1st product
            cy.get('header#header div.heder-action-nav a > span.counter')
                .invoke('text').as('counter')

            
            
            
            // clicking adding button
            cy.get('div.shop-products-holder div.product-col:first-child > div.product-item a.btn-add-cart')
                .click({ force: true })
            // cy.get('div.product-col:first-child a.btn-add-cart')

            // Assertions
            // cart should show up after addin product
            cy.get('header#header div.heder-action-nav div.header-mini-cart', { timeout: 20000 })
                .should('be.visible')
            // cy.get('div.header-mini-cart').should('be.visible')

            // cart must have at least one product
            cy.get('div.mini-cart-items > div.cart-item').should('have.length.greaterThan', 0)

            // comparing the price of the added product against the product in the cart menu
            cy.get('div.mini-cart-items div.product-amount bdi').invoke('text')
                .then(p2=>
                {
                    cy.get('@price').should('eq', p2)
                })
            
            
            // comparing the name of the added product against the product in the cart menu
            // cy.get('div.mini-cart-items strong > a').invoke('text')
            //     .then(n2=>
            //     {
            //         cy.get('@name').should('eq', n2)
            //     })
            
            
            // comparing the cart products count before against after adding product
            cy.get('header#header div.heder-action-nav a > span.counter')
                .invoke('text').then(c=>
                {
                    let c2 = `${c - 1}`
                    cy.get('@counter').should('eq', c2)
                })
            
            


            // close the cart menu
            cy.get('div.heder-action-nav div.cart-header i.icon-close').click()
        })

        it("Adding second product to the cart inside product's page", () =>
        {
            // navigating to 2nd product
            cy.get('div.shop-products-holder div.product-col:nth-child(2)').click()
            cy.url().should('include', '/monitor-asus')

            cy.get('div.summary form.cart > button[name="add-to-cart"]').contains('إضافة إلى السلة')
                .click()
            // cy.get('button[name="add-to-cart"]')

            // Assertions
            cy.get('header#header div.heder-action-nav div.header-mini-cart', { timeout: 20000 })
                .should('be.visible')
            cy.get('div.mini-cart-items > div.cart-item').should('have.length.greaterThan', 1)
        })



        it("Verifying removing first product from cart", () =>
        {
            // clicking remove anchor
            cy.get('div.mini-cart-items > div.cart-item:first-child > a.cart-remove', { timeout: 20000 })
                .click({ force: true })



            // // cy.get('div[data-value="asus"]').click()
            // cy.url().should('include', '/monitors?_manufacturer=asus')


            // sorting the results by price ascendingly
            // cy.get('div.shop-page-container > div.sort-filter-row select[name="orderby"]')
            //     .select('ترتيب حسب: الأدنى سعراً للأعلى', {force:true})
            // // cy.get('select[name="orderby"]')
            // cy.url().should('include', '/monitors?orderby=price&_manufacturer=asus')
        })
    })
})