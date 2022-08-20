# Discover Coffee Shops

[![GitHub Stars](https://img.shields.io/github/stars/Xandyhoss/discover-coffe-stores)](https://github.com/Xandyhoss/discover-coffe-stores/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/Xandyhoss/discover-coffe-stores)](https://github.com/Xandyhoss/discover-coffe-stores/issues)
[![Live Demo](https://img.shields.io/badge/live-demo-green)](https://discover-coffe-stores-nine.vercel.app/)

Discover Coffee Shop is an app where you can find coffee shops nearby your current location. It is my first project using Next.js.

![App Preview](https://i.imgur.com/jrAZs6w.png)

---

## Stack

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

---

## Setup

Clone this repo to your desktop, access the folder with `cd discover-coffe-stores` and then run `npm install` to install all de depenciencies. After that, create a file named `.env.local` inside the project root folder and paste the following content inside the file: 

```
API_TOKEN=YOUR_API_KEY(You need to create an account at foursquare.org to use their PlacesAPI) 
LOCAL_API=http://localhost:3000/api
FOUR_SQUARE_API=https://api.foursquare.com/v3/places
```

Now you can run `npm run dev` to start the project locally on `http://localhost:3000`
