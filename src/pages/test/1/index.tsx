import Image from 'next/image'
import { Inter } from 'next/font/google'
import { LayOut } from '@/components/Layout/admin'

const inter = Inter({ subsets: ['latin'] })

const TestOnePage: React.FC = () => {
  return (
    <LayOut>
      TestOne
    </LayOut>
  )
}

export default TestOnePage;