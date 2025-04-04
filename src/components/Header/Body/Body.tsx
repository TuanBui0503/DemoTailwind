import logo from '../../../assets/1.png'
import section2left from '../../../assets/2.png'
import section2right from '../../../assets/3.png'
export default function Body() {
  return (
    <>
    {/* section1 */}
      <div className='max-w-[1280px] m-auto'>
      <section>
        <div className="flex justify-between flex-row-reverse items-center px-[24px] py-[42px] max-md:flex-col">
          <div className="flex w-full">
            <img src={logo} alt="" />
          </div>
          <div className="flex flex-col gap-7">
            <h2 className="font-semibold text-xl">Branding | Image Making</h2>
            <h1 className="text-6xl font-semibold">Visual Designer</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem distinctio sint blanditiis ipsum totam obcaecati dicta
              error facere, explicabo qui atque rerum, nobis eos! Aliquid quo
              distinctio accusantium quidem voluptatem.
            </p>
            <button className='flex items-center text-white justify-center bg-[#2D2D2D] cursor-pointer p-4 w-[150px] h-[55px]'>
                Contact
            </button>
          </div>
        </div>
      </section>
       {/* section2 */}
       <section>
        <div className="flex justify-between items-start gap-11 px-[24px] py-[64px] max-md:items-center
        max-md:justify-center max-md:flex-col">
          <div className="flex w-full justify-start max-md:justify-center">
            <img src={section2left} alt="" className='w-[200px]' />
          </div>
          <div className="flex flex-col gap-10 items-center justify-center">
            <h2 className="font-semibold text-xl text-center">Branding | Image Making</h2>
            <h1 className="text-6xl font-semibold w-full text-center">Visual Designer</h1>
            <p className="text-sm w-full text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem distinctio sint blanditiis ipsum totam obcaecati dicta
              error facere, explicabo qui atque rerum, nobis eos! Aliquid quo
              distinctio accusantium quidem voluptatem.
            </p>
            <button className='flex items-center text-white justify-center bg-[#2D2D2D] cursor-pointer p-4 w-[150px] h-[55px]'>
                Contact
            </button>
          </div>
          <div className="flex w-full justify-end max-md:justify-center">
            <img src={section2right} alt="" className='w-[200px]' />
          </div>
        </div>
      </section>
      {/* section 3 */}
      <section>
        <div className="flex justify-between items-center px-[24px] py-[42px]">
          <div className="flex flex-col gap-7 max-md:flex-col max-md:justify-center">
            <h2 className="font-semibold text-xl text-center">Branding | Image Making</h2>
            <h1 className="text-6xl font-semibold w-full text-center">Visual Designer</h1>
            <p className="text-sm w-full text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem distinctio sint blanditiis ipsum totam obcaecati dicta
              error facere, explicabo qui atque rerum, nobis eos! Aliquid quo
              distinctio accusantium quidem voluptatem.
            </p>
            <button className='flex items-center text-white justify-center bg-[#2D2D2D] cursor-pointer p-4 w-[150px] h-[55px]'>
                Contact
            </button>
          </div>
          <div className="flex w-full justify-end max-md:justify-center">
            <img src={section2right} alt="" className='w-[200px]' />
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
