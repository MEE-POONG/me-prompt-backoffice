import Image from 'next/image'
import { Inter } from 'next/font/google'
import { LayOut } from '@/components/Layout/admin'

const inter = Inter({ subsets: ['latin'] })

const SettingPage: React.FC = () => {
  return (
    <LayOut>
      Setting
    </LayOut>
  )
}

export default SettingPage;