import Container from "./Container";

const ViewFlashCard = () => {
    return (
        <div style={{display:"flex",flexDirection:"column",gap:"5%",overflow:"auto",width:"100%"}}>
            <div style={{ display: "flex",gap:"2%" }}>
               <Container></Container>
               <Container></Container>
               <Container></Container>
               <Container></Container>
            </div>
            <div style={{ display: "flex",gap:"2%" }}>
               <Container></Container>
               <Container></Container>
               <Container></Container>
               <Container></Container>
            </div>
            <div style={{ display: "flex",gap:"2%" }}>
               <Container></Container>
               <Container></Container>
               <Container></Container>
               <Container></Container>
            </div>
        </div>
    );
}

export default ViewFlashCard;