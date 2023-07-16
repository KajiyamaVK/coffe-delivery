import { styled } from 'styled-components'
import backgroundImg from '/src/assets/images/banner-background.png'

export const Main = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding: 5.75rem 10rem;
  gap: 3.5rem;
  justify-content: center;
`

export const Background = styled.div`
  background-image: url(${backgroundImg});
  filter: blur(8px);
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-position: center;
`

export const ImageContainer = styled.img`
  object-fit: contain;
  width: 29.75rem;
`

export const TextContainer = styled.div`
  max-width: 36.75rem;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.base['base-title']};
  font-size: 3rem;
`

export const Subtitle = styled.p`
  font-size: 1.25rem;
`

export const TopicItem = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`

export const TopicsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
