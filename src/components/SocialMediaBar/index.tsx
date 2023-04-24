import { useCallback } from 'react'
import { useTheme } from 'styled-components'
import { RiFacebookCircleLine, RiInstagramLine, RiLinkedinBoxLine } from '../../assets/icons'
import { Container, Content } from './styles'

export function SocialMediaBar(): JSX.Element {
  const { white100 } = useTheme().colors

  const redirectToSocialMedia = useCallback((url: string) => {
    window.open(url, '_blank')
  }, [])
  return (
    <Container>
      <Content>
        <h3>Nos siga em nossas redes sociais.</h3>
        <span>
          <RiFacebookCircleLine
            onClick={() =>
              redirectToSocialMedia(
                'https://www.facebook.com/profile.php?viewas=100000686899395&id=100090200084469',
              )
            }
            color={white100}
            size={23}
          />
          <RiInstagramLine
            onClick={() => redirectToSocialMedia('https://www.instagram.com/threesoftoficial/')}
            color={white100}
            size={23}
          />
          <RiLinkedinBoxLine
            onClick={() =>
              redirectToSocialMedia(
                'https://www.linkedin.com/company/three-soft/?viewAsMember=true',
              )
            }
            color={white100}
            size={24}
          />
        </span>
      </Content>
    </Container>
  )
}
