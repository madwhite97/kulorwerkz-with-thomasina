const portfolioAlt = {
    "nails-10.jpg":
        "Glossy amber and copper nails with gold floral artwork, autumn leaf accents, and tortoiseshell details",

    "nails-11.jpg":
        "Neon lime green and black nails with playful wavy abstract accents",

    "nails-12.jpg":
        "Deep red chrome almond-shaped nails with sparkling decorative accents",

    "nails-13.jpg":
        "Pink and black stiletto nails with playful dotted and heart-inspired details",

    "nails-14.jpg":
        "Nude and mauve nails with rose-gold chrome accents and delicate glitter details",

    "nails-15.jpg":
        "A mixed black, red, and gold nail set displayed with a Nails by Thomi sign",

    "nails-16.jpg":
        "Long glossy nude nails with soft pink tones displayed with a Nails by Thomi sign",

    "nails-17.jpg":
        "Long glossy nude and pink nails with delicate white detailing displayed with a Nails by Thomi sign",

    "nails-18.jpg":
        "Long black almond nails with deep purple glitter and intricate white detailing",

    "nails-19.jpg":
        "Black and dark plum nails with gold celestial and decorative accents",

    "nails-2.jpg":
        "Pink nails with bright yellow and multicolor abstract flame-inspired artwork",

    "nails-20.jpg":
        "Long brown and gold stiletto nails with layered abstract linework and metallic accents",

    "nails-21.png":
        "Pink and white French-tip nails with black line art and delicate decorative accents",

    "nails-22.jpg":
        "Nude and brown nails with black-and-white geometric patterns and metallic accents",

    "nails-23.jpg":
        "Soft pink nails with black, white, and purple floral and abstract details",

    "nails-24.jpg":
        "Nude nails with vibrant rainbow chrome swirls and colorful abstract accents",

    "nails-25.jpg":
        "Long multicolor nails with ornate floral artwork, metallic accents, and jeweled details",

    "nails-26.jpg":
        "Purple, yellow, and black nails with sunflower and bee-inspired artwork",

    "nails-27.jpg":
        "Long nude and black nails with neon pink, orange, and yellow abstract artwork",

    "nails-28.jpg":
        "Nude nails with colorful glitter, chrome accents, and intricate textured details",

    "nails-29.jpg":
        "Short nails with green and purple iridescent accents and geometric linework",

    "nails-3.jpg":
        "Red, blue, white, and metallic striped nail art in a playful mixed-color set",

    "nails-30.jpg":
        "Blue and white nails with bold curved linework and abstract swirls",

    "nails-31.jpg":
        "Dark blue nails with bright pink, purple, and neon abstract geometric artwork",

    "nails-32.jpg":
        "Iridescent chrome nails with shifting blue, green, purple, and gold tones",

    "nails-33.jpg":
        "Black nails with white geometric linework and graphic abstract accents",

    "nails-34.jpg":
        "Bright multicolor nails with neon pink, yellow, green, and orange abstract swirls",

    "nails-35.jpg":
        "Teal and nude nails with white botanical linework and raised decorative accents",

    "nails-36.jpg":
        "Long royal blue nails with silver glitter and intricate decorative artwork",

    "nails-37.jpg":
        "Colorful nails with bold black, white, and neon abstract geometric patterns",

    "nails-38.jpg":
        "Silver and white nails with blue accents and elegant curved swirl designs",

    "nails-39.jpg":
        "Translucent yellow nails with white curved linework and pearl embellishments",

    "nails-4.jpg":
        "Long nude and blush nails with delicate white and pink floral details",

    "nails-40.jpg":
        "Bright blue nails with silver glitter accents and raised metallic details",

    "nails-41.jpg":
        "Turquoise nails with black and lime green geometric linework and metallic accents",

    "nails-42.jpg":
        "White nails with red and burgundy graphic artwork and glitter accents",

    "nails-43.jpg":
        "Soft pink nails with delicate black and white floral and ornamental details",

    "nails-44.jpg":
        "Long nude nails with green and gold leaf-inspired artwork and metallic accents",

    "nails-45.jpg":
        "Deep red nails with black and gold floral and decorative accents",

    "nails-46.jpg":
        "Dark nails with colorful iridescent chrome accents and glittering abstract details",

    "nails-47.jpg":
        "Long lime green nails with colorful floral artwork and sparkling accents",

    "nails-48.jpg":
        "Long nude and mauve nails with green and purple abstract swirls and glitter",

    "nails-49.jpg":
        "Long nails with bold orange, yellow, pink, and black geometric flame-inspired artwork",

    "nails-5.jpg":
        "Long white and blue nails with flowing marble-inspired swirls and metallic accents",

    "nails-50.jpg":
        "Nude nails with vibrant rainbow chrome swirls and colorful abstract accents",

    "nails-51.jpg":
        "Long multicolor nails with ornate floral artwork, metallic accents, and jeweled details",

    "nails-6.jpg":
        "Iridescent purple and blue almond nails with glossy chrome accents",

    "nails-7.jpg":
        "Soft purple almond nails with glossy finishes and delicate raised details",

    "nails-8.jpg":
        "Nude and brown nails with delicate botanical linework and glossy neutral accents",

    "nails-9.jpg":
        "Red chrome nails with festive white and red candy-inspired artwork",

    "nails.png":
        "Long nude and brown nails with black-and-white line art and delicate floral details",
};

export function getPortfolioAlt(image) {
    const filename = image.split("/").pop();

    return portfolioAlt[filename] || "Luxury nail design";
}

export default portfolioAlt;