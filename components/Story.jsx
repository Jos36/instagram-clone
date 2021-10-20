function Story({ img, username, id }) {
  return (
    <div>
      <img
        className=" hover:scale-110 transition transform duration-200  ease-out object-contain cursor-pointer h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2"
        src={img}
        alt=""
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
}

export default Story;
