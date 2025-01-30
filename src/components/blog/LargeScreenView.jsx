const LargeScreenView = ({ post, i }) => {
  return (
    <div
      className={`relative flex flex-col justify-end rounded-lg bg-cover bg-center ${
        i === 0
          ? "col-span-2 h-[380px] p-3 lg:row-span-2 xl:px-5 xl:py-4"
          : "h-[186px] p-2"
      }`}
      style={{ backgroundImage: `url(${post.image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <h3
        className={`z-10 ${i === 0 ? "text-xl font-semibold" : "font-medium"}`}
      >
        {post.title}
      </h3>
    </div>
  );
};

export default LargeScreenView;
