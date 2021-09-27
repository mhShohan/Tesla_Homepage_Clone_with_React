import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order online to touchless delivary."
                image="model-s.jpg"
                leftbtn="Custom Order"
                rightbtn="Existing Inventory"
            />
            <Section
                title="Model Y"
                description="Order online to touchless delivary."
                image="model-y.jpg"
                leftbtn="Custom Order"
                rightbtn="Existing Inventory"
            />
            <Section
                title="Model X"
                description="Order online to touchless delivary."
                image="model-X.jpg"
                leftbtn="Custom Order"
                rightbtn="Existing Inventory"
            />
            <Section
                title="Model 3"
                description="Order online to touchless delivary."
                image="model-3.jpg"
                leftbtn="Custom Order"
                rightbtn="Existing Inventory"
            />
            <Section
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                image="solar-panel.jpg"
                leftbtn="Order now"
                rightbtn="Learn More..."
            />
            <Section
                title="Solar Roofs"
                description="Produce Clean Energy From Your Roof"
                image="solar-roof.jpg"
                leftbtn="Order now"
                rightbtn="Learn More..."
            />
            <Section
                title="Accessories"
                description="Produce Clean Energy From Your Roof"
                image="accessories.jpg"
                leftbtn="Order now"
            />
        </Container>
    );
}

export default Home;

const Container = styled.div`
    height: 100vh;
`;
