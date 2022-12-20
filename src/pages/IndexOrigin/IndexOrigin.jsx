import { Button, Card } from "@mui/material"
import { Link } from 'react-router-dom'
import { Logo } from "../../conponent/Logo/logo-svg"
import './IndexOrigin.css'
export const IndexOrigin = () => {
    return (
        <div className="App-header">
            <Card className="cardInicial">
                <Logo />
                <Button sx={
                    {
                        width: '20rem',
                        mb: '10px'
                    }
                }
                    className="buttonInicial"
                    variant="contained">
                    <Link to='cadastroSchool'>
                        Não, é primeira vez!</Link>
                </Button>
                <Button sx={
                    {
                        width: '20rem',
                        mb: '10px'
                    }
                } className="buttonInicial" variant="contained">
                    <Link to='loginSchool'>
                        Não é primeira vez!</Link>
                </Button>
            </Card>
        </div>
    )
}