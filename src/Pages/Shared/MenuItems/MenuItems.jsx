const MenuItems = ({ item }) => {
    const { name, image, price, recipe } = item;
  
    return (
      <div className="flex flex-col md:flex-row md:space-x-4 items-center md:items-start space-y-4 md:space-y-0 p-4">
        <img
          className="w-[100px] md:w-[150px] lg:w-[200px] rounded-[0_200px_200px_220px] md:rounded-[0_150px_150px_180px] lg:rounded-[0_100px_100px_120px]"
          src={image}
          alt={name}
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold">
            {name}
            <span className="ml-2 text-gray-400">---------------</span>
          </h3>
          <p className="text-sm text-gray-700">{recipe}</p>
        </div>
        <p className="text-yellow-600 text-lg font-bold">${price}</p>
      </div>
    );
  };
  
  export default MenuItems;
  