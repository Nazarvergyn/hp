import googleIcon from "../../assets/images/google-icon.svg";
import loginMainImage from "../../assets/images/login-main-image.png";
import LoginForm from "../../components/LoginForm/LoginForm";
import IconWrapper from "../../components/UI/IconWrapper/IconWrapper";

const LoginPage = () => {
  return (
    <div className="flex flex-1 flex-col lg:flex-row bg-baseBackground">
      <div className="lg:w-1/2 flex justify-center">
        <div className="my-14 md:my-[72px] px-6 lg:max-w-[500px] flex flex-col justify-center">
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col gap-4">
              <h1 data-aos={"fade-up"} className="text-baseText text-3xl md:text-4xl font-bold leading-[130%] text-center md:text-left">Log In to Your Account</h1>
              <p data-aos-delay={100} data-aos={"fade-up"} className="text-secondaryText leading-[150%] text-center md:text-left">Lorem ipsum dolor sit amet consectetur. Nisi imperdiet semper mattis in nam. Et fringilla egestas turpis massa et eu.</p>
            </div>
            <button data-aos-delay={200} data-aos={"fade-up"} className="w-full sm:w-1/2 lg:w-full py-4 rounded-[100px] border border-solid border-baseGray100 flex self-center items-center justify-center gap-4 text-baseText font-semibold leading-[150%]">
              <img src={googleIcon} alt="google icon" draggable={false} />
              Log In with Google
            </button>

            <div data-aos-delay={200} data-aos={"fade-up"} className="flex items-center">
              <div className="flex-1 h-[1px] bg-[#3D3F45] mr-6"></div>
              <p className="text-secondaryText text-sm leading-[140%]">or Log In with Email</p>
              <div className="flex-1 h-[1px] bg-[#3D3F45] ml-6"></div>
            </div>

            <LoginForm />
          </div>
        </div>
      </div>

      <div 
        style={{ 
          backgroundImage: `url('/bg-login.png')`, 
        }} 
        className="lg:w-1/2 bg-no-repeat bg-cover flex justify-center" 
      >
        <div className="my-14 md:my-[72px] px-6 lg:max-w-[575px] flex flex-col justify-center items-center gap-4">
          <IconWrapper iconName="target-icon.svg"/>
          <h2 data-aos-delay={100} data-aos={"fade-up"} className="text-baseText text-3xl font-semibold leading-[140%] text-center">Introducing new features</h2>
          <p data-aos-delay={150} data-aos={"fade-up"} className="text-secondaryText text-lg leading-[140%] text-center">Lorem ipsum dolor sit amet consectetur. Egestas euismod cursus odio convallis. Ut eget turpis blandit egestas. Facilisis massa ut sed euismod nisl tincidunt mauris. </p>
          <img data-aos-delay={150} data-aos={"zoom-in"} className="mt-8" src={loginMainImage} alt="login main image" draggable={false} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;