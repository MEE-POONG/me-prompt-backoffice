import Image from 'next/image'
import { Inter } from 'next/font/google'
import { LayOut } from '@/components/Layout/admin'

const inter = Inter({ subsets: ['latin'] })

const AgentListPage: React.FC = () => {
  return (
    <LayOut>
      AgentList
    </LayOut>
  )
}

export default AgentListPage;