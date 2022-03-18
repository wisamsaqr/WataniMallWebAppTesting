import {AllCategoriesPageActions} from "./actions"
import {AllCategoriesPageTests} from "./tests"

export class AllCategoriesPage
{
    constructor()
    {
        this.actions = new AllCategoriesPageActions()
        this.tests = new AllCategoriesPageTests()
    }
}