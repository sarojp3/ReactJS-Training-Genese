
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import Pagination from '@material-ui/lab/Pagination';
import { CircularProgress } from '@material-ui/core';

export default function PaginationPageNumber(){

    const [pageState, setPageState] = useState({pageNumber:0, isLoading:true, isError:false, pageData:[], totalPage:10, pageSize:10});

    const handleChangePage = (event, newPage) => {
        pageState.pageNumber = newPage - 1;
        setPageState({...pageState,pageState});

    };
    useEffect(()=>{
        getData();
    },[pageState.pageNumber])

    const getData = () => {
        axios.get('https://api.instantwebtools.net/v1/passenger?page='+pageState.pageNumber+'&size='+pageState.pageSize).then(function(response){
            pageState.isLoading = false;
            pageState.pageData = response.data.data;
            pageState.totalPage = response.data.totalPages;
            setPageState({...pageState,pageState});
        })
    }

    const handleChange = (event) =>{
        pageState.pageSize = event.target.value;
        setPageState({...pageState,pageState});
        getData();
    }
    
    return (
        <div style={{maxWidth:700, margin:'auto'}}>
            <div>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Page Size</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={pageState.pageSize}
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                </Select>
            </FormControl>
            </div>
            <div>
                { pageState.isLoading?<CircularProgress/>:
                pageState.pageData.map((item)=>
                <Card style={{marginTop:20}}>
                    <CardHeader
                    avatar={
                        <Avatar aria-label="recipe">S</Avatar>
                    }
                    title={item.name}
                    subheader={"Trip: "+ item.trips}
                    />
                </Card>
                )}  
            </div>
            <div style={{margin:"20px 0px"}}>
                <Pagination count={pageState.totalPage} 
                            onChange={handleChangePage}
                            variant="outlined" />
            </div>
        </div>
    )
}