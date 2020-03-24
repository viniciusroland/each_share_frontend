import React, { useEffect, useState } from "react"
import Loader from 'react-loader-spinner'
import person1 from "../../assets/illustrations/student-colour.svg"
import person2 from "../../assets/illustrations/person-map.svg"
import share from "../../assets/illustrations/share.svg"
import create from "../../assets/illustrations/create.svg"
import search from "../../assets/illustrations/search.svg"
import api from '../../services/api'
import {
  Container,
  CoursesList,
  WelcomeMessage,
  ActionsList,
  IllustrationOne,
  IllustrationTwo,
  ActionIcon
} from './styles'

import List from "../../components/List"

export default function Home() {
  const [folders, setFolders] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function loadCourses() {
      setLoading(true)
      const response = await api.get("/api/folders?type=course");
      setFolders(response.data)
      setLoading(false)
    }
    loadCourses();
  }, [])
  const emoji = ":)"
  return (
    <Container>
      <WelcomeMessage>
        <IllustrationOne src={person1} />
        <h1>bem-vinde ao eachshare!</h1>
        <h2 className="welcome2">
          ta precisando de uma prova antiga? <br />
          um resumão top?  <br />
          um EP resolvido? <br />
        </h2>
        <h3 className="welcome3">aqui você encontra arquivos compartilhados pelos alunos da each {emoji}</h3>
        <IllustrationTwo src={person2} />
      </WelcomeMessage>
    <CoursesList>
      <ActionsList>
        <li>
          <ActionIcon src={search}></ActionIcon>
          <h3>pesquise!</h3>
        </li>
        <li>
          <ActionIcon src={share}></ActionIcon>
          <h3>compartilhe!</h3>
        </li>
        <li>
          <ActionIcon src={create}></ActionIcon>
          <h3>publique!</h3>
        </li>
        </ActionsList>

        {loading ? (
          <Loader
            type="TailSpin"
            color="#000000"
            height={50}
            width={50}
          />
        ) : (
          <List foldersList={folders} />
        )}
      </CoursesList>
    </Container>
  )
}
