import styled, { css } from 'styled-components'

// mix-ins
export const text = css`
  color: ${p => p.theme.colors.text}
`

export const H1 = styled.h1`
  ${text};
  font-weight: ${p => p.theme.typography.h1.weight};
  font-size: ${p => p.theme.typography.h1.size};
`

export const H2 = styled.h2`
  ${text};
  font-weight: ${p => p.theme.typography.h2.weight};
  font-size: ${p => p.theme.typography.h2.size};
  opacity: ${p => p.theme.typography.h2.opacity};
`

export const H3 = styled.h3`
  ${text};
  font-weight: ${p => p.theme.typography.h3.weight};
  font-size: ${p => p.theme.typography.h3.size};
  opacity: ${p => p.theme.typography.h3.opacity};
`

export const P = styled.p`
  ${text};
`

export const A = styled.a`
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  color: ${p => (p.selected ? p.theme.colors.linkHover : p.theme.colors.link)};
  transition: color 0.5s cubic-bezier(.25,.8,.25,1);
  &:hover {
    color: ${p => p.theme.colors.linkHover};
  }
  &:focus {
    color: ${p => p.theme.colors.linkHover};
  }
`