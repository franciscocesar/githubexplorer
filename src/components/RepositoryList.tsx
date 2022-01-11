import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";

import '../styles/repository.scss'

interface Repository{
    name: string
    description: string
    html_url: string
}

export function RespositoryList(){

    const [repositories, setRepositories] = useState<Repository[]>([]) // Tipo generico

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
                    return <RepositoryItem key={repositories.name} repository={repositories}/>    

                })}
               
            </ul>
            
        </section>
    )
}