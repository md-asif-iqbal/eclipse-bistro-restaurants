
import featuredimg from "../../../assets/home/featured.jpg"
import "./Featured.css"
const Featured = () => {
    
    return (
        <div className="featured-item bg-fixed">
            <div className="bg-black bg-opacity-60 md:p-5">
    
                <div className="mx-auto text-center md:w-4/12 my-8">
                    <p className='text-yellow-700 text-center italic'>---Check it out---</p>
                    <h3 className='text-center text-white md:text-xl lg:text-3xl xl:text-4xl uppercase p-1  border-y-4 py-4 c'>FEATURED ITEM</h3>
                </div>
                <div className=" md:flex justify-center items-center space-y-3.5 md:py-20 px-16 xl:px-52">
                    <div>
                        <img className="w-full" src={featuredimg} alt="" />
                    </div>
                    <div className="md:ml-10 text-white">
                        <p>Aug 20, 2028</p>
                        <p className="uppercase">Where can I get some?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reprehenderit distinctio,
                            aut fugiat nisi eius sed dolorem temporibus consequuntur minus, quisquam voluptatibus sunt
                            nventore quo autem laudantium cumque reiciendis atque ea, necessitatibus impedit sit possimus.
                            Tempora, eius corrupti, dolores enim consequatur totam adipisci amet, dolor iusto necessitatibus 
                            quia quo quod?</p>
                            <button className="btn bg-transparent border-0 border-b-4 border-white text-white hover:bg-slate-900 hover:text-yellow-600 px-12 uppercase">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;