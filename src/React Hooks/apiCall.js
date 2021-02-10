import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/core/Icon";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

export default function ApiCallExample() {
  const [newsData, setNewsData] = useState();
  const [pageState, setPageState] = useState({ loading: true, error: false });

  useEffect(() => {
    getNewsDataFromAPI();
  }, [true]);

  function getNewsDataFromAPI() {
    axios
      .get(
        "http://newsapi.org/v2/everything?q=apple&from=2020-12-23&to=2020-12-23&sortBy=popularity&apiKey=0665d271e16a4e0981f73e18151d8c25"
      )
      .then(function (response) {
        setNewsData(response.data.articles);
        pageState.loading = false;
        setPageState({ ...pageState, pageState });
      })
  }
  return (
    <div style={{margin:20}}>
        <h1 style={{textAlign:'center', textDecoration:'underline',color:'#1C95BD'}}>Welcome to Pandey News</h1>
      {pageState.loading ? 
        <CircularProgress />
       : 
        <Grid container spacing={3}>
          {newsData.map((item) =>
            <Grid item xs="12" sm="6">
                <a target="_blank" href={item.url} style={{textDecoration:'none'}}>
              <Card style={{boxShadow:'3px 3px lightgray', background:'#BFEAF4', fontStyle:'italic'}}>
                <CardHeader
                  avatar={<Avatar aria-label="recipe">S</Avatar>}
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  
                  title= {item.title}
                  subheader={new Date(item.publishedAt).toLocaleString()}
                />
                <CardMedia
                    style={{height:0, paddingTop:'56.25%'}}
                  image={item.urlToImage}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                      {item.description}
                  </Typography>
                </CardContent>
              </Card>
              </a>
            </Grid>
          )}
        </Grid>
    }
    </div>
  );
  
}
