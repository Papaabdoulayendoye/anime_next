"use client"
import Image from "next/image";
import { motion } from "framer-motion";
interface Props {
index: number;
anim: any;
}
const container = {
    hidden : {opacity : 0},
    visible : {opacity : 1},
}

const AnimeCard = ({ anim , index}: Props) => {
return (

<motion.div 
variants={container}
transition={{
    delay : index * 0.25,
    ease :'easeInOut',
    duration : 0.5
}}
viewport={ { amount : 0 } }
initial="hidden"
animate="visible"
className="max-w-[185px] relative">
    <div className="relative h-[37vh] w-full cursor-pointer hover:scale-105 transition-all">
    <Image
        alt={anim?.name}
        src={`https://shikimori.one${anim.image?.original}`}
        fill
        className="rounded-xl"
    />
    </div>
    <div className="py-4 flex flex-col gap-3">
    <div className="flex justify-between items-center gap-1">
        <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
        {anim?.name}
        </h2>
        <div className="py-1 px-2 bg-[#161921] rounded-sm">
        <p className="text-white text-sm font-bold capitalize">
            {anim.kind}
        </p>
        </div>
    </div>
    <div className="flex lg:flex-row flex-col lg:justify-between">
        <div className="flex flex-row gap-2 items-center lg:justify-start">
        <Image
            src="./episodes.svg"
            alt="episodes"
            width={20}
            height={20}
            className="object-contain cursor-pointer"
        />
        <p className="text-base text-white font-bold">
            {anim.episodes || anim.episodes_aired}
        </p>
        </div>
        <div className="flex flex-row gap-2 items-center !justify-start">
        <Image
            src="./star.svg"
            alt="star"
            width={18}
            height={18}
            className="object-contain cursor-pointer"
        />
        <p className="text-base font-bold text-[#FFAD49]">{anim.score}</p>
        </div>
    </div>
    </div>
</motion.div>
);
};

export default AnimeCard;
