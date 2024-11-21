'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import DownloadButton from '../../components/DownloadButton'

export default function Download() {
  const [showDownloadButton, setShowDownloadButton] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => setShowDownloadButton(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleDownload = () => {
    // Create a blob with some sample content (replace this with your actual PDF content)
    const blob = new Blob(['Sample PDF content'], { type: 'application/pdf' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'sample.pdf')
    document.body.appendChild(link)
    link.click()
    link.parentNode.removeChild(link)
    
    // Navigate to thank you page after a short delay
    setTimeout(() => {
      router.push('/thank-you')
    }, 1000)
  }

  const handleBackToHome = () => {
    window.location.href = 'https://www.google.com'
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
        >
          Download Your Script
        </motion.h1>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative group w-full max-w-md"
          >
            <img
              src=""
              alt="PDF Preview"
              className="rounded-lg shadow-2xl transition-all duration-300 group-hover:shadow-blue-500/50 w-full h-auto"
              width={595}
              height={842}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
              <span className="text-white text-lg font-semibold">PDF Preview (A4 Size)</span>
            </div>
          </motion.div>

          <div className="flex flex-col items-center">
            {showDownloadButton && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <DownloadButton 
                  label="Download PDF" 
                  onClick={handleDownload}
                />
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
              onClick={handleBackToHome}
            >
              Back to Home
            </motion.button>
          </div>
        </div>
      </div>
    </main>
  )
}

