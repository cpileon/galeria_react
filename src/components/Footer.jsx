import Badge from 'react-bootstrap/Badge'
const Footer = ({texto, bajada}) =>{
    return (
        <div className="footerContainer">
            <h4 className="textFooter">{texto} </h4>
            <p>{bajada} <Badge>Instagram</Badge> <Badge bg='success'>Facebook</Badge> </p>
        </div>
    );
};

export default Footer;