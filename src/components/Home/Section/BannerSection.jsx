

const BannerSection = () => {
    return (
        <div className="flex justify-evenly items-center bg-green-200 py-5">
            <div>
                <h1 className="text-4xl font-bold ">Special Drawing Rights (SDR)</h1>
                <p >  Managing Director Kristalina Georgieva's opening remarks at the 4th Ministerial <br />Roundtable Discussion on Ukraine’s financing needs, as well as recovery initiatives.</p>

                <button className="btn btn-ghost hover:bg-red-500">Get Started</button>
            </div>
            <div>
                <img src="https://i.ibb.co/zffpfBD/banner-img.png" alt="" data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" />
            </div>
        </div>
    );
};

export default BannerSection;