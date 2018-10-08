require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
mongoose.Promise = global.Promise

const { Region, Product } = require('./Model')

const mascara = new Product({
    name: "L'Oreal - Lash Paradise",
    description: "Take your lashes to paradise! L'Oreal's Voluminous Lash Paradise Mascara is their first mascara for voluptuous volume and length now with even more black pigments. Soft wavy bristle brush holds maximum formula for a dramatic volumizing charge.",
    image: "https://media.allure.com/photos/5b04d4ded14f7a0d0f182e1d/master/pass/L'Ore%CC%81al%20Paris%20Voluminous%20Lash%20Paradise%20Mascara.jpg",
    price: "$9.99",
    link: "https://www.ulta.com/voluminous-lash-paradise-mascara?productId=xlsImpprod16151007"
})

const foundation = new Product({
    name: "Too Faced - Born This Way",
    descrition: "An oil-free foundation offering medium-to-full natural coverage. This foundation is infused with coconut water, alpine rose, and hyaluronic acid to help replenish the skin's moisture level and give a smoother, more youthful appearance",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-h7_KZmYyAN2-EsvzFD9NvS63OUar7xxXwOk1SMmE3PaPRyF9",
    price: "$39.00",
    link: "https://www.ulta.com/born-this-way-undetectable-medium-full-coverage-foundation?productId=xlsImpprod12621017"
})

const lipstick = new Product({
    name: "Anastasia Beverly Hills - Liquid Lipstick",
    description: "A full pigment liquid formula that dries to a weightless matte finish for smudge-proof wearability and long lasting color.",
    image: "https://www.anastasiabeverlyhills.co.uk/on/demandware.static/-/Sites-anastasia-master-catalog/default/dw709e114e/images/Redesign/Rescaled/abh-liquid-lipstick-set-a.jpg",
    price: "$20.00",
    link: "https://www.sephora.com/product/liquid-lipstick-P404831?icid2=products%20grid:p404831:product"
})

const facescrub = new Product ({
    name: "Murad - AHA/BHA Exfoliating Cleanser",
    description: "This intensive cleanser polishes away dullness and impurities with three exfoliating agents—Salicylic Acid, Lactic Acid, and Glycolic Acid—and Jojoba beads revealing a smoother, younger-looking complexion.",
    image: "https://6b901r-8ieybj5zerw6.webscalenetworks.net/HJzz2xIdH/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/1/0/a10078b.jpg.pagespeed.ic.YXZ3U4w4gV.webp",
    price: "$39.00",
    link: "https://www.murad.com/product/aha-bha-exfoliating-cleanser/"
})

const lips = new Region ({
    name: "Lips",
    image: "lips.svg",
    products: [lipstick]
})

const eyes = new Region ({
    name: "Eyes",
    image: "eyes.svg",
    products: [mascara]
})

const face = new Region ({
    name: "Face",
    image: "drawing-face-female-6.png",
    products: [foundation]
})

const skin = new Region ({
    name: "Skin",
    image: "face.svg",
    products: [facescrub]
})

Region.remove({})
.then(() => lips.save())
.then(() => eyes.save())
.then(() => face.save())
.then(() => skin.save())
.then(() => console.log('Done Seeding'))
.then(() => mongoose.connection.close())