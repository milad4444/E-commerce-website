import { Box } from '@mui/system'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>E-commerce website</title>
      </Head>
      {/* Header */}
      <Header></Header>
      {/* Navbar */}
      <Box className="mt-4" sx={{ width: '1100px', margin: 'auto' }}>
        <Navbar></Navbar>
      </Box>
    </div>
  )
}
