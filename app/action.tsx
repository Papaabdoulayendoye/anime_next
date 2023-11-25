"use server"

import AnimeCard from '@/components/AnimeCard';
import { AnimProp } from './page';

export const fetchAnime = async (page:number=0) => {
    const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`,
    {
    headers: {
        "Content-Type": "application/json",
    },
    });
    const data = await response.json()
    return data?.map((anim : AnimProp,index : number ) => {
					return <AnimeCard key={index} anim={anim} index={index} />
				})
}
