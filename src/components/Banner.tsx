import Image from "next/image";




const Banner = () => {



    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse ">
                    <Image
                        alt="Tailwind CSS hero component"
                        src="/assets/hero_img.jpg"
                        className="max-w-sm rounded-lg shadow-2xl hidden lg:block"
                        width={500}
                        height={300}
                    />
                    <Image
                        alt="Tailwind CSS hero component"
                        src="/assets/hero_img.jpg"
                        className="max-w-sm rounded-lg shadow-2xl lg:hidden"
                        width={300}
                        height={200}
                    />
                    <div className="flex flex-col items-center gap-6 lg:items-start lg:gap-12">
                        <h1 className="text-3xl md:text-6xl text-center lg:text-left font-bold font-heading max-w-140 lg:leading-20">Books to freshen up your bookshelf</h1>

                        <button className="btn btn-success text-white lg:text-xl">View The List</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Banner;