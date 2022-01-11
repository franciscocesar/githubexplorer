import { RepositoryItem } from "./RepositoryItem";

import '../styles/repository.scss'
import { useState, useEffect } from "react";

// https://api.github.com/users/franciscocesar/repos
export function RespositoryList(){

    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/franciscocesar/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {repositories.map(repositories => {
                    return <RepositoryItem key={repositories.name}repository={repositories}/>    
                    
                })}
               
            </ul>
            
        </section>
    )
}