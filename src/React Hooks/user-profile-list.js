import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'; 
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { CircularProgress } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import {useHistory} from 'react-router-dom';


export default function UserProfileList(){
    
    let history = useHistory();
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [selectedDoc, setSelectedDoc] = useState();

    const handleClose=()=>{
        setOpen(false);
    };

    const onDeleteItem=()=>{
        setIsDeleting(true);
        const firestore = firebase.firestore();
        firestore.collection("user-profiles").doc("/"+selectedDoc).delete().then(function() {
            userProfileData();
            setIsDeleting(false);
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            setIsDeleting(false)
            console.error("Error removing document: ", error);
        });
        setOpen(false);
    }

    const userProfileData=()=>{
        getUserListFromFirebase().then(function(data){
            setUser(data);
            setLoading(false);
        })
    }

    const getUserListFromFirebase = async ()=>{
        const firestore = firebase.firestore();
        const snapshot = await firestore.collection('user-profiles').get();
        return snapshot.docs.map(doc=>doc);
    }

    useEffect(()=>{
        userProfileData();
    },[true]);

    const onSelectedDocForDelete=(id)=>{
        setSelectedDoc(id);
        setOpen(true);
    }

    return (
        
        <div style={{width:'50%', marginLeft:'350px', marginTop:'100px'}}>
            <h1 style={{textAlign:"center", color:'#8140D7', textDecoration:'underline', fontStyle:'italic'}}> Total Users</h1>
            <Card style={{background:'#D9E1E5 ', borderRadius:'10px',boxShadow:'2px 2px gray'}}>

            {loading?<div style={{textAlign:'center'}}><CircularProgress/></div>:
                <List>
                    {user.map((item)=>
                        <ListItem style={{marginLeft:'10px', cursor:'pointer'}}>
                        <ListItemText primary={item.data().name} secondary={item.data().email} onClick={()=>history.push("/userprofile/"+item.id)} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
                            <DeleteIcon style={{cursor:'pointer'}} onClick={()=>onSelectedDocForDelete(item.id)}/>
                            </IconButton>
                        </ListItemSecondaryAction>                        
                        </ListItem>
                    )}
                </List>
            }
            </Card>
            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">Do you want to delete this data?</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    You cannot undo this action after you delete!!
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" disabled={isDeleting}>
                Disagree
                </Button>
                <Button onClick={onDeleteItem} color="primary" autoFocus disabled={isDeleting}>
                Agree
                </Button>
                {isDeleting?<CircularProgress/>:""}
            </DialogActions>
            </Dialog>
            <div style={{textAlign:'center', marginTop:'20px'}}>
            <Button variant="contained" color="secondary" onClick={()=>history.push('/userprofile/add')}>
                Add More
            </Button>  
            </div>              
            
        </div>
    )
}