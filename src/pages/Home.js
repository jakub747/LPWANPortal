import Header from "../components/header";
import "../styles/Home.css"
import HorizontalStack from '../components/horizontalStack.js'
import Card from '../components/card.js'
import Banner from '../components/banner.js'


export default function Home() {

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
            <h1>LPWAN Portal</h1>
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
