import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      'sans': ['"Nunito"', 'sans-serif'],
      'stick': ['"Stick No Bills"']
    },
    extend: {
      colors:{
        'main':'#970101',
        'mainbg': '#7B0202',
        'main3':'#B52228',
        'grey-1':'#84888e',
        'grey-2':'#D9D9D9',
        'grey-3':'#f3f4f6',
        'grey': '#455065',
        'bg': '#F7F8FA',
        'grey-stroke-1': '#455065',
        'grey-stroke': '#C4C6CA'
      },
      fontSize:{
        xxs:['12px','19px'],
        xs:['14px', '22px'],
        sm:['16px', '25px'],
        base:['18px', '28px'],
        lg: ['20px', '32px'],
        xl: ['24px', '38px'],
        '1xl':['36px','57px'],
        '2xl':['40px','58px'],
        '3xl': ['48px', '76px'],
        '4xl': ['96px', '120px'],
        'h1': ['64px','102px'],
        'h80': ['80px','128px'],
        'h198': ['198px','296px']
      }
    },
    screens: {
      'laptop': '1290px',//431px 775
      'phone' : '728px'
    },
  },
  plugins: [],
};
export default config;
