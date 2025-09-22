import { Button } from "@/components/ui/button"
import { useMediaQuery } from "react-responsive";


function App() {

  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <div className="flex flex-col lg:flex-row bg-[#384408] overflow-hidden">

      <div className="box-border w-full lg:flex-[1_1_25%] lg:max-w-2/5 lg:sticky top-0 py-5 px-5 mb-2 lg:px-10 lg:pr-15 lg:mr-15 lg:h-screen">

        <div className=" flex flex-col gap-10">
          <nav className="flex justify-between">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-white"></div>
              <span className="font-bold text-white text-sm">Docusy</span>
            </div>
            <Button variant='custom'>Get started</Button>
          </nav>
          <div className="flex flex-col gap-4 self-stretch">
            <div>
              <span className="flex-1 text-3xl lg:text-4xl text-white">Organizing Documents Made</span>
              <span className="text-3xl lg:text-4xl ml-2 text-[#d2fd9c]">Simple</span>
            </div>
            <span className="text-[#cbcbcb]">keep and scan your documents offline</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[#d2fd9c] text-xs font-medium">Our offerings</span>
            <div className="flex gap-2">
              <button className='CardLeft'>
                <div>logo</div>
                <div className="flex flex-col">
                  <span className="mb-[-5px]">instant </span>
                  <span>produvtivity</span>
                </div>
              </button>
              <button className="CardLeft">
                <div>logo</div>
                <div className="flex flex-col">
                  <span className="mb-[-5px]">instant </span>
                  <span>produvtivity</span>
                </div>
              </button>
              <button className="CardLeft">
                <div>logo</div>
                <div className="flex flex-col">
                  <span className="mb-[-5px]">instant </span>
                  <span>produvtivity</span>
                </div>
              </button>
            </div>
          </div>
          <ul className="flex gap-3 list-none">
            <li className="text-[#d2fd9c] text-xs font-medium hover:underline cursor-pointer">Contact</li>
            <li className="text-[#d2fd9c] text-xs font-medium hover:underline cursor-pointer">Social</li>
            <li className="text-[#d2fd9c] text-xs font-medium hover:underline cursor-pointer">Address</li>
            <li className="text-[#d2fd9c] text-xs font-medium hover:underline cursor-pointer">Legal Terms</li>
          </ul>
        </div>

      </div>

      <div className="w-full lg:flex-[1_1_75%] lg:min-w-[60%] bg-white">

        <div className="self-stretch flex flex-col justify-center items-center gap-10">

          <div className="self-stretch flex flex-col justify-center items-center m-5 lg:m-10 border-2 border-amber-200">
            <div className="self-stretch relative">
              <div className="w-full aspect-[3/2] lg:h-[70vh] bg-zinc-600 rounded-3xl"></div>
              {/* *************************************************************************** */}
              <div className="hidden absolute bg-[#96b472] w-[25%] h-[12%] rounded-full lg:flex items-center top-[20%] left-[5%]">
                <div className="h-[80%] aspect-square bg-[#d2fd9c] rounded-full opacity-100 ml-2"></div>
                <span className="lg:text-md text-white ml-2">some text here!</span>
              </div>
              <div className="hidden absolute bg-[#96b472] w-[25%] h-[12%] rounded-full lg:flex items-center left-[35%] bottom-[12%]">
                <div className="h-[80%] aspect-square bg-[#d2fd9c] rounded-full opacity-100 ml-2"></div>
                <span className="lg:text-md text-white ml-2">some text here!</span>
              </div>
              <div className="hidden absolute bg-[#96b472] w-[25%] h-[12%] rounded-full lg:flex items-center top-[10%] right-[10%]">
                <div className="h-[80%] aspect-square bg-[#d2fd9c] rounded-full opacity-100 ml-2"></div>
                <span className="lg:text-md text-white ml-2">some text here!</span>
              </div>

            </div>
            {isMobile || isTablet ?
              <div className="flex flex-col gap-10 mt-5">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-xl">we do something very good </span>
                  <span className="text-xl mt-[-5px]">and excelent</span>
                </div>
                <div className="flex flex-col justify-center items-center gap-8 lg:grid-cols-5 list-none text-[#619111] pt-2">
                  <div className="flex gap-3">
                    <li className="flex items-center justify-center gap-1">
                      <div className="w-4 h-4 rounded-full bg-[#619111]"></div>
                      <span>some thing</span>
                    </li>
                    <li className="flex items-center justify-center gap-1">
                      <div className="w-4 h-4 rounded-full bg-[#619111]"></div>
                      <span>some thing</span>
                    </li>
                  </div>
                  <div className="flex gap-3">
                    <li className="flex items-center justify-center gap-1">
                      <div className="w-4 h-4 rounded-full bg-[#619111]"></div>
                      <span>some thing</span>
                    </li>
                    <li className="flex items-center justify-center gap-1">
                      <div className="w-4 h-4 rounded-full bg-[#619111]"></div>
                      <span>some thing</span>
                    </li>
                    <li className="flex items-center justify-center gap-1">
                      <div className="w-4 h-4 rounded-full bg-[#619111]"></div>
                      <span>some thing</span>
                    </li>
                  </div>
                </div>
              </div>
              : null}
          </div>

          <div className="self-stretch flex flex-col items-center justify-center m-5 lg:m-10 lg:mt-0 border-2 border-amber-200">
            <span className="text-3xl lg:text-5xl text-[#394508] mb-3">Get more done in a week</span>
            <span className="text-xs text-[#5d5d5d]">Maximize your productivity with smarter tools designed to </span>
            <span className="text-xs text-[#5d5d5d]">streamline your workflow to automate tasks, stay organized</span>
            <div className="w-full grid lg:grid-cols-2  gap-4 mt-7">
              <div className="aspect-[6/4] bg-[#d2fd9c] rounded-lg flex flex-col justify-center items-center gap-5">
                <div className="h-20 w-30 rounded-full bg-[#394508]"></div>
                <span className="text-[#394508] mb-[-25px]">some random text</span>
              </div>
              <div className="aspect-[6/4] bg-[#d2fd9c] rounded-lg flex flex-col justify-center items-center gap-5">
                <div className="h-20 w-30 rounded-full bg-[#394508]"></div>
                <span className="text-[#394508] mb-[-25px]">some random text</span>
              </div>
              <div className="aspect-[6/4] bg-[#d2fd9c] rounded-lg flex flex-col justify-center items-center gap-5">
                <div className="h-20 w-30 rounded-full bg-[#394508]"></div>
                <span className="text-[#394508] mb-[-25px]">some random text</span>
              </div>
              <div className="aspect-[6/4] bg-[#d2fd9c] rounded-lg flex flex-col justify-center items-center gap-5">
                <div className="h-20 w-30 rounded-full bg-[#394508]"></div>
                <span className="text-[#394508] mb-[-25px]">some random text</span>
              </div>
            </div>
          </div>

          <div className="self-stretch flex flex-col justify-center items-center m-5 lg:m-10 gap-5 border-2 border-amber-200">
            <span className="text-3xl lg:text-[40px] text-[#394508]">The Most Reliable App</span>
            <div className="self-stretch grid lg:grid-cols-2 gap-5">
              <div className="flex flex-col justify-center gap-3">
                <div className="aspect-[5/4] bg-zinc-400 rounded-lg"></div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#394508]">Scale Your Team, Not Your Card Expenses</span>
                  <span className="text-xs text-[#5d5d5d]">Issue virtual and physical cards at no additional cost to support teams of any size.</span>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-3">
                <div className="aspect-[5/4] bg-zinc-400 rounded-lg"></div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#394508]">Effortless Paper Tracking, Mobile Convenience</span>
                  <span className="text-xs text-[#5d5d5d]">Get precise control—at scale—with the ability to lock any card and restrict any type of spend.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="self-stretch m-5 lg:m-10 border-2 border-amber-200">
            <div className="bg-zinc-500 aspect-[7/5] lg:aspect-[2/1] rounded-lg"></div>
          </div>

          <div className="self-stretch flex flex-col justify-center items-center m-5 lg:m-10 border-2 border-amber-200">
            <span className="text-[40px] text-[#394508]">First class software</span>
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
                <div className="w-full aspect-[4/3] bg-[#394508] max-h-60 max-w-75 rounded-lg flex justify-center items-center cursor-pointer hover:-translate-y-3 transition duration-500 \">
                  <div className="w-20 h-17 border-2 border-[#d1fc9c] rounded-lg"></div>
                </div>
                <span className="text-xs font-medium">Safe Storage</span>
              </div>
            </div>
          </div>

          <div className="self-stretch relative m-5 lg:m-10 border-2 border-amber-200">
            <div className="bg-zinc-500 aspect-[7/5] lg:aspect-[2/1] rounded-lg"></div>
            <div className="absolute flex flex-col bottom-12 lg:left-10 left-5">
              <span className="text-3xl text-white">Download Docusy and</span>
              <span className="text-3xl text-white">manage everything </span>
              <span className="text-3xl text-white">from your phone.</span>
              <Button variant='custom' className="mt-5">Get started</Button>
            </div>
          </div>

          <footer className="self-stretch bg-zinc-200 flex justify-between gap-15">
            <div className="flex flex-col gap-35 m-10">
              <div className="w-10 h-10 rounded-full bg-black"></div>
              <span className="font-bold text-4xl">Docusy</span>
            </div>
            <div className="flex flex-col gap-25 m-10">
              <ul className="list-none flex flex-col mr-20">
                <li className="text-xs text-[#5d5d5d] mb-3">Contact</li>
                <li className="text-xs hover:text-[#5d5d5d] cursor-pointer transition duration-300">Email</li>
                <li className="text-xs hover:text-[#5d5d5d] cursor-pointer transition duration-300">App Store</li>
                <li className="text-xs hover:text-[#5d5d5d] cursor-pointer transition duration-300">Phone</li>
                <li className="text-xs hover:text-[#5d5d5d] cursor-pointer transition duration-300">Linkdin</li>
              </ul>
              <ul className="list-none flex flex-col mr-10">
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


