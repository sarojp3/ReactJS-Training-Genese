import React,{useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

export default function TimerApp(){

    const [time, setTime] = useState();
    const [timer, setTimer] = useState();
    const [isAlert, setIsAlert] = useState(false);
    let [secondCount, setSecondCount] = useState(0);

    function handleChange(event){
        setTime(event.target.value);
    };

    function runTimer(){
        setTimer(setInterval(function(){
            if(secondCount == time){
                alert('Timer')
                setIsAlert(!isAlert)
                setSecondCount(0)
                setTime(0)
            }else{
                setSecondCount(secondCount++);
            }
        }, 1000))
    };

    useEffect(()=>{
        clearInterval(timer);
    },[isAlert])


    return(
        <div style={{margin:'auto', padding:'5px', maxWidth:500}}>
            <h1>This is Timer App</h1>                
            <div>
                <Grid container  spacing={2}>
                    <Grid item xs="9" sm="9">
                        <TextField
                            id="time"
                            label="Please Assign a time"
                            variant="outlined"
                            value={time}
                            helperText="Set a timer for your time"
                            type = "number"
                            onChange={handleChange}
                            fullWidth={true}
                        />
                    </Grid>
                    <Grid item xs="3" sm="3">
                        <Button style={{background:'lightgreen'}} onClick={runTimer}>Run Timer</Button>
                    </Grid>
                </Grid>
                <div>
                    <Card style={{ marginTop:'10px',background:'whitesmoke', color:'black'}}>
                        <h1 style={{textAlign:'center'}}>{secondCount}</h1>
                    </Card>
                </div>

            </div>

        </div>
    )
}