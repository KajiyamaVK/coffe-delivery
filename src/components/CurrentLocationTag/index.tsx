import { CityName, LocationIcon, Main } from './styles'
import { MapPin } from '@phosphor-icons/react'

export default function CurrentLocationTag({ cityName }: { cityName: string }) {
  return (
    <Main>
      <LocationIcon>
        <MapPin size={22} weight="fill" />
      </LocationIcon>
      <CityName>{cityName}</CityName>
    </Main>
  )
}
