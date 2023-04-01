import Header from "../components/header";
import "../styles/Home.css"
import HorizontalStack from '../components/horizontalStack.js'
import Card from '../components/card.js'
import Banner from '../components/banner.js'
import Searchbar from "../components/searchbar";
import { test_data_actions } from "../data/actions";
import { test_data } from "../data/network_data";
import { test_data_community } from "../data/community";
import Footer from "../components/footer";
import { useEffect } from "react";


/**
 * @returns Homepage
 */
export default function Home(props) {

    const { user, strings } = props;

    return <>
        <Header user={user} />
        <main>
            <section id="homepage_header" title={`Nabídka LPWAN sítí`}>
                <img src='https://www.satellitetoday.com/wp-content/uploads/2022/01/IfZTA4VcRyyG7HwdeA5u_VS_120120_DGTL_Tech-2021.jpeg' alt="Page header" />
                <div>
                    <section>
                        <h1>resNET</h1>
                        <h4>{strings?.motto}</h4>
                    </section>
                    <Searchbar />
                </div>
            </section>
            {!user && <Banner id="signup_banner">
                <p id="web_description">{strings?.web_description}</p>
                <div className="buttons">
                    <p>Ještě nejsi členem?</p>
                    <a className="button" href="/register">Registrovat</a>
                    <a className="button" href="/login">Přihlásit</a>
                </div>
            </Banner>}
            {user && <section id="my_devices_banner">
                <section>
                    <h1>Moje zařízení</h1>
                    <h5>Zařízení 1, zařízení 2, zařízení 3</h5>
                </section>
                <a className="button" href="/my_devices">Spravovat</a>
            </section>}
            <HorizontalStack title={`LPWAN sítě`}>
                {test_data?.map((item, id) => <Card user={user} active={item.active} id={item.id} title={item.name} message={item.desc} img={item.img} imgalt={item.imgalt} />)}
            </HorizontalStack>
            {/* <Banner id="networks_banner" title={`Nabídka LPWAN sítí`} message={`V naší nabídce najdete množství sítí..`}>
                <a className="button" href="/networks">Zobrazit nabídku</a>
            </Banner>
            <HorizontalStack title={`Komunita`}>
                {test_data_community?.map((item, id) => <Card user={user} title={item.title} message={item.message} img={item.img} imgalt={item.imgalt} />)}
            </HorizontalStack> */}
        </main>
        <Footer />
    </>
}
