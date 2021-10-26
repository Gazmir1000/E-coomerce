import styled from "styled-components"
import Announcements from "../components/Announcements"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";

const Container = styled.div`

`;
const Title = styled.h1`
margin :20px;
`;
const FilterContainer = styled.div`
display:flex;
justify-content: space-between;
`;
const Filter = styled.div`
margin :20px;
`;

const FilterText = styled.span`
font-size :22px;
font-weight: 550;
margin-right :15px;
`;

const Select = styled.select`

height: 40px;
margin-right: 15px;
padding:10px;
`
const Option = styled.option``

const ProductList = () => {
    return (
        <Container>
            
            <Navbar/>
            <Announcements/>
            <Title>Rroba</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>Ngjyra
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected>Madhesia
                    </Option>
                    <Option>S (small)</Option>
                    <Option>M (medium)</Option>
                    <Option>L (large)</Option>
                    <Option>X L(extra large)</Option>
                    <Option>XXL (xx large)</Option>
                </Select>
                </Filter>
                <Filter><FilterText>Sort Products:</FilterText>
                <Select>
                    
                    <Option>Me te rejat</Option>
                    <Option>Me te shtrenjtat</Option>
                    <Option>Me te lirat</Option>
                    
                </Select>
                </Filter>
                
            </FilterContainer>
            <Products/>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
