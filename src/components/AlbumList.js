import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentDidMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((res) => {
        console.log(res.data);
        this.setState({ albums: res.data });
      });
  }

  render() {
    let albums = this.state.albums;
    return (
      <ScrollView>
        {
          albums.map((album) => (
            <AlbumDetail key={album.title} album={album} />
          ))
        }
      </ScrollView>
    );
  }
}

export default AlbumList;
