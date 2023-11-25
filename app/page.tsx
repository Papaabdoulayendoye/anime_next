import { fetchAnime } from "./action";
import LoadMore from '@/components/LoadMore';

export interface AnimProp {
	id: string;
	name: string;
	image: {
		original: string;
	};
	kind: string;
	episodes: number;
	episodes_aired: number;
	score: string;
}

export default async function Home() {
	const response = await fetchAnime();
	return (
		<main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
			<h2 className=" text-base-regular font-semibold text-2xl">Explore Anime</h2>
			<section className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4'>
				{response}
			</section>
			<LoadMore />
		</main>
	);
}
