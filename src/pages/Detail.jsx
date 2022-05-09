import React from 'react'
import {
    TextField,
    Button
} from '@mui/material';
import BasicGrid from '../components/detail/BasicGrid';
import { useDispatch, useSelector } from 'react-redux';
import { getAppointmentDetailsApi } from '../api';
import { UPDATE } from '../constants/actionTypes';

export default function History() {

    const dispatch = useDispatch();
    const personalInfo = useSelector((state) => state.posts.personalInfo)

    const [username, setUsername] = React.useState('');
    const [flag, setFlag] = React.useState(false);

    const handleOnclick = () => {
        getAppointmentDetailsApi(
            {"username": username}
        ).then(res => {
            if (res.data.flag === 200) {
                dispatch({type: UPDATE, payload: res.data})
                setFlag(true);
            } else {
                setFlag(false);
            }
        })
    }
    
    return (
        <div>
            <TextField id="outlined-basic" label="受检者ID" variant="outlined" onChange={(e) => setUsername(e.target.value)} />
            <Button 
                variant="contained" 
                onClick={handleOnclick}
                sx={{
                    margin: 1
                }}
            >
                查找</Button>

            {flag ? 
            <div>
                <h2>{personalInfo.name}</h2>
                <BasicGrid />
            </div>
            : <h3>请正确输入受检者的手机号，查阅其健康信息，并评估系统决策结果。</h3>
            }
        </div>
    )
}
