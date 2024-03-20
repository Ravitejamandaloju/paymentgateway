import React from 'react'
import { Box, Stack } from "@chakra-ui/react"
import Card from './Card'
import axios from "axios";


const Home = () => {


    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

        const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
            amount
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "raviteja",
            description: "payment",
            image: "",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "Raviteja",
                email: "gaurav.kumar@example.com",
                contact: "9999999999"
            },
            notes: {
                "address": "karimnagar"
            },
            theme: {
                "color": "#378cef"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }

    return (
        <Box>

            <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>

                <Card amount={500} img={"https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/972a37599772cdc7df93a0855ad87591"} checkoutHandler={checkoutHandler} />
                <Card amount={300} img={"https://w7.pngwing.com/pngs/574/913/png-transparent-coca-cola-coca-cola-bottle-glass-bottles.png"} checkoutHandler={checkoutHandler} />
              

            </Stack>
        </Box>
    )
}

export default Home