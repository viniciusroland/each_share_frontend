import React from 'react'
import { Container, StyledLink, StyledA } from './styles'
import { MdFolder, MdChevronRight, MdAttachFile } from 'react-icons/md'
export default function ListItem({ data, type, parentFolderName, index }) {
  return (
    <>
    {type === "folder" ? (
      <StyledLink to={{
        pathname: `/${data.id}`,
        state: {
          currentName: parentFolderName + `/${data.name}`
        }
      }}>
        <Container index={index}>
          <MdFolder />
          <h3>{data.name}</h3>
          <MdChevronRight />
        </Container>
      </StyledLink>
    ) : (
      <StyledA target="_blank" href={`https://viniciusroland.tech/api/files/${data.file_url}`}>
        <Container>
          <MdAttachFile />
          <h3>{data.name}</h3>
          <MdChevronRight />
        </Container>
      </StyledA >
    )}
    </>
  )
}