

function Icons() {

  return(
    <div>
      <div>
      <div >
      <a href="https://linkedin.com/in/orlandosantos17" target="_blank" rel="noopener noreferrer">
        <img
          src="/images/linkedin.png"
          alt="linkedin"
          className="h-5 w-5 md:h-10 md:w-10"
        />
      </a>
      <a href="https://github.com/Osantos17">
        <img
          src="/images/git.png"
          alt="git"
          className="h-5 w-5 md:h-10 md:w-10 my-4"
        />
      </a>
      <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
        <img
          src="/images/gmail.png"
          alt="gmail"
          className="h-5 w-5 md:h-10 md:w-10"
        />
      </a>
      <a href="https://apps.apple.com/us/app/a-frame-surf-forecast/id6741837362">
        <img
          src="/images/AFrame.png"
          alt="A-Frame"
          className="h-5 w-5 my-4 md:h-10 md:w-10"
        />
      </a>
      <a href="/resume.pdf" download>
        <img
          src="/images/CV.png"
          alt="Resume"
          className="hover:opacity-80 transition h-6 w-max-auto md:h-10 md:w-10 mb-4"
        />
        </a>
      </div>
      </div>
    </div>
  )
}

export default Icons