import { Button } from "@/components/ui/button"
import { useMediaQuery } from "react-responsive";
import { AcademicCapIcon, BriefcaseIcon, IdentificationIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";
import { ChatBubbleBottomCenterTextIcon, GlobeAsiaAustraliaIcon, InboxStackIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";

// import { useRef } from "react";


function App() {

  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1023 });
  // const isDesktop = useMediaQuery({ minWidth: 1024 });

  // const sectionRef = useRef<HTMLDivElement>(null);

  // const handleScroll = () => {
  //   sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  // };


  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col lg:flex-row bg-[#384408] overflow-hidden">

      <div className="box-border w-full lg:flex-[1_1_30%] lg:max-w-2/5 lg:sticky top-0 bottom-0 py-5 px-5 mb-2 lg:px-8 lg:mr-15 lg:h-screen border-2 border-amber-200">

        <div className=" flex flex-col gap-8">
          <nav className="flex justify-between">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-white"></div>
              <span className="font-bold text-white text-sm">Docusy</span>
            </div>
            <Button variant='custom'>Get started</Button>
          </nav>
          <div className="flex flex-col self-stretch text-3xl lg:text-3xl text-white">
            <span >Scan, Edit & Share PDFs</span>
            <span >Secure, Multilingual,</span>
            <span className="text-[#d2fd9c]">Made for You</span>
            <span className="text-[#cbcbcb] text-sm mt-4">Turn photos into professional PDFs in seconds. Compress, sign and edit text with OCR in 17 languages — all processed 100% on your iPhone, never in the cloud.</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[#d2fd9c] text-xs font-medium">Our offerings</span>
            <div className="self-stretch grid grid-cols-3 gap-2">
              <button
                className='CardLeft'
                onClick={() => handleScroll('sectionOne')}
              >
                <div>logo</div>
                <div className="flex flex-col">
                  <span className="mb-[-5px]">instant </span>
                  <span>produvtivity</span>
                </div>
              </button>
              <button
                className="CardLeft"
                onClick={() => handleScroll('sectionTwo')}
              >
                <div>logo</div>
                <div className="flex flex-col">
                  <span className="mb-[-5px]">instant </span>
                  <span>produvtivity</span>
                </div>
              </button>
              <button
                className="CardLeft"
                onClick={() => handleScroll('sectionThree')}
              >
                <div>logo</div>
                <div className="flex flex-col">
                  <span className="mb-[-5px]">instant </span>
                  <span>produvtivity</span>
                </div>
              </button>
            </div>
          </div>
          <ul className="flex gap-3 list-none">
            <li
              className="text-[#d2fd9c] text-xs font-medium hover:underline cursor-pointer"
              onClick={() => handleScroll('footer')}
            >Contact</li>
            <li className="text-[#d2fd9c] text-xs font-medium hover:underline cursor-pointer">App Store</li>
            <li className="text-[#d2fd9c] text-xs font-medium hover:underline cursor-pointer">Legal Terms</li>
          </ul>
        </div>

      </div>

      <div className="w-full lg:flex-[1_1_75%] lg:min-w-[60%] bg-white border-2 border-amber-200">

        <div className="self-stretch flex flex-col justify-center items-center gap-10">

          <div className="self-stretch flex flex-col justify-center items-center m-5 lg:m-10 border-2 border-amber-200">
            <div className="self-stretch relative">
              <div className="w-full aspect-[2/1]  bg-zinc-600 rounded-3xl"></div>
              {/* *************************************************************************** */}
              <div className="hidden absolute bg-[#96b472] min-w-[25%]  h-[12%] rounded-full md:flex items-center top-[20%] left-[5%]">
                <div className="h-[80%] aspect-square bg-[#d2fd9c] rounded-full flex justify-center items-center ml-2">
                  <AcademicCapIcon className="text-[#394508] w-3/4"></AcademicCapIcon>
                </div>
                <span className="text-sm xl:text-lg text-white mx-2">Students & Freelancers</span>
              </div>
              <div className="hidden absolute bg-[#96b472] min-w-[25%] h-[12%] rounded-full md:flex items-center left-[35%] bottom-[12%]">
                <div className="h-[80%] aspect-square bg-[#d2fd9c] rounded-full flex justify-center items-center ml-2">
                  <IdentificationIcon className="text-[#394508] w-3/4"></IdentificationIcon>
                </div>
                <span className="text-sm xl:text-lg text-white mx-2">Visa & Banking</span>
              </div>
              <div className="hidden absolute bg-[#96b472] min-w-[25%] h-[12%] rounded-full md:flex items-center top-[10%] right-[10%]">
                <div className="h-[80%] aspect-square bg-[#d2fd9c] rounded-full flex justify-center items-center ml-2">
                  <BriefcaseIcon className="text-[#394508] w-3/4"></BriefcaseIcon>
                </div>
                <span className="text-sm xl:text-lg text-white mx-2">Professionals & SMBs</span>
              </div>

            </div>
            {isMobile || isTablet ?
              <div className="flex flex-col gap-10 mt-5">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-lg md:text-2xl">we do something very good </span>
                  <span className="text-lg md:text-2xl mt-[-5px]">and excelent</span>
                </div>
                <div className="flex flex-col justify-center items-center gap-8 lg:grid-cols-5 text-xs lg:text-md text-[#619111] pt-2">
                  <div className="flex gap-3 md:gap-6">
                    <li className="flex items-center justify-center gap-1">
                      <div className="w-4 aspect-square rounded-full bg-[#619111]"></div>
                      <span>some thing</span>
                    </li>
                    <li className="flex items-center justify-center gap-1">
                      <div className="w-4 aspect-square rounded-full bg-[#619111]"></div>
                      <span>some thing</span>
                    </li>
                  </div>
                  <div className="flex gap-3 md:gap-6">
                    <li className="flex items-center justify-center gap-1">
                      <div className="w-4 aspect-square rounded-full bg-[#619111]"></div>
                      <span>some thing</span>
                    </li>
                    <li className="flex items-center justify-center gap-1">
                      <div className="w-4 aspect-square rounded-full bg-[#619111]"></div>
                      <span>some thing</span>
                    </li>
                    <li className="flex items-center justify-center gap-1">
                      <div className="w-4 aspect-square rounded-full bg-[#619111]"></div>
                      <span>some thing</span>
                    </li>
                  </div>
                </div>
              </div>
              : null}
          </div>

          <div
            id="sectionOne"
            // ref={sectionRef}
            className="self-stretch flex flex-col items-center justify-center m-5 lg:m-10 lg:mt-0 border-2 border-amber-200">
            <span className="text-xl md:text-3xl lg:text-[40px] text-[#394508] mb-3">Get more done with one App</span>
            <span className="text-xs text-[#5d5d5d]">Maximize your productivity with smarter tools designed to </span>
            <span className="text-xs text-[#5d5d5d]">streamline your workflow to automate tasks, stay organized</span>
            <div className="w-full xl:w-3/4 grid lg:grid-cols-2 gap-4 mt-7">
              <div className=" text-[#394508] h-full aspect-[6/4] bg-[#d2fd9c] rounded-lg flex flex-col justify-center items-center md:gap-5 gap-3  lg:p-2">
                <DocumentArrowDownIcon className="lg:w-20 md:w-40 w-15 "></DocumentArrowDownIcon>
                <div className="flex flex-col items-center lg:text-sm md:text-3xl">
                  <span className="font-bold ">Compress PDFs</span>
                  <div className="flex flex-col md:flex-row items-center justify-center lg:gap-1.5">
                    <span >Reduce file size</span>
                    <span >without losing quality.</span>
                  </div>
                  <span >Email-ready in seconds.</span>
                </div>
              </div>
              <div className=" text-[#394508] h-full aspect-[6/4] bg-[#d2fd9c] rounded-lg flex flex-col justify-center items-center md:gap-5 gap-3  lg:p-2">
                <DocumentDuplicateIcon className="lg:w-20 md:w-40 w-15 "></DocumentDuplicateIcon>
                <div className="flex flex-col items-center lg:text-sm md:text-3xl ">
                  <span className="font-bold ">Merge & Reorder</span>
                  <span >Combine multiple documents</span>
                  <span >and arrange pages easily.</span>
                </div>
              </div>
              <div className=" text-[#394508] h-full aspect-[6/4] bg-[#d2fd9c] rounded-lg flex flex-col justify-center items-center md:gap-5 gap-3  lg:p-2">
                <PencilSquareIcon className="lg:w-20 md:w-40 w-15 "></PencilSquareIcon>
                <div className="flex flex-col items-center  lg:text-sm md:text-3xl">
                  <span className="font-bold ">OCR & Edit Text</span>
                  <div className="flex flex-col md:flex-row items-center justify-center lg:gap-1.5">
                    <span >Extract and edit text</span>
                    <span >in 17 languages.</span>
                  </div>

                </div>
              </div>
              <div className=" text-[#394508] h-full aspect-[6/4] bg-[#d2fd9c] rounded-lg flex flex-col justify-center items-center md:gap-5 gap-3  lg:p-2">
                <ChatBubbleBottomCenterTextIcon className="lg:w-20 md:w-40 w-15 "></ChatBubbleBottomCenterTextIcon>
                <div className="flex flex-col items-center lg:text-sm md:text-3xl">
                  <span className="font-bold ">Sign & Annotate</span>
                  <div className="flex flex-col md:flex-row items-center justify-center lg:gap-1.5">
                    <span >Sign securely</span>
                    <span >and add annotations</span>
                  </div>
                  <span >without leaving your phone.</span>
                </div>
              </div>
            </div>
          </div>

          <div
            id="sectionTwo"
            className="self-stretch flex flex-col justify-center items-center m-5 lg:m-10 gap-5 border-2 border-amber-200">
            <span className="text-xl md:text-3xl lg:text-[40px] text-[#394508]">The Most Reliable App</span>
            <div className="self-stretch grid lg:grid-cols-3 lg:gap-5 gap-10 border-2 border-rose-300">
              <div className="flex flex-col justify-center gap-3">
                <div className="xl:aspect-[3/2] lg:aspect-[5/4] aspect-[3/2] bg-[#394508] rounded-lg flex justify-center items-center">
                  <ShieldCheckIcon className="lg:w-32 md:w-80 w-40 text-[#d1fc9c]"></ShieldCheckIcon>
                </div>
                <div className="flex flex-col lg:aspect-[2/1]">
                  <span className="font-bold text-sm mb-1 text-[#394508]">Truly Private</span>
                  <span className="text-xs text-[#5d5d5d]">Everything stays on your iPhone. No servers. No tracking.</span>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-3">
                <div className="xl:aspect-[3/2] lg:aspect-[5/4] aspect-[3/2] bg-[#394508] rounded-lg flex justify-center items-center">
                  <GlobeAsiaAustraliaIcon className="lg:w-32 md:w-80 w-40 text-[#d1fc9c]"></GlobeAsiaAustraliaIcon>
                </div>
                <div className="flex flex-col lg:aspect-[2/1]">
                  <span className="font-bold text-sm mb-1 text-[#394508]">Multilingual OCR</span>
                  <span className="text-xs text-[#5d5d5d]">Edit PDFs in 17 languages — Arabic, Farsi, Chinese, Japanese, Spanish and more.</span>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-3">
                <div className="xl:aspect-[3/2] lg:aspect-[5/4] aspect-[3/2] bg-[#394508] rounded-lg flex justify-center items-center">
                  <InboxStackIcon className="lg:w-32 md:w-80 w-40 text-[#d1fc9c]"></InboxStackIcon>
                </div>
                <div className="flex flex-col lg:aspect-[2/1]">
                  <span className="font-bold text-sm mb-1 text-[#394508]">Built for Heavy Docs</span>
                  <span className="text-xs text-[#5d5d5d]">Handle 100+ pages smoothly with consistent quality.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="self-stretch m-5 lg:m-10 border-2 border-amber-200">
            <div className="bg-zinc-500 aspect-[3/2] lg:aspect-[2/1] rounded-lg"></div>
          </div>

          <div
            id="sectionThree"
            className="self-stretch flex flex-col justify-center items-center m-5 lg:m-10 border-2 border-amber-200">
            <span className="text-xl md:text-3xl lg:text-[40px] text-[#394508]">First class software</span>
            {/* *****************************************************************************************************88 */}
            <span className="text-xs text-[#5d5d5d]">Get real-time insights, seamless transactions, and advanced</span>
            <span className="text-xs text-[#5d5d5d]">tools to manage your wealth effortlessly.</span>
            <div className="self-stretch flex flex-col lg:flex-row justify-between items-center gap-8 mt-8 border-2">
              <div className="lg:w-1/4 w-1/2 flex flex-col justify-center items-center gap-3">
                <div className="w-full aspect-[4/3] bg-[#394508] max-h-60 max-w-75 rounded-lg flex justify-center items-center cursor-pointer hover:-translate-y-3 transition duration-500 \">
                  <div className="w-20 h-17 border-2 border-[#d1fc9c] rounded-lg"></div>
                </div>
                <span className="text-xs font-medium">Safe Storage</span>
              </div>
              <div className="lg:w-1/4 w-1/2 flex flex-col justify-center items-center gap-3">
                <div className="w-full aspect-[4/3] bg-[#394508] max-h-60 max-w-75 rounded-lg flex justify-center items-center cursor-pointer hover:-translate-y-3 transition duration-500 \">
                  <div className="w-20 h-17 border-2 border-[#d1fc9c] rounded-lg"></div>
                </div>
                <span className="text-xs font-medium">Safe Storage</span>
              </div>
              <div className="lg:w-1/4 w-1/2 flex flex-col justify-center items-center gap-3">
                <div className="w-full aspect-[4/3] bg-[#394508] max-h-60 max-w-75 rounded-lg flex justify-center items-center cursor-pointer hover:-translate-y-3 transition duration-500 \">
                  <div className="w-20 h-17 border-2 border-[#d1fc9c] rounded-lg"></div>
                </div>
                <span className="text-xs font-medium">Safe Storage</span>
              </div>
              <div className="lg:w-1/4 w-1/2 flex flex-col justify-center items-center gap-3">
                <div className="w-full aspect-[4/3] bg-[#394508] max-h-60 max-w-75 rounded-lg flex justify-center items-center cursor-pointer hover:-translate-y-3 transition duration-500">
                  <div className="w-20 h-17 border-2 border-[#d1fc9c] rounded-lg"></div>
                </div>
                <span className="text-xs font-medium">Safe Storage</span>
              </div>
            </div>
          </div>

          <div className="self-stretch relative m-5 lg:m-10 border-2 border-amber-200">
            <div className="bg-zinc-500 aspect-[3/2] lg:aspect-[2/1] rounded-lg"></div>
            <div className="absolute flex flex-col bottom-4 md:bottom-6 left-5 lg:bottom-12 lg:left-10 ">
              <span className="text-xl md:text-3xl text-white">Download Docusy and</span>
              <span className="text-xl md:text-3xl text-white">manage everything </span>
              <span className="text-xl md:text-3xl text-white">from your phone.</span>
              <Button variant='custom' className="mt-2 md:mt-5">Get started</Button>
            </div>
          </div>

          <footer
            id="footer"
            className="self-stretch bg-zinc-200 flex justify-between gap-15">
            <div className="flex flex-col justify-between m-10 mr-0">
              <div className="w-6 md:w-10 aspect-square rounded-full bg-black"></div>
              <span className="font-bold text-xl md:text-4xl">Docusy</span>
            </div>
            <div className="flex flex-col justify-between m-10 ml-0">
              <ul className="list-none flex flex-col mr-20">
                <li className="text-xs text-[#5d5d5d] mb-3">Contact</li>
                <li className="text-xs hover:text-[#5d5d5d] cursor-pointer transition duration-300">Email</li>
                <li className="text-xs hover:text-[#5d5d5d] cursor-pointer transition duration-300">App Store</li>
                <li className="text-xs hover:text-[#5d5d5d] cursor-pointer transition duration-300">Phone</li>
                <li className="text-xs hover:text-[#5d5d5d] cursor-pointer transition duration-300">Linkdin</li>
              </ul>
              <ul className="list-none flex flex-col mt-20">
                <li className="text-xs hover:text-[#5d5d5d] cursor-pointer transition duration-300">Terms & consitions</li>
                <li className="text-xs hover:text-[#5d5d5d] cursor-pointer transition duration-300">Privacy</li>
              </ul>
            </div>

          </footer>

        </div>

      </div>

    </div>
  )
}

export default App


