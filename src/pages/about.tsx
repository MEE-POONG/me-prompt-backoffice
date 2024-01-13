import Image from 'next/image'
import { Inter } from 'next/font/google'
import { LayOut } from '@/components/Layout/admin'

const inter = Inter({ subsets: ['latin'] })

const AboutPage: React.FC = () => {
  return (
    <LayOut>
      About
    </LayOut>
  )
}

export default AboutPage;