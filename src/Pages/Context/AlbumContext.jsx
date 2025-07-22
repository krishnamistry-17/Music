import { createContext, useContext, useState } from "react";

const AlbumContext = createContext();


export const AlbumProvider = ({children}) => {
    const [albums,setAlbums] = useState([])
    const [currentAlbumIndex,setCurrentAlbumIndex] = useState(0)
    const [selectedAlbum,setSelectedAlbum] = useState(null)
    console.log('selectedAlbum :', selectedAlbum);
    return(
        <AlbumContext.Provider value={{selectedAlbum,setSelectedAlbum}}>
            {children}
        </AlbumContext.Provider>
    )
}

export const useAlbum = () => useContext(AlbumContext)