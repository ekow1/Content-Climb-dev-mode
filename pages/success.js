import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from '../components/AppLayout';
import { getAppProps } from "../utils/appprops";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

function Success() {

  const handleClick =  async () =>{

    
  }

  return (
    <div className=" flex flex-col justify-center items-center">
      <h2>Thank you for your purchase!</h2>

      <Link href='/post/newpost'>
      <p className="flex items-center text-slate-300 gap-5 bg-slate-800 px-10 rounded-full py-3 mt-5 cursor-pointer"> PROCEED <FaArrowRight />  </p>
       </Link>
    </div>
   
  )
}

Success.getLayout = function getLayout(page , pageProps) {

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

export default Success


