import { Icon } from "@iconify/react/dist/iconify.js";
import Navbar from "./Navbar";
function About() {
  return (
    <>
      <div className="bg-[url('./images/basketball.png')] h-full bg-gray-950 pb-5">
        <Navbar />
        <div>
          <div>
            <div className="p-5 flex flex-col gap-5 items-center">
              <div className="flex gap-2 bg-neutral-600/50 p-3 rounded-2xl">
                <Icon
                  icon="line-md:person-filled"
                  className="bg-white rounded-full text-4xl "
                />
                <span className="text-white text-4xl font-bold ">Overview</span>
              </div>

              <p className="text-white  text-xl w-2/3">
                I'm a passionate frontend web developer with a strong foundation
                in HTML, CSS, JavaScript, and modern libraries like React and
                Tailwind CSS. I enjoy building responsive, interactive, and
                visually appealing user interfaces that provide seamless user
                experiences. From crafting detailed single-page applications to
                experimenting with animations and UI effects, I love turning
                ideas into real-world web projects. I'm constantly learning,
                exploring new tools, and pushing myself to improve with every
                project I build.
              </p>
              <div className="flex flex-col gap-5 mt-1 md:mt-7">
                <div className="flex gap-2 bg-white/10 rounded-2xl p-1 w-fit ">
                  <Icon
                    icon="fluent-mdl2:education"
                    className="text-3xl bg-white rounded-full"
                  />
                  <span className="text-3xl text-white ">
                    Education and Certifications
                  </span>
                </div>
                <div className="flex gap-5 text-white">
                  <span className="text-xl font-bold">
                    Tribhuvan University -{" "}
                  </span>
                  <p className="text-lg font-semibold">
                    Bachelors of Science in Computer Science and Information
                    Technology (BScCSIT) (2023-Present)
                  </p>
                </div>
                <div className="flex text-white">
                  <span className="text-xl font-bold">Free Code Camp - </span>
                  <p className="text-lg font-semibold">
                    Responsive Web Design Certification
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen h-1 bg-white"></div>

          <div>
            <div className="p-5 flex flex-col gap-5 items-center">
              <div className="flex gap-2 bg-neutral-600/50 p-3 rounded-2xl">
                <Icon
                  icon="material-symbols:military-tech-outline-sharp"
                  className="text-4xl bg-white rounded-full"
                />
                <span className="text-white text-4xl font-bold ">
                  Tech Stack
                </span>
              </div>

              <div className="flex flex-col gap-8 md:mt-8">
                <div className="text-white text-3xl font-semibold text-center">
                  Languages
                </div>
                <div className="flex  gap-4 items-center md:gap-x-20">
                  <Icon
                    icon="vscode-icons:file-type-js-official"
                    className="text-8xl"
                  />
                  <Icon icon="devicon:html5" className="text-8xl" />
                  <Icon
                    icon="vscode-icons:file-type-css2"
                    className="text-8xl"
                  />
                  <Icon
                    icon="streamline-logos:c-language-logo-solid"
                    className="text-8xl bg-blue-700 rounded-4xl text-white"
                  />
                  <Icon
                    icon="streamline-logos:c-plus-language-logo-solid"
                    className="text-8xl bg-purple-700 text-white rounded-4xl"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-8 md:mt-8">
                <div className="text-white text-3xl font-semibold text-center">
                  Frameworks and Libraries
                </div>
                <div className="flex  gap-4 items-center md:gap-x-20">
                  <Icon icon="devicon:react" className="text-8xl" />
                  <Icon
                    icon="vscode-icons:file-type-tailwind"
                    className="text-8xl"
                  />
                  <Icon icon="logos:nodejs" className="text-8xl" />
                  <Icon
                    icon="vscode-icons:file-type-vite"
                    className="text-8xl"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-8 md:mt-8">
                <div className="text-white text-3xl font-semibold text-center">
                  Others
                </div>
                <div className="flex  gap-4 items-center md:gap-x-20">
                  <Icon icon="material-icon-theme:git" className="text-8xl" />
                  <Icon
                    icon="uiw:github"
                    className="text-8xl bg-white rounded-2xlgit"
                  />
                  <Icon
                    icon="akar-icons:vercel-fill"
                    className="text-8xl bg-white rounded-2xl"
                  />
                  <Icon
                    icon="devicon:reactrouter"
                    className="text-8xl bg-white rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
