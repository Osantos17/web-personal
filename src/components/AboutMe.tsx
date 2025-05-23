import Icons from "./Icons";


function AboutMe() {
  return (
    <div className="mx-0 mt-0 md:mt-20 md:mx-12">
      <div className="flex flex-row">
        <p className="text-white text-xs text-left max-w-70 lg:text-2xl lg:max-w-2xl ">
        As an Architectural Designer, I’m passionate about turning ideas into tangible form. My growing interest in digital design led me to create A-Frame, a surf forecast app now on iOS. From branding to development, the process sparked a new passion for UI/UX and inspired me to pursue it as a career.
        </p>
        <div className="ml-auto mr-2">
          <Icons />  
        </div>
      </div>

      <div className="mt-0 relative flex justify-end right-10">
        <img
          src="/images/Profile-white.png"
          alt="Profile"
          className="max-h-38 md:max-h-90 lg:max-h-120 w-auto"
        />
      </div>
    </div>
  );
}


export default AboutMe