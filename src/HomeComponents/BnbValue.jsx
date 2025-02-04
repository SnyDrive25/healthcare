import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import axios from 'axios';

const BnbValue = () => {
    
    // BNB value variables initialized
    const [bnbValue, setBnbValue] = useState(null);
    const [loadingBnbValue, setLoadingBnbValue] = useState(true);
    const [seconds, setSeconds] = useState(0);

    const api_link = "http://localhost:8080/bnbvalue/get_value";

    // Function to retreive BNB Value from coinmarketcap API
    const getBnbValue = async () => {
        try {
            const response = await axios.get(api_link);
            setBnbValue(response.data.value.toFixed(2));
            setLoadingBnbValue(false);
        } catch (error) {
            console.error(error);
        }
    };

    setTimeout(() => {
        if(seconds === 0) {
            getBnbValue();
        }
        setSeconds(seconds + 1);
        if(seconds === 10) {
            setSeconds(0);
            setLoadingBnbValue(true);
        }
    }, 1000);

    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            color={"black"}
            p={10}
            fontSize={["xs", "sm", "md", "lg"]}
        >
            <p
                style={{ background: `rgba(240, 185, 11, ${seconds / 10})`, padding: "10px", borderRadius: "10px" }}
            >
                {bnbValue && !loadingBnbValue ? (
                    <span>BNB Value: ${bnbValue}</span>
                ) : (
                    <span>
                        Loading BNB Value...
                        <i className="fa fa-spinner fa-spin" style={{ fontSize: "24px", marginLeft: "10px" }}></i>
                    </span>
                )}
            </p>
        </Flex>
    );
};

export default BnbValue;