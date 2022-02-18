export function RepositoryItem(props){
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