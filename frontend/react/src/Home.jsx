import SidebarWithHeader from "./components/shared/SideBar.jsx";
import {Text, Button, Wrap, WrapItem} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import { Spinner } from '@chakra-ui/react'
import { getCustomers } from "./services/client.js"
import  CardWithImage  from "./components/customer/CustomerCard.jsx"
const Home = () => {

    const [customers, setCustomers] = useState([]);
    const [isloading, setLoading]= useState(false);

    useEffect(() => {
        setLoading(true);
        getCustomers().then(res=>{
            setCustomers(res.data)
        }).catch(err=>{
            console.log(err)

        }).finally(()=>{
            setLoading(false)
        })
    }, []);
    if(isloading){
        return <SidebarWithHeader>
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        </SidebarWithHeader>
    }
    if(customers.length<=0){
       return <SidebarWithHeader>
           <Text>NO customers Available</Text>
       </SidebarWithHeader>
    }
    console.log(customers);

    return (
        <SidebarWithHeader>
            <Wrap justify={"center"} spacing= "10px" >
            {customers.map((customer, index)=>(
                <WrapItem key={index}>
                <CardWithImage {...customer}></CardWithImage>
                </WrapItem>
            ))}
            </Wrap>
        </SidebarWithHeader>
    )
}
export default Home;