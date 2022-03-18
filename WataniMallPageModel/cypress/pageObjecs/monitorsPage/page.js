import {MonitorsPageActions} from "./actions"
import {MonitorsPageTests} from "./tests"

export class MonitorsPage
{
    constructor()
    {
        this.actions = new MonitorsPageActions()
        this.tests = new MonitorsPageTests()
    }
}