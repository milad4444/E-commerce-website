import { Box } from '@mui/system'
import React from 'react'

const Header = () => {
  return (
    <nav className="text-right bg-gray-200 py-1 text-xs font-semibold">
      <Box sx={{ width: '900px', margin: 'auto' }}>
        <ul className="flex text-gray-600">
          <li className="flex-auto">
            <a
              className="text-center block hover:underline hover:text-red-500 text-red-500"
              href="#"
            >
              SAVE MORE ON APP
            </a>
          </li>
          <li className="flex-auto">
            <a
              className="text-center block hover:underline hover:text-red-500"
              href="#"
            >
              DARAZ AFFILIATE PROGRAM
            </a>
          </li>
          <li className="flex-auto">
            <a
              className="text-center block hover:underline hover:text-red-500"
              href="#"
            >
              SELL ON DARAZ
            </a>
          </li>
          <li className="flex-auto">
            <a
              className="text-center block hover:underline hover:text-red-500"
              href="#"
            >
              CUSTOMER CARE
            </a>
          </li>
          <li className="flex-auto">
            <a
              className="text-center block hover:underline hover:text-red-500"
              href="#"
            >
              TRACK MY ORDER
            </a>
          </li>
          <li className="flex-auto">
            <a
              className="text-center block hover:underline hover:text-red-500"
              href="#"
            >
              LOGIN
            </a>
          </li>
          <li className="flex-auto">
            <a
              className="text-center block hover:underline hover:text-red-500"
              href="#"
            >
              SIGNUP
            </a>
          </li>
          <li className="flex-auto">
            <a
              className="text-center block hover:underline hover:text-red-500"
              href="#"
            >
              زبان تبدیل کردن
            </a>
          </li>
        </ul>
      </Box>
    </nav>
  )
}

export default Header
