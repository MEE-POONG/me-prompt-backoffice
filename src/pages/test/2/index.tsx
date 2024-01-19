import Image from 'next/image'
import { Inter } from 'next/font/google'
import { LayOut } from '@/components/Layout/admin'

const inter = Inter({ subsets: ['latin'] })

const TestTwoPage: React.FC = () => {
  return (
    <LayOut>
      TestTwo
    </LayOut>
  )
}

export default TestTwoPage;