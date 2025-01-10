const CommonBtn = ({ title }) => {
  return (
    <button className='px-8 max-w-52 py-4 border-2 border-primaryColor text-primaryColor rounded-md hover:bg-primaryColor hover:text-white transition-colors'>
      {title}
    </button>
  );
};

export default CommonBtn;
