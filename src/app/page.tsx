import TopNav from '@/app/components/TopNav'
import Hero from '@/app/components/Hero'
import Work from '@/app/components/Work'
import About from '@/app/components/About'
import Contact from '@/app/components/Contact'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <div className="w-screen">
      <TopNav />
      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
