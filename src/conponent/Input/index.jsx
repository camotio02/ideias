import './index.css'
import { Input as Inputs, Stack } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export const InputConponent = ({
    nameConponet,
}) => {
    return (<>
        <div className='Stack-sapn-input'>
            <span>{nameConponet}</span>
            <Stack>
                <Inputs
                    sx={{ color: 'white' }}
                    className='input'
                    fullWidth={true}
                />
                <div><ArrowDropDownIcon /></div>
            </Stack>
        </div>
    </>)
}