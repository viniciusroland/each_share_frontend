import React from "react"
import ListItem from "../ListItem"
export default function List({ foldersList = [], filesList = [], parentFolderName}) {

  const foldersListWithType = foldersList.map((item) => { return { ...item, type: "folder" }});
  const filesListWithType = filesList.map((item) => { return { ...item, type: "file" }});
  const result = foldersListWithType.concat(filesListWithType)

  return (
    <>
      {result.map((item, index) => (
        <ListItem
          index={index}
          key={`${item.id}-${item.type}`}
          data={item} type={item.type}
          parentFolderName={parentFolderName}
        />
      ))}
    </>
  )
}