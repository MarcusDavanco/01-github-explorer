import React from 'react';

interface RepositoryItemProps {
    repository: {
        name: string;
        html_url: string;
    }
}

export function RepositoryItem(props:RepositoryItemProps){
    return(
        <li>
            <strong>{props.repository.name ?? 'Default'}</strong>
            <p>Forms in React</p>

            <a href={props.repository.html_url}>
                Acessar o repositório
            </a>
        </li>
    )
}