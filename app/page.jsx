import Hero from "@/components/Hero";

const page = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />

      <section className="bg-blue-400 min-h-screen w-screen z-0" />
    </main>
  )
}

export default page