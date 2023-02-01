import Authenticated from "@/Layouts/Authenticated/index";
import Flikity from "react-flickity-component";
import { Head } from "@inertiajs/inertia-react";
import { FeaturedMovie } from "@/Components/FeaturedMovie";
import { MovieCard } from "@/Components/MovieCard";

export default function dashboard() {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <Authenticated>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <title>Dashboard</title>
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flikity className="gap-[30px] " options={flickityOptions}>
                    {[1, 2, 3, 4].map((i) => (
                        <FeaturedMovie
                            key={i}
                            slug="the-batman-in-love"
                            name={`The Batman in Love ${i}`}
                            category="Horor"
                            thumbnail="/images/featured-1.png"
                            rating={i + 1}
                        />
                    ))}
                </Flikity>
            </div>
            <div className="mt-[50px]">
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flikity className="gap-[30px] " options={flickityOptions}>
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <MovieCard
                            key={i}
                            slug="the-batman-in-love"
                            name={`The Batman in Love ${i}`}
                            category="Horor"
                            thumbnail="/images/browse-2.png"
                        ></MovieCard>
                    ))}
                </Flikity>
            </div>
        </Authenticated>
    );
}
