

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className='text-yellow-700 text-center italic'>{subHeading}</p>
            <h3 className='text-center md:text-xl lg:text-3xl xl:text-4xl uppercase p-1  border-y-4 py-4 c'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;