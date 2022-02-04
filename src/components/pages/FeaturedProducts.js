import image10 from '../../assets/D6-image2.jpg';
import image11 from '../../assets/Card-1 Apple Watch.png';
import image12 from '../../assets/Group 11523.png';
import image13 from '../../assets/D1-image3.png';
const FeaturedProducts = () => {
    return ( 
        <div className="px-28">
            <div className="font-bold text-gray-700 sm:text-xl lg:text-2xl py-8 mx-4">Featured Products</div>
            <div className="flex py-3">
                <button className="text-gray-500 text-lg px-4 py-4 rounded-lg">Trending item</button>
                <button className="text-white text-lg md:px-4 lg:px-10 mx-4 bg-primary rounded-lg">New Arrivals</button>
                <button className="text-gray-500 text-lg px-6 py-4 rounded-lg">Best Sale</button>
            </div>
            <div className="flex py-3">
                <div className="">
                    <div class="border rounded-lg"><img src={image10} alt=""  className='object-cover object-center h-fit w-full'/></div>
                   <div className="pt-3 flex">
                        <div className="rounded-lg"><img src={image12} alt="" className='h-full w-full'/></div>
                        <div className="rounded-lg"><img src={image11} alt="" className='h-full w-full'/></div>
                        
                   </div>
                </div>

                <div className="mx-6 rounded-lg"><img src={image13} alt="" className='object-cover object-center h-fit w-full'/></div>
            </div>
            
        </div>
     );
}
 
export default FeaturedProducts;