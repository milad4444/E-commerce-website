import { Box } from '@mui/system'
import TextField from '@mui/material/TextField'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { IconButton, InputAdornment } from '@mui/material'
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav>
      <Box className="grid grid-cols-6 gap-5">
        <Image
          src={'/../public/daraz.png'}
          width={135}
          height={41}
          alt="logo of the website"
        />
        <Box className="col-span-4 pt-1 pl-10 grid grid-cols-7 gap-10 items-center">
          <TextField
            id="input-with-sx"
            variant="outlined"
            size="small"
            className="col-span-6"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box className="p-0">
            <IconButton>
              <ShoppingCartIcon className="text-gray-400 p-0" />
            </IconButton>
          </Box>
        </Box>
        <Image
          src={'/../public/ad.png'}
          width={208}
          height={45}
          alt="logo of the website"
        />
      </Box>
    </nav>
  )
}

export default Navbar
