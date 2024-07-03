import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider, Text} from '@chakra-ui/react'
import { createStandaloneToast } from '@chakra-ui/toast'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Home from "./Home.jsx";



ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
            <ChakraProvider>
                   <Home></Home>
            </ChakraProvider>
    )
