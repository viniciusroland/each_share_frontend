import React from 'react'
import { Container, StyledLink, StyledA } from './styles'
import { 
  MdFolder,
  MdChevronRight,
  MdAttachFile,
  // MdDelete, MdError 
} from 'react-icons/md'
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
          <div>
            <MdFolder />
            <h3>{data.name}</h3>
            <MdChevronRight />
          </div>
        </Container>
      </StyledLink>
    ) : (
      <StyledA target="_blank" href={`https://viniciusroland.tech/api/files/${data.file_url}`}>
        <Container>
          <div>
            <MdAttachFile />
            <h3>{data.name}</h3>
            <MdChevronRight />
          </div>
        </Container>
      </StyledA >
    )}
    </>
  )
}