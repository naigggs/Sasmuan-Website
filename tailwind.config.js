/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:
    {
      backgroundImage: {
        'HeroImage': "url('../src/medias/HeroImage.jpg')",
        'HeroImageContact': "url('../src/medias/HeroImageContact.jpg')",
        'HeroImageBangkungMalapad': "url('../src/medias/HeroImageBangkungMalapad.png')"
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif']
      },
      backgroundPosition: {
        'top': 'top',
        'center': 'center',
        'bottom': 'bottom',
        'hero': '5% 80%', 
      },
    },
  },
  plugins: [],
}

