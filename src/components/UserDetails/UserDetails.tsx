import avatar from "../../assets/images/user-avatar.svg";
import moreBtnArrowIcon from "../../assets/images/more-btn-arrows.svg";

const UserDetails = () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, rgba(37, 39, 46, 0.24) 0%, rgba(37, 39, 46, 0.50) 50%, rgba(37, 39, 46, 0.24) 100%)",
        backdropFilter: "blur(3px)",
      }}
      className="py-3 px-3.5 flex items-center gap-3 rounded-lg border border-solid border-[rgba(61,63,69,0.56)]"
    >
      <img className="min-w-8 max-w-8 min-h-8 max-h-8 rounded-full object-cover" src={avatar} alt="profile photo" draggable={false} />
      <div className="flex flex-col gap-0.5">
        <p className="text-baseText text-sm font-medium leading-[130%]">Daniel</p>
        <span className="text-secondaryText text-xs leading-[130%]">hypermind@gmail.com</span>
      </div>
      <img className="ml-1" src={moreBtnArrowIcon} alt="profile photo" draggable={false} />
    </div>
  );
};

export default UserDetails;