import React, { useEffect, useState } from "react"
import Loader from "react-loader-spinner"
import Modal from "react-awesome-modal"
import { MdCreateNewFolder, MdAddCircle, MdArrowBack } from "react-icons/md"
import { toast } from 'react-toastify';
import { useParams, useHistory } from "react-router-dom"
import schoolBooks from "../../assets/illustrations/schoolbooks-colour.svg"
import student from "../../assets/illustrations/choices-colour.svg"
import api from '../../services/api'
import {
  Container,
  CoursesList,
  Input,
  Button,
  ButtonContainer,
  FormContainer,
  ListContainer,
  StudentIcon,
  Breadcrumbs
} from './styles'

import List from "../../components/List"

export default function Folder({ location }) {
  let currentFolderName;
  try {
    currentFolderName = location.state.currentName
  } catch {
  }
  const emoji = ":("

  const { id } = useParams()
  const history = useHistory()
  const [subFolders, setSubFolders] = useState([])
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAddFolderModal, setShowAddFolderModal] = useState(false)
  const [showAddFileModal, setShowAddFileModal] = useState(false)
  const [folderName, setFolderName] = useState("")
  const [fileName, setFileName] = useState("")
  const [fileToUpload, setFileToUpload] = useState(null)
  const [reload, setReload] = useState(false)

  useEffect(() => {
    async function loadCourses() {
      setLoading(true)
      const response = await api.get(`/api/folders/${id}`);
      setSubFolders(response.data.sub_folders)
      setFiles(response.data.files)
      setLoading(false)
    }
    loadCourses();
  }, [id, reload])

  async function handleCreateFolder(e) {
    e.preventDefault();
    const parentFolderId = id;
    const newChildFolder = { name: folderName }
    const response = await api.post('/api/associate-folder', {
      id: parentFolderId,
      childs: [
        newChildFolder
      ] 
    })
    if (response.status === 200) {
      showSuccessToast("pasta criada com sucesso :)")
    } else {
      showErrorToast("eror ao criar pasta, tente novamente :(")
    }
    setReload(!reload);
    closeAllModal()
  }

  async function handleCreateFile(e) {
    e.preventDefault()
    const formData = new FormData();
    formData.append('file', fileToUpload)
    formData.append('file_name', fileName)
    formData.append('folder_id', id)

    const response = await api.post(
      '/api/associate-file',
      formData,
      {
        headers : {"Content-Type" : "multipart/form-data"}
      }
    )

    if (response.status === 200) {
      showSuccessToast("arquivo enviado com sucesso :)")
    } else {
      showErrorToast("erro ao enviar arquivo, tente novamente :(")
    }
    setReload(!reload)
    closeAllModal()
  }
  async function closeAllModal() {
    setShowAddFileModal(false)
    setShowAddFolderModal(false)
  }

  async function showSuccessToast(msg) {
    toast.success(msg, {
      "position" : "top-center"
    })
  }

  async function showErrorToast(msg) {
    toast.error(msg, {
      "position" : "top-center"
    })
  }

  function formatTitle() {
    if (currentFolderName !== undefined) {
      const splitedNames = currentFolderName.split("/")
      splitedNames.shift() // removing first undefined
      return splitedNames.join("/")
    } else {
      return ""
    }
  }

  return (
    <>
      <Modal visible={showAddFolderModal} width="400" height="300" effect="fadeInUp" onClickAway={() => setShowAddFolderModal(false)}>
        <FormContainer onSubmit={handleCreateFolder}>
          <h3>digite um nome para sua pasta</h3>
          <Input
            placeholder="e.g Provas, Resumo, Teoria"
            onChange={(e) => setFolderName(e.target.value)}
            value={folderName}
          />
          <Button>
            <p>ok !</p>
          </Button>
        </FormContainer>
      </Modal>
      
      <Modal visible={showAddFileModal} width="400" height="300" effect="fadeInUp" onClickAway={() => setShowAddFileModal(false)}>
        <FormContainer onSubmit={handleCreateFile}>
          <h3>digite um nome para seu arquivo</h3>
          <Input
            placeholder="e.g calculo_p1.pdf, resumo_prof.pdf"
            onChange={(e) => setFileName(e.target.value)}
            value={fileName}
          />
          <div htmlFor="file-input">
            <label htmlFor="file-input">
              <p>escolher arquivo</p>
            </label>
            <MdAddCircle size={20} />
          </div>
          <Input id="file-input" type="file" onChange={(e) => setFileToUpload(e.target.files[0])} />
          <Button>
            <p>ok !</p>
          </Button>
        </FormContainer>
      </Modal>

      <Container>
        <StudentIcon src={schoolBooks}></StudentIcon>
        <ListContainer>
          <CoursesList>
            <Breadcrumbs>
              <MdArrowBack size={20} onClick={() => history.goBack()}/>
              <h4>{formatTitle()}</h4>
            </Breadcrumbs>
            {loading && 
              <Loader
                type="TailSpin"
                color="#000000"
                height={50}
                width={50}
              />}

            {/* mostrando um aviso caso a pasta esteja vaia */}
            {subFolders.length === 0 && files.length === 0 && loading === false &&
              (<h1>pasta vazia {emoji}</h1>)
            }
            <List foldersList={subFolders} filesList={files} parentFolderName={currentFolderName}/>

          </CoursesList>
          <ButtonContainer>
            <Button onClick={() => setShowAddFolderModal(true)}>
              <p><MdCreateNewFolder /> criar pasta </p>
            </Button>
            <Button onClick={() => setShowAddFileModal(true)}>
              <p><MdAddCircle /> enviar arquivo </p>
            </Button>
          </ButtonContainer>
        </ListContainer>
        <StudentIcon src={student}></StudentIcon>
      </Container>
    </>
  )
}
