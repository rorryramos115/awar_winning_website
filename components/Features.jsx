import { TiLocationArrow } from "react-icons/ti"


const BentoCard = ({ src, title, description}) => {
  return (
    <div className="relative size-full">
      <video 
      src={src}
      loop
      muted
      autoPlay
      className="absolute left-0 top-0 size-full object-center object-cover"
      />

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
           <h1 className="bento-title special-font">{title}</h1>

          {description && (
            <p className="mt-3 max-w-100 text-xs md:text-base">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

const Features = () => {

  return (
    <section
    className="bg-black pb-52">
      <div className="w-full px-6 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">Into the Metagame Layer</p>

          <p className="max-w-md text-lg font-circular-web text-blue-50 opacity-50"> 
            Immerse yourself in a rich and ever-expanding universe where a vibrant array of products converge into an interconnected overlay experience on your world.
          </p>
        </div>

        <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard 
            src="video/feature-1.mp4"
            title={<>radi<b>n</b>t</>}
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          />
        </div>

        <div className="grid h-[135vh] w-full grid-cols-1 md:grid-cols-2 grid-rows-5 sm:grid-rows-3 gap-7 border">
          <div className="bento-tilt_1 border-hsla  row-span-2 md:row-span-2 col-span-1">
            <BentoCard 
              src="video/feature-2.mp4"
              title={<>zig<b>m</b>a</>}
              description="An anime & gaming-inspired NFT collection — the IP primed for expansion"
            />
          </div>

          <div className="bento-tilt_1 border-hsla ms-32 md:ms-0  md:row-span-1 row-span-2 col-span-1">
            <BentoCard 
              src="video/feature-3.mp4"
              title={<>n<b>e</b>xus</>}
              description="A gamified social hub, adding a new dimension of play to Web3 communities."
            />
          </div>

          <div className="bento-tilt_1 border-hsla me-14 md:me-0  md:row-span-1 row-span-3 col-span-1">
            <BentoCard 
              src="video/feature-4.mp4"
              title={<>o<b>m</b>ega</>}
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            />
          </div>

          <div className="bento-tilt_2 border-hsla">
            <div className="flex size-full flex-col justify-between bg-violet-500 p-5">
              <h1 className="bento-title special-font max-w-100 text-black">M<b>o</b>re co<b>m</b>ing s<b>o</b>on!</h1>

              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </div>

          <div className="bento-tilt_2 border-hsla">
            <video
             src="video/feature-5.mp4"
             loop
             muted
             autoPlay
             className="size-full object-cover object-center"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Features