import Header from "../components/header";
import "../styles/Home.css"
import HorizontalStack from '../components/horizontalStack.js'
import Card from '../components/card.js'
import Banner from '../components/banner.js'
import Searchbar from "../components/searchbar";

/**
 * @returns Homepage
 */
export default function Home(props) {

    const { user, strings } = props;

    //test data
    const cards = [
        { title: `Card`, message: `Text text text text` },
        { title: `Card`, message: `Text text text text` },
        { title: `Card`, message: `Text text text text` },
        { title: `Card`, message: `Text text text text` },
        { title: `Card`, message: `Text text text text` },
        { title: `Card`, message: `Text text text text` },
        { title: `Card`, message: `Text text text text` }
    ]

    return <>
        <Header />
        <main>
            <section id="homepage_header" title={`Nabídka LPWAN sítí`}>
                <section>
                    <h1>resNET</h1>
                    <h4>{strings?.motto}</h4>
                </section>
                <Searchbar />
            </section>
            {!user && <Banner id="signup_banner">
                <p id="web_description">{strings?.web_description}</p>
                <p>Ještě nejsi členem?</p>
                <a className="button" href="/register">Registrovat</a>
                <a className="button" href="/login">Přihlásit</a>
            </Banner>}
            {user && <section id="my_devices_banner">
                <section>
                    <h1>Moje zařízení</h1>
                    <h5>Zařízení 1, zařízení 2, zařízení 3</h5>
                </section>
                <a className="button" href="/my_devices">Spravovat</a>
            </section>}
            <HorizontalStack title={`Akce`}>
                {cards?.map((item, id) => <Card title={item.title} message={item.message} />)}
            </HorizontalStack>
            <Banner title={`Nabídka LPWAN sítí`} message={`V naší nabídce najdete množství sítí..`}>
                <a className="button" href="/networks">Zobrazit nabídku</a>
            </Banner>
            <HorizontalStack title={`Komunita`}>
                {cards?.map((item, id) => <Card title={item.title} message={item.message} />)}
            </HorizontalStack>
        </main>
        <footer>

        </footer>
    </>
}
