import React,{useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase';
import { CircularProgress } from '@material-ui/core';
import { useHistory, useParams} from 'react-router-dom';

export default function UserProfile(){
    let params = useParams();
    let history = useHistory();
    const [userProfile, setUserProfile] = useState({name:"", address:"", email:"", phone:"", occupation:"",bio:""});
    const [isSaving, setIsSaving] = useState(false);

    const handleChange = (event) =>{
        userProfile[event.target.id] = event.target.value;
        setUserProfile({...userProfile, userProfile});
    }
    const handleSaveData=()=>{
        setIsSaving(true);
        const firestore = firebase.firestore();
        if(params.id==="add"){  
            firestore.collection("user-profiles").add({
                name: userProfile.name,
                address: userProfile.address,
                email: userProfile.email,
                phone: userProfile.phone,
                occupation: userProfile.occupation,
                bio: userProfile.bio
            }).then(function(response){
                setIsSaving(false);
                history.push('/userprofilelist');
            }).catch(function(error){
                setIsSaving(false);
            })
        }else{
            firestore.collection("user-profiles").doc(params.id).update({
                name: userProfile.name,
                address: userProfile.address,
                email: userProfile.email,
                phone: userProfile.phone,
                occupation: userProfile.occupation,
                bio: userProfile.bio
            }).then(function(response){
                setIsSaving(false);
                history.push('/userprofilelist');
            }).catch(function(error){
                setIsSaving(false);
            })            

        }
    }
    useEffect(()=>{
        if(params.id != 'add'){
            getDataById();
        }
    },[true]);

    const getDataById=()=>{
        const firestore = firebase.firestore();
        var docRef = firestore.collection("user-profiles").doc("/"+params.id);
        docRef.get().then(function(doc) {
            if (doc.exists) {
                userProfile.name = doc.data().name;
                userProfile.address = doc.data().address;
                userProfile.email = doc.data().email;
                userProfile.phone = doc.data().phone;
                userProfile.occupation = doc.data().occupation;
                userProfile.bio = doc.data().bio;
                setUserProfile({...userProfile,userProfile})
                console.log("Document data:", doc.data());
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });        
    }

    return (
        <div style={{margin:30}}>
            <Grid container  spacing={2} >
                    <Grid item xs="6" sm="4" style={{marginTop:20}}>
                        <TextField
                            id="name"
                            label="Enter Name"
                            variant="outlined"
                            color="secondary"
                            value={userProfile.name}
                            placeholder="Enter Name"
                            helperText="Please Enter Valid Name"
                            error={false}
                            disabled={isSaving}
                            onChange={handleChange}
                            fullWidth={true}
                        />
                    </Grid>
                    <Grid item xs="6" sm="4" style={{marginTop:20}}>
                        <TextField
                            id="address"
                            label="Enter Address"
                            variant="outlined"
                            color="secondary"
                            value={userProfile.address}
                            helperText="Please Enter Valid Address"
                            error={false}
                            disabled={isSaving}
                            onChange={handleChange}
                            fullWidth={true}
                        />
                    </Grid>
                    <Grid item xs="6" sm="4" style={{marginTop:20}}>
                        <TextField
                            id="email"
                            label="Enter Email"
                            variant="outlined"
                            color="secondary"
                            value={userProfile.email}
                            helperText="Please Enter Valid Email"
                            error={false}
                            disabled={isSaving}
                            onChange={handleChange}
                            fullWidth={true}
                        />
                    </Grid>
                    <Grid item xs="6" sm="4" style={{marginTop:20}}>
                        <TextField
                            id="phone"
                            label="Enter Phone Number"
                            variant="outlined"
                            color="secondary"
                            value={userProfile.phone}
                            helperText="Please Enter Valid Phone Number"
                            error={false}
                            disabled={isSaving}
                            onChange={handleChange}
                            fullWidth={true}
                        />
                    </Grid>
                    <Grid item xs="6" sm="4" style={{marginTop:20}}>
                        <TextField
                            id="occupation"
                            label="Enter Occupation"
                            variant="outlined"
                            color="secondary"
                            value={userProfile.occupation}
                            helperText="Please Enter Valid Occupation"
                            error={false}
                            disabled={isSaving}
                            onChange={handleChange}
                            fullWidth={true}
                        />
                    </Grid>                                                            
          </Grid>
          <div style={{marginTop:20}}>
          <Grid item xs="6" sm="4">
                <TextField
                    id="bio"
                    label="Enter Your Bio"
                    variant="outlined"
                    color="secondary"
                    value={userProfile.bio}
                    helperText="Please Enter Valid Bio"
                    error={false}
                    rowsMax={5}
                    rows={3}
                    disabled={isSaving}
                    multiline={true}
                    onChange={handleChange}
                    fullWidth={true}
                />
            </Grid>            
          </div>
          <div style={{marginTop:20}}>
              {isSaving?<CircularProgress/>:
                    <Button variant="contained" color="secondary" onClick={handleSaveData} disabled={isSaving}>
                        Save
                    </Button>
                }
          </div>
        </div>
    )
}