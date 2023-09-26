import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from '../components/AppLayout';
import { getAppProps } from "../utils/appprops";
import { useRouter } from 'next/router';
import { FaCartPlus, FaCoins } from "react-icons/fa6";


function TokenTopUp() {

  const router = useRouter()

  const handleProductA =  async () =>{

    const response = await fetch(`/api/productAToken` , {
      method : 'POST'
    })
      const json = await response.json();

      console.log(json);
      window.location.href = json.session.url
  //     if (response.json) {
  //   router.push(`/success`)
  // }
  }
  const handleProductB =  async () =>{

    const response = await fetch(`/api/productBToken` , {
      method : 'POST'
    })
      const json = await response.json();

      console.log(json);
      window.location.href = json.session.url
  //     if (response.json) {
  //   router.push(`/success`)
  // }
  }
  const handleProductC =  async () =>{

    const response = await fetch(`/api/productCToken` , {
      method : 'POST'
    })
      const json = await response.json();

      console.log(json);
      window.location.href = json.session.url
  //     if (response.json) {
  //   router.push(`/success`)
  // }
  }

  return (
    // <div className=" flex flex-col justify-center items-center">
    //   <h1>Token Top Up</h1><br/>
    //     <button   onClick={handleProductA}   className=" flex justify-center items-center gap-5 bg-transparent border-2 border-slate-800 hover: text-slate-700 text-2xl px-10 py-5 rounded-lg shadow-md shadow-black/20S hover:bg-slate-800 transition-colors hover:text-white cursor-pointer  ">
    //     add tokens 10
    // </button>
    //     <button   onClick={handleProductB}   className=" flex justify-center items-center gap-5 bg-transparent border-2 border-slate-800 hover: text-slate-700 text-2xl px-10 py-5 rounded-lg shadow-md shadow-black/20S hover:bg-slate-800 transition-colors hover:text-white cursor-pointer  ">
    //     add tokens 20
    // </button>
    //     <button   onClick={handleProductB}   className=" flex justify-center items-center gap-5 bg-transparent border-2 border-slate-800 hover: text-slate-700 text-2xl px-10 py-5 rounded-lg shadow-md shadow-black/20S hover:bg-slate-800 transition-colors hover:text-white cursor-pointer  ">
    //     add tokens 50
    // </button>
    // </div>

    
<div className="min-h-screen  bg-white flex flex-wrap flex-col items-center  justify-center gap-20  ">
               <div className=" flex flex-col items-center font-body text-lg font-thin text-slate-700">
                <h2 className="uppercase font-heading font-bold text-6xl">Choose a plan</h2>
                <p>One time subscription plan . You can cancel at anytime</p>
               </div>
            <div className="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items center     ">
            <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-slate-400 z-30">
                <h1 className="text-slate-800 font-semibold text-2xl font-heading ">Basic Plan</h1>
                    <div className="text-center py-4 px-10">
                        <h1 className="text-slate-900 text-4xl font-black font-heading">$5.00</h1>
                        <p className="text-slate-900 font-body mt-2">GHS 58.00</p>
                        
                    </div>
                    <div className="h-px bg-gray-200"></div>
                    <div className="flex flex-col gap-5  justify-center items-center mt-8 font-heading ">
                          <FaCoins size={60} className="text-slate-900"/>
                        <p className="text-lg text-slate-900 ">
                          <span className="font-body font-bold text-4xl">10</span> tokens
                        </p>
                    </div>
                      <button  onClick={handleProductA} className="w-full mt-6 mb-3 py-2 text-slate-400 font-semibold bg-slate-900 hover:shadow-xl duration-200 flex items-center justify-center gap-3 text-lg "> <FaCartPlus size={25} /> Purchase</button>
                </div>
                <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-slate-900 transform scale-1 sm:scale-1 md:scale-105 lg:scale-105 xl:scale-105 z-40  shadow-none sm:shadow-none md:shadow-xl lg:shadow-xl xl:shadow-xl">
                     <h1 className="text-slate-400 font-semibold text-2xl font-heading ">Premium Plan</h1>
                    <div className="text-center py-4 px-10">
                        <h1 className="text-slate-400 text-4xl font-black font-heading">$9.00</h1>
                        <p className="text-slate-300 font-body mt-2">GHS 104.00</p>
                        
                    </div>
                    <div className="h-px bg-gray-200"></div>
                    <div className="flex flex-col gap-5  justify-center items-center mt-8 font-heading ">
                          <FaCoins size={60} className="text-slate-400"/>
                        <p className="text-lg text-slate-400 ">
                          <span className="font-body font-bold text-4xl">20</span> tokens
                        </p>
                    </div>
                    <button  onClick={handleProductB} className="w-full mt-6 mb-3 py-2 text-slate-900 font-semibold bg-slate-400 hover:shadow-xl duration-200 flex items-center justify-center gap-3 text-lg "> <FaCartPlus size={25} /> Purchase</button>
                </div>
                <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-slate-200 z-30">
                  <h1 className="text-slate-700 font-semibold text-2xl font-heading ">Mega Plan</h1>
                    <div className="text-center py-4 px-10">
                        <h1 className="text-slate-700 text-4xl font-black font-heading">$20.00</h1>
                        <p className="text-slate-700 font-body mt-2">GHS 240.00</p>
                        
                    </div>
                    <div className="h-px bg-slate-700"></div>
                    <div className="flex flex-col gap-5  justify-center items-center mt-8 font-heading ">
                          <FaCoins size={60} className="text-slate-700"/>
                        <p className="text-lg text-slate-700 ">
                          <span className="font-body font-bold text-4xl">50</span> tokens
                        </p>
                    </div>
                      <button  onClick={handleProductC} className="w-full mt-6 mb-3 py-2 text-slate-200 font-semibold bg-slate-700 hover:shadow-xl duration-200 flex items-center justify-center gap-3 text-lg "> <FaCartPlus size={25} /> Purchase</button>
                </div>
            </div>
             
        </div>
  )
}

TokenTopUp.getLayout = function getLayout(page , pageProps) {

  return <AppLayout {...pageProps}>{page}</AppLayout>
  
}
export const getServerSideProps = withPageAuthRequired ({
  async getServerSideProps (ctx){
    const props = await getAppProps(ctx);
    return{
      props
    }
  }
});

export default TokenTopUp


