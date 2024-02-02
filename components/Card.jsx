import Image from "next/image"

const Card = ({src,number,subTitle,desc}) => {
  return (
    <div className="flex gap-5">
        <div>
        <Image src={src} alt="src"
        width={100} height={40}
        />
        </div>

        <div>
            <span className="text-grayishBlue text-3xl font-semibold">0{number}</span>
            <h2 className="text-darkBlue text-xl mt-1 font-bold">{subTitle}</h2>
            <p className="text-xs text-darkGrayishBlue font-medium w-[200px] mt-5  tracking-[1px]">{desc}</p>

        </div>
    </div>
  )
}

export default Card