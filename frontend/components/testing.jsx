import React from "react";
import styled from "styled-components";


class Testing extends React.Component {

    render() {
        const Hello = styled.h2`
            background-color: red;
            font-size: 3em;
        `

        return(
            <div>

                <Hello>HELLO WORLD</Hello>
            </div>
        )
    }
}

export default Testing;