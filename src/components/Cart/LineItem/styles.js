import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 0 2rem 0;
  border-bottom: 1px solid #777;
`
export const RemoveButton = styled.button`
  background: transparent;
  border: 1px solid #333;
  border-radius: 48px;
  text-align: center;
  color: #333;
  text-decoration: none;
  padding: 1rem 2rem;

  &:hover {
    background: #333;
    color: #e0e0e0;
  }
`
