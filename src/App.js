import logo from './logo.svg';
import './App.css';
import maidsheader from './images/maidsheader.jpg'

function App() {
  return (
    <div className="App">
      
<main class= "dark:bg-gray-800 bg-white relative overflow-hidden" >

    <header class=" h-24 sm:h-32 flex items-center z-30 w-full" >
        <div class="container mx-auto px-6 flex items-center justify-between">
       
            <div class="uppercase text-gray-800 dark:text-white font-black text-3xl">
                Kendall Maids
            </div>
            <div class="flex items-center">
                <nav class="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                    <a href="#" class="py-2 px-6 flex">
                        Home
                    </a>
                    <a href="#" class="py-2 px-6 flex">
                        About
                    </a>
                    <a href="#" class="py-2 px-6 flex">
                        Testimonials
                    </a>
                    <a href="#" class="py-2 px-6 flex">
                        Contact
                    </a>
                    <a href="#" class="py-2 px-6 flex">
                        Services
                    </a>
                </nav>
                <button class="lg:hidden flex flex-col ml-4">
                    <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                    <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                    <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                </button>
            </div>
        </div>
    </header>
    <div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
    <img src={maidsheader} class="bg-scroll opacity-50 absolute h-full w-full object-cover"/>
        <div class="container  mx-auto px-6 flex relative py-16">
            <div class="sm:w-2/3  lg:w-2/5 flex flex-col relative z-20">
                <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                </span>
                <h1 class="font-bebas-neue uppercase text-4xl sm:text-6xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                    Kendall Maids: 
                    <span class="text-2xl sm:text-2xl">
                    Miami Cleaning Company
                    </span>
                </h1>
                <p class="text-sm sm:text-base text-gray-700 dark:text-white">
                    Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                </p>
                <div class="flex mt-8">
                    <a href="#" class="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                        Get started
                    </a>
                    <a href="#" class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                        Read more
                    </a>
                </div>
            </div>
            
        </div>



        
    </div>
    
</main>


    </div>
  );
}

export default App;
