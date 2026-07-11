import CV from '../../assets/documents/CV.pdf'

const ListItem = ({icon,href,label})=>{
    return (
    <li className="d-flex align-items-center link-list-item">
        <i className={`bi bi-${icon} fs-4 me-2 link-icon`}/>
        <a className="link-label" href={href} target="_blank" rel="noreferrer">{label}</a>
     </li>
  )
}

const LinksList = ()=>{
    return (
    <ul className="list-unstyled">
        <ListItem icon='github' label='rossdumpit' href='https://github.com/rossdumpit'/>
        <ListItem icon='linkedin' label='Rosvelt Remus Dumpit' href='https://www.linkedin.com/in/rosvelt-remus-dumpit-556714149/'/>
        <ListItem icon='facebook' label='rosvelt.dumpit' href='https://www.facebook.com/rosvelt.dumpit/'/>
        <ListItem icon='instagram' label='ross01_online' href='https://www.instagram.com/ross01_online/'/>
        <ListItem icon='file-earmark-text' label='Resume' href={CV}/>
        <ListItem icon="database" label="Australia ED Data" href="https://rossdumpit.github.io/ozmap/front.html"/>
    </ul>
    )
}

export default LinksList;