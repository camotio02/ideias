import { Button, Card } from "@mui/material"
import './IndexOrigin.css'
export const IndexOrigin = () => {
    return (
        <div className="App-header">
            <Card className="cardInicial">
                <h1>Bem vindo à<strong>E</strong><strong>C</strong><strong>E</strong>
                     electronic control school</h1>
                <Button className="buttonInicial" variant="contained">Minha primeira vez</Button>
                <Button className="buttonInicial" variant="contained">Minha Escola está cadastrado</Button>
            </Card>
        </div>
    )
}