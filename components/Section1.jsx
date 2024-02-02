import Image from "next/image"
import heroimage from '../public/images/image-web-3-desktop.jpg'
import Card from "./Card"

const Section1 = () => {
  return (
   <div>
     <div className=" h-[600px] flex mt-[60px] gap-5">

<div className="flex-[2] ">
    <Image src={heroimage} alt="hero"/>
    <div className="flex mt-10">
    <h1 className="text-darkBlue font-bold text-7xl  flex-1">The Bright Future of Web 3.0?</h1>
    <div className="flex-1 font-medium text-base text-darkGrayishBlue leading-15 ">
        <p>We dice into  the next evolution of  the
            web that claims to put the power of the platforms
            back into the hands of the  people. But is it really
            fulfilling its promise?
        </p>

        <button type="button" className="bg-darkBlue text-offwhite  py-3 items-center justify-center flex mt-[80px] w-[240px]
        hover:bg-offwhite hover:text-darkBlue duration-300 ease-in-out" >
            READ MORE
        </button>
    </div>
    </div>
</div>


<div className="flex-[1] h-full bg-darkBlue flex ">

    <div className="ml-8 mt-8">
    <h2 className="text-orange text-4xl font-semibold ">New</h2>

    <div className="mt-2 border-b-[1px] border-darkGrayishBlue py-10">
        <h3 className="text-offwhite text-2xl font-semibold tracking-[2px] my-5">Hydrogen VS Electric Cars</h3>
        <p className="text-darkGrayishBlue tracking-[3px]">Will hydrogen-fueled cars ever catch up to EVs?</p>
    </div>

    <div className="mt-2 border-b-[1px] border-darkGrayishBlue py-10">
        <h3 className="text-orange text-2xl font-semibold tracking-[2px] ">The Downsides of AI Artistry</h3>
        <p className="text-darkGrayishBlue tracking-[3px]">Will hydrogen-fueled cars ever catch up to EVs?</p>
    </div>

    <div className="  py-6">
        <h3 className="text-offwhite text-2xl font-semibold tracking-[2px] ">Is VC Funding Drying Up?</h3>
        <p className="text-darkGrayishBlue ">Private funding by VC
        firms is down 50% YOY. We take a look at what that means.</p>
    </div>
    



    </div>
        
</div>

     </div>

    {/* Bottom */}

    <div className=" w-full my-[100px] flex justify-between ">

    <Card src='/images/image-gaming-growth.jpg' number='1' 
    subTitle='Reviving Retro Pcs'
    desc='What happens when old PCs are given modern upgrades?'
    />
    <Card src='/images/image-gaming-growth.jpg' number='1' 
    subTitle='Reviving Retro Pcs'
    desc='What happens when old PCs are given modern upgrades?'
    />
    <Card src='/images/image-gaming-growth.jpg' number='1' 
    subTitle='Reviving Retro Pcs'
    desc='What happens when old PCs are given modern upgrades?'
    />

    </div>

   </div>
  )
}

export default Section1