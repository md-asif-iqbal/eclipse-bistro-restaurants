
const MenuItems = ({item}) => {
    const { name, image, price, recipe} = item;
    // console.log(item)
    return (
        <div className="flex space-x-2">
            <img style={{ 
                    borderRadius: '0 200px 200px 220px',
                    '@media (max-width: 768px)': { borderRadius: '0 150px 150px 180px' }, // Tablet and below
                    '@media (max-width: 480px)': { borderRadius: '0 100px 100px 120px' }  // Mobile devices
                    }}
 className="w-[100px]" src={image} alt="" />
            <div>
                <h3>{name} -----------------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuItems;