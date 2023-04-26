import Head from "next/head";
import axios from "axios";
import Navbar from "@/components/navbar/Navbar";
import Exchange from "@/components/header/Exchange";

// export async function getServerSideProps(context) {
//   const apiKey = process.env.APIKEY
//   const homeUrl = process.env.HOME_URL

//   const result = await axios.get(`${homeUrl}convert?to=USD&from=IDR&amount=15000`, {
//     headers : {
//       apikey: `${apiKey}`
//     }
//   })
//   const data = result.data
//   console.log(data)
  
//   return {
//     props: {}
// }
// }

export default function Home() {

  return (
    <>
    
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Exchange />
        
    </>
  )
}
