import './indexCadastro.css'
import {Stack } from "@mui/material"
import { InputConponent } from '../../conponent/Input'


export const CadastroSchool = () => {
    return (
        <div className="conatiner">
            <h1 style={{ color: 'white' }}>Cadastrar a sua escola</h1>
            <Stack className='form-register-school'>
               <InputConponent nameConponet="Nome da escola"/> 
            </Stack>
        </div>
    )
}