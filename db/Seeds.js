require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
mongoose.Promise = global.Promise

const { Region, Product } = require('./Model')

const mascara = new Product({
    brandName: "L'Oreal Paris",
    productName: "Lash Paradise",
    description: "Take your lashes to paradise! L'Oreal's Voluminous Lash Paradise Mascara is their first mascara for voluptuous volume and length now with even more black pigments. Soft wavy bristle brush holds maximum formula for a dramatic volumizing charge.",
    image: "https://media.allure.com/photos/5b04d4ded14f7a0d0f182e1d/master/pass/L'Ore%CC%81al%20Paris%20Voluminous%20Lash%20Paradise%20Mascara.jpg",
    price: "$9.99",
    link: "https://www.ulta.com/voluminous-lash-paradise-mascara?productId=xlsImpprod16151007"
})

const foundation = new Product({
    brandName: "Too Faced",
    productName: "Born This Way",
    descrition: "An oil-free foundation offering medium-to-full natural coverage. This foundation is infused with coconut water, alpine rose, and hyaluronic acid to help replenish the skin's moisture level and give a smoother, more youthful appearance",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-h7_KZmYyAN2-EsvzFD9NvS63OUar7xxXwOk1SMmE3PaPRyF9",
    price: "$39.00",
    link: "https://www.ulta.com/born-this-way-undetectable-medium-full-coverage-foundation?productId=xlsImpprod12621017"
})

const blush = new Product({
   brandName: "Nars",
   productName: "Blush (Orgasm)",
   description: "NARS blush delivers healthy-looking color that enlivens the complexion and provides a natural-looking flush to flatter any skin tone.",
   image: "https://www.narscosmetics.com/dw/image/v2/BBSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw2a802c91/hi-res/0607845040132.jpg?sw=856&sh=750&sm=fit",
   price: "$30.00",
   link: "https://www.sephora.com/product/blush-P2855"
})

const lipstick = new Product({
    brandName: "Anastasia Beverly Hills",
    productName: "Liquid Lipstick",
    description: "A full pigment liquid formula that dries to a weightless matte finish for smudge-proof wearability and long lasting color.",
    image: "https://www.anastasiabeverlyhills.co.uk/on/demandware.static/-/Sites-anastasia-master-catalog/default/dw709e114e/images/Redesign/Rescaled/abh-liquid-lipstick-set-a.jpg",
    price: "$20.00",
    link: "https://www.sephora.com/product/liquid-lipstick-P404831?icid2=products%20grid:p404831:product"
})

const facescrub = new Product ({
    brandName: "Murad",
    productName: "AHA/BHA Exfoliating Cleanser",
    description: "This intensive cleanser polishes away dullness and impurities with three exfoliating agents—Salicylic Acid, Lactic Acid, and Glycolic Acid—and Jojoba beads revealing a smoother, younger-looking complexion.",
    image: "https://6b901r-8ieybj5zerw6.webscalenetworks.net/HJzz2xIdH/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/1/0/a10078b.jpg.pagespeed.ic.YXZ3U4w4gV.webp",
    price: "$39.00",
    link: "https://www.murad.com/product/aha-bha-exfoliating-cleanser/"
})

const lips = new Region ({
    name: "Lips",
    image: "https://image.flaticon.com/icons/svg/45/45679.svg",
    products: [lipstick]
})

const eyes = new Region ({
    name: "Eyes",
    image: "https://nadia-afanaseva.com/images/eye.svg",
    products: [mascara]
})

const face = new Region ({
    name: "Face",
    image: "https://estampadosibiza.com/wp-content/uploads/nbdesigner/cliparts/Girl/girl-art-face.svg",
    products: [foundation, blush]
})

const skin = new Region ({
    name: "Skin",
    image: "https://www.svgrepo.com/show/43240/claw-bath-in-spa.svg",
    products: [facescrub]
})

Region.remove({})
.then(() => lips.save())
.then(() => eyes.save())
.then(() => face.save())
.then(() => skin.save())
.then(() => console.log('Done Seeding'))
.then(() => mongoose.connection.close())