export const test_data = [
    {
        id: 1,
        name: "LoRa",
        desc: "A long range, low power wireless networking protocol designed for the Internet of Things (IoT)",
        provider: "LoRa Alliance",
        price: 128,
        currency: `CZK`,
        active: true,
        img: "https://assets.euromoneydigital.com/dims4/default/5f23c30/2147483647/strip/true/crop/1000x600+0+0/resize/840x504!/quality/90/?url=http%3A%2F%2Feuromoney-brightspot.s3.amazonaws.com%2F1b%2F0f%2Ff4d59c97419589a24560fecb6e58%2Fadobestock-interconnection-2022.jpg",
        coverage: [
            { location: `Doma`, percentage: Math.random() * 100 },
            { location: `Chata`, percentage: Math.random() * 100 }
        ]
    },
    {
        id: 2,
        name: "Sigfox",
        desc: "A global communications service provider that uses a proprietary network to connect low-power Internet of Things (IoT) devices",
        provider: "Sigfox",
        price: 200,
        currency: `CZK`,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREMqlFw0W3lwTS6TDwvY8Emx4yCLX6v-bOnA&usqp=CAU",
        active: true,
        coverage: [
            { location: `Doma`, percentage: Math.random() * 100 },
            { location: `Chata`, percentage: Math.random() * 100 }
        ]
    },
    {
        id: 3,
        name: "Weightless",
        desc: "An open standard for wireless communications in machine-to-machine (M2M) and Internet of Things (IoT) applications",
        provider: "Weightless SIG",
        price: 113,
        currency: `CZK`,
        img: "https://www.aeologic.com/blog/wp-content/uploads/2019/06/aeologic_iot-1038x576.png",
        coverage: [
            { location: `Doma`, percentage: Math.random() * 100 },
            { location: `Chata`, percentage: Math.random() * 100 }
        ]
    },
    {
        id: 4,
        name: "NB-IoT",
        desc: "A low power wide area network (LPWAN) technology standardized by 3GPP for the Internet of Things (IoT)",
        provider: "Various telecommunications companies",
        price: 99,
        currency: `CZK`,
        img: "https://www.brandknewmag.com/wp-content/uploads/2015/12/IOT.jpg",
        coverage: [
            { location: `Doma`, percentage: Math.random() * 100 },
            { location: `Chata`, percentage: Math.random() * 100 }
        ]
    },
    {
        id: 5,
        name: "LTE-M",
        desc: "A type of cellular communication specifically designed for the Internet of Things (IoT)",
        provider: "Various telecommunications companies",
        price: 89,
        currency: `CZK`,
        img: "https://uploads-ssl.webflow.com/6201c72eaefe392244240f98/62d6c5a98ab439891870e17c_istockphoto-1305068251-170667a.jpeg",
        coverage: [
            { location: `Doma`, percentage: Math.random() * 100 },
            { location: `Chata`, percentage: Math.random() * 100 }
        ]
    },
    {
        id: 6,
        name: "Ingenu RPMA",
        desc: "A proprietary wireless protocol designed for low power, wide area networking (LPWAN)",
        provider: "Ingenu",
        price: 124,
        currency: `CZK`,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREMqlFw0W3lwTS6TDwvY8Emx4yCLX6v-bOnA&usqp=CAU",
        coverage: [
            { location: `Doma`, percentage: Math.random() * 100 },
            { location: `Chata`, percentage: Math.random() * 100 }
        ]
    },
    {
        id: 7,
        name: "Symphony Link",
        desc: "A proprietary long-range, low-power wireless protocol designed for the Internet of Things (IoT)",
        provider: "Link Labs",
        price: 130,
        currency: `CZK`,
        img: "https://www.aeologic.com/blog/wp-content/uploads/2019/06/aeologic_iot-1038x576.png",
        coverage: [
            { location: `Doma`, percentage: Math.random() * 100 },
            { location: `Chata`, percentage: Math.random() * 100 }
        ]
    },
    {
        id: 8,
        name: "FLora",
        desc: "A low-power wireless protocol designed for the Internet of Things (IoT)",
        provider: "OnRamp",
        price: 111,
        currency: `CZK`,
        img: "https://www.brandknewmag.com/wp-content/uploads/2015/12/IOT.jpg",
        coverage: [
            { location: `Doma`, percentage: Math.random() * 100 },
            { location: `Chata`, percentage: Math.random() * 100 }
        ]
    },
    {
        id: 9,
        name: "Narrowband IoT (NB-IoT)",
        desc: "A low power wide area network (LPWAN) technology standardized by 3GPP for the Internet of Things (IoT)",
        provider: "Various telecommunications companies",
        price: 110,
        currency: `CZK`,
        img: "https://news.mit.edu/sites/default/files/images/202011/MIT-Tiny-AI-01.jpg",
        coverage: [
            { location: `Doma`, percentage: Math.random() * 100 },
            { location: `Chata`, percentage: Math.random() * 100 }
        ]
    },
    {
        id: 10,
        name: "Long Range Wide Area Network (LoRaWAN)",
        desc: "A long range, low power wireless networking protocol designed for the Internet of Things (IoT)",
        provider: "The LoRa Alliance",
        price: 109,
        currency: `CZK`,
        img: "https://i.iinfo.cz/images/254/a5-01bd38d2d386fea74f5e33d0e75ef7.jpg",
        coverage: [
            { location: `Doma`, percentage: Math.random() * 100 },
            { location: `Chata`, percentage: Math.random() * 100 }
        ]
    },
    {
        id: 11,
        name: "Zigbee",
        desc: "A low-power wireless communication protocol designed for the Internet of Things (IoT) and home automation applications.",
        provider: "Zigbee Alliance",
        price: 199,
        currency: `CZK`,
        img: "https://uploads-ssl.webflow.com/6201c72eaefe392244240f98/62d6c5a98ab439891870e17c_istockphoto-1305068251-170667a.jpeg",

        coverage: [
            { location: `Doma`, percentage: Math.random() * 100 },
            { location: `Chata`, percentage: Math.random() * 100 }
        ]
    },
    // {
    //     id: 12,
    //     name: "Z-Wave",
    //     desc: "A wireless communication protocol designed for home automation and the Internet of Things (IoT).",
    //     provider: "Z-Wave Alliance",
    //     price: 99,
    //     currency: `CZK`,
    //     coverage: [
    //         { location: `Doma`, percentage: Math.random() * 100 },
    //         { location: `Chata`, percentage: Math.random() * 100 }
    //     ]
    // },
    // {
    //     id: 13,
    //     name: "Thread",
    //     desc: "A low-power wireless communication protocol designed for the Internet of Things (IoT) and home automation applications.",
    //     provider: "Thread Group",
    //     price: 100,
    //     currency: `CZK`,
    //     coverage: [
    //         { location: `Doma`, percentage: Math.random() * 100 },
    //         { location: `Chata`, percentage: Math.random() * 100 }
    //     ]
    // },
    // {
    //     id: 14,
    //     name: "Bluetooth Low Energy (BLE)",
    //     desc: "A wireless communication protocol designed for low-power consumption and designed for use in the Internet of Things (IoT).",
    //     provider: "Bluetooth Special Interest Group (SIG)",
    //     price: 128,
    //     currency: `CZK`,
    //     coverage: [
    //         { location: `Doma`, percentage: Math.random() * 100 },
    //         { location: `Chata`, percentage: Math.random() * 100 }
    //     ]
    // },
    // {
    //     id: 15,
    //     name: "WiFi",
    //     desc: "A wireless networking technology that uses radio waves to provide high-speed Internet and network connections.",
    //     provider: "Various",
    //     price: 119,
    //     currency: `CZK`,
    //     coverage: [
    //         { location: `Doma`, percentage: Math.random() * 100 },
    //         { location: `Chata`, percentage: Math.random() * 100 }
    //     ]
    // },
    // {
    //     id: 16,
    //     name: "Cellular (2G, 3G, 4G, 5G)",
    //     desc: "A wireless communication technology that uses radio waves to provide mobile voice and data communication services.",
    //     provider: "Various telecommunications companies",
    //     price: 128,
    //     currency: `CZK`,
    //     coverage: [
    //         { location: `Doma`, percentage: Math.random() * 100 },
    //         { location: `Chata`, percentage: Math.random() * 100 }
    //     ]
    // },
    // {
    //     id: 17,
    //     name: "Z-Wave Plus",
    //     desc: "An upgraded version of the Z-Wave wireless communication protocol designed for improved performance and extended range.",
    //     provider: "Z-Wave Alliance",
    //     price: 128,
    //     currency: `CZK`,
    //     coverage: [
    //         { location: `Doma`, percentage: Math.random() * 100 },
    //         { location: `Chata`, percentage: Math.random() * 100 }
    //     ]
    // },
    // {
    //     id: 18,
    //     name: "WirelessHART",
    //     desc: "A wireless communication protocol designed for industrial automation and the Internet of Things (IoT).",
    //     provider: "HART Communication Foundation",
    //     price: 120,
    //     currency: `CZK`,
    //     coverage: [
    //         { location: `Doma`, percentage: Math.random() * 100 },
    //         { location: `Chata`, percentage: Math.random() * 100 }
    //     ]
    // },
    // {
    //     id: 19,
    //     name: "ISA100.11a",
    //     desc: "A wireless communication protocol designed for industrial automation and the Internet of Things (IoT).",
    //     provider: "ISA (International Society of Automation)",
    //     price: 128,
    //     currency: `CZK`,
    //     coverage: [
    //         { location: `Doma`, percentage: Math.random() * 100 },
    //         { location: `Chata`, percentage: Math.random() * 100 }
    //     ]
    // },
    // {
    //     id: 20,
    //     name: "Wireless M-Bus",
    //     desc: "A wireless communication protocol designed for metering and data collection in the Internet of Things (IoT).",
    //     provider: "Wireless M-Bus Association",
    //     price: 110,
    //     currency: `CZK`,
    //     coverage: [
    //         { location: `Doma`, percentage: Math.random() * 100 },
    //         { location: `Chata`, percentage: Math.random() * 100 }
    //     ]
    // }
]