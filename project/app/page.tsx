'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRouter } from 'next/navigation'
import DownloadButton from '../components/DownloadButton'

export default function Home() {
  const router = useRouter()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  const handleDownload = () => {
    router.push('/download')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Hi, I am Pratyush, Class IX/A
            </h1>
            <p className="text-xl mb-8 text-gray-400">
              Thank you for visiting my site.
            </p>
            <DownloadButton 
              label="Download Script" 
              onClick={handleDownload}
            />
          </motion.div>
          <div className="lg:w-1/2 relative overflow-hidden rounded-lg">
            <motion.div
              ref={ref}
              style={{ scale }}
              className="w-full h-full"
            >
              <img
                src="images/1.jpg" // Updated the image path here
                alt="School"
                className="w-full h-auto transition-all duration-300"
                width={700}
                height={700}
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
              <span className="text-white text-lg font-semibold">My School</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
