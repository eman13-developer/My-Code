export function Navbar(){
    return(
<header class="text-gray-600 body-font">
  <div class="container mx-auto flex justify-between  flex-wrap p-5 flex-col md:flex-row items-center ">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 gap-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">Tailblocks</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center gap-4">
      <a class="mr-5 hover:text-gray-900">First Link</a>
      <a class="mr-5 hover:text-gray-900">Second Link</a>
      <a class="mr-5 hover:text-gray-900">Third Link</a>
      <a class="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-5 px-8 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>


    );
}
export function Herosection(){
    return (
        <div className="">

<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    </div>
    <div class="lg:grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br class="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
  </div>
</section>
        </div>

    );
}



























export default function Testing(){
    return(
<div className="testing">
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      
      {/* flex ki jagah grid for clean layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-around">


        {/* CARD 1 */}
        <div className="p-4">
          <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src="https://dummyimage.com/720x400"
              alt="blog"
            />
            <div className="p-6">
              <h2 className="tracking-widest text-xs font-medium text-gray-400 mb-1">
                CATEGORY
              </h2>
              <h1 className="text-lg font-medium text-gray-900 mb-3">
                The Catalyzer
              </h1>
              <p className="leading-relaxed mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="p-4">
          <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src="https://dummyimage.com/721x401"
              alt="blog"
            />
            <div className="p-6">
              <h2 className="tracking-widest text-xs font-medium text-gray-400 mb-1">
                CATEGORY
              </h2>
              <h1 className="text-lg font-medium text-gray-900 mb-3">
                The 400 Blows
              </h1>
              <p className="leading-relaxed mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="p-4">
          <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src="https://dummyimage.com/722x402"
              alt="blog"
            />
            <div className="p-6">
              <h2 className="tracking-widest text-xs font-medium text-gray-400 mb-1">
                CATEGORY
              </h2>
              <h1 className="text-lg font-medium text-gray-900 mb-3">
                Shooting Stars
              </h1>
              <p className="leading-relaxed mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</div>



    );
}