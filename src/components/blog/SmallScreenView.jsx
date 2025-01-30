import { calendar, newspaper } from "../../assets";

const SmallScreenView = ({ viewAll, post }) => {
  return (
    <div key={post.id}>
      <div
        className={`relative flex h-[191px] shrink-0 flex-col justify-end rounded-lg bg-cover bg-center p-2 ${
          viewAll ? "w-full sm:w-[280.5px]" : "w-[280.5px]"
        }`}
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="flex items-center justify-between">
          <div className="z-10 flex items-center gap-1">
            <img src={newspaper} alt="-" width={16} height={16} />
            <p className="text-xs font-light">{post.category}</p>
          </div>
          <div className="z-10 flex items-center gap-1">
            <img src={calendar} alt="-" width={16} height={16} />
            <p className="text-xs font-light">{post.date}</p>
          </div>
        </div>
      </div>
      <div className="p-2 text-center text-sm">{post.title}</div>
    </div>
  );
};

export default SmallScreenView;
