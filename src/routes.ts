import Home from "./components/Home/Home"
import FootballPage from "./components/SportsPages/FootballPage"
import BasketballPage from "./components/SportsPages/BasketballPage"
import Eticket from "./components/Ticket/Eticket"
import MyTicketPage from "./components/Ticket/MyTickets"
import Login from "./components/Auth/Login"
import Registration from "./components/Auth/Registration";
import AddCredit from "./components/Credit/AddCredit"

var routes= [
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/registration",
        name: "Registration",
        component: Registration
    },
    {
        path: "/football",
        name: "FootballPage",
        component: FootballPage,
    },
    {
        path: "/basketball",
        name: "BasketballPage",
        component: BasketballPage,
    },
    {
        path: "/eticket",
        name: "Eticket",
        component: Eticket,
    },
    {
        path: "/mytickets",
        name: "MyTicketPage",
        component: MyTicketPage,
    },
    {
        path: "/addcredit",
        name: "AddCredit",
        component: AddCredit,
    },
    {
        path: "/",
        name: "Home",
        component: Home,
    }
]

export default routes;