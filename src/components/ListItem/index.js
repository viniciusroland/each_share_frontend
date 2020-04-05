import React from 'react'
import { Container, StyledLink, StyledA } from './styles'
import { 
  MdFolder,
  MdChevronRight,
  MdAttachFile,
} from 'react-icons/md'
import { stringToBase64 } from "../../helper/base64"
export default function ListItem({ data, type, parentFolderName, index }) {
  const encodedId = stringToBase64(data.id)
  return (
    <>
    {type === "folder" ? (
      <StyledLink to={{
        pathname: `/${encodedId}`,
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