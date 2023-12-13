import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>

      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <img src="/images/The-Simpsons.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/snow_queen_elsa_in_frozen-wide.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/toy-story-5.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/scale (1).jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/aladin.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/ironman.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/coco.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/elephant.jpg" />
        </Wrap>
      </Content>

      <h4>New</h4>
      <Content>
        <Wrap>
          <img src="/images/The-Simpsons.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/snow_queen_elsa_in_frozen-wide.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/toy-story-5.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/scale (1).jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/aladin.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/ironman.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/coco.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/elephant.jpg" />
        </Wrap>
      </Content>

      <h4>Most Views</h4>
      <Content>
        <Wrap>
          <img src="/images/The-Simpsons.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/snow_queen_elsa_in_frozen-wide.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/toy-story-5.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/scale (1).jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/aladin.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/ironman.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/coco.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/elephant.jpg" />
        </Wrap>
      </Content>

    </Container>
  )
}

export default Movies

const Container = styled.div`

`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    padding: 20px 0;
`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px; 
    transition: all .25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px; 
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8)
      }
`